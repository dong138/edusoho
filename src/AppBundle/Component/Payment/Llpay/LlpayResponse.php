<?php

namespace AppBundle\Component\Payment\Llpay;

use AppBundle\Component\Payment\Response;

class LlpayResponse extends Response
{
    protected $url = 'https://queryapi.lianlianpay.com/orderquery.htm';
    protected $params = '';

    public function getPayData()
    {
        if ($this->params['isMobile']) {
            if (empty($this->params['res_data'])) {
                $data['status'] = 'insufficient balance';

                return $data;
            }
            $this->params = json_decode($this->params['res_data'], true);
        }
        $data['payment'] = 'llpay';
        $error = $this->hasError();
        if ($error) {
            throw new \RuntimeException(sprintf('连连支付校验失败(%s)。', $error));
        }
        $result = json_decode($this->confirmSellerSendGoods(), true);
        if (isset($result['result_pay']) && $result['result_pay'] == 'SUCCESS') {
            $data['status'] = 'success';
        } else {
            $data['status'] = 'unknown';
        }

        $data['amount'] = $this->params['money_order'];
        $data['sn'] = $this->params['no_order'];
        $data['paidTime'] = time();
        $data['raw'] = $this->params;

        return $data;
    }

    private function hasError()
    {
        if ($this->params['result_pay'] != 'SUCCESS') {
            return '支付异常';
        }
        $isSignVerified = SignatureToolkit::signVerify($this->params, $this->options);
        if (!$isSignVerified) {
            return '连连支付校签名校验失败';
        }

        return false;
    }

    private function confirmSellerSendGoods()
    {
        $params = $this->params;
        $data = array();
        $data['oid_partner'] = $params['oid_partner'];
        $data['dt_order'] = $params['dt_order'];
        $data['no_order'] = $params['no_order'];
        $data['sign_type'] = $params['sign_type'];
        $data['sign'] = SignatureToolkit::signParams($data, $this->options);

        return $this->postRequest($this->url, json_encode($data));
    }

    private function postRequest($url, $params)
    {
        $curl = curl_init();

        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_USERAGENT, 'Topxia Payment Client 1.0');
        curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 20);
        curl_setopt($curl, CURLOPT_TIMEOUT, 10);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_HEADER, 0);
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $params);
        curl_setopt($curl, CURLOPT_URL, $url);

        curl_setopt($curl, CURLINFO_HEADER_OUT, true);
        $response = curl_exec($curl);
        $curlinfo = curl_getinfo($curl);
        $timer = 0;
        while ($timer < 2) {
            if ($curlinfo['http_code'] == 200) {
                break;
            }
            sleep(1);
            $response = curl_exec($curl);
            $curlinfo = curl_getinfo($curl);
            ++$timer;
        }
        curl_close($curl);

        return $response;
    }
}

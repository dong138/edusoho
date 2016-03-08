<?php

namespace MaterialLib\Service\MaterialLib;

interface MaterialLibService
{
    public function search($conditions, $start, $limit);

    public function get($globalId);

    public function edit($globalId, $fields);

    public function delete($globalId);

    public function download($globalId);

    public function reconvert($globalId, $options);

    public function getDefaultHumbnails($globalId);

    public function getThumbnail($globalId, $options);

    public function player($globalId);
}

webpackJsonp(["app/js/activity/live/index"],{0:function(t,n,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var e=a("c6797855be84e924b7d5"),i=s(e);window.liveShow=new i.default},c6797855be84e924b7d5:function(t,n,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,n){for(var a=0;a<n.length;a++){var s=n[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(n,a,s){return a&&t(n.prototype,a),s&&t(n,s),n}}(),r=a("da32dea28c2b82c7aab1"),o=s(r);(function(){function t(){e(this,t),this.init()}return i(t,[{key:"init",value:function(){var t=this,n=JSON.parse($("#activity-data").text()),a=(parseInt(n.startTime),parseInt(n.endTime)),s=parseInt(n.nowDate);this.liveStartTimeFormat=n.startTimeFormat,this.liveEndTimeFormat=n.endTimeFormat;var e=n.fromCourseId,i=n.id;this.summary=$("#activity-summary").text(),this.$liveNotice='<div class="live-show-item">\n          <p class="title">直播时间</p>\n          <p>直播将于'+this.liveStartTimeFormat+"开始，于"+this.liveEndTimeFormat+"结束<p>\n          (请在课前10分钟内提早进入)\n         </div>",this.iID=null,this.iID&&clearInterval(iID),this.intervalSecond=0,this.entry_url=location.protocol+"//"+location.hostname+"/course/"+e+"/activity/"+i+"/live_entry",this.generateHtml();var r=0;a>s&&(r=1e3),this.iID=setInterval(function(){t.generateHtml()},r),$("#lesson-live-content").show(),this.started=!1}},{key:"entryLiveRoom",value:function(){if(!this.started){this.started=!0;var t=new o.default;t.emit("start",{}).then(function(){}).catch(function(t){})}window.open(this.entry_url,"_blank")}},{key:"generateHtml",value:function(){var t=JSON.parse($("#activity-data").text()),n=parseInt(t.startTime),a=parseInt(t.endTime),s=parseInt(t.nowDate);s+=this.intervalSecond;var e=parseInt(n-s),i=parseInt(a-s),r=Math.floor(e/86400),o=e%86400,l=Math.floor(o/3600);o%=3600;var c=Math.floor(o/60),v=o%60,h=Translator.trans("老师们：");h+=1==t.ext.liveProvider?Translator.trans("录制直播课程时，需在直播课程间点击")+"\n          <span class='color-info'>"+Translator.trans("录制面板")+"</span>，"+Translator.trans("，录制完成后点击")+"\n          <span class='color-info'>"+Translator.trans("暂停")+"</span>"+Translator.trans("结束录播，录播结束后在")+"\n          <span class='color-info'>"+Translator.trans("录播管理")+"</span>"+Translator.trans("界面生成回放。")+"。\n        ":Translator.trans("直播平台")+"\n        <span class='color-info'>"+Translator.trans("下课后")+"</span>"+Translator.trans("且")+"\n        <span class='color-info'>"+Translator.trans("直播时间")+"</span>"+Translator.trans("结束后，在课时管理的")+"\n        <span class='color-info'>"+Translator.trans("录播管理")+"</span>"+Translator.trans("点击生成回放。")+"\n        ",h="<div class='live-show-item'>"+h+"</div>";var p=this._getCountDown(r,l,c,v),d="";0<e&&e<7200&&(this.$liveNotice='<div class="live-show-item">\n          <p class="title">直播时间</p>\n          <p>直播将于'+this.liveStartTimeFormat+"开始，于"+this.liveEndTimeFormat+"结束<p>\n          (请在课前10分钟内提早进入)\n         </div>",d="<div class='live-show-item'>\n          <a class='btn btn-primary js-start-live' href='javascript:;' \n            onclick='$(liveShow.entryLiveRoom())'>\n            "+Translator.trans("进入直播教室")+"\n          </a>\n        </div>",t.isTeacher&&(d+=h)),e<=0&&(clearInterval(this.iID),p="",this.$liveNotice="<div class='live-show-item'>\n          <p class=\"title\">直播时间</p>\n          直播已经开始，直播将于"+this.liveEndTimeFormat+"结束。\n        </div>",d="<div class='live-show-item'>\n          <a class='btn btn-primary js-start-live' href='javascript:;' \n            onclick='$(liveShow.entryLiveRoom())'>\n            "+Translator.trans("进入直播教室")+"\n          </a>\n        </div>",t.isTeacher&&(d+=h)),i<=0&&(p="",d="",this.$liveNotice="<div class='live-show-item'>\n          <i class='es-icon es-icon-xinxi color-danger icon-live-end'></i>\n          "+Translator.trans("直播已经结束")+"\n        </div>",t.replays&&t.replays.length>0&&($.each(t.replays,function(t,n){d="<a class='btn btn-primary btn-replays' href='"+n.url+"' target='_blank'>"+n.title+"</a>"}),d="<div class='live-show-item'>"+d+"</div>"));var m=this.$liveNotice+" "+p+"\n      <div class='live-show-item'>\n        <p class='title'>直播说明</p>\n        "+this.summary+"\n      </div>"+d;$("#lesson-live-content").find(".lesson-content-text-body").html(m),this.intervalSecond++}},{key:"_getCountDown",value:function(t,n,a,s){var e="";return e+=t?t+Translator.trans(" 天 "):"",e+=n?n+Translator.trans(" 小时 "):"",e+=a?a+Translator.trans(" 分钟 "):"",e+=s?s+Translator.trans(" 秒 "):"",e="<div class='live-show-item'>\n      <p class='title'>"+Translator.trans("倒计时")+'</p>\n      <span class="color-warning">'+e+"</span>\n    </div>"}}]),t})()}});
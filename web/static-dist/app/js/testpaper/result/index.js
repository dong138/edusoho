webpackJsonp(["app/js/testpaper/result/index"],{"9a5c59a43068776403d1":function(e,t){"use strict";!function(e){e.fn.WaterMark=function(t){function n(){var t=l();m=e('<div id="waterMark" class="watermark"></div>');var n="rotate("+p.rotate+"deg)";return m.addClass("active"),m.css({opacity:p.opacity,"-webkit-transform":n,"-moz-transform":n,"-ms-transform":n,"-o-transform":n,transform:n,filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678, sizingMethod='auto expand')"}),m.css(p.style),t>=8&&t<9&&m.css({height:60,filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678, sizingMethod='auto expand')progid:DXImageTransform.Microsoft.Alpha(opacity="+100*parseFloat(p.opacity)+")"}),m.html(p.contents),m}function a(){r()}function r(){o(),m.css({top:g,left:y}),m.show()}function i(){r(),d=setInterval(function(){r(),setTimeout(function(){m.hide()},p.duringTime)},p.interval)}function o(){p.isUseRandomPos?s():u()}function s(){var e=h.height()-m.height()-v,t=h.width()-m.width()-b;g=Math.random()*e+v,y=Math.random()*t}function u(){"left"==p.xPosition&&(y=b),"center"==p.xPosition&&(y=(h.width()-m.width())/2),"right"==p.xPosition&&(y=h.width()-m.width()-b),"top"==p.yPosition&&(g=v),"center"==p.yPosition&&(g=(h.height()-m.height())/2+v),"bottom"==p.yPosition&&(g=h.height()-m.height()-v)}function c(){p.isAlwaysShow?a():i()}function l(){var e=-1;if("Microsoft Internet Explorer"==navigator.appName){var t=navigator.userAgent,n=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=n.exec(t)&&(e=parseFloat(RegExp.$1))}return e}function f(){h.append(n()),c()}var d,p=e.extend({duringTime:3e5,interval:6e5,isAlwaysShow:!0,xPosition:"center",yPosition:"top",isUseRandomPos:!1,opacity:.8,rotate:45,style:{},contents:""},t),h=e(this),v=40,b=15,g=v,y=b,m=null;f()}}($)},"2d148eb38b93bb0ef45c":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n("8492817a6b6ebd299565"),s=a(o),u=n("3515d355d43c1a043be1"),c=a(u),l=n("d43f35b4f73d35eb967a"),f=a(l),d=n("936bfc70bea5be864cc4"),p=a(d),h=n("2a56fd48b3e3533b8e82"),v=a(h),b=function(){function e(t){r(this,e),this.type=t}return i(e,null,[{key:"getTypeBuilder",value:function(e){var t=null;switch(e){case"choice":t=new s.default;break;case"determine":t=new c.default;break;case"essay":t=new f.default;break;case"fill":t=new p.default;break;case"single_choice":t=new v.default;break;case"uncertain_choice":t=new v.default;break;default:t=null}return t}}]),e}();t.default=b},"3515d355d43c1a043be1":function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(){function e(){n(this,e)}return a(e,[{key:"getAnswer",value:function(e){var t=[];return $("input[name="+e+"]:checked").each(function(){t.push($(this).val())}),t}}]),e}();t.default=r},d43f35b4f73d35eb967a:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(){function e(){n(this,e)}return a(e,[{key:"getAnswer",value:function(e){var t=[],n=$("[name="+e+"]").val();return t.push(n),t}}]),e}();t.default=r},"936bfc70bea5be864cc4":function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(){function e(){n(this,e)}return a(e,[{key:"getAnswer",value:function(e){var t=[];return $("input[name="+e+"]").each(function(){t.push($(this).val())}),t}}]),e}();t.default=r},"8492817a6b6ebd299565":function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(){function e(){n(this,e)}return a(e,[{key:"getAnswer",value:function(e){var t=[];return $("input[name="+e+"]:checked").each(function(){t.push($(this).val())}),t}}]),e}();t.default=r},0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n("4428b108ee5aeb4e86ba"),u=a(s),c=n("f898520c5384ef4c819c");(0,c.initScrollbar)(),(0,c.testpaperCardFixed)(),(0,c.testpaperCardLocation)(),(0,c.onlyShowError)(),(0,c.initWatermark)();var l=function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),t}(u.default);new l($(".js-task-testpaper-body")),$(".js-testpaper-redo-timer").timer({countdown:!0,duration:$(".js-testpaper-redo-timer").data("time"),format:"%H:%M:%S",callback:function(){$("#finishPaper").attr("disabled",!1)},repeat:!0,start:function(){self.usedTime=0}})},"45d3c796d523fa97ecd2":function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$("html");n(this,e),t.attr("unselectable","on").css("user-select","none").on("selectstart",!1)};t.default=a},"4428b108ee5aeb4e86ba":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n("2d148eb38b93bb0ef45c"),s=a(o),u=n("45d3c796d523fa97ecd2"),c=a(u),l=n("da32dea28c2b82c7aab1"),f=a(l),d=n("b334fd7e4c5a19234db2"),p=a(d),h=function(){function e(t){r(this,e),this.$container=t,this.answers={},this.usedTime=0,this.$form=t.find("form"),this._initEvent(),this._initUsedTimer(),this._isCopy(),this._alwaysSave()}return i(e,[{key:"_initEvent",value:function(){var e=this;this.$container.on("focusin","textarea",function(t){return e._showEssayInputEditor(t)}),this.$container.on("click",'[data-role="test-suspend"],[data-role="paper-submit"]',function(t){return e._btnSubmit(t)}),this.$container.on("click",".js-testpaper-question-list li",function(t){return e._choiceList(t)}),this.$container.on("click","*[data-anchor]",function(t){return e._quick2Question(t)}),this.$container.find(".js-testpaper-question-label").on("click","input",function(t){return e._choiceLable(t)}),this.$container.on("click",".js-marking",function(t){return e._markingToggle(t)}),this.$container.on("click",".js-favorite",function(t){return e._favoriteToggle(t)}),this.$container.on("click",".js-analysis",function(t){return e._analysisToggle(t)}),this.$container.on("blur",'[data-type="fill"]',function(t){return e.fillChange(t)})}},{key:"_isCopy",value:function(){var e=this.$container.find(".js-testpaper-body").data("copy");e&&new c.default}},{key:"fillChange",value:function(e){var t=$(e.currentTarget);this._renderBtnIndex(t.attr("name"),!!t.val())}},{key:"_markingToggle",value:function(e){var t=$(e.currentTarget).addClass("hidden");t.siblings(".js-marking.hidden").removeClass("hidden");var n=t.closest(".js-testpaper-question").attr("id");$('[data-anchor="#'+n+'"]').find(".js-marking-card").toggleClass("hidden")}},{key:"_favoriteToggle",value:function(e){var t=$(e.currentTarget),n=t.data("targetType"),a=t.data("targetId");$.post(t.data("url"),{targetType:n,targetId:a},function(e){t.addClass("hidden").siblings(".js-favorite.hidden").data("url",e.url),t.addClass("hidden").siblings(".js-favorite.hidden").removeClass("hidden")}).error(function(e){(0,p.default)("error",e.error.message)})}},{key:"_analysisToggle",value:function(e){var t=$(e.currentTarget);t.addClass("hidden"),t.siblings(".js-analysis.hidden").removeClass("hidden"),t.closest(".js-testpaper-question").find(".js-testpaper-question-analysis").slideToggle()}},{key:"_initUsedTimer",value:function(){var e=this;this.$usedTimer=window.setInterval(function(){e.usedTime+=1},1e3)}},{key:"_choiceLable",value:function(e){var t=$(e.currentTarget),n=t.closest(".js-testpaper-question-label");this.changeInput(n,t)}},{key:"_choiceList",value:function(e){var t=$(e.currentTarget),n=t.index(),a=t.closest(".js-testpaper-question").find(".js-testpaper-question-label"),r=a.find("label").eq(n).find("input");r.prop("checked",!r.prop("checked")).change(),this.changeInput(a,r)}},{key:"changeInput",value:function(e,t){var n=0;e.find("label").each(function(e,t){$(t).find("input").prop("checked")?($(t).addClass("active"),n++):$(t).removeClass("active")});var a=t.attr("name");this._renderBtnIndex(a,n>0)}},{key:"_renderBtnIndex",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=$('[data-anchor="#question'+e+'"]');t?a.addClass("done"):a.removeClass("done"),n?a.addClass("doing").siblings(".doing").removeClass("doing"):a.removeClass("doing")}},{key:"_showEssayInputEditor",value:function(e){var t=this,n=$(e.currentTarget);if(n.hasClass("essay-input-short")){e.preventDefault(),e.stopPropagation(),$(this).blur();var a=n.siblings(".essay-input-long"),r=a.siblings(".essay-input-btn");n.hide(),a.show(),r.show();var i=CKEDITOR.replace(a.attr("id"),{toolbar:"Minimal",filebrowserImageUploadUrl:a.data("imageUploadUrl")});i.on("blur",function(e){i.updateElement(),setTimeout(function(){a.val(i.getData()),a.change(),a.val()?t._renderBtnIndex(a.attr("name"),!0):t._renderBtnIndex(a.attr("name"),!1)},1)}),i.on("instanceReady",function(e){this.focus(),r.one("click",function(){n.val($(i.getData()).text()),i.destroy(),a.hide(),r.hide(),n.show()})}),i.on("key",function(){i.updateElement(),setTimeout(function(){a.val(i.getData()),a.change()},1)}),i.on("insertHtml",function(e){i.updateElement(),setTimeout(function(){a.val(i.getData()),a.change()},1)})}}},{key:"_quick2Question",value:function(e){var t=$(e.currentTarget),n=$(t.data("anchor")).offset();$(document).scrollTop(n.top-55)}},{key:"_suspendSubmit",value:function(e){var t=this._getAnswers();$.post(e,{data:t,usedTime:this.usedTime}).done(function(e){}).error(function(e){(0,p.default)("error",e.error.message)})}},{key:"_btnSubmit",value:function(e){var t=$(e.currentTarget);t.button("loading"),this._submitTest(t.data("url"),t.data("goto"))}},{key:"_submitTest",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this._getAnswers(),a=new f.default;$.post(e,{data:n,usedTime:this.usedTime}).done(function(e){e.result&&a.emit("finish",{data:""}),""!=t||""!=e.goto?window.location.href=t:""!=e.goto?window.location.href=e.goto:""!=e.message&&(0,p.default)("error",e.message)}).error(function(e){(0,p.default)("error",e.error.message)})}},{key:"_getAnswers",value:function(){var e={};return $("*[data-type]").each(function(t){var n=$(this).attr("name"),a=$(this).data("type"),r=s.default.getTypeBuilder(a),i=r.getAnswer(n);e[n]=i}),e}},{key:"_alwaysSave",value:function(){if($('input[name="testSuspend"]').length>0){var e=this,t=$('input[name="testSuspend"]').data("url");setInterval(function(){e._suspendSubmit(t);var n=(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds();(0,p.default)("success",n+" 已保存")},18e4)}}}]),e}();t.default=h},f898520c5384ef4c819c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initWatermark=t.onlyShowError=t.testpaperCardLocation=t.testpaperCardFixed=t.initScrollbar=void 0,n("9a5c59a43068776403d1");var a=(n("9181c6995ae8c5c94b7a"),t.initScrollbar=function(){var e=$(".js-panel-card");e.perfectScrollbar(),e.perfectScrollbar("update")});t.testpaperCardFixed=function(){var e=$(".js-testpaper-card");if(!(e.length<=0)){var t=e.offset().top;$(window).scroll(function(n){var a=$(window).scrollTop();a>=t?e.addClass("affix"):e.removeClass("affix")})}},t.testpaperCardLocation=function(){$(".js-btn-index").click(function(e){var t=$(e.currentTarget);$(".js-testpaper-heading").length<=0&&t.addClass("doing").siblings(".doing").removeClass("doing");var n=$(t.data("anchor"));$("body").scrollTop(n.offset().top)})},t.onlyShowError=function(){$("#showWrong").change(function(e){var t=$(e.currentTarget);$(".js-answer-notwrong").each(function(e,n){var a=$($(n).data("anchor")),r=a.closest(".js-testpaper-question-block");t.prop("checked")?(a.hide(),r.find(".js-testpaper-question:visible").length<=0&&r.hide()):(a.show(),r.show())}),a()})},t.initWatermark=function(){var e=$(".js-testpaper-watermark");e.length>0&&$.get(e.data("watermark-url"),function(t){e.each(function(){$(this).WaterMark({yPosition:"center",style:{"font-size":10},opacity:.6,contents:t})})})}},"2a56fd48b3e3533b8e82":function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(){function e(){n(this,e)}return a(e,[{key:"getAnswer",value:function(e){var t=[];return $("input[name="+e+"]:checked").each(function(){t.push($(this).val())}),t}}]),e}();t.default=r}});
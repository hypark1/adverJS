
var viewSlider = function viewSlider() {
    function viewSlider() {
        _this = this;
        _this.blockChk = true;
        _this.Chk = true;
        _this.focusChk = true;

        _this.percentage = 0;
        _this.POSITIONTOP = 0;
        _this.HEIGHT = 0;
        _this.WIDTH = 0;
        _this.navHeight = 0;

        _this.Url = "";
        _this.sendData = "";

        _this.init();
    }

    viewSlider.prototype.init = function() {
        setTimeout(function(){
            _this.getLibs(function() {
                //console.log("start");
                _this.getAdData();
            });
        },200);
    };

    viewSlider.prototype.getWindowSize = function() {
        var _this = this;
        _this.HEIGHT = $(window).height();
        _this.WIDTH = $(window).width();
    };

    viewSlider.prototype.getPosition = function() {
        _this.POSITIONTOP = $(".ifp").offset().top;
        $(".ifp").css("display","none");
    };

    viewSlider.prototype.getNavHeight = function() {
        var nav = ["nav","header","navi","navigation"];

        $.each(nav,function(key,val) {
            if($("body").find(val).length > 0 ){
                _this.navHeight = $(val).height()+90;
                return false;
            }
        });
    };

    viewSlider.prototype.getAdData = function() {
        //console.log("init Get Ad Data");
        //console.log("backUrl true");
        _this.Url = "http://ph-investment.com/phlotto";
        _this.getPosition();
        _this.getWindowSize();
        _this.getNavHeight();
        _this.addCss();
        _this.scrollEvent();
    };

    viewSlider.prototype.setView = function() {
        $(".ifp").css("height",_this.HEIGHT+90);
        $(".ifp").addClass("active");
    };

    viewSlider.prototype.makeDom = function( callback ) {
        _this.setView();
        var output = "";
        output += '<div class="ifps" style="width: 100% !important; height:'+(Number(_this.HEIGHT)+90)+'px !important">';
        output += '<iframe height="100%" width="100%" src="'+_this.Url+'" style="background-color:#fff;z-index:99999;"></iframe>';
        output += "<div class='popupClose'>";
        output += " <span style='color: #fff !important; margin-top: 10px !important; font-family: \"Font Awesome 5 Free\" !important; font-size:25px !important;'>AD</span>";
        output += "</div>";
        output += "</div>";
        $(".ifp").append(output);
        if(typeof callback === "function") {
            callback();
        }
    };

    viewSlider.prototype.scrollEvent = function() {
        $(window).on('scroll touchmove mousewheel',function(){
            var top = $(window).scrollTop() + _this.HEIGHT;
            //console.log( top, _this.POSITIONTOP);
            if(_this.POSITIONTOP <= top ) {
                if( _this.Chk === true ){
                    _this.Chk = false;

                    _this.showPopUp( function() {
                        _this.closeCount();
                    });
                }
            }
        });
    };

    viewSlider.prototype.closeCount = function() {
        var count = 1;
        var countNum = setInterval(function() {
            //$(".popupClose > span").html(count);
            count --;
            if (count < 0){
                clearInterval(countNum);
                $(".popupClose > span").html("<i class=\"fas fa-times\" style='color: #fff !important; margin-top: 7px !important; font-family: \"Font Awesome 5 Free\" !important; font-size:25px !important;'></i>");
                $(".popupClose").addClass("closeDone");
                _this.closePopUp();
            }
        }, 1100)
    };

    viewSlider.prototype.closePopUp = function() {
        $(".popupClose.closeDone").click(function() {
            _this.Chk = false;
            _this.focusChk = false;
            $(".ifp").fadeOut(500);
        });
    };

    viewSlider.prototype.fixFocus = function() {
        if(_this.focusChk === true) {
            $("body").click(function() {
                $(".ifp iframe").focus();
            })
        }
    };

    viewSlider.prototype.showPopUp = function( callback ) {
        //console.log("init ShowPopUp");
        _this.makeDom(function() {
            setTimeout(function() {
                //console.log("inset Iframe");
                $(".ifp").fadeIn(1000);
                $(".ifp iframe").focus();
                _this.fixFocus();
            },500);
        });

        if( typeof callback ==="function") {
            callback();
        }
    };

    viewSlider.prototype.addCss = function() {
        var sheet = document.createElement('style');
        var sheet_str = "";
        sheet_str += "html body div .ifp{ height: 0; border: 1px solid #f1f1f1; text-align: center; padding: 15px 5px 0 5px; z-index: 999999; width: 100%; height: 650px; position:fixed; top: 0; left: 0; background-color: rgba(1,1,1,0.5); box-shadow: 0 1px 1px 1px rgba(0,0,0,0.5); border: 1px solid #f1f1f1; overflow: auto; -webkit-overflow-scrolling: touch; -webkit-backface-visibility: hidden;}";
        sheet_str += "html body div .ifp.active{ height: 0; border: 1px solid #f1f1f1; text-align: center; padding: 15px 5px 0 5px; z-index: 999999; width: 100%; height: "+(Number(_this.HEIGHT)+90)+"px !important; position:fixed; top: 0; left: 0; background-color: rgba(1,1,1,0.5); box-shadow: 0 1px 1px 1px rgba(0,0,0,0.5); border: 1px solid #f1f1f1; overflow: auto; -webkit-overflow-scrolling: touch; -webkit-backface-visibility: hidden;}";
        sheet_str += "html body div .ifp span{position: fixed; background-color: rgba(0,0,0,0.8); font-size: 27px; top: 5px; right: 5px; width: 45px; height: 45px; border-radius: 100%; border: 2px solid #f1f1f1; color: #fff; text-align: center;}";

        var head = document.head || document.getElementsByTagName('head')[0];
        sheet.type='text/css';

        if (sheet.styleSheet) {
            sheet.styleSheet.cssText=sheet_str;
        } else {
            sheet.appendChild(document.createTextNode(sheet_str));
        }
        head.appendChild(sheet);
    };

    viewSlider.prototype.getLibs = function( callback ) {
        var libs = {
            js        : {
                "Jquery"    : "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",
                "egJs"      : "//naver.github.io/egjs-jquery-transform/release/latest/dist/transform.js"
            },
            css       : {
                "fontawsome": "https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            }
        };

        $.each(libs.js,function(key,val) {
            var script = document.createElement('script');
            script.src = val;
            script.type = "text/javascript";
            document.getElementsByTagName('head')[0].appendChild(script);
        });

        $.each(libs.css,function(key,val) {
            var link = document.createElement('link');
            link.href = val;
            link.rel = "stylesheet";
            document.getElementsByTagName('head')[0].appendChild(link);
        });

        if(typeof callback === "function") {
            callback();
        }
    };


    // viewSlider.prototype.blockScroll = function() {
    //     if(_this.blockChk === true){
    //         $("body").on('scroll touchmove mousewheel', function(e){
    //             e.preventDefault();
    //         });
    //     } else {
    //         $("body").off('scroll touchmove mousewheel');
    //     }
    // };

    return viewSlider;
}();

window.addEventListener('DOMContentLoaded', function(){
    new viewSlider();
});



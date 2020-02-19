var MCI_KOREA_ADBANNERLIGHT = function() {
    var MDL;
    /*sample32*/
    this.Init = function () {
        this.host = document.location.hostname;
        MDL = this;
        document.body.onload = function() {
            MDL.onLoad();
        }
    };
    this.onLoad = function() {
        var loadScripts = function(scripts) {
            var script = scripts.shift();
            var el = document.createElement('script');
            el.src = script;
            document.body.appendChild(el);
            el.onload = function() {
                if (scripts.length) {
                    loadScripts(scripts);
                } else {
                    MDL.markup();
                    MDL.Event();
                    MDL.$ZONE = $MCI('#mci-bannerLight');
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js"];
        loadScripts(scripts);
    };
    this.markup = function() {
        var AdBanner = $MCI('#mci-adBanner-content .banner_box');
        for(var i=0; i<AdBanner.length; i++){
            var AdImg = AdBanner.eq(i).find('img');
            AdImg.wrap('<div></div>');
            AdImg.parent('div').attr('id', 'mci-bannerLight'+i);
            var AdImgSrc = AdImg.attr('src');
            var bannerLight = $MCI('#mci-bannerLight'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerLine-img";
            markup.innerHTML = "<div class=\"view-banner-imgcover\"><div id=\"mci-bannerFloat-list-dom\"><img src=\"\"></div></div>";
            bannerLight.find('img').before(markup);

            var $origin = bannerLight.find('#mci-bannerFloat-list-dom');
            for (var j = 0; j <2 ; j++) {
                var $dom = $origin.clone(true);
                $dom.removeAttr('id').addClass('mci-bannerFloat-list');
                $dom.find('img').attr('src', AdImgSrc);
                $origin.before($dom);
            };

            bannerLight.css({'position':'relative'});
            bannerLight.find('#mci-bannerLine-img').css({'position':'absolute','top':'0','left':'0','width':'100%','height':'100%','overflow':'hidden'});
            bannerLight.find('.view-banner-imgcover').css({'width':'100%', 'height':'100%', 'position': 'relative'});
            bannerLight.find('.mci-bannerFloat-list').css({'position':'absolute','top':'0','left':'0','-webkit-transform': 'rotate(0deg) scale(0)','-moz-transform': 'rotate(0deg) scale(0)','-ms-transform': 'rotate(0deg) scale(0)','-o-transform': 'rotate(0deg) scale(0)','transform': 'rotate(0deg) scale(0)'});
            bannerLight.find('.mci-bannerFloat-list').eq(0).css({'-webkit-transform': 'scale(1)','-moz-transform': 'scale(1)','-ms-transform': 'scale(1)','-o-transform': 'scale(1)','transform': 'scale(1)'});
            bannerLight.css({'width':'100%', 'height':'100%'});
            bannerLight.find('#mci-bannerFloat-list-dom').css({'display':'none'});
            AdImg.css({'opacity':'0'})

        }
    };
    this.Event = function () {
        var AdBanner = $MCI('#mci-adBanner-content .banner');
        var floatNum = [1,1,1,1];
        MDL.Event.floatRolling = function () {
            for (var i = 0; i < AdBanner.length; i++) {
                var bannerLight = $MCI('#mci-bannerLight' + i);
                var floatBannerList = bannerLight.find('.mci-bannerFloat-list');
                var floatListLength = floatBannerList.length - 1;
                floatBannerList.eq(floatNum[i]).css({
                    '-webkit-transform': 'rotate(360deg) scale(1)',
                    '-moz-transform': 'rotate(360deg) scale(1)',
                    '-ms-transform': 'rotate(360deg) scale(1)',
                    '-o-transform': 'rotate(360deg) scale(1)',
                    'transform': 'rotate(360deg) scale(1)',
                    '-webkit-transition': '.4s',
                    '-moz-transition': '.4s',
                    '-ms-transition': '.4s',
                    '-o-transition': '.4s',
                    'transition': '.4s'
                });
                floatNum[i] += 1;
            }
        };

        MDL.Event.floatRolling2 = function () {
            for (var i = 0; i < AdBanner.length; i++) {
                var bannerLight = $MCI('#mci-bannerLight'+i);
                var floatBannerList = bannerLight.find('.mci-bannerFloat-list');
                floatBannerList.eq(1).css({
                    '-webkit-transform': 'rotate(0deg) scale(0)',
                    '-moz-transform': 'rotate(0deg) scale(0)',
                    '-ms-transform': 'rotate(0deg) scale(0)',
                    '-o-transform': 'rotate(0deg) scale(0)',
                    'transform': 'rotate(0deg) scale(0)',
                    '-webkit-transition': '0s',
                    '-moz-transition': '0s',
                    '-ms-transition': '0s',
                    '-o-transition': '0s',
                    'transition': '0s'
                });
                floatNum[i] = 1;
            }
        };

        var rollingImg = setInterval(function(){
            MDL.Event.floatRolling();
        }, 3000);


        var rollingImg2 = setInterval(function(){
            MDL.Event.floatRolling2();
        }, 3500);

    }
    return this.Init();
}
new MCI_KOREA_ADBANNERLIGHT();
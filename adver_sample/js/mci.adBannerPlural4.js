var MCI_KOREA_ADBANNERLINE = function() {
    var MDL;
    /*sample35*/
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
                    MDL.$ZONE = $MCI('#mci-bannerLine');
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js"];
        loadScripts(scripts);
    };
    this.markup = function() {
        var AdBanner = $MCI('.appladBanner');
        for(var i=0; i<AdBanner.length; i++){
            var AdImg = AdBanner.eq(i).find('a');
            AdImg.wrap('<div></div>');
            AdImg.parent('div').addClass('mci-bannerList');
            var bannerPlural = AdBanner.eq(i).find('.mci-bannerList');
            var bannerHtml = bannerPlural.eq(0).html();
            AdBanner.eq(i).find('.banner_box').append('<div class=\"mci-bannerList\">' + bannerHtml + '</div>');
            var listIndex = 70;
            bannerPlural = AdBanner.eq(i).find('.mci-bannerList');
            for(var j=0;j<bannerPlural.length; j++){
                bannerPlural.eq(j).css({'z-index':listIndex + (2 * j)});
            }
            var bannerWidth = bannerPlural.eq(0).width();
            var bannerHeight = bannerPlural.eq(0).height();

            bannerPlural.parent('div').css({'position':'absolute','top':'0','left':'0','width':bannerWidth + 'px','height':bannerHeight + 'px'});
            bannerPlural.css({'position':'absolute','top':'0','left':'0','width':'100%','height':'100%','-webkit-transform': 'rotate(0deg) scale(0)','-moz-transform': 'rotate(0deg) scale(0)','-ms-transform': 'rotate(0deg) scale(0)','-o-transform': 'rotate(0deg) scale(0)','transform': 'rotate(0deg) scale(0)'});
            bannerPlural.eq(0).css({'-webkit-transform': 'scale(1)','-moz-transform': 'scale(1)','-ms-transform': 'scale(1)','-o-transform': 'scale(1)','transform': 'scale(1)'});
        }
        AdBanner.css({'overflow':'hidden'});
        bannerPlural = $MCI('.mci-bannerList');
        bannerPlural.parent('div').css({'position':'relative'});
    };
    this.Event = function () {

        var AdBanner = $MCI('.appladBanner');
        var floatNum = [];
        for (var i = 0; i < AdBanner.length; i++) {
            floatNum.push(1);
        }

        this.turnRolling = function () {
            for(var i=0; i<AdBanner.length; i++) {
                var floatBannerList = AdBanner.eq(i).find('.mci-bannerList');
                var floatLength = floatBannerList.length;
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
                if (floatNum[i] == (floatLength)) {
                    MDL.turnRollingTime(i);
                    floatNum[i] = 1;
                }
            }
        };

        this.turnRollingTime = function (i) {
            setTimeout(function () {
                var floatBannerList = AdBanner.eq(i).find('.mci-bannerList');
                floatBannerList.eq(0).siblings().css({
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
            }, 1000)
        };

        setInterval(function () {
           MDL.turnRolling();
        }, 4000);

    }
    return this.Init();
}
new MCI_KOREA_ADBANNERLINE();
var MCI_KOREA_ADBANNERLINE = function() {
    var MDL;
    /*sample34*/
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
                bannerPlural.eq(j).css({'z-index':listIndex - (2 * j)});
            }
            var bannerWidth = bannerPlural.eq(0).width();
            var bannerHeight = bannerPlural.eq(0).height();

            bannerPlural.parent('div').css({'position':'absolute','top':'0','left':'0','width':bannerWidth + 'px','height':bannerHeight + 'px'})
        }
        AdBanner.css({'overflow':'hidden'});
        bannerPlural = $MCI('.mci-bannerList');
        bannerPlural.parent('div').css({'position':'relative'});
        bannerPlural.css({'position':'absolute','top':'0','left':'0','width':bannerWidth + 'px','-webkit-transform-origin': 'left center','-moz-transform-origin': 'left center','-ms-transform-origin': 'left center','-o-transform-origin': 'left center','transform-origin': 'left center'});
    };
    this.Event = function () {

        var AdBanner = $MCI('.appladBanner');
        var floatNum = [];
        for (var i = 0; i < AdBanner.length; i++) {
            floatNum.push(0);
        }

        this.floatRolling = function () {
            for(var i=0; i<AdBanner.length; i++) {
                var floatBannerList = AdBanner.eq(i).find('.mci-bannerList');
                var floatLength = floatBannerList.length;
                floatBannerList.eq(floatNum[i]).css({
                    '-webkit-transform': 'rotateY(-180deg)',
                    '-moz-transform': 'rotateY(-180deg)',
                    '-ms-transform': 'rotateY(-180deg)',
                    '-o-transform': 'rotateY(-180deg)',
                    'transform': 'rotateY(-180deg)',
                    '-webkit-transition': '3s',
                    '-moz-transition': '3s',
                    '-ms-transition': '3s',
                    '-o-transition': '3s',
                    'transition': '3s'
                });
                floatNum[i] += 1;
                if (floatNum[i] == (floatLength -1)) {
                    MDL.floatRollingTime(i);
                    floatNum[i] = 0;
                }
            }
        };

        this.floatRollingTime = function (i) {
            setTimeout(function () {
                var floatBannerList = AdBanner.eq(i).find('.mci-bannerList');
                floatBannerList.css({
                    '-webkit-transform': 'rotateY(0)',
                    '-moz-transform': 'rotateY(0)',
                    '-ms-transform': 'rotateY(0)',
                    '-o-transform': 'rotateY(0)',
                    'transform': 'rotateY(0)',
                    '-webkit-transition': '0s',
                    '-moz-transition': '0s',
                    '-ms-transition': '0s',
                    '-o-transition': '0s',
                    'transition': '0s'
                });
            }, 3500)

        };

        setInterval(function () {
           MDL.floatRolling();
        }, 4000);

    }
    return this.Init();
}
new MCI_KOREA_ADBANNERLINE();
var MCI_KOREA_ADBANNERLIGHT = function() {
    var MDL;
    /*sample31*/
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
        var AdBanner = $MCI('#mci-adBanner-content .banner');
        var bannerSlice = 10;
        var adTopNum = [];
        for(var i=0; i<AdBanner.length; i++){
            var AdImg = AdBanner.eq(i).find('img');
            AdImg.wrap('<div></div>');
            AdImg.parent('div').attr('id', 'mci-bannerLight'+i);
            var AdImgSrc = AdImg.attr('src');
            var bannerLight = $MCI('#mci-bannerLight'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerLine-img";
            markup.innerHTML = "<div class=\"view-banner-imgcover\"><div id=\"view-banner-img-dom\"><div class=\"face front\"></div><div class=\"face back\"><a href=\"#\"></a></div></div></div>";
            bannerLight.find('img').before(markup);

            bannerLight.css({'position':'relative'});
            bannerLight.find('#mci-bannerLine-img').css({'position':'absolute','top':'0','left':'0','width':'100%','height':'100%','overflow':'hidden'});
            bannerLight.find('.view-banner-imgcover').css({'width':'100%', 'height':'100%', 'position': 'relative'});
            bannerLight.find('.face').css({'position': 'absolute', 'top': '0', 'left': '0',  'backface-visibility': 'hidden'});
            bannerLight.find('.back').css({'-webkit-transform': 'rotateY(180deg)','-moz-transform': 'rotateY(180deg)','-ms-transform': 'rotateY(180deg)','-o-transform': 'rotateY(180deg)','transform': 'rotateY(180deg)'});
            bannerLight.find('.back a').css({'display':'block','width':'100%', 'height':'100%'});
            bannerLight.css({'width':'100%', 'height':'100%'});

            var bannerWidth = bannerLight.width();
            var bannerHeight = bannerLight.height();
            AdImg.css({'opacity':'0'});
            var bannerSliceWidth = parseInt(bannerWidth / bannerSlice);
            var bannerSlicePosition = 0;
            var origin = bannerLight.find('#view-banner-img-dom');
            bannerLight.find('.view-banner-img-com').remove();
            for (var j = 0; j < bannerSlice; j++) {
                var dom = origin.clone(true);
                dom.removeAttr('id').addClass('view-banner-img-com');
                dom.css({'position':'relative','float':'left','width':bannerSliceWidth + 'px','height':bannerHeight + 'px','transform-style': 'preserve-3d'});
                dom.find('.face').css({'width':bannerSliceWidth + 'px','height':bannerHeight + 'px','background':'url('+AdImgSrc+')','background-size': bannerWidth+'px ' + bannerHeight+'px','background-position':'-'+bannerSlicePosition+'px' + ' 0'});
                dom.find('.front').css({'background':'url('+AdImgSrc+')','background-size': bannerWidth+'px '/* + bannerHeight+'px'*/,'background-position':'-'+bannerSlicePosition+'px' + ' 0'});
                dom.find('.back').css({'background':'url('+AdImgSrc+')','background-size': bannerWidth+'px 100%'/* + bannerHeight+'px'*/,'background-position':'-'+bannerSlicePosition+'px' + ' 0'});
                origin.before(dom);
                bannerSlicePosition += bannerSliceWidth;
            }
        }
    };
    this.Event = function () {
        var AdBanner = $MCI('#mci-adBanner-content .banner');
        var bannerSlice = 10;
        var bannerSliceDelay = 0;
        MDL.Event.blindDom = function () {
            for (var i = 0; i < AdBanner.length; i++) {
                for (var j = 0; j < bannerSlice; j++) {
                    $MCI('#mci-bannerLight'+i).find('.view-banner-img-com').eq(j).css({
                        '-webkit-transform': 'rotateY(180deg)',
                        '-moz-transform': 'rotateY(180deg)',
                        '-ms-transform': 'rotateY(180deg)',
                        '-o-transform': 'rotateY(180deg)',
                        'transform': 'rotateY(180deg)',
                        '-webkit-transition': 'all 0.5s ease ' + bannerSliceDelay + 's',
                        '-moz-transition': 'all 0.5s ease ' + bannerSliceDelay + 's',
                        '-ms-transition': 'all 0.5s ease ' + bannerSliceDelay + 's',
                        '-o-transition': 'all 0.5s ease ' + bannerSliceDelay + 's',
                        'transition': 'all 0.5s ease ' + bannerSliceDelay + 's'
                    });
                    if (bannerSliceDelay < (0.08 * bannerSlice)) {
                        bannerSliceDelay += 0.08;
                    }
                }
                bannerSliceDelay = 0;
            }
        };

        MDL.Event.blindDom2 = function () {
            setTimeout(function () {
                for (var i = 0; i < AdBanner.length; i++) {
                    for (var j = 0; j < bannerSlice; j++) {
                        $MCI('#mci-bannerLight'+i).find('.view-banner-img-com').eq(j).css({
                            '-webkit-transform': 'rotateY(0deg)',
                            '-moz-transform': 'rotateY(0deg)',
                            '-ms-transform': 'rotateY(0deg)',
                            '-o-transform': 'rotateY(0deg)',
                            'transform': 'rotateY(0deg)',
                            '-webkit-transition': 'all 0.5s ease ' + bannerSliceDelay + 's',
                            '-moz-transition': 'all 0.5s ease ' + bannerSliceDelay + 's',
                            '-ms-transition': 'all 0.5s ease ' + bannerSliceDelay + 's',
                            '-o-transition': 'all 0.5s ease ' + bannerSliceDelay + 's',
                            'transition': 'all 0.5s ease ' + bannerSliceDelay + 's'
                        });
                        if (bannerSliceDelay < (0.08 * bannerSlice)) {
                            bannerSliceDelay += 0.08;
                        }
                    }
                    bannerSliceDelay = 0;
                }
            }, 2000)
        };

        MDL.Event.blindDom();
        MDL.Event.blindDom2();
        setInterval(function () {
            MDL.Event.blindDom();
            MDL.Event.blindDom2();
        }, 4000)
    }
    return this.Init();
}
new MCI_KOREA_ADBANNERLIGHT();
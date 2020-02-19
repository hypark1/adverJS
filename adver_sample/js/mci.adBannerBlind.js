var MCI_KOREA_ADBANNERBLIND = function() {
    var MDL;
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
                    MDL.Event();
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js"];
        loadScripts(scripts);
    };
    this.Event = function () {
        var viewImg = $MCI('#mci-adBanner-content').find('img');
        viewImg.wrap('<div class=\"mci-adBannerImg\"></div>');
        var viewAdImg = $MCI('#mci-adBanner-content').find('.mci-adBannerImg');
        var adImgLength = viewAdImg.length;
        viewAdImg.css({'position':'relative','overflow':'hidden'});
        var adTopNum = [];
        var bannerImgArr = [
            'http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_256%2Cw_460%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//www.enewstoday.co.kr/news/photo/201902/1270166_355603_2114.jpg',
            'http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_450%2Cw_900%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/739f520ce161e2744dd1f6f64e05a32d.jpg',
            'http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_256%2Cw_460%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//www.enewstoday.co.kr/news/photo/201902/1270284_355691_3736.jpg',
            'http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_256%2Cw_460%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/ea847d72319f89249e3a36720bb473c6.jpg',
            'http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_256%2Cw_460%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/98453bc47f57a965c623cc334a14af60.jpg',
            'https://tpc.googlesyndication.com/daca_images/simgad/14483571127135327632',
            'https://tpc.googlesyndication.com/simgad/9498111018776188624',
            'https://tpc.googlesyndication.com/simgad/4174379448971195182?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&amp;rs=AOga4ql3bygcqvL0sT2AikTTNd_gAZJtnw',
            'https://tpc.googlesyndication.com/simgad/9444460218678423038?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&amp;rs=AOga4qmMDBdFUI5kTPwfbwmLLM8LaVTc7A',
        ];

        var bannerSlice = 10;

        this.MCIbannerBlindDom = function() {
            for(var i=0;i<adImgLength; i++) {
                var viewAdImgHeight = viewAdImg.eq(i).css('height');
                viewAdImgHeight = Number(viewAdImgHeight.replace('px', ''));
                if (viewAdImgHeight > 160) {
                    viewAdImg.eq(i).addClass('mci-adbox');
                }
            }
            var mciAdBox = $MCI('.mci-adbox');
            for(var i=0;i<mciAdBox.length; i++){
                var adImgSrc = mciAdBox.eq(i).find('img').attr('src');
                var bannerHeight = mciAdBox.eq(i).css('height');
                bannerHeight = Number(bannerHeight.replace('px',''));
                if(bannerHeight < 100){
                    bannerHeight = 200;
                }
                var bannerWidth = mciAdBox.eq(i).css('width');
                bannerWidth = parseInt(bannerWidth.replace('px',''));
                mciAdBox.eq(i).find('img').css({'opacity':'0'});

                var markup = document.createElement('div');
                markup.id = "mci-bannerBlind"+i;
                markup.innerHTML = "<div class=\"view-banner-imgcover\"><div id=\"view-banner-img-dom\"><div class=\"face front\"></div><div class=\"face back\"><a href=\"#\"></a></div></div></div>";
                mciAdBox.eq(i).find('img').before(markup);

                var bannerBlind = $MCI('#mci-bannerBlind'+i);
                var bannerBlindBox = bannerBlind.find('.view-banner-imgcover')
                var bannerBlindImg = bannerBlind.find('img');
                var windowHeight = parseInt($MCI(window).height());

                bannerBlind.css({'position':'absolute','top':'0px','left':'0px','width':'100%', 'height':bannerHeight+'px','overflow':'hidden','z-index':'5'});
                bannerBlindBox.css({'width':'100%', 'height':'100%', 'position': 'relative'});
                bannerBlindBox.find('.face').css({'position': 'absolute', 'top': '0', 'left': '0',  'backface-visibility': 'hidden'});
                bannerBlindBox.find('.back').css({'-webkit-transform': 'rotateY(180deg)','-moz-transform': 'rotateY(180deg)','-ms-transform': 'rotateY(180deg)','-o-transform': 'rotateY(180deg)','transform': 'rotateY(180deg)'});
                bannerBlindBox.find('.back a').css({'display':'block','width':'100%', 'height':'100%'});
                bannerBlindImg.css({'width':'100%', 'height':'100%'});
                adTopNum[i] = (parseInt(mciAdBox.eq(i).offset().top) - windowHeight) + (windowHeight / 2)  + (windowHeight / 5);
                if(adTopNum[i] < 0){
                    adTopNum[i] = 10;
                }

                var bannerSliceWidth = parseInt(bannerWidth / bannerSlice) ;
                var bannerSlicePosition = 0;
                var origin = bannerBlind.find('#view-banner-img-dom');
                bannerBlind.find('.view-banner-img-com').remove();
                for (var j = 0; j < bannerSlice; j++) {
                    var dom = origin.clone(true);
                    dom.removeAttr('id').addClass('view-banner-img-com');
                    dom.css({'position':'relative','float':'left','width':bannerSliceWidth + 'px','height':bannerHeight + 'px','transform-style': 'preserve-3d'});
                    dom.find('.face').css({'width':bannerSliceWidth + 'px','height':bannerHeight + 'px','background':'url('+bannerImgArr[i]+')','background-size': bannerWidth+'px ' + bannerHeight+'px','background-position':'-'+bannerSlicePosition+'px' + ' 0'});
                    dom.find('.front').css({'background':'url('+adImgSrc+')','background-size': bannerWidth+'px '/* + bannerHeight+'px'*/,'background-position':'-'+bannerSlicePosition+'px' + ' 0'});
                    dom.find('.back').css({'background':'url('+bannerImgArr[i]+')','background-size': bannerWidth+'px 100%'/* + bannerHeight+'px'*/,'background-position':'-'+bannerSlicePosition+'px' + ' 0'});
                    origin.before(dom);
                    bannerSlicePosition += bannerSliceWidth;
                }
            }
        };
        MDL.MCIbannerBlindDom();

        setTimeout(function(){
            var mciAdBox = $MCI('.mci-adbox');
            for(var i=0;i<mciAdBox.length; i++){
                var bannerHeight = mciAdBox.eq(i).css('height');
                bannerHeight = Number(bannerHeight.replace('px',''));
                if(bannerHeight < 100){
                    bannerHeight = 200;
                }
                var bannerWidth = mciAdBox.eq(i).css('width');
                bannerWidth = parseInt(bannerWidth.replace('px',''));
                var bannerBlind = $MCI('#mci-bannerBlind'+i);
                var windowHeight = parseInt($MCI(window).height());

                bannerBlind.css({'height':bannerHeight+'px'});

                adTopNum[i] = (parseInt(mciAdBox.eq(i).offset().top) - windowHeight) + (windowHeight / 2)  + (windowHeight / 5);
                if(adTopNum[i] < 0){
                    adTopNum[i] = 10;
                }

                for (var j = 0; j < bannerSlice; j++) {
                    var dom = bannerBlind.find('.view-banner-img-com').eq(j);
                    dom.css({'height':bannerHeight + 'px'});
                    dom.find('.face').css({'height':bannerHeight + 'px'});
                    /*dom.find('.front').css({'background-size': bannerWidth+'px ' + bannerHeight+'px'});
                    dom.find('.back').css({'background-size': bannerWidth+'px ' + bannerHeight+'px'});*/
                }
            };
        }, 2000);

        var bannerSliceDelay = 0;
        $MCI(window).on('scroll', function() {
            for(var i=0;i<adImgLength;i++){
                if($MCI(window).scrollTop() > adTopNum[i]) {
                    for (var j = 0; j < bannerSlice; j++) {
                        $MCI('#mci-bannerBlind'+i).find('.view-banner-img-com').eq(j).css({
                            '-webkit-transform': 'rotateY(180deg)',
                            '-moz-transform': 'rotateY(180deg)',
                            '-ms-transform': 'rotateY(180deg)',
                            '-o-transform': 'rotateY(180deg)',
                            'transform': 'rotateY(180deg)',
                            '-webkit-transition':'all 0.5s ease '+bannerSliceDelay+'s',
                            '-moz-transition':'all 0.5s ease '+bannerSliceDelay+'s',
                            '-ms-transition':'all 0.5s ease '+bannerSliceDelay+'s',
                            '-o-transition':'all 0.5s ease '+bannerSliceDelay+'s',
                            'transition':'all 0.5s ease '+bannerSliceDelay+'s'
                        });
                        if( bannerSliceDelay < (0.08 * bannerSlice)){
                            bannerSliceDelay += 0.08;
                        }
                    }
                    bannerSliceDelay = 0;
                }else{
                    $MCI('#mci-bannerBlind'+i).find('.view-banner-img-com').css({
                        '-webkit-transform': 'rotateY(0)',
                        '-moz-transform': 'rotateY(0)',
                        '-ms-transform': 'rotateY(0)',
                        '-o-transform': 'rotateY(0)',
                        'transform': 'rotateY(0)',
                        'transition':'all 0.5s ease 0s'
                    });
                    bannerSliceDelay = 0;
                }
            }
        });
    }
    return this.Init();
}
new MCI_KOREA_ADBANNERBLIND();
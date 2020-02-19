var MCI_KOREA_ADBANNERBFOLD = function() {
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

        this.MCIbannerFoldDom = function() {
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
                markup.id = "mci-bannerFold"+i;
                markup.innerHTML = "<div class=\"banner-fold-box\"><div class=\"banner-fold-bg\"></div><div class=\"banner-fold-top\"><div class=\"face front\"></div><div class=\"face back\"></div></div><div class=\"banner-fold-bottom\"></div></div>";
                mciAdBox.eq(i).find('img').before(markup);

                var bannerFold = $MCI('#mci-bannerFold'+i);
                var windowHeight = parseInt($MCI(window).height());

                bannerFold.css({'position':'absolute','top':'0px','left':'0px','width':'100%', 'height':bannerHeight+'px','overflow':'hidden','z-index':'5'});
                bannerFold.find('.banner-fold-box').css({'position': 'relative', 'width':'100%', 'height':'100%','-moz-perspective':'1500px','-webkit-perspective':'1500px','perspective':'1500px'});
                bannerFold.find('.banner-fold-bg').css({'width':'100%', 'height':'51%','background':'url('+bannerImgArr[i]+')','-webkit-background-size':'100% 200%','background-size':'100% 200%'});
                bannerFold.find('.banner-fold-top').css({'position':'absolute','width':'100%', 'height':'50%','z-index':'10','top':'0','-webkit-transition':'all .5s ease-out','-moz-transition':'all .5s ease-out','-ms-transition':'all .5s ease-out','-o-transition':'all .5s ease-out','transition':'all .5s ease-out','-webkit-transform':'rotateX(0deg)','-moz-transform':'rotateX(0deg)','-ms-transform':'rotateX(0deg)','-o-transform':'rotateX(0deg)','transform':'rotateX(0deg)','transform-origin':'0 100%','-webkit-transform-style':'preserve-3d','-moz-transform-style':'preserve-3d','-ms-transform-style':'preserve-3d','transform-style':'preserve-3d'});
                bannerFold.find('.face').css({'position':'absolute','-webkit-backface-visibility':'hidden','-moz-backface-visibility':'hidden','-ms-backface-visibility':'hidden','backface-visibility':'hidden'});
                bannerFold.find('.front').css({'background':'url('+adImgSrc+')','-webkit-background-size':'100% 200%','background-size':'100% 200%','width':'100%', 'height':'100%'});
                bannerFold.find('.back').css({'background':'url('+bannerImgArr[i]+') bottom','-webkit-background-size':'100% 200%','background-size':'100% 200%','width':'100%', 'height':'100%','-webkit-transform':'rotateX(180deg)','-moz-transform':'rotateX(180deg)','-ms-transform':'rotateX(180deg)','-o-transform':'rotateX(180deg)','transform':'rotateX(180deg)'});

                bannerFold.find('.banner-fold-bottom').css({'background':'url('+adImgSrc+') bottom','-webkit-background-size':'100% 200%','background-size':'100% 200%','width':'100%', 'height':'50%','position':'absolute','top':'50%','z-index':'0'});
                bannerFold.find('img').css({'width':'100%', 'height':'100%'});

                adTopNum[i] = (parseInt(mciAdBox.eq(i).offset().top) - windowHeight) + (windowHeight / 2)  + (windowHeight / 5);
                if(adTopNum[i] < 0){
                    adTopNum[i] = 10;
                }
            }
        };
        MDL.MCIbannerFoldDom();

        $MCI(window).on('scroll', function() {
            for(var i=0;i<adImgLength;i++){
                if($MCI(window).scrollTop() > adTopNum[i]) {
                    $MCI('#mci-bannerFold'+i).find('.banner-fold-top').css({'-webkit-transform':'rotateX(-180deg)','-moz-transform':'rotateX(-180deg)','-ms-transform':'rotateX(-180deg)','-o-transform':'rotateX(-180deg)','transform':'rotateX(-180deg)'});
                }else{
                    $MCI('#mci-bannerFold'+i).find('.banner-fold-top').css({'-webkit-transform':'rotateX(0deg)','-moz-transform':'rotateX(0deg)','-ms-transform':'rotateX(0deg)','-o-transform':'rotateX(0deg)','transform':'rotateX(0deg)'});
                }
            }
        });
    }
    return this.Init();
}
new MCI_KOREA_ADBANNERBFOLD();
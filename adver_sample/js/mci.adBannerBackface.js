var MCI_KOREA_ADBANNERBACKFACE = function() {
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

        this.MCIbannerBackfaceDom = function() {
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

                mciAdBox.eq(i).find('img').css({'opacity':'0'});
                var markup = document.createElement('div');
                markup.id = "mci-bannerBackface"+i;
                markup.innerHTML = "<div class=\"view-banner-imgcover\"><div class=\"face front\"><img  src=\"\"></div><div class=\"face back\"><a href=\"#\"><img  src=\"\" id=\"backImg\"></a></div></div>";
                mciAdBox.eq(i).find('img').before(markup);

                var bannerBackface = $MCI('#mci-bannerBackface'+i);
                var bannerBackfaceBox = bannerBackface.find('.view-banner-imgcover');
                bannerBackface.find('.front img').attr('src',adImgSrc);
                bannerBackface.find('.back img').attr('src', bannerImgArr[i]);
                var windowHeight = parseInt($MCI(window).height());

                bannerBackface.css({'position':'absolute','top':'0px','left':'0px','width':'100%', 'height':bannerHeight+'px','overflow':'hidden','perspective':'1000','z-index':'5'});
                bannerBackfaceBox.css({'width':'100%', 'height':'100%', 'position': 'relative','transform-style': 'preserve-3d','transition':'0.5s'});
                bannerBackfaceBox.find('.face').css({'position': 'absolute', 'top': '0', 'left': '0', 'width': '100%', 'height': '100%', 'backface-visibility': 'hidden'});
                bannerBackfaceBox.find('.back').css({'width':'100%', 'height':'100%','-webkit-transform': 'rotateY(180deg)','-moz-transform': 'rotateY(180deg)','-ms-transform': 'rotateY(180deg)','-o-transform': 'rotateY(180deg)','transform': 'rotateY(180deg)'});
                bannerBackfaceBox.find('.back a').css({'display':'block', 'width':'100%', 'height':'100%','text-align':'center'})
                bannerBackfaceBox.find('.back img').css({'width': 'auto', 'max-width':'100%', 'height': '100%'});

                adTopNum[i] = (parseInt(mciAdBox.eq(i).offset().top) - windowHeight) + (windowHeight / 2)  + (windowHeight / 5);
                if(adTopNum[i] < 0){
                    adTopNum[i] = 10;
                }
            }
        }

        MDL.MCIbannerBackfaceDom();

        setTimeout(function(){
            var mciAdBox = $MCI('.mci-adbox');
            for(var i=0;i<mciAdBox.length; i++){
                var bannerHeight = mciAdBox.eq(i).css('height');
                bannerHeight = Number(bannerHeight.replace('px',''));
                if(bannerHeight < 100){
                    bannerHeight = 200;
                }

                var bannerBackface = $MCI('#mci-bannerBackface'+i);
                var windowHeight = parseInt($MCI(window).height());

                bannerBackface.css({'height':bannerHeight+'px'});

                adTopNum[i] = (parseInt(mciAdBox.eq(i).offset().top) - windowHeight) + (windowHeight / 2)  + (windowHeight / 5);
                if(adTopNum[i] < 0){
                    adTopNum[i] = 10;
                }
            };
        }, 2000);

        $MCI(window).on('scroll', function() {
            for(var i=0;i<adImgLength;i++){
                if($MCI(window).scrollTop() > adTopNum[i]) {
                    $MCI('#mci-bannerBackface'+i).find('.view-banner-imgcover').css({'-webkit-transform': 'rotateY(180deg)','-moz-transform': 'rotateY(180deg)','-ms-transform': 'rotateY(180deg)','-o-transform': 'rotateY(180deg)','transform': 'rotateY(180deg)'});

                }else{
                    $MCI('#mci-bannerBackface'+i).find('.view-banner-imgcover').css({'-webkit-transform': 'rotateY(0)','-moz-transform': 'rotateY(0)','-ms-transform': 'rotateY(0)','-o-transform': 'rotateY(0)','transform': 'rotateY(0)'});
                }
            }
        });


    }
    return this.Init();
}
new MCI_KOREA_ADBANNERBACKFACE();
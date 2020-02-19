var MCI_KOREA_ADBANNERSHOWNLEFT = function() {
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
        //첫번째 이미지 도착시 광고 내려오기
        var viewImg = $MCI('#mci-adBanner-content').find('img');
        viewImg.wrap('<div class=\"mci-adBannerImg\"></div>');
        var viewAdImg = $MCI('#mci-adBanner-content').find('.mci-adBannerImg');
        var adImgLength = viewAdImg.length;

        viewAdImg.css({'position':'relative','overflow':'hidden'});
        var adTopNum = [];
        var bannerShownTop = [];

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

        var windowHeight = parseInt($MCI(window).height());
        this.MCIbannerShownDom = function () {
            for(var i=0;i<adImgLength; i++){
                var bannerWidth = viewAdImg.eq(i).css('width');
                bannerWidth = Number(bannerWidth.replace('px',''));

                var markup = document.createElement('div');
                markup.id = "mci-bannerShownLeft"+i;
                markup.innerHTML = "<div class=\"view-banner-imgcover\"><a href=\"#\"><img src=\"\"></a></div>";
                viewAdImg.eq(i).find('img').before(markup);

                var bannerShown = $MCI('#mci-bannerShownLeft'+i);
                var bannerShownImg = bannerShown.find('img');
                bannerShownImg.attr('src',bannerImgArr[i]);
                bannerShownImg.attr('id', 'bannerImg'+i);

                bannerShown.css({'position':'absolute','top':'0','left':'-1000px','width':'350px','height':'100%', 'overflow':'hidden'});
                bannerShown.find('.view-banner-imgcover').css({'height':'100%'});
                bannerShownImg.css({'width': 'auto', 'max-width':'100%', 'height': '100%'});
                adTopNum[i] = (parseInt(viewAdImg.eq(i).offset().top) - windowHeight) + (windowHeight / 2)  + (windowHeight / 5);
                if (adTopNum[i] < 0) {
                    adTopNum[i] = 10;
                }
            };
        }
        MDL.MCIbannerShownDom();

        this.MCIbannerShownWidthDom = function (){
            var bannerShown0 = $MCI('#mci-bannerShownLeft0');
            var bannerShownImg0 = bannerShown0.find('img');
            bannerShownImg0.on('load',function () {
                for(var i=0;i<adImgLength; i++) {
                    var bannerWidth = viewAdImg.eq(i).css('width');
                    bannerWidth = Number(bannerWidth.replace('px',''));
                    if(bannerWidth < 100){
                        bannerWidth = 300;
                    }
                    bannerShownTop[i] = bannerWidth;
                    $MCI('#mci-bannerShownLeft'+i).css({'width':bannerShownTop[i]+'px','left':'-'+bannerShownTop[i]+'px'});

                    adTopNum[i] = (parseInt(viewAdImg.eq(i).offset().top) - windowHeight) + (windowHeight / 2) + (windowHeight / 5);
                    if (adTopNum[i] < 0) {
                        adTopNum[i] = 10;
                    }
                }
            });
        };
        MDL.MCIbannerShownWidthDom();

        setTimeout(function(){
            for(var i=0;i<adImgLength; i++) {
                adTopNum[i] = (parseInt(viewAdImg.eq(i).offset().top) - windowHeight) + (windowHeight / 2) + (windowHeight / 5);
                if (adTopNum[i] < 0) {
                    adTopNum[i] = 10;
                }
            }
        }, 2000);

        var lastScrollTop = [];
        for(var i=0;i<adImgLength;i++){
            lastScrollTop[i] = 0;
        }

        var scrollBannerHeight = '';
        $MCI(window).on('scroll', function() {
            for(var i=0;i<adImgLength;i++){
                if($MCI(window).scrollTop() > adTopNum[i]) {
                    var nowScrollTop = $(this).scrollTop();
                    var scrollNum = (nowScrollTop - lastScrollTop[i]);
                    if(scrollNum > 100){
                        scrollNum = 2;
                    }
                    if (nowScrollTop < lastScrollTop[i]) {
                        //Up
                        scrollBannerHeight = $MCI('#mci-bannerShownLeft'+i).css('left');
                        scrollBannerHeight = Number(scrollBannerHeight.replace('px',''));
                        $MCI('#mci-bannerShownLeft'+i).css({'left': (scrollBannerHeight + (scrollNum * 3.3)) + 'px'});
                    } else {
                        //Down
                        scrollBannerHeight = $MCI('#mci-bannerShownLeft'+i).css('left');
                        scrollBannerHeight = Number(scrollBannerHeight.replace('px',''));
                        $MCI('#mci-bannerShownLeft'+i).css({'left': (scrollBannerHeight + (scrollNum * 3.3)) + 'px'});
                    }
                    lastScrollTop[i] = nowScrollTop;
                }else{
                    var nowScrollTop = $MCI(this).scrollTop();
                    var scrollNum = (nowScrollTop - lastScrollTop[i]);
                    if (nowScrollTop < lastScrollTop[i]) {
                        $MCI('#mci-bannerShownLeft'+i).css({'left':'-'+bannerShownTop[i]+'px'});
                    }
                    lastScrollTop[i] = nowScrollTop;
                }
            }
        });
    }
    return this.Init();
}
new MCI_KOREA_ADBANNERSHOWNLEFT();
var MCI_KOREA_ADBANNERSHOWNTOP = function() {
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
            'https://tpc.googlesyndication.com/daca_images/simgad/14483571127135327632',
            'https://tpc.googlesyndication.com/simgad/9498111018776188624',
            'https://tpc.googlesyndication.com/simgad/4174379448971195182?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&amp;rs=AOga4ql3bygcqvL0sT2AikTTNd_gAZJtnw',
            'https://tpc.googlesyndication.com/simgad/9444460218678423038?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&amp;rs=AOga4qmMDBdFUI5kTPwfbwmLLM8LaVTc7A',
            'https://tpc.googlesyndication.com/daca_images/simgad/14483571127135327632',
            'https://tpc.googlesyndication.com/simgad/9498111018776188624',
            'https://tpc.googlesyndication.com/simgad/4174379448971195182?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&amp;rs=AOga4ql3bygcqvL0sT2AikTTNd_gAZJtnw',
            'https://tpc.googlesyndication.com/simgad/9444460218678423038?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&amp;rs=AOga4qmMDBdFUI5kTPwfbwmLLM8LaVTc7A',
        ];

        var windowHeight = parseInt($(window).height());
        this.MCIbannerShownDom = function () {
            for(var i=0;i<adImgLength; i++){
                var bannerHeight = viewAdImg.eq(i).css('height');
                bannerHeight = Number(bannerHeight.replace('px',''));
                if(bannerHeight < 100){
                    bannerHeight = 240;
                }
                var markup = document.createElement('div');
                markup.id = "mci-bannerShown"+i;
                markup.innerHTML = "<div class=\"view-banner-imgcover\"><a href=\"#\"><img src=\"\"></a></div>";
                viewAdImg.eq(i).find('img').before(markup);

                var bannerShown = $MCI('#mci-bannerShown'+i);
                var bannerShownImg = bannerShown.find('img');
                bannerShownImg.attr('src',bannerImgArr[i]);
                bannerShownImg.attr('id', 'bannerImg'+i);

                bannerShown.css({'position':'absolute','top':'-1000px','left':'0px','width':'100%','height':'auto', 'overflow':'hidden'});
                bannerShown.find('.view-banner-imgcover').css({'width':'100%','height':'auto'});
                bannerShownImg.css({'width':'100%','height':'auto'});

                adTopNum[i] = (parseInt(viewAdImg.eq(i).offset().top) - windowHeight) + (windowHeight / 2)  + (windowHeight / 5);
                if (adTopNum[i] < 0) {
                    adTopNum[i] = 10;
                }
            };
        }
        MDL.MCIbannerShownDom();

        this.MCIbannerShownHeightDom = function (){
            var bannerShown0 = $MCI('#mci-bannerShown0');
            var bannerShownImg0 = bannerShown0.find('img');
            bannerShownImg0.on('load', function () {
                for(var i=0;i<adImgLength; i++){
                    var bannerShowni = $MCI('#mci-bannerShown0');
                    var bannerShownImgi = bannerShowni.find('img');
                    bannerShownTop[i] = bannerShownImgi.height() +5;
                    $('#mci-bannerShown'+i).css({'top':'-'+bannerShownTop[i]+'px'});
                }
            });
        };
        MDL.MCIbannerShownHeightDom();

        var lastScrollTop = [];
        for(var i=0;i<adImgLength;i++){
            lastScrollTop[i] = 0;
        }

        setTimeout(function(){
            for(var i=0;i<adImgLength; i++) {
                adTopNum[i] = (parseInt(viewAdImg.eq(i).offset().top) - windowHeight) + (windowHeight / 2) + (windowHeight / 5);
                if (adTopNum[i] < 0) {
                    adTopNum[i] = 10;
                }
            }
        }, 2000);

        var scrollBannerHeight = '';
        $MCI(window).on('scroll', function() {
            for(var i=0;i<adImgLength;i++){
                if($MCI(window).scrollTop() > adTopNum[i]) {
                    var nowScrollTop = $MCI(this).scrollTop();
                    var scrollNum = (nowScrollTop - lastScrollTop[i]);
                    if(scrollNum > 100){
                        scrollNum = 2;
                    }
                    if (nowScrollTop < lastScrollTop[i]) {
                        //Up
                        scrollBannerHeight = $MCI('#mci-bannerShown'+i).css('top');
                        scrollBannerHeight = Number(scrollBannerHeight.replace('px',''));
                        $MCI('#mci-bannerShown'+i).css({'top': (scrollBannerHeight + (scrollNum * 2.3)) + 'px'});
                    } else {
                        //Down
                        scrollBannerHeight = $MCI('#mci-bannerShown'+i).css('top');
                        scrollBannerHeight = Number(scrollBannerHeight.replace('px',''));
                        $MCI('#mci-bannerShown'+i).css({'top': (scrollBannerHeight + (scrollNum * 2.3)) + 'px'});
                    }
                    lastScrollTop[i] = nowScrollTop;
                }else{
                    var nowScrollTop = $MCI(this).scrollTop();
                    var scrollNum = (nowScrollTop - lastScrollTop[i]);
                    if (nowScrollTop < lastScrollTop[i]) {
                        $MCI('#mci-bannerShown'+i).css({'top':'-'+bannerShownTop[i]+'px'});
                    }
                    lastScrollTop[i] = nowScrollTop;
                }
            }
        });
    }
    return this.Init();
}
new MCI_KOREA_ADBANNERSHOWNTOP();
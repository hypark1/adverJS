var MCI_KOREA_ADBANNERSHOWN = function() {
    var MDL;
    this.Init = function () {
        this.host = document.location.hostname;
        MDL = this;
        MDL.Event();
    };
    this.Event = function () {
        //첫번째 이미지 도착시 광고 내려오기
        var viewImg = $('#mci-adBanner-content').find('img');
        viewImg.wrap('<div class=\"mci-adBannerImg\"></div>');
        var viewAdImg = $('#mci-adBanner-content').find('.mci-adBannerImg');
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
                var mciBannerShownMarkup = document.createElement('div');
                mciBannerShownMarkup.id = "mci-bannerShown"+i;
                mciBannerShownMarkup.innerHTML = "<div class=\"view-banner-imgcover\"><a href=\"#\"><img src=\"\"></a></div>";
                viewAdImg.eq(i).find('img').before(mciBannerShownMarkup);

                var bannerShown = $('#mci-bannerShown'+i);
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
            var bannerShown0 = $('#mci-bannerShown0');
            var bannerShownImg0 = bannerShown0.find('img');
            bannerShownImg0.load(function () {
                for(var i=0;i<adImgLength; i++){
                    var bannerShowni = $('#mci-bannerShown0');
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
                var bannerHeight = viewAdImg.eq(i).css('height');
                bannerHeight = Number(bannerHeight.replace('px',''));
                if(bannerHeight < 100){
                    bannerHeight = 240;
                }
                var bannerShown = $('#mci-bannerShown'+i);

                adTopNum[i] = (parseInt(viewAdImg.eq(i).offset().top) - windowHeight) + (windowHeight / 2) + (windowHeight / 5);
                if (adTopNum[i] < 0) {
                    adTopNum[i] = 10;
                }
            }
        }, 2000);

        var scrollBannerHeight = '';
        $(window).on('scroll', function() {
            for(var i=0;i<adImgLength;i++){
                if($(window).scrollTop() > adTopNum[i]) {
                    var nowScrollTop = $(this).scrollTop();
                    var scrollNum = (nowScrollTop - lastScrollTop[i]);
                    if(scrollNum > 100){
                        scrollNum = 2;
                    }
                    if (nowScrollTop < lastScrollTop[i]) {
                        //Up
                        scrollBannerHeight = $('#mci-bannerShown'+i).css('top');
                        scrollBannerHeight = Number(scrollBannerHeight.replace('px',''));
                        $('#mci-bannerShown'+i).css({'top': (scrollBannerHeight + (scrollNum * 2.3)) + 'px'});
                    } else {
                        //Down
                        scrollBannerHeight = $('#mci-bannerShown'+i).css('top');
                        scrollBannerHeight = Number(scrollBannerHeight.replace('px',''));
                        $('#mci-bannerShown'+i).css({'top': (scrollBannerHeight + (scrollNum * 2.3)) + 'px'});
                    }
                    lastScrollTop[i] = nowScrollTop;
                }else{
                    var nowScrollTop = $(this).scrollTop();
                    var scrollNum = (nowScrollTop - lastScrollTop[i]);
                    if (nowScrollTop < lastScrollTop[i]) {
                        $('#mci-bannerShown'+i).css({'top':'-'+bannerShownTop[i]+'px'});
                    }
                    lastScrollTop[i] = nowScrollTop;
                }
            }
        });
    }
    return this.Init();
}
new MCI_KOREA_ADBANNERSHOWN();
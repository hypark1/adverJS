var MCI_KOREA_ADBANNERBACKFACE = function() {
    var MDL;
    this.Init = function () {
        this.host = document.location.hostname;
        MDL = this;
        MDL.Event();
    };
    this.Event = function () {
        var viewImg = $('#mci-adBanner-content').find('img');
        viewImg.wrap('<div class=\"mci-adBannerImg\"></div>');
        var viewAdImg = $('#mci-adBanner-content').find('.mci-adBannerImg');
        var adImgLength = viewAdImg.length;
        viewAdImg.css({'position':'relative','padding':'5px','overflow':'hidden'});
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

        var bannerHeightArr = [];

        this.MCIbannerLineDom = function() {
            for(var i=0;i<adImgLength; i++) {
                var viewAdImgHeight = viewAdImg.eq(i).css('height');
                viewAdImgHeight = Number(viewAdImgHeight.replace('px', ''));
                if (viewAdImgHeight > 160) {
                    viewAdImg.eq(i).addClass('mci-adbox');
                }
            }
            var mciAdBox = $('.mci-adbox');
            for(var i=0;i<mciAdBox.length; i++){
                var adImgSrc = mciAdBox.eq(i).find('img').attr('src');
                var bannerHeight = mciAdBox.eq(i).css('height');
                if(bannerHeight < 100){
                    bannerHeight = 200;
                }
                bannerHeightArr[i] = Number(bannerHeight.replace('px',''));

                var mciBannerBackfaceMarkup = document.createElement('div');
                mciBannerBackfaceMarkup.id = "mci-bannerLine"+i;
                mciBannerBackfaceMarkup.innerHTML = "<div class=\"img-line img-line-1\"></div><div class=\"img-line img-line-2\"></div>";
                mciAdBox.eq(i).find('img').before(mciBannerBackfaceMarkup);

                var bannerLine = $('#mci-bannerLine'+i);
                var windowHeight = parseInt($(window).height());

                bannerLine.css({});
                bannerLine.find('.img-line').css({'display':'none','position':'absolute','background':'#ff016b'});
                bannerLine.find('.img-line-1').css({'top':'0','left':'0','width':'60px','height':'5px'});
                bannerLine.find('.img-line-2').css({'bottom':'0','right':'0','width':'60px','height':'5px'});

                adTopNum[i] = (parseInt(mciAdBox.eq(i).offset().top) - windowHeight) + (windowHeight / 2)  + (windowHeight / 5);
                if(adTopNum[i] < 0){
                    adTopNum[i] = 10;
                }
            }
        }

        MDL.MCIbannerLineDom();

        this.MCIbannerLineLoop = function(num, bannerLeft, bannerTop) {
            $('#mci-bannerLine'+num).find('.img-line-1').css({'display':'block'});
            $('#mci-bannerLine'+num).find('.img-line-2').css({'display':'block'});

            $('#mci-bannerLine'+num).find('.img-line-1').animate({'width':'60px','height':'5px','top':'0','left':'0'},300)
            .animate({'left':bannerLeft+'px'},300)
            .animate({'width':'5px','height':'60px','left':bannerLeft+'px'},300)
            .animate({'top':bannerTop+'px'},300)
            .animate({'width':'60px','height':'5px','top':bannerTop+'px','left':bannerLeft+'px'},300)
            .animate({'left':'0'},300)
            .animate({'width':'5px','height':'60px','top':bannerTop+'px'},300)
            .animate({'top':'0'},300)
            .animate({'height':'5px'},200);

            $('#mci-bannerLine'+num).find('.img-line-2').animate({'width':'60px','height':'5px','bottom':'0','right':'0'},300)
            .animate({'right':bannerLeft+'px'},300)
            .animate({'width':'5px','height':'60px','right':bannerLeft+'px'},300)
            .animate({'bottom':'190px'},300)
            .animate({'width':'60px','height':'5px','bottom':bannerTop+'px','right':bannerLeft+'px'},300)
            .animate({'right':'0'},300)
            .animate({'width':'5px','height':'60px','bottom':bannerTop+'px'},300)
            .animate({'bottom':'0'},300)
            .animate({'height':'5px'},200);
        };

        setTimeout(function(){
            var mciAdBox = $('.mci-adbox');
            for(var i=0;i<mciAdBox.length; i++){
                var windowHeight = parseInt($(window).height());
                var bannerHeight = mciAdBox.eq(i).css('height');
                if(bannerHeight < 100){
                    bannerHeight = 200;
                }
                bannerHeightArr[i] = Number(bannerHeight.replace('px',''));


                adTopNum[i] = (parseInt(mciAdBox.eq(i).offset().top) - windowHeight) + (windowHeight / 2)  + (windowHeight / 5);
                if(adTopNum[i] < 0){
                    adTopNum[i] = 10;
                }
            };
        }, 2000);

        $(window).on('scroll', function() {
            for(var i=0;i<adImgLength;i++){
                var mciAdBox = $('.mci-adbox');
                var bannerWidth = mciAdBox.eq(0).css('width');
                bannerWidth = Number(bannerWidth.replace('px',''));
                var bannerLeft = bannerWidth + 5;
                var bannerTop = bannerHeightArr[i] + 5;
                if($(window).scrollTop() > adTopNum[i]) {
                    MDL.MCIbannerLineLoop(i, bannerLeft, bannerTop);
                }else {
                    $('#mci-bannerLine'+i).find('.img-line-1').clearQueue();
                    $('#mci-bannerLine'+i).find('.img-line-2').clearQueue();
                    $('#mci-bannerLine'+i).find('.img-line-1').css({'display':'none','top':'0','left':'0','width':'60px','height':'5px'});
                    $('#mci-bannerLine'+i).find('.img-line-2').css({'display':'none','bottom':'0','right':'0','width':'60px','height':'5px'});
                }
            }
        });
    }
    return this.Init();
}
new MCI_KOREA_ADBANNERBACKFACE();
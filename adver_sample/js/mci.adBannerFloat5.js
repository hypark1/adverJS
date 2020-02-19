var MCI_KOREA_ADBANNERFLOAT = function() {
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
                    MDL.markup();
                    MDL.Event();
                    MDL.$ZONE = $MCI('#mci-bannerFloat');
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js"];
        loadScripts(scripts);
    };
    this.markup = function() {
        var markup = document.createElement('div');
        markup.id = "mci-bannerFloat";
        markup.innerHTML = "<div class=\"mci-bannerFloat-close\">X</div><div class=\"mci-bannerFloat-box\"><div id=\"mci-bannerFloat-list-dom\"><div id=\"mci-bannerFloat-slice-dom\"></div></div></div>";
        document.body.appendChild(markup);

        var floatBanner = $MCI('#mci-bannerFloat');
        var Link = [
            '//img.mobon.net/ad/imgfile/916b5a3c7f2bb266b230f8e4467a0c5d0218160.jpg',
            '//img.mobon.net/ad/imgfile//2019/RmlsYQ==/7ebd3a9a-f1a9-4f9c-b288-bcc89bcb23f901.png',
            '//img.mobon.net/ad/imgfile//2019/aGFud2hhZGlyZWN0/fbdc5f80-a125-4c24-851b-dc71250f46a601.png'
        ];

        var $origin = floatBanner.find('#mci-bannerFloat-list-dom');
        var listIndex = 88;
        var bannerWidth = 150;
        var bannerSliceNum = 8;
        var bannerSliceWidth = Number(bannerWidth / bannerSliceNum);

        for (var i = 0; i <(Link.length +1) ; i++) {
            var $dom = $origin.clone(true);
            $dom.removeAttr('id').addClass('mci-bannerFloat-list');
            var sliceOrigin = $dom.find('#mci-bannerFloat-slice-dom');
            var bannerSlicePositionLeft = 0;
            var bannerSlicePositionTop = 0;
            var bannerSlicePositionLeft2 = 0;
            var bannerSlicePositionTop2 = 0;
            if(i == Link.length){
                $dom.find('#mci-bannerFloat-slice-dom').remove();
                $dom.append('<img>');
                $dom.find('img').attr('src',Link[0]);
            }else{
                for(var j = 0; j < (bannerSliceNum*bannerSliceNum); j++){
                    var sliceDom = sliceOrigin.clone(true);
                    sliceDom.removeAttr('id').addClass('mci-bannerFloat-slice');
                    sliceDom.css({'background':'url('+Link[i]+')','background-position':bannerSlicePositionLeft+'px '+bannerSlicePositionTop+'px','background-size': '150px 150px','top':bannerSlicePositionTop2+'px','left':bannerSlicePositionLeft2+'px'});
                    bannerSlicePositionLeft -= bannerSliceWidth;
                    bannerSlicePositionLeft2 += bannerSliceWidth;
                    for(var k = 0; k < (bannerSliceNum-1); k++){
                        if(j== (bannerSliceNum-1 + (bannerSliceNum * k))){
                            bannerSlicePositionTop -= bannerSliceWidth;
                            bannerSlicePositionTop2 += bannerSliceWidth;
                            bannerSlicePositionLeft2 = 0;
                        }
                    }
                    sliceOrigin.before(sliceDom);
                }
            }
            $dom.css({'z-index':listIndex - (20 * i)});
            $origin.before($dom);
        };

        floatBanner.css({'position':'fixed','bottom':'80px','left':'0','width':'150px','height':'150px','z-index':'99'});
        floatBanner.find('.mci-bannerFloat-list').css({'position':'absolute','top':'0','left':'0','width':'150px','height':'150px'});
        floatBanner.find('.mci-bannerFloat-slice').css({'position':'absolute','width':bannerSliceWidth+'px','height':bannerSliceWidth+'px','transform': 'translate3d(0,0,0)'});
        floatBanner.find('img').css({'width':'100%','height':'100%'});
        floatBanner.find('.mci-bannerFloat-close').css({'position':'absolute','top':'0','left':'0','width':'20px','height':'20px','background':'#222','color':'#fff','z-index':'99','text-align':'center','font-size':'14px'});
    };
    this.Event = function () {
        var floatBanner = $MCI('#mci-bannerFloat');
        var floatBannerList = floatBanner.find('.mci-bannerFloat-list');
        var floatNum = 0;
        var floatListLength = floatBannerList.length -1;
        var bannerSliceNum = 8;

        this.floatRolling = function () {
            var eachSlice = floatBannerList.eq(floatNum).find('.mci-bannerFloat-slice');

            if(floatNum == 0){
                floatBannerList.find('.mci-bannerFloat-slice').fadeIn(0);
            }
            var fade = 150;
            var sec = 50;

            this.setTimeDom = function(num1, num2){
                var forNum = num1;
                for(var i=0;i<num2;i++){
                    setTimeout(function(){
                        eachSlice.eq(forNum).fadeOut(fade);
                        forNum += (bannerSliceNum -1);
                    }, sec * forNum)
                }
            };

            for(var i=0;i<(bannerSliceNum*2);i++){
                if(i > (bannerSliceNum -1)){
                    MDL.setTimeDom(i, bannerSliceNum);
                }else{
                    MDL.setTimeDom(i, i+1);
                }
            }

            floatNum += 1;
            if(floatNum == floatListLength) {
                floatNum = 0;
            }
        };

        var rollingImg = setInterval(function(){
            MDL.floatRolling();
        }, 4000);

        floatBanner.find('.mci-bannerFloat-close').on('click',function () {
            floatBanner.css({'display':'none'});
            clearInterval(rollingImg);
        })
    };
    return this.Init();
}
new MCI_KOREA_ADBANNERFLOAT();
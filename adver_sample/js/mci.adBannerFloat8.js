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
        var bannerSliceNum = 15;
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
                    sliceDom.removeAttr('id').addClass('mci-bannerFloat-slice on');
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
        floatBanner.find('.mci-bannerFloat-slice').css({'position':'absolute','width':bannerSliceWidth+'px','height':bannerSliceWidth+'px'});
        floatBanner.find('img').css({'width':'100%','height':'100%'});
        floatBanner.find('.mci-bannerFloat-close').css({'position':'absolute','top':'0','left':'0','width':'20px','height':'20px','background':'#222','color':'#fff','z-index':'99','text-align':'center','font-size':'14px'});
    };
    this.Event = function () {
        var floatBanner = $MCI('#mci-bannerFloat');
        var floatBannerList = floatBanner.find('.mci-bannerFloat-list');
        var floatListLength = floatBannerList.length -1;
        var bannerSliceNum = 15;
        var rollingNum = 0;
        var floatNum = 0;
        var rollingArr = [];
        var sec = 50;

        this.floatRolling = function () {
            for(var i=0;i<bannerSliceNum;i++) {
                setTimeout(function () {
                    rollingArr = new Array(bannerSliceNum);
                    var count = 0;
                    var overl = true;
                    while (count < bannerSliceNum) {
                        var number = 0;
                        number = parseInt(Math.random() * ((bannerSliceNum * bannerSliceNum) - (bannerSliceNum * rollingNum)));
                        for (var i = 0; i < count; i++) {
                            if (rollingArr[i] == number) {
                                overl = false;
                            }
                        }
                        if (overl) {
                            rollingArr[count] = number;
                            count++;
                        }
                        overl = true;
                    }
                    rollingNum++;
                    var eachSlice = floatBannerList.eq(floatNum).find('.on');
                    for (var i = 0; i < rollingArr.length; i++) {
                        eachSlice.eq(rollingArr[i]).fadeOut(100).removeClass('on');
                    }
                    if (rollingNum == bannerSliceNum) {
                        rollingNum = 0;
                        floatNum++;
                        if (floatNum == floatListLength) {
                            floatBannerList.find('.mci-bannerFloat-slice').fadeIn(0).addClass('on');
                            floatNum = 0;
                        }
                    }
                }, sec * i)
            }
        };

        var rollingImg = setInterval(function(){
            MDL.floatRolling();
        }, 3000);

        floatBanner.find('.mci-bannerFloat-close').on('click',function () {
            floatBanner.css({'display':'none'});
            clearInterval(rollingImg);
        })
    };
    return this.Init();
}
new MCI_KOREA_ADBANNERFLOAT();
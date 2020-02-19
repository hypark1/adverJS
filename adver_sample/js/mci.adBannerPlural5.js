var MCI_KOREA_ADBANNERLINE = function() {
    var MDL;
    /*sample36*/
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
                    MDL.$ZONE = $MCI('#mci-bannerLine');
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js"];
        loadScripts(scripts);
    };
    this.markup = function() {
        var AdBanner = $MCI('.appladBanner');
        for(var i=0; i<AdBanner.length; i++){
            var AdImg = AdBanner.eq(i).find('a');
            AdImg.wrap('<div></div>');
            AdImg.parent('div').addClass('mci-bannerList');
            AdImg.append('<div id=\"mci-bannerFloat-slice-dom\"></div>');
            var bannerPlural = AdBanner.eq(i).find('.mci-bannerList');
            var bannerHtml = bannerPlural.eq(0).html();
            AdBanner.eq(i).find('.banner_box').append('<div class=\"mci-bannerList\">' + bannerHtml + '</div>');
            var listIndex = 70;
            bannerPlural = AdBanner.eq(i).find('.mci-bannerList');
            var bannerWidth = bannerPlural.eq(i).width();
            var bannerHeight = bannerPlural.eq(i).height();
            var bannerSliceNum = 8;
            var bannerSliceWidth = Number(bannerWidth / bannerSliceNum);

            for (var z = 0; z <(bannerPlural.length +1) ; z++) {
                var sliceOrigin = bannerPlural.eq(z).find('#mci-bannerFloat-slice-dom');
                var bannerSlicePositionLeft = 0;
                var bannerSlicePositionTop = 0;
                var bannerSlicePositionLeft2 = 0;
                var bannerSlicePositionTop2 = 0;
                if(z == bannerPlural.length){
                    bannerPlural.eq(z).find('#mci-bannerFloat-slice-dom').remove();
                    bannerPlural.eq(z).append('<img>');
                    bannerPlural.eq(z).find('img').attr('src',bannerPlural.eq(0).find('img').attr('src'));
                }else{
                    for(var j = 0; j < (bannerSliceNum*bannerSliceNum); j++){
                        var sliceDom = sliceOrigin.clone(true);
                        sliceDom.removeAttr('id').addClass('mci-bannerFloat-slice');
                        sliceDom.css({'background':'url('+bannerPlural.eq(z).find('img').attr('src')+')','background-position':bannerSlicePositionLeft+'px '+bannerSlicePositionTop+'px','background-size': bannerWidth+'px '+ bannerHeight +'px','top':bannerSlicePositionTop2+'px','left':bannerSlicePositionLeft2+'px'});
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
                bannerPlural.eq(z).css({'z-index':listIndex - (2 * z)});
            };

            bannerPlural.parent('div').css({'position':'absolute','top':'0','left':'0','width':bannerWidth + 'px','height':bannerHeight + 'px'});
            bannerPlural.css({'position':'absolute','top':'0','left':'0','width':'100%','height':'100%'});
            bannerPlural.find('.mci-bannerFloat-slice').css({'position':'absolute','width':bannerSliceWidth+'px','height':bannerSliceWidth+'px','transform': 'translate3d(0,0,0)'});
        }
        AdBanner.css({'overflow':'hidden'});
        bannerPlural = $MCI('.mci-bannerList');
        bannerPlural.parent('div').css({'position':'relative'});
        bannerPlural.find('img').css({'display':'none'});
        bannerPlural.find('#mci-bannerFloat-slice-dom').css({'display':'none'});
    };
    this.Event = function () {

        var AdBanner = $MCI('.appladBanner');
        var floatNum = [];
        for (var i = 0; i < AdBanner.length; i++) {
            floatNum.push(0);
        }
        var bannerSliceNum = 8;

        this.turnRolling = function () {
            for(var z=0; z<AdBanner.length; z++) {
                var floatBannerList = AdBanner.eq(z).find('.mci-bannerList');
                var eachSlice = floatBannerList.eq(floatNum[z]).find('.mci-bannerFloat-slice');
                var floatListLength = floatBannerList.length - 1;
                if (floatNum[z] == 0) {
                    floatBannerList.find('.mci-bannerFloat-slice').fadeIn(0);
                }

                for (var i = 0; i < (bannerSliceNum * 2); i++) {
                    if (i > (bannerSliceNum - 1)) {
                        MDL.setTimeDom(i, bannerSliceNum , eachSlice);
                    } else {
                        MDL.setTimeDom(i, i + 1, eachSlice);
                    }
                }

                floatNum[z] += 1;
                if (floatNum[z] == floatListLength) {
                    floatNum[z] = 0;
                }
            }
        };

        this.setTimeDom = function (num1, num2, eachSlice) {
            var forNum = num1;
            var fade = 150;
            var sec = 50;
            for (var i = 0; i < num2; i++) {
                setTimeout(function () {
                    eachSlice.eq(forNum).fadeOut(fade);
                    forNum += (bannerSliceNum - 1);
                }, sec * forNum)
            }
        };
        setInterval(function () {
           MDL.turnRolling();
        }, 4000);

    }
    return this.Init();
}
new MCI_KOREA_ADBANNERLINE();
var MCI_KOREA_ADBANNERLINE = function() {
    var MDL;
    /*sample37*/
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
            var bannerSliceNum = 15;
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
                        sliceDom.removeAttr('id').addClass('mci-bannerFloat-slice on');
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
            bannerPlural.find('.mci-bannerFloat-slice').css({'position':'absolute','width':bannerSliceWidth+'px','height':bannerSliceWidth+'px'});
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
        var sec = 50;
        var bannerSliceNum = 15;

        this.mozaRolling = function (num) {
            var floatBannerList = AdBanner.eq(num).find('.mci-bannerList');
            var floatListLength = floatBannerList.length -1;
            var rollingNum = 0;
            var rollingArr = [];
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
                    var eachSlice = floatBannerList.eq(floatNum[num]).find('.on');
                    for (var i = 0; i < rollingArr.length; i++) {
                        eachSlice.eq(rollingArr[i]).fadeOut(100).removeClass('on');
                    }
                    if (rollingNum == bannerSliceNum) {
                        rollingNum = 0;
                        floatNum[num]++;
                        if (floatNum[num] == floatListLength) {
                            floatBannerList.find('.mci-bannerFloat-slice').fadeIn(0).addClass('on');
                            floatNum[num] = 0;
                        }
                    }
                }, sec * i)
            }
        };

        setInterval(function () {
            for(var i=0; i<AdBanner.length;i++) {
                MDL.mozaRolling(i);
            }
        }, 3000);

    }
    return this.Init();
}
new MCI_KOREA_ADBANNERLINE();
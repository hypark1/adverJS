var MCI_KOREA_ADBANNERPLURAL = function() {
    var MDL;
    /*sample27*/
    this.Init = function () {
        this.host = document.location.hostname;
        MDL = this;
        this.onLoad();
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
                    MDL.type();
                    MDL.setDom();
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js"];
        loadScripts(scripts);
    };
    this.setDom = function () {
        this.MaxIndex = 70;
        this.eventGArr = new Array();

        MDL.setDom.AdBanner =$MCI('.appladBanner');
        MDL.setDom.atype = [];
        MDL.setDom.btype = [];
        MDL.setDom.ctype = [];
        MDL.setDom.dtype = [];
        MDL.setDom.etype = [];
        MDL.setDom.ftype = [];
        MDL.setDom.gtype = [];
        $MCI(document).ready(function() {
            for(var i=0; i<MDL.setDom.AdBanner.length; i++){
                var randomNum = parseInt(Math.random() * 7);
                if(randomNum == 0){
                    MDL.type.A(i);
                }else if(randomNum == 1){
                    MDL.type.B(i);
                }else if(randomNum == 2){
                    MDL.type.C(i);
                }else if(randomNum == 3){
                    MDL.type.D(i);
                }else if(randomNum == 4){
                    MDL.type.E(i);
                }else if(randomNum == 5){
                    MDL.type.F(i);
                }else if(randomNum == 6){
                    MDL.type.G(i);
                }
                console.log(randomNum)
            }

            if(MDL.setDom.dtype.length > 0){
                MDL.type.eventD(MDL.setDom.dtype);
            }
            if(MDL.setDom.ctype.length > 0){
                MDL.type.eventC(MDL.setDom.ctype);
            }
            if(MDL.setDom.btype.length > 0){
                MDL.type.eventB(MDL.setDom.btype);
            }
            if(MDL.setDom.atype.length > 0){
                MDL.type.eventA(MDL.setDom.atype);
            }
            if(MDL.setDom.etype.length > 0){
                MDL.type.eventE(MDL.setDom.etype);
            }
            if(MDL.setDom.ftype.length > 0){
                MDL.type.eventF(MDL.setDom.ftype);
            }
            if(MDL.setDom.gtype.length > 0){
                MDL.type.eventG(MDL.setDom.gtype);
            }
        });
    };
    this.type = function () {
        MDL.type.A = function (i) {
            MDL.setDom.atype.push(i);
            var AdImg = MDL.setDom.AdBanner.eq(i).find('a');
            var AdBox = MDL.setDom.AdBanner.eq(i).find('.banner_box');
            AdBox.wrap('<div></div>');
            AdBox.parent('div').attr('id', 'MCI_KOREA_ADBANNERPLURAL_'+i);
            AdImg.wrap('<div class=\"mci-bannerList\"></div>');
            var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_'+i);
            var bannerPluralList = bannerPlural.find('.mci-bannerList');
            var bannerHtml = bannerPluralList.eq(0).html();
            bannerPlural.find('.banner_box').append('<div class=\"mci-bannerList\">' + bannerHtml + '</div>');

            bannerPluralList = bannerPlural.find('.mci-bannerList');
            for(var j=0;j<bannerPluralList.length; j++){
                bannerPluralList.eq(j).css({'z-index':MDL.MaxIndex - (2 * j)});
            }
            var bannerWidth = bannerPluralList.eq(0).width();
            var bannerHeight = bannerPluralList.eq(0).height();

            bannerPlural.find('.banner_box').css({'position':'relative','width':bannerWidth + 'px','height':bannerHeight + 'px'});
            bannerPluralList.css({'position':'absolute','top':'0','left':'0','width':'100%'});
        };
        MDL.type.eventA = function(arr){
            var pluralNum = [];
            for (var i = 0; i < arr.length; i++) {
                pluralNum.push(0);
            }
            MDL.type.eventA.Rolling = function () {
                for (var i = 0; i < arr.length; i++) {
                    var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_' + arr[i]);
                    var pluralBannerList = bannerPlural.find('.mci-bannerList');
                    var pluralListLength = pluralBannerList.length - 1;
                    pluralBannerList.eq(pluralNum[i]).fadeOut(1000);
                    pluralNum[i] ++;
                    if (pluralNum[i] == pluralListLength) {
                        pluralBannerList.delay(1000).fadeIn(0);
                        pluralNum[i] = 0;
                    }
                }
            };
            setInterval(function () {
                MDL.type.eventA.Rolling();
            }, 4000);
        };
        MDL.type.B = function (i) {
            MDL.setDom.btype.push(i);
            var AdImg = MDL.setDom.AdBanner.eq(i).find('a');
            var AdBox = MDL.setDom.AdBanner.eq(i).find('.banner_box');
            AdBox.wrap('<div></div>');
            AdBox.parent('div').attr('id', 'MCI_KOREA_ADBANNERPLURAL_'+i);
            AdImg.wrap('<div class=\"mci-bannerList\"></div>');
            var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_'+i);
            var bannerPluralList = bannerPlural.find('.mci-bannerList');
            var bannerHtml = bannerPluralList.eq(0).html();
            bannerPlural.find('.banner_box').append('<div class=\"mci-bannerList\">' + bannerHtml + '</div>');

            bannerPluralList = bannerPlural.find('.mci-bannerList');
            var bannerPluralLength = Number(bannerPluralList.length);
            for(var j=0; j<bannerPluralLength; j++){
                bannerPluralList.eq(j).css({'z-index':MDL.MaxIndex - (2 * j)});
            }
            var bannerWidth = bannerPluralList.eq(0).width();
            var bannerHeight = bannerPluralList.eq(0).height();

            bannerPlural.css({'position':'relative','width':bannerWidth + 'px','height':bannerHeight + 'px','overflow':'hidden'});
            bannerPlural.find('.banner_box').css({'position':'absolute','top':'0','left':'0','width':(bannerWidth * bannerPluralLength) + 'px','height':bannerHeight + 'px'});
            bannerPluralList.css({'float':'left','width':bannerWidth + 'px'});
        };
        MDL.type.eventB = function(arr){
            var pluralNum = [];
            for (var i = 0; i < arr.length; i++) {
                pluralNum.push(0);
            }
            MDL.type.eventB.Rolling = function () {
                for (var i = 0; i < arr.length; i++) {
                    var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_' + arr[i]);
                    var pluralBannerList = bannerPlural.find('.mci-bannerList');
                    var pluralListLength = pluralBannerList.length - 1;
                    var pluralWidth = pluralBannerList.eq(0).width();
                    pluralNum[i] -= pluralWidth;
                    bannerPlural.find('.banner_box').stop().animate({'left': pluralNum[i] + 'px'},700);

                    if(pluralNum[i] == -pluralWidth * pluralListLength){
                        bannerPlural.find('.banner_box').delay(700).animate({'left':'0px'}, 0);
                        pluralNum[i] = 0;
                    }
                }
            };
            setInterval(function () {
                MDL.type.eventB.Rolling();
            }, 4000);
        };
        MDL.type.C = function (i) {
            MDL.setDom.ctype.push(i);
            var AdImg = MDL.setDom.AdBanner.eq(i).find('a');
            var AdBox = MDL.setDom.AdBanner.eq(i).find('.banner_box');
            AdBox.wrap('<div></div>');
            AdBox.parent('div').attr('id', 'MCI_KOREA_ADBANNERPLURAL_'+i);
            AdImg.wrap('<div class=\"mci-bannerList\"></div>');
            var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_'+i);
            var bannerPluralList = bannerPlural.find('.mci-bannerList');
            var bannerHtml = bannerPluralList.eq(0).html();
            bannerPlural.find('.banner_box').append('<div class=\"mci-bannerList\">' + bannerHtml + '</div>');

            bannerPluralList = bannerPlural.find('.mci-bannerList');
            for(var j=0;j<bannerPluralList.length; j++){
                bannerPluralList.eq(j).css({'z-index':MDL.MaxIndex - (2 * j)});
            }
            var bannerWidth = bannerPluralList.eq(0).width();
            var bannerHeight = bannerPluralList.eq(0).height();

            bannerPlural.css({'position':'relative','width':bannerWidth + 'px','height':bannerHeight + 'px','overflow':'hidden'});
            bannerPlural.find('.banner_box').css({'position':'relative','width':bannerWidth + 'px','height':bannerHeight + 'px'});
            bannerPluralList.css({'position':'absolute','top':'0','left':'0','width':bannerWidth + 'px','-webkit-transform-origin': 'left center','-moz-transform-origin': 'left center','-ms-transform-origin': 'left center','-o-transform-origin': 'left center','transform-origin': 'left center'});
        };
        MDL.type.eventC = function(arr){
            var pluralNum = [];
            for (var i = 0; i < arr.length; i++) {
                pluralNum.push(0);
            }
            MDL.type.eventC.Rolling = function () {
                for (var i = 0; i < arr.length; i++) {
                    var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_' + arr[i]);
                    var pluralBannerList = bannerPlural.find('.mci-bannerList');
                    var pluralListLength = pluralBannerList.length - 1;
                    pluralBannerList.eq(pluralNum[i]).css({
                        '-webkit-transform': 'rotateY(-180deg)',
                        '-moz-transform': 'rotateY(-180deg)',
                        '-ms-transform': 'rotateY(-180deg)',
                        '-o-transform': 'rotateY(-180deg)',
                        'transform': 'rotateY(-180deg)',
                        '-webkit-transition': '3s',
                        '-moz-transition': '3s',
                        '-ms-transition': '3s',
                        '-o-transition': '3s',
                        'transition': '3s'
                    });
                    pluralNum[i] ++;
                    if (pluralNum[i] == pluralListLength) {
                        MDL.type.eventC.RollingTime(i);
                        pluralNum[i] = 0;
                    }
                }
            };

            MDL.type.eventC.RollingTime = function (i) {
                setTimeout(function () {
                    var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_' + arr[i]);
                    var pluralBannerList = bannerPlural.find('.mci-bannerList');
                    pluralBannerList.css({
                        '-webkit-transform': 'rotateY(0)',
                        '-moz-transform': 'rotateY(0)',
                        '-ms-transform': 'rotateY(0)',
                        '-o-transform': 'rotateY(0)',
                        'transform': 'rotateY(0)',
                        '-webkit-transition': '0s',
                        '-moz-transition': '0s',
                        '-ms-transition': '0s',
                        '-o-transition': '0s',
                        'transition': '0s'
                    });
                }, 3500)

            };
            setInterval(function () {
                MDL.type.eventC.Rolling();
            }, 4000);
        };
        MDL.type.D = function (i) {
            MDL.setDom.dtype.push(i);
            var AdImg = MDL.setDom.AdBanner.eq(i).find('a');
            var AdBox = MDL.setDom.AdBanner.eq(i).find('.banner_box');
            AdBox.wrap('<div></div>');
            AdBox.parent('div').attr('id', 'MCI_KOREA_ADBANNERPLURAL_'+i);
            AdImg.wrap('<div class=\"mci-bannerList\"></div>');
            var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_'+i);
            var bannerPluralList = bannerPlural.find('.mci-bannerList');
            var bannerHtml = bannerPluralList.eq(0).html();
            bannerPlural.find('.banner_box').append('<div class=\"mci-bannerList\">' + bannerHtml + '</div>');

            bannerPluralList = bannerPlural.find('.mci-bannerList');
            for(var j=0;j<bannerPluralList.length; j++){
                bannerPluralList.eq(j).css({'z-index':MDL.MaxIndex + (2 * j)});
            }
            var bannerWidth = bannerPluralList.eq(0).width();
            var bannerHeight = bannerPluralList.eq(0).height();

            bannerPlural.css({'position':'relative','width':bannerWidth + 'px','height':bannerHeight + 'px','overflow':'hidden'});
            bannerPlural.find('.banner_box').css({'position':'relative','width':bannerWidth + 'px','height':bannerHeight + 'px'});
            bannerPluralList.css({'position':'absolute','top':'0','left':'0','width':'100%','height':'100%','-webkit-transform': 'rotate(0deg) scale(0)','-moz-transform': 'rotate(0deg) scale(0)','-ms-transform': 'rotate(0deg) scale(0)','-o-transform': 'rotate(0deg) scale(0)','transform': 'rotate(0deg) scale(0)'});
            bannerPluralList.eq(0).css({'-webkit-transform': 'scale(1)','-moz-transform': 'scale(1)','-ms-transform': 'scale(1)','-o-transform': 'scale(1)','transform': 'scale(1)'});
        };
        MDL.type.eventD = function(arr){
            var pluralNum = [];
            for (var i = 0; i < arr.length; i++) {
                pluralNum.push(1);
            }
            MDL.type.eventD.Rolling = function () {
                for (var i = 0; i < arr.length; i++) {
                    var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_' + arr[i]);
                    var pluralBannerList = bannerPlural.find('.mci-bannerList');
                    var pluralListLength = pluralBannerList.length;
                    pluralBannerList.eq(pluralNum[i]).css({
                        '-webkit-transform': 'rotate(360deg) scale(1)',
                        '-moz-transform': 'rotate(360deg) scale(1)',
                        '-ms-transform': 'rotate(360deg) scale(1)',
                        '-o-transform': 'rotate(360deg) scale(1)',
                        'transform': 'rotate(360deg) scale(1)',
                        '-webkit-transition': '.4s',
                        '-moz-transition': '.4s',
                        '-ms-transition': '.4s',
                        '-o-transition': '.4s',
                        'transition': '.4s'
                    });
                    pluralNum[i] ++;
                    if (pluralNum[i] == pluralListLength) {
                        MDL.type.eventD.RollingTime(i);
                        pluralNum[i] = 1;
                    }
                }
            };
            MDL.type.eventD.RollingTime = function (i) {
                setTimeout(function () {
                    var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_' + arr[i]);
                    var pluralBannerList = bannerPlural.find('.mci-bannerList');
                    pluralBannerList.eq(0).siblings().css({
                        '-webkit-transform': 'rotate(0deg) scale(0)',
                        '-moz-transform': 'rotate(0deg) scale(0)',
                        '-ms-transform': 'rotate(0deg) scale(0)',
                        '-o-transform': 'rotate(0deg) scale(0)',
                        'transform': 'rotate(0deg) scale(0)',
                        '-webkit-transition': '0s',
                        '-moz-transition': '0s',
                        '-ms-transition': '0s',
                        '-o-transition': '0s',
                        'transition': '0s'
                    });
                }, 1000)
            };

            setInterval(function () {
                MDL.type.eventD.Rolling();
            }, 4000);
        };
        MDL.type.E = function (i) {
            MDL.setDom.etype.push(i);
            var AdImg = MDL.setDom.AdBanner.eq(i).find('a');
            var AdBox = MDL.setDom.AdBanner.eq(i).find('.banner_box');
            AdBox.wrap('<div></div>');
            AdBox.parent('div').attr('id', 'MCI_KOREA_ADBANNERPLURAL_'+i);
            AdImg.wrap('<div class=\"mci-bannerList\"></div>');
            AdImg.append('<div id=\"mci-bannerPlural-slice-dom\"></div>');
            var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_'+i);
            var bannerPluralList = bannerPlural.find('.mci-bannerList');
            var bannerHtml = bannerPluralList.eq(0).html();
            bannerPlural.find('.banner_box').append('<div class=\"mci-bannerList\">' + bannerHtml + '</div>');

            bannerPluralList = bannerPlural.find('.mci-bannerList');
            var bannerWidth = bannerPluralList.eq(0).width();
            var bannerHeight = bannerPluralList.eq(0).height();
            MDL.type.E.bannerSlice = 10;
            var bannerSliceWidth = Number(bannerWidth / MDL.type.E.bannerSlice);
            for (var z = 0; z <(bannerPluralList.length +1) ; z++) {
                var sliceOrigin = bannerPluralList.eq(z).find('#mci-bannerPlural-slice-dom');
                var bannerSlicePositionLeft = 0;
                var bannerSlicePositionTop = 0;
                var bannerSlicePositionLeft2 = 0;
                var bannerSlicePositionTop2 = 0;
                if(z == bannerPluralList.length){
                    bannerPluralList.eq(z).find('#mci-bannerPlural-slice-dom').remove();
                    bannerPluralList.eq(z).append('<img>');
                    bannerPluralList.eq(z).find('img').attr('src',bannerPluralList.eq(0).find('img').attr('src'));
                }else{
                    for(var j = 0; j < (MDL.type.E.bannerSlice*MDL.type.E.bannerSlice); j++){
                        var sliceDom = sliceOrigin.clone(true);
                        sliceDom.removeAttr('id').addClass('mci-bannerPlural-slice');
                        sliceDom.css({'background':'url('+bannerPluralList.eq(z).find('img').attr('src')+')','background-position':bannerSlicePositionLeft+'px '+bannerSlicePositionTop+'px','background-size': bannerWidth+'px '+ bannerHeight +'px','top':bannerSlicePositionTop2+'px','left':bannerSlicePositionLeft2+'px'});
                        bannerSlicePositionLeft -= bannerSliceWidth;
                        bannerSlicePositionLeft2 += bannerSliceWidth;
                        for(var k = 0; k < (MDL.type.E.bannerSlice-1); k++){
                            if(j== (MDL.type.E.bannerSlice-1 + (MDL.type.E.bannerSlice * k))){
                                bannerSlicePositionTop -= bannerSliceWidth;
                                bannerSlicePositionTop2 += bannerSliceWidth;
                                bannerSlicePositionLeft2 = 0;
                            }
                        }
                        sliceOrigin.before(sliceDom);
                    }
                }
                bannerPluralList.eq(z).css({'z-index':MDL.MaxIndex - (2 * z)});
            };

            bannerPlural.css({'position':'relative','width':bannerWidth + 'px','height':bannerHeight + 'px','overflow':'hidden'});
            bannerPlural.find('.banner_box').css({'position':'relative','width':bannerWidth + 'px','height':bannerHeight + 'px'});
            bannerPluralList.css({'position':'absolute','top':'0','left':'0','width':'100%','height':'100%'});
            bannerPluralList.find('.mci-bannerPlural-slice').css({'position':'absolute','width':bannerSliceWidth+'px','height':bannerSliceWidth+'px','transform': 'translate3d(0,0,0)'});
            bannerPluralList.find('img').css({'display':'none'});
            bannerPluralList.find('#mci-bannerPlural-slice-dom').css({'display':'none'});
        };
        MDL.type.eventE = function(arr){
            var pluralNum = [];
            for (var i = 0; i < arr.length; i++) {
                pluralNum.push(0);
            }
            MDL.type.eventE.Rolling = function () {
                for(var z=0; z < arr.length; z++) {
                    var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_' + arr[z]);
                    var pluralBannerList = bannerPlural.find('.mci-bannerList');
                    var eachSlice = pluralBannerList.eq(pluralNum[z]).find('.mci-bannerPlural-slice');
                    var pluralListLength = pluralBannerList.length -1;
                    if (pluralNum[z] == 0) {
                        pluralBannerList.find('.mci-bannerPlural-slice').fadeIn(0);
                    }

                    for (var i = 0; i < (MDL.type.E.bannerSlice * 2); i++) {
                        if (i > (MDL.type.E.bannerSlice - 1)) {
                            MDL.type.eventE.RollingTime(i, MDL.type.E.bannerSlice , eachSlice);
                        } else {
                            MDL.type.eventE.RollingTime(i, i + 1, eachSlice);
                        }
                    }

                    pluralNum[z] ++;
                    if (pluralNum[z] == pluralListLength) {
                        pluralNum[z] = 0;
                    }
                }
            };
            MDL.type.eventE.RollingTime = function (num1, num2, eachSlice) {
                var forNum = num1;
                var fade = 150;
                var sec = 50;
                for (var i = 0; i < num2; i++) {
                    setTimeout(function () {
                        eachSlice.eq(forNum).fadeOut(fade);
                        forNum += (MDL.type.E.bannerSlice - 1);
                    }, sec * forNum)
                }
            };

            setInterval(function () {
                MDL.type.eventE.Rolling();
            }, 4000);
        };
        MDL.type.F = function (i) {
            MDL.setDom.ftype.push(i);
            var AdImg = MDL.setDom.AdBanner.eq(i).find('a');
            var AdBox = MDL.setDom.AdBanner.eq(i).find('.banner_box');
            AdBox.wrap('<div></div>');
            AdBox.parent('div').attr('id', 'MCI_KOREA_ADBANNERPLURAL_'+i);
            AdImg.wrap('<div class=\"mci-bannerList\"></div>');
            AdImg.append('<div id=\"mci-bannerPlural-slice-dom\"></div>');
            var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_'+i);
            var bannerPluralList = bannerPlural.find('.mci-bannerList');
            var bannerHtml = bannerPluralList.eq(0).html();
            bannerPlural.find('.banner_box').append('<div class=\"mci-bannerList\">' + bannerHtml + '</div>');

            bannerPluralList = bannerPlural.find('.mci-bannerList');
            var bannerWidth = bannerPluralList.eq(0).width();
            var bannerHeight = bannerPluralList.eq(0).height();
            MDL.type.F.bannerSlice = 15;
            var bannerSliceWidth = Number(bannerWidth / MDL.type.F.bannerSlice);
            for (var z = 0; z <(bannerPluralList.length +1) ; z++) {
                var sliceOrigin = bannerPluralList.eq(z).find('#mci-bannerPlural-slice-dom');
                var bannerSlicePositionLeft = 0;
                var bannerSlicePositionTop = 0;
                var bannerSlicePositionLeft2 = 0;
                var bannerSlicePositionTop2 = 0;
                if(z == bannerPluralList.length){
                    bannerPluralList.eq(z).find('#mci-bannerPlural-slice-dom').remove();
                    bannerPluralList.eq(z).append('<img>');
                    bannerPluralList.eq(z).find('img').attr('src',bannerPluralList.eq(0).find('img').attr('src'));
                }else{
                    for(var j = 0; j < (MDL.type.F.bannerSlice*MDL.type.F.bannerSlice); j++){
                        var sliceDom = sliceOrigin.clone(true);
                        sliceDom.removeAttr('id').addClass('mci-bannerPlural-slice on');
                        sliceDom.css({'background':'url('+bannerPluralList.eq(z).find('img').attr('src')+')','background-position':bannerSlicePositionLeft+'px '+bannerSlicePositionTop+'px','background-size': bannerWidth+'px '+ bannerHeight +'px','top':bannerSlicePositionTop2+'px','left':bannerSlicePositionLeft2+'px'});
                        bannerSlicePositionLeft -= bannerSliceWidth;
                        bannerSlicePositionLeft2 += bannerSliceWidth;
                        for(var k = 0; k < (MDL.type.F.bannerSlice-1); k++){
                            if(j== (MDL.type.F.bannerSlice-1 + (MDL.type.F.bannerSlice * k))){
                                bannerSlicePositionTop -= bannerSliceWidth;
                                bannerSlicePositionTop2 += bannerSliceWidth;
                                bannerSlicePositionLeft2 = 0;
                            }
                        }
                        sliceOrigin.before(sliceDom);
                    }
                }
                bannerPluralList.eq(z).css({'z-index':MDL.MaxIndex - (2 * z)});
            };

            bannerPlural.css({'position':'relative','width':bannerWidth + 'px','height':bannerHeight + 'px','overflow':'hidden'});
            bannerPlural.find('.banner_box').css({'position':'relative','width':bannerWidth + 'px','height':bannerHeight + 'px'});
            bannerPluralList.css({'position':'absolute','top':'0','left':'0','width':'100%','height':'100%'});
            bannerPluralList.find('.mci-bannerPlural-slice').css({'position':'absolute','width':bannerSliceWidth+'px','height':bannerSliceWidth+'px'});
            bannerPluralList.find('img').css({'display':'none'});
            bannerPluralList.find('#mci-bannerPlural-slice-dom').css({'display':'none'});
        };
        MDL.type.eventF = function(arr){
            var pluralNum = [];
            for (var i = 0; i < arr.length; i++) {
                pluralNum.push(0);
            }
            var sec = 50;

            MDL.type.eventF.Rolling = function (num) {
                var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_' + arr[num]);
                var pluralBannerList = bannerPlural.find('.mci-bannerList');
                var pluralListLength = pluralBannerList.length -1;
                var rollingNum = 0;
                var rollingArr = [];
                for(var i=0;i<MDL.type.F.bannerSlice;i++) {
                    setTimeout(function () {
                        rollingArr = new Array(MDL.type.F.bannerSlice);
                        var count = 0;
                        var overl = true;
                        while (count < MDL.type.F.bannerSlice) {
                            var number = 0;
                            number = parseInt(Math.random() * ((MDL.type.F.bannerSlice * MDL.type.F.bannerSlice) - (MDL.type.F.bannerSlice * rollingNum)));
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
                        var eachSlice = pluralBannerList.eq(pluralNum[num]).find('.on');
                        for (var i = 0; i < rollingArr.length; i++) {
                            eachSlice.eq(rollingArr[i]).fadeOut(100).removeClass('on');
                        }
                        if (rollingNum == MDL.type.F.bannerSlice) {
                            rollingNum = 0;
                            pluralNum[num]++;
                            if (pluralNum[num] == pluralListLength) {
                                pluralBannerList.find('.mci-bannerPlural-slice').fadeIn(0).addClass('on');
                                pluralNum[num] = 0;
                            }
                        }
                    }, sec * i)
                }
            };

            setInterval(function () {
                for(var i=0; i<arr.length;i++) {
                    MDL.type.eventF.Rolling(i);
                }
            }, 4000);
        };
        MDL.type.G = function (i) {
            MDL.setDom.gtype.push(i);
            MDL.type.G.listNum = 3;
            var AdImg = MDL.setDom.AdBanner.eq(i).find('img');
            var AdLink = MDL.setDom.AdBanner.eq(i).find('a');
            var arr = new Array();
            for(var j=0; j<AdImg.length; j++){
                arr[j] = {
                    src : AdImg.eq(j).attr('src'),
                    href : AdLink.attr('href')
                }

            }
            MDL.eventGArr[i] = arr;
            AdLink.eq(0).siblings().remove();
            var AdImgHeight = parseInt(AdImg.height());
            var listHeight= AdImgHeight / MDL.type.G.listNum;
            AdImg.wrap('<div></div>');
            AdImg.parent('div').attr('id', 'MCI_KOREA_ADBANNERPLURAL_'+i);
            var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerPlural-box";
            markup.innerHTML = "<div id=\"mci-bannerPlural-list-dom\"></div>";
            bannerPlural.find('img').before(markup);

            var $origin = bannerPlural.find('#mci-bannerPlural-list-dom');
            for (var j = 0; j < MDL.type.G.listNum ; j++) {
                var $dom = $origin.clone(true);
                $dom.removeAttr('id').addClass('mci-bannerPlural-list mci-bannerPlural-list'+j);
                $dom.css({'z-index':50 + (2 * j)});
                if(j % 2 == 1){
                    $dom.css({'top':(listHeight * j) -10 + 'px','right':'-5%','height': listHeight + 30 + 'px','transform':'rotate(-8deg)'});
                }else{
                    $dom.css({'top':(listHeight * j) -15 + 'px','left':'0','height': listHeight + 35 + 'px'});
                }
                $origin.before($dom);
            };
            bannerPlural.css({'position':'relative','width':'100%', 'height':'100%','overflow':'hidden'});
            bannerPlural.find('.mci-bannerPlural-list').css({'position':'absolute','background':'orange','box-shadow':'rgba(0, 0, 0, 0.3) 1px 1px 10px'});
            bannerPlural.find('#mci-bannerPlural-list-dom').css({'display':'none'});
        };
        MDL.type.eventG = function(arr){
            var pluralNum = [];
            for (var i = 0; i < arr.length; i++) {
                pluralNum.push(0);
            }
            var sec = 300;

            MDL.type.eventG.Rolling = function (bannerPlural) {
                var num = 0;
                for (var j = 0; j< MDL.type.G.listNum; j++) {
                    setTimeout(function () {
                        bannerPlural.find('.mci-bannerPlural-list').eq(num).animate({'width':'110%'},sec);
                        num++;
                    }, sec * j)
                }
            };
            MDL.type.eventG.RollingRe = function (bannerPlural) {
                var num = MDL.type.G.listNum-1;
                for (var j = 0; j < MDL.type.G.listNum; j++) {
                    setTimeout(function () {
                        bannerPlural.find('.mci-bannerPlural-list').eq(num).animate({'width':'0'},sec);
                        num--;
                    }, sec * (MDL.type.G.listNum - (j+1)))
                }
            };
            MDL.type.eventG.RollingTime = function(){
                for(var i=0;i<arr.length;i++) {
                    var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_' + arr[i]);
                    MDL.type.eventG.Rolling(bannerPlural);
                }
                setTimeout(function () {
                    for(var i=0; i<arr.length; i++) {
                        pluralNum[i]++;
                        if (pluralNum[i] == MDL.eventGArr[arr[i]].length) {
                            pluralNum[i] = 0;
                        }
                        var bannerPlural = $MCI('#MCI_KOREA_ADBANNERPLURAL_' + arr[i]);
                        MDL.type.eventG.RollingRe(bannerPlural);
                        var link = MDL.eventGArr[arr[i]];
                        var AdImg = MDL.setDom.AdBanner.eq(arr[i]).find('img');
                        AdImg.attr('src',link[pluralNum[i]].src);
                    }
                },MDL.type.G.listNum * sec + 100);
            };

            setInterval(function () {
                MDL.type.eventG.RollingTime();
            },(MDL.type.G.listNum * sec) + 3000);
        };
    };
    return this.Init();
};
new MCI_KOREA_ADBANNERPLURAL();
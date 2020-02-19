var MCI_KOREA_ADBANNERSINGLE = function() {
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
                    console.log(MDL)
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js"];
        loadScripts(scripts);
    };
    this.setDom = function () {
        MDL.setDom.AdBanner =$MCI('.appladBanner');
        MDL.setDom.atype = [];
        MDL.setDom.btype = [];
        MDL.setDom.ctype = [];
        MDL.setDom.dtype = [];
        MDL.setDom.etype = [];
        MDL.setDom.ftype = [];
        MDL.setDom.gtype = [];
        MDL.setDom.htype = [];
        MDL.setDom.widthHalf = [];
        $MCI(document).ready(function() {
            for(var i=0; i<MDL.setDom.AdBanner.length; i++){
                var randomNum = parseInt(Math.random() * 8);
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
                }else if(randomNum == 7){
                    MDL.type.H(i);
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
            if(MDL.setDom.htype.length > 0){
                MDL.type.eventH(MDL.setDom.htype);
            }
        });
    };
    this.type = function () {
        MDL.type.A = function (i) {
            MDL.setDom.atype.push(i);
            var AdImg = MDL.setDom.AdBanner.eq(i).find('img');
            AdImg.wrap('<div></div>');
            AdImg.parent('div').attr('id', 'MCI_KOREA_ADBANNERSINGLE_'+i);
            var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerSingle-img";
            markup.innerHTML = "<div class=\"mci-line mci-line-1\"></div><div class=\"mci-line mci-line-2\"></div>";
            bannerSingle.find('img').before(markup);

            bannerSingle.css({'position':'relative'});
            bannerSingle.find('#mci-bannerSingle-img').css({'position':'absolute','top':'0','left':'0','width':'100%','height':'100%','overflow':'hidden'});
            bannerSingle.find('.mci-line').css({'display':'none','position':'absolute','background':'#ea2016'});
            bannerSingle.find('.mci-line-1').css({'top':'0','left':'0','width':'60px','height':'5px'});
            bannerSingle.find('.mci-line-2').css({'bottom':'0','right':'0','width':'60px','height':'5px'});

        };
        MDL.type.eventA = function(arr){
            var bannerTop = [];
            var bannerLeft = [];
            setTimeout(function(){
                for(var i=0;i<arr.length; i++) {
                    var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_' + (arr[i]));
                    bannerTop[i] = Number(bannerSingle.height()) - 5;
                    bannerLeft[i] = Number(bannerSingle.width()) - 5;
                    setInterval(MDL.type.eventA.MCIbannerLineLoop);
                }
            }, 1000);


            MDL.type.eventA.MCIbannerLineLoop = function() {
                for(var i=0;i<arr.length; i++) {
                    var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_' + arr[i]);
                    bannerSingle.find('.mci-line').css({'display': 'block'});

                    bannerSingle.find('.mci-line-1')
                        .animate({'width': '60px','height': '5px','top': '0','left': '0'}, 300)
                        .animate({'left': bannerLeft[i] + 'px'}, 500)
                        .animate({'width': '5px', 'height': '60px'}, 300)
                        .animate({'top': bannerTop[i] + 'px'}, 500)
                        .animate({'width': '60px', 'height': '5px'}, 100)
                        .animate({'left': '0'}, 500)
                        .animate({'width': '5px', 'height': '60px'}, 300)
                        .animate({'top': '0'}, 300)
                        .animate({'height': '5px'}, 200);

                    bannerSingle.find('.mci-line-2')
                        .animate({'width': '60px','height': '5px','bottom': '0','right': '0'}, 300)
                        .animate({'right': bannerLeft[i] + 'px'}, 500)
                        .animate({'width': '5px', 'height': '60px'}, 300)
                        .animate({'bottom': bannerTop[i] + 'px'}, 500)
                        .animate({'width': '60px', 'height': '5px'}, 100)
                        .animate({'right': '0'}, 500)
                        .animate({'width': '5px', 'height': '60px'}, 300)
                        .animate({'bottom': '0'}, 300)
                        .animate({'height': '5px'}, 200);
                }
            };
        }
        MDL.type.B = function (i) {
            MDL.setDom.btype.push(i);
            var AdImg = MDL.setDom.AdBanner.eq(i).find('img');
            AdImg.wrap('<div></div>');
            AdImg.parent('div').attr('id', 'MCI_KOREA_ADBANNERSINGLE_'+i);
            var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerSingle-img";
            markup.innerHTML = "<div class=\"mci-line\"><div class=\"mci-line-1\"></div><div class=\"mci-line-2\"></div></div>";
            bannerSingle.find('img').before(markup);

            bannerSingle.css({'position':'relative'});
            bannerSingle.find('#mci-bannerSingle-img').css({'position':'absolute','top':'0','left':'0','width':'100%','height':'100%','overflow':'hidden'});
            bannerSingle.find('.mci-line').css({'position': 'absolute','top': '0','left': '-150%','width': '100%','height': '110%','z-index': '10','opacity': '0.5'});
            bannerSingle.find('.mci-line-1').css({'float': 'left','width': '3%','height': '110%','background-color': '#fff','-webkit-transform': 'skewX(-20deg)','-moz-transform': 'skewX(-20deg)','-ms-transform': 'skewX(-20deg)','-o-transform': 'skewX(-20deg)','transform': 'skewX(-20deg)'});
            bannerSingle.find('.mci-line-2').css({'float': 'left','width': '40%','height': '110%',    'margin':'0 0 0 20px','background-color': '#fff','-webkit-transform': 'skewX(-20deg)','-moz-transform': 'skewX(-20deg)','-ms-transform': 'skewX(-20deg)','-o-transform': 'skewX(-20deg)','transform': 'skewX(-20deg)'});
        };
        MDL.type.eventB = function(arr){
            MDL.type.eventB.MCIbannerShineLoop = function() {
                for(var i=0; i<arr.length; i++) {
                    var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_' + arr[i]);
                    bannerSingle.find('.mci-line')
                        .animate({'left': '150%'}, 1100)
                        .animate({'left': '-150%'}, 0)
                        .animate({'left': '150%'}, 1100)
                        .animate({'left': '-150%'}, 0)
                        .delay(800).animate({'left': '-150%'}, 0);
                }
            };
            setInterval(MDL.type.eventB.MCIbannerShineLoop);
        };
        MDL.type.C = function (i) {
            MDL.setDom.ctype.push(i);
            var AdImg = MDL.setDom.AdBanner.eq(i).find('img');
            AdImg.wrap('<div></div>');
            AdImg.parent('div').attr('id', 'MCI_KOREA_ADBANNERSINGLE_'+i);
            var bannerWidth = AdImg.width();
            var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerSingle-img";
            markup.innerHTML = "<div class=\"mci-bannerSingle-bg\"></div><div class=\"mci-bannerSingle-box\"><img src=\"\"></div>";
            bannerSingle.find('img').before(markup);

            bannerSingle.find('#mci-bannerSingle-img img').attr('src', AdImg.attr('src')).css({'width':(bannerWidth-20)+'px'});

            var bannerWidth = parseInt(bannerSingle.find('#mci-bannerSingle-img img').width());
            var bannerHeight = parseInt(bannerSingle.find('#mci-bannerSingle-img img').height());
            bannerSingle.css({'width':bannerWidth+'px','height':bannerHeight+'px','margin-bottom':'30px'});
            bannerSingle.find('#mci-bannerSingle-img').css({'position':'relative','width':(bannerWidth + 20)+'px','height':(bannerHeight + 20)+'px'});
            bannerSingle.find('.mci-bannerSingle-bg').css({'position':'absolute','top':'50%','left':'50%','margin':'-'+(bannerHeight/2)+'px 0 0 -'+(bannerWidth/2)+'px','width':(bannerWidth) + 'px','height':(bannerHeight) + 'px','background':'#ff016b'});
            bannerSingle.find('.mci-bannerSingle-box').css({'position':'absolute','top':'10px','left':'10px'});
            AdImg.css({'opacity':'0'});
        };
        MDL.type.eventC = function(arr){
            MDL.type.eventC.singleBgMove = function () {
                var heightWrap = parseInt($MCI('#MCI_KOREA_ADBANNERSINGLE_'+arr[0]).height());
                if(heightWrap == 0){
                    for(var i=0; i<arr.length; i++){
                        var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_'+arr[i]);
                        var AdImg = bannerSingle.find('img');
                        var bannerWidth = parseInt(AdImg.eq(0).width());
                        var bannerHeight = parseInt(AdImg.eq(0).height());

                        bannerSingle.css({'width':bannerWidth+'px','height':bannerHeight+'px'});
                        bannerSingle.find('#mci-bannerSingle-img').css({'width':bannerWidth+'px','height':bannerHeight+'px'});
                        bannerSingle.find('.mci-bannerSingle-bg').css({'margin':'-'+(bannerHeight/2 - 7.5)+'px 0 0 -'+(bannerWidth/2 - 7.5)+'px','width':(bannerWidth-15) + 'px','height':(bannerHeight-15) + 'px'});
                        bannerSingle.find('#mci-bannerSingle-img img').css({'width':(bannerWidth-20)+'px'});
                    }
                }else if(heightWrap > 0){
                    for(var i=0; i<arr.length; i++){
                        var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_'+arr[i]);
                        var bannerWidth = parseInt(bannerSingle.width());
                        var bannerHeight = parseInt(bannerSingle.height() + 5);

                        bannerSingle.find('.mci-bannerSingle-bg')
                            .animate({'width':(bannerWidth+20) + 'px','height':(bannerHeight+20) + 'px','margin':'-' +(bannerHeight/2 + 10) +'px 0 0 -' +(bannerWidth/2 + 10) +'px'},200)
                            .animate({'width':bannerWidth + 'px','height':bannerHeight + 'px','margin':'-' +(bannerHeight/2) +'px 0 0 -' +(bannerWidth/2) +'px'},200)
                    };
                }
            };

            MDL.type.eventC.singleBgMove();
            setInterval(function(){
                MDL.type.eventC.singleBgMove();
            }, 400);
        }
        MDL.type.D = function (i) {
            MDL.setDom.dtype.push(i);
            MDL.type.D.bannerSlice = 10;
            var AdImg = MDL.setDom.AdBanner.eq(i).find('img');
            AdImg.wrap('<div></div>');
            AdImg.parent('div').attr('id', 'MCI_KOREA_ADBANNERSINGLE_'+i);
            var AdImgSrc = AdImg.attr('src');
            var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerSingle-img";
            markup.innerHTML = "<div class=\"mci-bannerSingle-box\"><div id=\"mci-bannerSingle-slice-dom\"><div class=\"mci-face mci-front\"></div><div class=\"mci-face mci-back\"><a href=\"#\"></a></div></div></div>";
            bannerSingle.find('img').before(markup);

            bannerSingle.css({'position':'relative'});
            bannerSingle.find('#mci-bannerSingle-img').css({'position':'absolute','top':'0','left':'0','width':'100%','height':'100%','overflow':'hidden'});
            bannerSingle.find('.mci-bannerSingle-box').css({'width':'100%', 'height':'100%', 'position': 'relative'});
            bannerSingle.find('.mci-face').css({'position': 'absolute', 'top': '0', 'left': '0',  'backface-visibility': 'hidden'});
            bannerSingle.find('.mci-back').css({'-webkit-transform': 'rotateY(180deg)','-moz-transform': 'rotateY(180deg)','-ms-transform': 'rotateY(180deg)','-o-transform': 'rotateY(180deg)','transform': 'rotateY(180deg)'});
            bannerSingle.find('.mci-back a').css({'display':'block','width':'100%', 'height':'100%'});
            bannerSingle.css({'width':'100%', 'height':'100%'});

            var bannerWidth = bannerSingle.width();
            var bannerHeight = bannerSingle.height();
            AdImg.css({'opacity':'0'});
            var bannerSliceWidth = parseInt(bannerWidth / MDL.type.D.bannerSlice);
            var bannerSlicePosition = 0;
            var origin = bannerSingle.find('#mci-bannerSingle-slice-dom');
            bannerSingle.find('.mci-bannerSingle-slice-com').remove();
            for (var j = 0; j < MDL.type.D.bannerSlice; j++) {
                var dom = origin.clone(true);
                dom.removeAttr('id').addClass('mci-bannerSingle-slice-com');
                dom.css({'position':'relative','float':'left','width':bannerSliceWidth + 'px','height':bannerHeight + 'px','transform-style': 'preserve-3d'});
                dom.find('.mci-face').css({'width':bannerSliceWidth + 'px','height':bannerHeight + 'px','background':'url('+AdImgSrc+')','background-size': bannerWidth+'px ' + bannerHeight+'px','background-position':'-'+bannerSlicePosition+'px' + ' 0'});
                dom.find('.mci-front').css({'background':'url('+AdImgSrc+')','background-size': bannerWidth+'px '/* + bannerHeight+'px'*/,'background-position':'-'+bannerSlicePosition+'px' + ' 0'});
                dom.find('.mci-back').css({'background':'url('+AdImgSrc+')','background-size': bannerWidth+'px 100%'/* + bannerHeight+'px'*/,'background-position':'-'+bannerSlicePosition+'px' + ' 0'});
                origin.before(dom);
                bannerSlicePosition += bannerSliceWidth;
            }
        }
        MDL.type.eventD = function (arr) {
            var bannerSliceDelay = 0;
            this.blindDom = function () {
                for (var i = 0; i < arr.length; i++) {
                    for (var j = 0; j < MDL.type.D.bannerSlice; j++) {
                        $MCI('#MCI_KOREA_ADBANNERSINGLE_'+arr[i]).find('.mci-bannerSingle-slice-com').eq(j).css({
                            '-webkit-transform': 'rotateY(180deg)',
                            '-moz-transform': 'rotateY(180deg)',
                            '-ms-transform': 'rotateY(180deg)',
                            '-o-transform': 'rotateY(180deg)',
                            'transform': 'rotateY(180deg)',
                            '-webkit-transition': 'all 0.5s ease ' + bannerSliceDelay + 's',
                            '-moz-transition': 'all 0.5s ease ' + bannerSliceDelay + 's',
                            '-ms-transition': 'all 0.5s ease ' + bannerSliceDelay + 's',
                            '-o-transition': 'all 0.5s ease ' + bannerSliceDelay + 's',
                            'transition': 'all 0.5s ease ' + bannerSliceDelay + 's'
                        });
                        if (bannerSliceDelay < (0.08 * MDL.type.D.bannerSlice)) {
                            bannerSliceDelay += 0.08;
                        }
                    }
                    bannerSliceDelay = 0;
                }
            };

            this.blindDom2 = function () {
                setTimeout(function () {
                    for (var i = 0; i < arr.length; i++) {
                        for (var j = 0; j < MDL.type.D.bannerSlice; j++) {
                            $MCI('#MCI_KOREA_ADBANNERSINGLE_'+arr[i]).find('.mci-bannerSingle-slice-com').eq(j).css({
                                '-webkit-transform': 'rotateY(0deg)',
                                '-moz-transform': 'rotateY(0deg)',
                                '-ms-transform': 'rotateY(0deg)',
                                '-o-transform': 'rotateY(0deg)',
                                'transform': 'rotateY(0deg)',
                                '-webkit-transition': 'all 0.5s ease ' + bannerSliceDelay + 's',
                                '-moz-transition': 'all 0.5s ease ' + bannerSliceDelay + 's',
                                '-ms-transition': 'all 0.5s ease ' + bannerSliceDelay + 's',
                                '-o-transition': 'all 0.5s ease ' + bannerSliceDelay + 's',
                                'transition': 'all 0.5s ease ' + bannerSliceDelay + 's'
                            });
                            if (bannerSliceDelay < (0.08 * MDL.type.D.bannerSlice)) {
                                bannerSliceDelay += 0.08;
                            }
                        }
                        bannerSliceDelay = 0;
                    }
                }, 2000)
            };

            MDL.type.blindDom();
            MDL.type.blindDom2();
            setInterval(function () {
                MDL.type.blindDom();
                MDL.type.blindDom2();
            }, 4000)
        }
        MDL.type.E = function (i) {
            MDL.setDom.etype.push(i);
            var AdImg = MDL.setDom.AdBanner.eq(i).find('img');
            AdImg.wrap('<div></div>');
            AdImg.parent('div').attr('id', 'MCI_KOREA_ADBANNERSINGLE_'+i);
            var AdImgSrc = AdImg.attr('src');
            var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerSingle-img";
            markup.innerHTML = "<div class=\"mci-bannerSingle-box\"><div id=\"mci-bannerSingle-list-dom\"><img src=\"\"></div></div>";
            bannerSingle.find('img').before(markup);

            var $origin = bannerSingle.find('#mci-bannerSingle-list-dom');
            for (var j = 0; j <2 ; j++) {
                var $dom = $origin.clone(true);
                $dom.removeAttr('id').addClass('mci-bannerSingle-list');
                $dom.find('img').attr('src', AdImgSrc);
                $origin.before($dom);
            };

            bannerSingle.css({'position':'relative'});
            bannerSingle.find('#mci-bannerSingle-img').css({'position':'absolute','top':'0','left':'0','width':'100%','height':'100%','overflow':'hidden'});
            bannerSingle.find('.mci-bannerSingle-box').css({'width':'100%', 'height':'100%', 'position': 'relative'});
            bannerSingle.find('.mci-bannerSingle-list').css({'position':'absolute','top':'0','left':'0','-webkit-transform': 'rotate(0deg) scale(0)','-moz-transform': 'rotate(0deg) scale(0)','-ms-transform': 'rotate(0deg) scale(0)','-o-transform': 'rotate(0deg) scale(0)','transform': 'rotate(0deg) scale(0)'});
            bannerSingle.find('.mci-bannerSingle-list').eq(0).css({'-webkit-transform': 'scale(1)','-moz-transform': 'scale(1)','-ms-transform': 'scale(1)','-o-transform': 'scale(1)','transform': 'scale(1)'});
            bannerSingle.css({'width':'100%', 'height':'100%'});
            bannerSingle.find('#mci-bannerSingle-list-dom').css({'display':'none'});
            AdImg.css({'opacity':'0'})
        }
        MDL.type.eventE = function (arr) {
            var singleNum = [1,1,1,1];
            MDL.type.eventE.eventERolling = function () {
                for (var i = 0; i < arr.length; i++) {
                    var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_' + arr[i]);
                    var BannerList = bannerSingle.find('.mci-bannerSingle-list');
                    BannerList.eq(singleNum[i]).css({
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
                    singleNum[i] ++;
                }
            };

            MDL.type.eventE.eventERolling2 = function () {
                for (var i = 0; i < arr.length; i++) {
                    var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_'+arr[i]);
                    var BannerList = bannerSingle.find('.mci-bannerSingle-list');
                    BannerList.eq(1).css({
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
                    singleNum[i] = 1;
                }
            };

            setInterval(function(){
                MDL.type.eventE.eventERolling();
            }, 3000);


            setInterval(function(){
                MDL.type.eventE.eventERolling2();
            }, 3500);
        }
        MDL.type.F = function (i) {
            MDL.setDom.ftype.push(i);
            var AdImg = MDL.setDom.AdBanner.eq(i).find('img');
            AdImg.wrap('<div></div>');
            AdImg.parent('div').attr('id', 'MCI_KOREA_ADBANNERSINGLE_'+i);
            var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerSingle-img";
            markup.innerHTML = "<div class=\"mci-bannerSingle-bg\"></div>";
            bannerSingle.find('img').before(markup);

            bannerSingle.css({'position':'relative','width':'100%', 'height':'100%'});
            bannerSingle.find('.mci-bannerSingle-bg').css({'position':'absolute','top':'0','left':'0','width':'100%','height':'100%','opacity':'0','background':'#fff','overflow':'hidden'});
        }
        MDL.type.eventF = function (arr) {
            MDL.type.eventF.MCIbannerLightLoop = function() {
                for(var i=0; i<arr.length; i++) {
                    var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_' + arr[i]);
                    bannerSingle.find('.mci-bannerSingle-bg')
                        .animate({'opacity': '.7'}, 0)
                        .animate({'opacity': '0'}, 500)
                        .animate({'opacity': '.7'}, 0)
                        .animate({'opacity': '0'}, 500);
                }
            };
            setInterval(function(){
                MDL.type.eventF.MCIbannerLightLoop();
            }, 2500);
        }
        MDL.type.G = function (i) {
            MDL.setDom.gtype.push(i);
            MDL.type.G.listNum = 3;
            var AdImg = MDL.setDom.AdBanner.eq(i).find('img');
            var AdImgHeight = parseInt(AdImg.height());
            var listHeight= AdImgHeight / MDL.type.G.listNum;
            AdImg.wrap('<div></div>');
            AdImg.parent('div').attr('id', 'MCI_KOREA_ADBANNERSINGLE_'+i);
            var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerSingle-box";
            markup.innerHTML = "<div id=\"mci-bannerSingle-list-dom\"></div>";
            bannerSingle.find('img').before(markup);

            var $origin = bannerSingle.find('#mci-bannerSingle-list-dom');
            for (var j = 0; j < MDL.type.G.listNum ; j++) {
                var $dom = $origin.clone(true);
                $dom.removeAttr('id').addClass('mci-bannerSingle-list mci-bannerSingle-list'+j);
                $dom.css({'z-index':50 + (2 * j)});
                if(j % 2 == 1){
                    $dom.css({'top':(listHeight * j) -10 + 'px','right':'-5%','height': listHeight + 30 + 'px','transform':'rotate(-8deg)'});
                }else{
                    $dom.css({'top':(listHeight * j) -15 + 'px','left':'0','height': listHeight + 35 + 'px'});
                }
                $origin.before($dom);
            };

            bannerSingle.css({'position':'relative','width':'100%', 'height':'100%','overflow':'hidden'});
            bannerSingle.find('.mci-bannerSingle-list').css({'position':'absolute','background':'orange','box-shadow':'rgba(0, 0, 0, 0.3) 1px 1px 10px'});
            bannerSingle.find('#mci-bannerSingle-list-dom').css({'display':'none'});
        };
        MDL.type.eventG = function (arr) {
            var sec = 300;
            MDL.type.eventG.lineDom = function (bannerSingle) {
                var num = 0;
                for (var j = 0; j< MDL.type.G.listNum; j++) {
                    setTimeout(function () {
                        bannerSingle.find('.mci-bannerSingle-list').eq(num).animate({'width':'110%'},sec);
                        num++;
                    }, sec * j)
                }
            };
            MDL.type.eventG.lineDomRe = function (bannerSingle) {
                var num = MDL.type.G.listNum-1;
                for (var j = 0; j < MDL.type.G.listNum; j++) {
                    setTimeout(function () {
                        bannerSingle.find('.mci-bannerSingle-list').eq(num).animate({'width':'0'},sec);
                        num--;
                    }, sec * (MDL.type.G.listNum - (j+1)))
                }
            };

            MDL.type.eventG.lineDomTime = function(){
                for(var i=0;i<arr.length;i++) {
                    var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_' + arr[i]);
                    MDL.type.eventG.lineDom(bannerSingle);
                }
                setTimeout(function () {
                    for(var i=0;i<arr.length;i++) {
                        var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_' + arr[i]);
                        MDL.type.eventG.lineDomRe(bannerSingle);
                    }
                },MDL.type.G.listNum * sec + 100)
            };

            setInterval(function () {
                MDL.type.eventG.lineDomTime();
            },(MDL.type.G.listNum * sec) + 3000);
        }
        MDL.type.H = function (i) {
            MDL.setDom.htype.push(i);
            var AdImg = MDL.setDom.AdBanner.eq(i).find('img');
            var AdImgWidth = parseInt(AdImg.width());
            var AdImgHeight = parseInt(AdImg.height());
            MDL.setDom.widthHalf[i] = AdImgWidth /2;
            var widthHalf = MDL.setDom.widthHalf[i];
            AdImg.wrap('<div></div>');
            AdImg.parent('div').attr('id', 'MCI_KOREA_ADBANNERSINGLE_'+i);
            var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerSingle-box";
            markup.innerHTML = "<div class=\"mci-bannerSingle-list-wrap\"><div id=\"mci-bannerSingle-list-dom\"></div></div>";
            bannerSingle.find('img').before(markup);

            var rotateY = [0, 90, 180, -90];
            var $origin = bannerSingle.find('#mci-bannerSingle-list-dom');
            for (var j = 0; j < 4 ; j++) {
                var $dom = $origin.clone(true);
                $dom.removeAttr('id').addClass('mci-bannerSingle-list mci-bannerSingle-list'+j);
                var url = AdImg.attr('src');
                $dom.css({'background':'url('+ url +') no-repeat','background-size':'100%','transform':'rotateY('+ rotateY[j] +'deg) translateZ('+widthHalf+'px)'});
                $origin.before($dom);
            };

            bannerSingle.css({'position':'relative','width':'100%', 'height':'100%'});
            bannerSingle.find('#mci-bannerSingle-box').css({'width':AdImgWidth + 'px','height': AdImgHeight + 'px','perspective':AdImgWidth + 'px','perspective-origin':'50% 50%'});
            bannerSingle.find('.mci-bannerSingle-list-wrap').css({'width':AdImgWidth + 'px','height': AdImgHeight + 'px','position':'relative','transform-style':'preserve-3d','transform':'translateZ(-'+widthHalf+'px) rotateX(  0deg) rotateY(0deg)'});
            bannerSingle.find('.mci-bannerSingle-list').css({'position':'absolute','width':AdImgWidth + 'px','height': AdImgHeight + 'px','backface-visibility':'hidden'});
            bannerSingle.find('#mci-bannerSingle-list-dom').css({'display':'none'});
            AdImg.css({'display':'none'});
        };
        MDL.type.eventH = function (arr) {
            var sec = 6000;
            MDL.type.eventH.rolling = function(i){
                var bannerSingle = $MCI('#MCI_KOREA_ADBANNERSINGLE_' + i);
                var widthHalf = MDL.setDom.widthHalf[i];
                bannerSingle.find('.mci-bannerSingle-list-wrap').css({
                    'transition': 'all 3s ease-in-out',
                    'transform': 'translateZ(-' + widthHalf + 'px) rotateX(0deg) rotateY(-90deg)'
                });
                setTimeout(function () {
                    bannerSingle.find('.mci-bannerSingle-list-wrap').css({'transform': 'translateZ(-' + widthHalf + 'px) rotateX(0deg) rotateY(-180deg)'})
                }, sec);
                setTimeout(function () {
                    bannerSingle.find('.mci-bannerSingle-list-wrap').css({'transform': 'translateZ(-' + widthHalf + 'px) rotateX(0deg) rotateY(-270deg)'})
                }, sec * 2);
                setTimeout(function () {
                    bannerSingle.find('.mci-bannerSingle-list-wrap').css({
                        'transition': 'all 0s',
                        'transform': 'translateZ(-' + widthHalf + 'px) rotateX(0deg) rotateY(0deg)'
                    })
                }, sec * 3 - 500)
            };
            for(var i=0; i<arr.length; i++) {
                MDL.type.eventH.rolling(arr[i]);
            }
            setInterval(function () {
                for(var i=0; i<arr.length; i++) {
                    MDL.type.eventH.rolling(arr[i]);
                }
            },sec * 3)
        }
    };
    return this.Init();
}
new MCI_KOREA_ADBANNERSINGLE();
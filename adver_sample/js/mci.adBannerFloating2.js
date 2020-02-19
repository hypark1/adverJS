var MCI_KOREA_ADBANNERFLOAT = function() {
    var MDL;
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
                    MDL.$ZONE = $MCI('#MCI_KOREA_ADBANNERFLOAT');
                    MDL.type();
                    MDL.setDom();
                    MDL.Event();
                    console.log(MDL)
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js"];
        loadScripts(scripts);
    };
    this.setDom = function () {
        var num = 1;
        MDL.setDom.MaxIdxSearchDom = function () {
            var numQ = 1;
            var numS = 1;
            $MCI('div').each(function () {
                var zIdx = Number($MCI(this).css('z-index'));
                if(zIdx != "auto" && zIdx >= numQ){
                    numQ = zIdx + 100;
                }
            });

            var div = document.getElementsByTagName('div');

            [].forEach.call(div, function (el) {
                var zIdx = el.style.zIndex;

                if(zIdx != "auto" && zIdx >= numS){
                    numS = zIdx + 100;
                }
            })
            if(numQ > numS){
                num = numQ;
            }else{
                num = numS;
            }
        };
        MDL.setDom.MaxIdxSearchDom();

        this.listIndex = num;
        this.bannerWidth = 170;
        this.bannerLink = [];
        MDL.bannerLink.push({
            img : '//img.mobon.net/ad/imgfile/916b5a3c7f2bb266b230f8e4467a0c5d0218160.jpg',
            link : '#'
        },{
            img : '//img.mobon.net/ad/imgfile//2019/RmlsYQ==/7ebd3a9a-f1a9-4f9c-b288-bcc89bcb23f901.png',
            link : '#'
        },{
            img : '//img.mobon.net/ad/imgfile//2019/aGFud2hhZGlyZWN0/fbdc5f80-a125-4c24-851b-dc71250f46a601.png',
            link : '#'
        },{
            img : '//img.mobon.net/ad/imgfile//2019/d21w/1e455c5d-cdc9-41b9-9aa1-4714cf3b155c01.jpg',
            link : '#'
        });

        var showType = MDL.$ZONE.data('show');
        var randomNum = parseInt(Math.random() * 7);
        if(showType == 'random'){
            var typeArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            showType = typeArr[randomNum];
        }

        if(showType == 'A'){
            MDL.type.A();
        }else if(showType == 'B'){
            MDL.type.B();
        }else if(showType == 'C'){
            MDL.type.C();
        }else if(showType == 'D'){
            MDL.type.D();
        }else if(showType == 'E'){
            MDL.type.E();
        }else if(showType == 'F'){
            MDL.type.F();
        }else if(showType == 'G'){
            MDL.type.G();
        }else if(showType == 'H'){
            MDL.type.H();
        }

        MDL.$ZONE.on('click', '.mci-bannerFloat-close', function() {
            MDL.$ZONE.remove();
        });
        MDL.$ZONE.css({'position':'fixed','left':'0','width':MDL.bannerWidth + 'px','height':MDL.bannerWidth + 'px','z-index':MDL.listIndex,'-webkit-transition': '.5s','-moz-transition': '.5s','-ms-transition': '.5s','-o-transition': '.5s','transition': '.5s'});
        MDL.$ZONE.find('.mci-floating-wrap').css({'position':'relative','width':MDL.bannerWidth + 'px','height':MDL.bannerWidth + 'px','overflow':'hidden'});
        MDL.$ZONE.find('.mci-bannerFloat-close').css({'position':'absolute','top':'-20px','left':'150px','width':'20px','height':'20px','background':'#222','color':'#fff','z-index':MDL.listIndex,'text-align':'center','font-size':'14px','-webkit-transition': '.5s','-moz-transition': '.5s','-ms-transition': '.5s','-o-transition': '.5s','transition': '.5s'});
        MDL.$ZONE.find('img').css({'width':'100%','height':'100%'});
        MDL.$ZONE.find('#mci-bannerFloat-list-dom').css({'display':'none'});
    };
    this.type = function () {
        MDL.type.A = function () {
            document.getElementById("MCI_KOREA_ADBANNERFLOAT").innerHTML = "<div class=\"mci-bannerFloat-close\">X</div><div class=\"mci-floating-wrap\"><div class=\"mci-bannerFloat-box\"><div id=\"mci-bannerFloat-list-dom\"><a href=\"\"><img src=\"\"></a></div></div></div>";
            var $origin = MDL.$ZONE.find('#mci-bannerFloat-list-dom');
            for (var i = 0; i <(MDL.bannerLink.length +1) ; i++) {
                var $dom = $origin.clone(true);
                $dom.removeAttr('id').addClass('mci-bannerFloat-list');
                if(i == MDL.bannerLink.length){
                    $dom.find('img').attr('src', MDL.bannerLink[0].img);
                    $dom.find('a').attr('href', MDL.bannerLink[0].link);
                }else{
                    $dom.find('img').attr('src', MDL.bannerLink[i].img);
                    $dom.find('a').attr('href', MDL.bannerLink[i].link);
                }
                $dom.css({'z-index':MDL.listIndex - (2 * i)});
                $origin.before($dom);
            };

            MDL.$ZONE.find('.mci-bannerFloat-list').css({'position':'absolute','top':'0','left':'0'});

            var floatBannerList = MDL.$ZONE.find('.mci-bannerFloat-list');
            var floatNum = 0;
            var floatListLength = floatBannerList.length -1;
            var set
            this.floatRolling = function () {
                floatBannerList.eq(floatNum).fadeOut(1000);
                floatNum += 1;
                if(floatNum == floatListLength){
                    floatBannerList.delay(1000).fadeIn(0);
                    floatNum = 0;
                }
                setTimeout(function(){
                    MDL.type.floatRolling();
                }, 3000);
            };
            setTimeout(function(){
                MDL.type.floatRolling();
            }, 1000);
        };

        MDL.type.B = function () {
            document.getElementById("MCI_KOREA_ADBANNERFLOAT").innerHTML = "<div class=\"mci-bannerFloat-close\">X</div><div class=\"mci-floating-wrap\"><div class=\"mci-bannerFloat-box\"><div id=\"mci-bannerFloat-list-dom\"><a href=\"\"><img src=\"\"></div></div></div>";

            var $origin = MDL.$ZONE.find('#mci-bannerFloat-list-dom');
            for (var i = 0; i <(MDL.bannerLink.length +1) ; i++) {
                var $dom = $origin.clone(true);
                $dom.removeAttr('id').addClass('mci-bannerFloat-list');
                if(i == MDL.bannerLink.length){
                    $dom.find('img').attr('src', MDL.bannerLink[0].img);
                    $dom.find('a').attr('href', MDL.bannerLink[0].link);
                }else{
                    $dom.find('img').attr('src', MDL.bannerLink[i].img);
                    $dom.find('a').attr('href', MDL.bannerLink[i].link);
                }
                $dom.css({'z-index':MDL.listIndex - (2 * i)});
                $origin.before($dom);
            };

            MDL.$ZONE.find('.mci-bannerFloat-box').css({'position':'absolute','top':'0','left':'0','width':(MDL.bannerWidth) * (MDL.bannerLink.length +1) +'px','height':MDL.bannerWidth + 'px'})
            MDL.$ZONE.find('.mci-bannerFloat-list').css({'float':'left','width':MDL.bannerWidth + 'px','height':MDL.bannerWidth + 'px'});

            var floatBannerList = MDL.$ZONE.find('.mci-bannerFloat-list');
            var floatNum = 0;
            var floatLength = floatBannerList.length;

            this.floatRolling = function () {
                floatNum -= MDL.bannerWidth;
                MDL.$ZONE.find('.mci-bannerFloat-box').stop().animate({'left': floatNum + 'px'},700);

                if(floatNum == -(MDL.bannerWidth) * (floatLength - 1)){
                    MDL.$ZONE.find('.mci-bannerFloat-box').delay(700).animate({'left':'0px'}, 0);
                    floatNum = 0;
                }
                setTimeout(function(){
                    MDL.type.floatRolling();
                }, 3000);
            };

            setTimeout(function(){
                MDL.type.floatRolling();
            }, 1000);
        };

        MDL.type.C = function () {
            document.getElementById("MCI_KOREA_ADBANNERFLOAT").innerHTML = "<div class=\"mci-bannerFloat-close\">X</div><div class=\"mci-floating-wrap\"><div class=\"mci-bannerFloat-box\"><div id=\"mci-bannerFloat-list-dom\"><a href=\"\"><img src=\"\"></div></div></div>";

            var $origin = MDL.$ZONE.find('#mci-bannerFloat-list-dom');
            for (var i = 0; i <(MDL.bannerLink.length +1) ; i++) {
                var $dom = $origin.clone(true);
                $dom.removeAttr('id').addClass('mci-bannerFloat-list');
                if(i == MDL.bannerLink.length){
                    $dom.find('img').attr('src', MDL.bannerLink[0].img);
                    $dom.find('a').attr('href', MDL.bannerLink[0].link);
                }else{
                    $dom.find('img').attr('src', MDL.bannerLink[i].img);
                    $dom.find('a').attr('href', MDL.bannerLink[i].link);
                }
                $dom.css({'z-index':MDL.listIndex - (2 * i)});
                $origin.before($dom);
            };

            MDL.$ZONE.find('.mci-bannerFloat-list').css({'position':'absolute','top':'0','left':'0','-webkit-transform-origin': 'right center','-moz-transform-origin': 'right center','-ms-transform-origin': 'right center','-o-transform-origin': 'right center','transform-origin': 'right center'});

            var floatBannerList = MDL.$ZONE.find('.mci-bannerFloat-list');
            var floatNum = 0;
            var floatListLength = floatBannerList.length -1;
            this.floatRolling = function () {
                floatBannerList.eq(floatNum).css({'-webkit-transform': 'rotateY(-180deg)','-moz-transform': 'rotateY(-180deg)','-ms-transform': 'rotateY(-180deg)','-o-transform': 'rotateY(-180deg)','transform': 'rotateY(-180deg)','-webkit-transition': '3s','-moz-transition': '3s','-ms-transition': '3s','-o-transition': '3s','transition': '3s'});
                floatNum += 1;
                if(floatNum == floatListLength){
                    setTimeout(function(){
                        floatBannerList.css({'-webkit-transform': 'rotateY(0)','-moz-transform': 'rotateY(0)','-ms-transform': 'rotateY(0)','-o-transform': 'rotateY(0)','transform': 'rotateY(0)','-webkit-transition': '0s','-moz-transition': '0s','-ms-transition': '0s','-o-transition': '0s','transition': '0s'});
                    }, 1000);
                    floatNum = 0;
                }
                setTimeout(function(){
                    MDL.type.floatRolling();
                }, 3000);
            };

            setTimeout(function(){
                MDL.type.floatRolling();
            }, 1000);
        };

        MDL.type.D = function () {
            document.getElementById("MCI_KOREA_ADBANNERFLOAT").innerHTML = "<div class=\"mci-bannerFloat-close\">X</div><div class=\"mci-floating-wrap\"><div class=\"mci-bannerFloat-box\"><div id=\"mci-bannerFloat-list-dom\"><a href=\"\"><img src=\"\"></div></div></div>";

            var $origin = MDL.$ZONE.find('#mci-bannerFloat-list-dom');
            for (var i = 0; i <(MDL.bannerLink.length +1) ; i++) {
                var $dom = $origin.clone(true);
                $dom.removeAttr('id').addClass('mci-bannerFloat-list');
                if(i == MDL.bannerLink.length){
                    $dom.find('img').attr('src', MDL.bannerLink[0].img);
                    $dom.find('a').attr('href', MDL.bannerLink[0].link);
                }else{
                    $dom.find('img').attr('src', MDL.bannerLink[i].img);
                    $dom.find('a').attr('href', MDL.bannerLink[i].link);
                }
                $dom.css({'z-index':MDL.listIndex + (2 * i)});
                $origin.before($dom);
            };

            MDL.$ZONE.find('.mci-bannerFloat-list').css({'position':'absolute','top':'0','left':'0','-webkit-transform': 'rotate(0deg) scale(0)','-moz-transform': 'rotate(0deg) scale(0)','-ms-transform': 'rotate(0deg) scale(0)','-o-transform': 'rotate(0deg) scale(0)','transform': 'rotate(0deg) scale(0)'});
            MDL.$ZONE.find('.mci-bannerFloat-list').eq(0).css({'-webkit-transform': 'scale(1)','-moz-transform': 'scale(1)','-ms-transform': 'scale(1)','-o-transform': 'scale(1)','transform': 'scale(1)'});

            var floatBannerList = MDL.$ZONE.find('.mci-bannerFloat-list');
            var floatNum = 1;
            var floatListLength = floatBannerList.length -1;
            this.floatRolling = function () {
                floatBannerList.eq(floatNum).css({'-webkit-transform': 'rotate(360deg) scale(1)','-moz-': 'rotate(360deg) scale(1)','-ms-transform': 'rotate(360deg) scale(1)','-o-transform': 'rotate(360deg) scale(1)','transform': 'rotate(360deg) scale(1)','-webkit-transition': '.6s','-moz-transition': '.6s','-ms-transition': '.6s','-o-transition': '.6s','transition': '.6s'});
                floatNum += 1;
                if(floatNum == (floatListLength+1)){
                    setTimeout(function(){
                        floatBannerList.eq(0).siblings().css({'-webkit-transform': 'rotate(0deg) scale(0)','-moz-transform': 'rotate(0deg) scale(0)','-ms-transform': 'rotate(0deg) scale(0)','-o-transform': 'rotate(0deg) scale(0)','transform': 'rotate(0deg) scale(0)','-webkit-transition': '0s','-moz-transition': '0s','-ms-transition': '0s','-o-transition': '0s','transition': '0s'});
                    }, 1000);
                    floatNum = 1;
                }
                setTimeout(function(){
                    MDL.type.floatRolling();
                }, 3000);
            };

            setTimeout(function(){
                MDL.type.floatRolling();
            }, 1000);
        };

        MDL.type.E = function () {
            document.getElementById("MCI_KOREA_ADBANNERFLOAT").innerHTML = "<div class=\"mci-bannerFloat-close\">X</div><div class=\"mci-floating-wrap\"><div class=\"mci-bannerFloat-box\"><div id=\"mci-bannerFloat-list-dom\"><a href=\"\"><div id=\"mci-bannerFloat-slice-dom\"></div></a></div></div></div>";

            var $origin = MDL.$ZONE.find('#mci-bannerFloat-list-dom');
            var bannerSliceNum = 8;
            var bannerSliceWidth = Number(MDL.bannerWidth / bannerSliceNum);

            for (var i = 0; i <(MDL.bannerLink.length +1) ; i++) {
                var $dom = $origin.clone(true);
                $dom.removeAttr('id').addClass('mci-bannerFloat-list');
                var sliceOrigin = $dom.find('#mci-bannerFloat-slice-dom');
                var bannerSlicePositionLeft = 0;
                var bannerSlicePositionTop = 0;
                var bannerSlicePositionLeft2 = 0;
                var bannerSlicePositionTop2 = 0;
                if(i == MDL.bannerLink.length){
                    $dom.find('#mci-bannerFloat-slice-dom').remove();
                    $dom.find('a').attr('href',MDL.bannerLink[0].link).append('<img>');
                    $dom.find('img').attr('src',MDL.bannerLink[0].img);
                }else{
                    $dom.find('a').attr('href',MDL.bannerLink[i].link);
                    for(var j = 0; j < (bannerSliceNum*bannerSliceNum); j++){
                        var sliceDom = sliceOrigin.clone(true);
                        sliceDom.removeAttr('id').addClass('mci-bannerFloat-slice');
                        sliceDom.css({'background':'url('+MDL.bannerLink[i].img+')','background-position':bannerSlicePositionLeft+'px '+bannerSlicePositionTop+'px','background-size': MDL.bannerWidth + 'px '+MDL.bannerWidth + 'px','top':bannerSlicePositionTop2+'px','left':bannerSlicePositionLeft2+'px'});
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
                $dom.css({'z-index':MDL.listIndex - (2 * i)});
                $origin.before($dom);
            };

            MDL.$ZONE.find('.mci-bannerFloat-list').css({'position':'absolute','top':'0','left':'0','width':MDL.bannerWidth + 'px','height':MDL.bannerWidth + 'px'});
            MDL.$ZONE.find('.mci-bannerFloat-slice').css({'position':'absolute','width':bannerSliceWidth+'px','height':bannerSliceWidth+'px','transform': 'translate3d(0,0,0)'});

            var floatBannerList = MDL.$ZONE.find('.mci-bannerFloat-list');
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
                        MDL.type.setTimeDom(i, bannerSliceNum);
                    }else{
                        MDL.type.setTimeDom(i, i+1);
                    }
                }

                floatNum += 1;
                if(floatNum == floatListLength) {
                    floatNum = 0;
                }
                setTimeout(function(){
                    MDL.type.floatRolling();
                }, 3000);
            };

            setTimeout(function(){
                MDL.type.floatRolling();
            }, 1000);
        };

        MDL.type.F = function () {
            document.getElementById("MCI_KOREA_ADBANNERFLOAT").innerHTML = "<div class=\"mci-bannerFloat-close\">X</div><div class=\"mci-floating-wrap\"><div class=\"mci-bannerFloat-bg\"></div><div class=\"mci-bannerFloat-box\"><div id=\"mci-bannerFloat-list-dom\"><a href=\"\"><img src=\"\"></a></div></div></div>";

            var $origin = MDL.$ZONE.find('#mci-bannerFloat-list-dom');
            for (var i = 0; i <(MDL.bannerLink.length +1) ; i++) {
                var $dom = $origin.clone(true);
                $dom.removeAttr('id').addClass('mci-bannerFloat-list');
                if(i == MDL.bannerLink.length){
                    $dom.find('img').attr('src', MDL.bannerLink[0].img);
                    $dom.find('a').attr('href', MDL.bannerLink[0].link);
                }else{
                    $dom.find('img').attr('src', MDL.bannerLink[i].img);
                    $dom.find('a').attr('href', MDL.bannerLink[i].link);
                }
                $dom.css({'z-index':MDL.listIndex - (2 * i)});
                $origin.before($dom);
            };

            MDL.$ZONE.find('.mci-bannerFloat-list').css({'position':'absolute','top':'7.5px','left':'7.5px','width':(MDL.bannerWidth -15) + 'px','height':(MDL.bannerWidth -15) + 'px'});
            MDL.$ZONE.find('.mci-bannerFloat-bg').css({'position':'absolute','top':'50%','left':'50%','margin':'-67.5px 0 0 -67.5px','width':(MDL.bannerWidth -15) + 'px','height':(MDL.bannerWidth -15) + 'px','background':'#ff016b'});

            var floatBannerList = MDL.$ZONE.find('.mci-bannerFloat-list');
            var floatNum = 0;
            var floatListLength = floatBannerList.length -1;

            this.floatRolling = function () {
                floatBannerList.eq(floatNum).fadeOut(1000);
                floatNum += 1;
                if(floatNum == floatListLength){
                    floatBannerList.delay(1000).fadeIn(0);
                    floatNum = 0;
                }
                setTimeout(function(){
                    MDL.type.floatRolling();
                }, 3000);
            };

            this.floatBgMove = function () {
                MDL.$ZONE.find('.mci-bannerFloat-bg')
                    .animate({'width':MDL.bannerWidth + 'px','height':MDL.bannerWidth + 'px','margin':'-' +(MDL.bannerWidth/2) +'px 0 0 -' +(MDL.bannerWidth/2) +'px'},200)
                    .animate({'width':(MDL.bannerWidth - 10) + 'px','height':(MDL.bannerWidth - 10) + 'px','margin':'-' +((MDL.bannerWidth/2)-5) +'px 0 0 -' +((MDL.bannerWidth/2)-5) +'px'},200)
            };

            setTimeout(function(){
                MDL.type.floatRolling();
            }, 1000);

            MDL.type.floatBgMove();
            var rollingBg = setInterval(function(){
                MDL.type.floatBgMove();
            }, 400);
        };

        MDL.type.G = function () {
            document.getElementById("MCI_KOREA_ADBANNERFLOAT").innerHTML = "<div class=\"mci-bannerFloat-close\">X</div><div class=\"mci-floating-wrap\"><div class=\"mci-bannerFloat-box\"><div id=\"mci-bannerFloat-list-dom\"><a href=\"\"><img src=\"\"></a></div></div></div>";

            var listPosition = [];
            listPosition.push(
                {top: '0', left: '0'},
                {top: '-'+MDL.bannerWidth, left: '0'},
                {top: '0', left: MDL.bannerWidth},
                {top: MDL.bannerWidth, left: '0'},
                {top: '0', left: '-'+MDL.bannerWidth}
            );

            var $origin = MDL.$ZONE.find('#mci-bannerFloat-list-dom');
            for (var i = 0; i <(MDL.bannerLink.length +1) ; i++) {
                var $dom = $origin.clone(true);
                $dom.removeAttr('id').addClass('mci-bannerFloat-list');
                if(i == MDL.bannerLink.length){
                    $dom.find('img').attr('src', MDL.bannerLink[0].img);
                    $dom.find('a').attr('href', MDL.bannerLink[0].link);
                }else{
                    $dom.find('img').attr('src', MDL.bannerLink[i].img);
                    $dom.find('a').attr('href', MDL.bannerLink[i].link);
                }
                $dom.css({'top':listPosition[i].top +'px','left':listPosition[i].left +'px'});
                $dom.css({'z-index':MDL.listIndex + (2 * i)});
                $origin.before($dom);
            };

            MDL.$ZONE.find('.mci-bannerFloat-box').css({'position':'relative','width':(MDL.bannerWidth * 2) + 'px','height':MDL.bannerWidth + 'px'});
            MDL.$ZONE.find('.mci-bannerFloat-list').css({'position':'absolute','width':MDL.bannerWidth + 'px','height':MDL.bannerWidth + 'px'});
            MDL.$ZONE.find('#mci-bannerFloat-list-dom').css({'display':'none'});

            var floatBannerList = MDL.$ZONE.find('.mci-bannerFloat-list');
            var floatNum = 0;
            var floatListLength = floatBannerList.length -1;

            this.floatRolling = function () {
                //floatBannerList.eq(floatNum).fadeOut(1000);
                floatNum += 1;
                floatBannerList.eq(floatNum).animate({'top':'0','left':'0'});
                if(floatNum == floatListLength){
                    for(var i=0;i<(MDL.bannerLink.length+1);i++){
                        floatBannerList.eq(i).delay(1000).animate({'top':listPosition[i].top +'px','left':listPosition[i].left +'px'},0);
                    }
                    floatNum = 0;
                }
                setTimeout(function(){
                    MDL.type.floatRolling();
                }, 3000);
            };

            setTimeout(function(){
                MDL.type.floatRolling();
            }, 1000);
        };

        MDL.type.H = function () {
            document.getElementById("MCI_KOREA_ADBANNERFLOAT").innerHTML = "<div class=\"mci-bannerFloat-close\">X</div><div class=\"mci-floating-wrap\"><div class=\"mci-bannerFloat-box\"><div id=\"mci-bannerFloat-list-dom\"><a href=\"\"><div id=\"mci-bannerFloat-slice-dom\"></div></a></div></div></div>";

            var $origin = MDL.$ZONE.find('#mci-bannerFloat-list-dom');
            var bannerSliceNum = 15;
            var bannerSliceWidth = Number(MDL.bannerWidth / bannerSliceNum);

            for (var i = 0; i <(MDL.bannerLink.length +1) ; i++) {
                var $dom = $origin.clone(true);
                $dom.removeAttr('id').addClass('mci-bannerFloat-list');
                var sliceOrigin = $dom.find('#mci-bannerFloat-slice-dom');
                var bannerSlicePositionLeft = 0;
                var bannerSlicePositionTop = 0;
                var bannerSlicePositionLeft2 = 0;
                var bannerSlicePositionTop2 = 0;
                if(i == MDL.bannerLink.length){
                    $dom.find('#mci-bannerFloat-slice-dom').remove();
                    $dom.find('a').attr('href',MDL.bannerLink[0].link).append('<img>');
                    $dom.find('img').attr('src',MDL.bannerLink[0].img);
                }else{
                    $dom.find('a').attr('href',MDL.bannerLink[i].link);
                    for(var j = 0; j < (bannerSliceNum*bannerSliceNum); j++){
                        var sliceDom = sliceOrigin.clone(true);
                        sliceDom.removeAttr('id').addClass('mci-bannerFloat-slice on');
                        sliceDom.css({'background':'url('+MDL.bannerLink[i].img+')','background-position':bannerSlicePositionLeft+'px '+bannerSlicePositionTop+'px','background-size': MDL.bannerWidth + 'px '+ MDL.bannerWidth + 'px','top':bannerSlicePositionTop2+'px','left':bannerSlicePositionLeft2+'px'});
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
                $dom.css({'z-index':MDL.listIndex - (2 * i)});
                $origin.before($dom);
            };

            MDL.$ZONE.find('.mci-bannerFloat-list').css({'position':'absolute','top':'0','left':'0','width':MDL.bannerWidth + 'px','height':MDL.bannerWidth + 'px'});
            MDL.$ZONE.find('.mci-bannerFloat-slice').css({'position':'absolute','width':bannerSliceWidth+'px','height':bannerSliceWidth+'px'});

            var floatBannerList = MDL.$ZONE.find('.mci-bannerFloat-list');
            var floatListLength = floatBannerList.length -1;
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
                setTimeout(function(){
                    MDL.type.floatRolling();
                }, 3000);
            };

            setTimeout(function(){
                MDL.type.floatRolling();
            }, 1000);
        };
    };
    this.Event = function () {
        var winWidth = Number($MCI(window).width());
        var winWidthHalf = (winWidth / 2);
        var winHeight = Number($MCI(window).height());
        MDL.$ZONE.css({'top':(winHeight - 30 - MDL.bannerWidth) + 'px'});

        window.addEventListener('touchstart', function(event) {
            var touch = event.touches[0];
        }, false);
        window.addEventListener('touchend', function(event) {
            if(event.touches.length == 0) {
                var touch = event.changedTouches[event.changedTouches.length - 1];
                var touchendX = touch.clientX;
                var touchendY = touch.clientY;

                //좌우
                if(touchendX < (winWidthHalf - 30)){
                    //console.log("left");
                    MDL.$ZONE.css({'left':'0'});
                    MDL.$ZONE.find('.mci-bannerFloat-close').css({'left':'150px'});
                }else if(touchendX > ((winWidthHalf + 30))){
                    //console.log("right");
                    MDL.$ZONE.css({'left':(winWidth - MDL.bannerWidth) + 'px'});
                    MDL.$ZONE.find('.mci-bannerFloat-close').css({'left':'0'});
                }
            }
        }, false);

    };
    return this.Init();
}
new MCI_KOREA_ADBANNERFLOAT();
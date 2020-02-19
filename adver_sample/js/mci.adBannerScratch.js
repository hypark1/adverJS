var MCI_KOREA_ADBANNERFLOAT = function() {
    /*sample25*/
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
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js", "//" + this.host + "/mci_controller/wScratchPad.min.js"];
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
        MDL.$ZONE.css({'position':'fixed','left':'0','bottom':'30px','width':MDL.bannerWidth + 'px','height':MDL.bannerWidth + 'px','z-index':MDL.listIndex,'-webkit-transition': '.5s','-moz-transition': '.5s','-ms-transition': '.5s','-o-transition': '.5s','transition': '.5s'});
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


            $('#demo1').wScratchPad({
                size : 20,
                bg: 'http://img1.medicalreport.kr/site4/201903/l/5c8f59019f11820190318173825651524.jpeg',
                fg: 'http://img1.medicalreport.kr/site4/201903/l/5c8f59017617720190318173825483679.jpeg',
                'cursor': 'url("../../../../mci_controller/images/coin.png") 5 5, default',
                /*scratchMove: function (e, percent) {
                    $('#demo1-percent').html(percent);
                }*/
            });

        }
    };
    this.Event = function () {


    };
    return this.Init();
}
new MCI_KOREA_ADBANNERFLOAT();
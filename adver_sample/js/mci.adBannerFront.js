var MCI_KOREA_ADBANNERFRONT = function() {
    var MDL;
    /*sample39*/
    this.Init = function () {
        this.host = document.location.hostname;
        MDL = this;
        MDL.onLoad();
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
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js"];
        loadScripts(scripts);
    };
    this.markup = function() {
        var markup = document.createElement('div');
        markup.id = "MCI_KOREA_ADBANNERFRONT";
        markup.innerHTML = "<div class=\"mci-bannerFront-box\"><a href=\"http://naver.com\"><img src='https://mlink-cdn.netinsight.co.kr/2019/03/28/a514da8246d9571b332cd553ea0641b3.jpg'></a>" +
            "<div class=\"mci-bannerClose\"><p>닫기</p></div></div>";
        document.body.appendChild(markup);

        var adBannerFront = $MCI('#MCI_KOREA_ADBANNERFRONT');
        adBannerFront.css({'position':'fixed','top':'0','left':'0','width':'100%','height':'100%','background':'rgba(0, 0, 0, 0.5)'});
        adBannerFront.find('.mci-bannerFront-box').css({'width':'300px','height':'300px','margin':'0 auto'});
        adBannerFront.find('.mci-bannerFront-box img').css({'width':'100%','height':'250px'});
        adBannerFront.find('.mci-bannerClose').css({'width':'100%','height':'50px','background':'#f9f9f9','text-align':'center'});
        adBannerFront.find('.mci-bannerClose p').css({'line-height':'50px','font-size':'16px','color':'#222'});

        var bannerHeight = parseInt(adBannerFront.find('.mci-bannerFront-box').height());
        var windowHiehgt = parseInt($MCI(window).height());
        var marginTop = (windowHiehgt - bannerHeight) / 2;
        adBannerFront.find('.mci-bannerFront-box').css({'margin-top': marginTop + 'px'});

        var MaxIndex = 1;
        MDL.markup.MaxIdxSearchDom = function () {
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
            });

            if(numQ > numS){
                MaxIndex = numQ;
            }else{
                MaxIndex = numS;
            }
        };
        MDL.markup.MaxIdxSearchDom();

        adBannerFront.css({'z-index': MaxIndex});
    };
    this.Event = function () {
        $MCI('#MCI_KOREA_ADBANNERFRONT').on('click',function () {
            $MCI('#MCI_KOREA_ADBANNERFRONT').fadeOut(500);
        });
    };
    return this.Init();
}
new MCI_KOREA_ADBANNERFRONT();
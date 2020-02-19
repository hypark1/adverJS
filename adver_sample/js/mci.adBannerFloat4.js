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
        markup.innerHTML = "<div class=\"mci-bannerFloat-close\">X</div><div class=\"mci-bannerFloat-box\"><div id=\"mci-bannerFloat-list-dom\"><a href=\"\"><img src=\"\"></a></div></div>";
        document.body.appendChild(markup);

        var floatBanner = $MCI('#mci-bannerFloat');
        var Link = [];
        Link.push({
            img : '//img.mobon.net/ad/imgfile/916b5a3c7f2bb266b230f8e4467a0c5d0218160.jpg',
            link : '#'
        },{
            img : '//img.mobon.net/ad/imgfile//2019/RmlsYQ==/7ebd3a9a-f1a9-4f9c-b288-bcc89bcb23f901.png',
            link : '#'
        },{
            img : '//img.mobon.net/ad/imgfile//2019/aGFud2hhZGlyZWN0/fbdc5f80-a125-4c24-851b-dc71250f46a601.png',
            link : '#'
        });

        var $origin = floatBanner.find('#mci-bannerFloat-list-dom');
        var listIndex = 50;
        for (var i = 0; i <(Link.length +1) ; i++) {
            var $dom = $origin.clone(true);
            $dom.removeAttr('id').addClass('mci-bannerFloat-list');
            if(i == Link.length){
                $dom.find('img').attr('src', Link[0].img);
                $dom.find('a').attr('href', Link[0].link);
            }else{
                $dom.find('img').attr('src', Link[i].img);
                $dom.find('a').attr('href', Link[i].link);
            }
            $dom.css({'z-index':listIndex + (10 * i)});
            $origin.before($dom);
        };

        floatBanner.css({'position':'fixed','bottom':'80px','left':'0','width':'150px','height':'150px','z-index':'99'});
        floatBanner.find('.mci-bannerFloat-list').css({'position':'absolute','top':'0','left':'0','-webkit-transform': 'rotate(0deg) scale(0)','-moz-transform': 'rotate(0deg) scale(0)','-ms-transform': 'rotate(0deg) scale(0)','-o-transform': 'rotate(0deg) scale(0)','transform': 'rotate(0deg) scale(0)'});
        floatBanner.find('.mci-bannerFloat-list').eq(0).css({'-webkit-transform': 'scale(1)','-moz-transform': 'scale(1)','-ms-transform': 'scale(1)','-o-transform': 'scale(1)','transform': 'scale(1)'});
        floatBanner.find('img').css({'width':'100%','height':'100%'});
        floatBanner.find('.mci-bannerFloat-close').css({'position':'absolute','top':'0','left':'0','width':'20px','height':'20px','background':'#222','color':'#fff','z-index':'99','text-align':'center','font-size':'14px'});
    };
    this.Event = function () {
        var floatBanner = $MCI('#mci-bannerFloat');
        var floatBannerList = floatBanner.find('.mci-bannerFloat-list');
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
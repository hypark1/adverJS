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
        markup.innerHTML = "<div class=\"mci-bannerFloat-close\">X</div><div class=\"mci-bannerFloat-box\"><div id=\"mci-bannerFloat-list-dom\"><img src=\"\"></div></div>";
        document.body.appendChild(markup);

        var floatBanner = $MCI('#mci-bannerFloat');
        var Link = [
            '//img.mobon.net/ad/imgfile/916b5a3c7f2bb266b230f8e4467a0c5d0218160.jpg',
            '//img.mobon.net/ad/imgfile//2019/RmlsYQ==/7ebd3a9a-f1a9-4f9c-b288-bcc89bcb23f901.png',
            '//img.mobon.net/ad/imgfile//2019/aGFud2hhZGlyZWN0/fbdc5f80-a125-4c24-851b-dc71250f46a601.png'
        ];

        var listPosition = [];
        listPosition.push(
            {top: '0', left: '0'},
            {top: '-150', left: '0'},
            {top: '0', left: '150'},
            {top: '150', left: '0'}
        );

        var $origin = floatBanner.find('#mci-bannerFloat-list-dom');
        var listIndex = 80;
        for (var i = 0; i <(Link.length +1) ; i++) {
            var $dom = $origin.clone(true);
            $dom.removeAttr('id').addClass('mci-bannerFloat-list');
            if(i == Link.length){
                $dom.find('img').attr('src', Link[0]);
            }else{
                $dom.find('img').attr('src', Link[i]);
            }
            $dom.css({'top':listPosition[i].top +'px','left':listPosition[i].left +'px'});
            $dom.css({'z-index':listIndex + (2 * i)});
            $origin.before($dom);
        };

        floatBanner.css({'position':'fixed','bottom':'80px','left':'0','width':'150px','height':'150px','z-index':'99','overflow':'hidden'});
        floatBanner.find('.mci-bannerFloat-box').css({'position':'relative','width':'300px','height':'150px'});
        floatBanner.find('.mci-bannerFloat-list').css({'position':'absolute','width':'150px','height':'150px'});
        floatBanner.find('img').css({'width':'100%','height':'100%'});
        floatBanner.find('.mci-bannerFloat-close').css({'position':'absolute','top':'0','left':'0','width':'20px','height':'20px','background':'#222','color':'#fff','z-index':'99','text-align':'center','font-size':'14px'});
        floatBanner.find('#mci-bannerFloat-list-dom').css({'display':'none'});
    };
    this.Event = function () {
        var floatBanner = $MCI('#mci-bannerFloat');
        var floatBannerList = floatBanner.find('.mci-bannerFloat-list');
        var floatNum = 0;
        var floatListLength = floatBannerList.length -1;

        var listPosition = [];
        listPosition.push(
            {top: '0', left: '0'},
            {top: '-150', left: '0'},
            {top: '0', left: '150'},
            {top: '150', left: '0'}
        );

        this.floatRolling = function () {
            //floatBannerList.eq(floatNum).fadeOut(1000);
            floatNum += 1;
            floatBannerList.eq(floatNum).animate({'top':'0','left':'0'});
            if(floatNum == floatListLength){
                for(var i=0;i<4;i++){
                    floatBannerList.eq(i).delay(1000).animate({'top':listPosition[i].top +'px','left':listPosition[i].left +'px'},0);
                }
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
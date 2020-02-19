var MCI_KOREA_ADBANNERBOTTOM = function() {
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
                    MDL.$ZONE = $MCI('#mci-bannerBottom');
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js"];
        loadScripts(scripts);
    };
    this.markup = function() {
        var markup = document.createElement('div');
        markup.id = "mci-bannerBottom";
        markup.innerHTML = "<div class=\"view-content-showAd\">" +
            "<div class=\"view-content-showAd-top\"><p>AD</p><span class=\"view-content-showAd-close\">X</span><div class=\"view-content-showAd-bg\"></div></div>" +
            "<div class=\"view-content-showAd-content\"><iframe src=\"http://artikar.com\"></iframe></div>" +
            "</div>"
        document.body.appendChild(markup);

        var showAdId = $MCI('#mci-bannerBottom');
        var showAd = showAdId.find('.view-content-showAd');
        var showAdTop = showAdId.find('.view-content-showAd-top');
        var showAdTopClose = showAdTop.find('.view-content-showAd-close');

        showAdId.css({'width': '100%', 'position': 'fixed', 'height': '470px','left': '0','bottom': '-470px', 'z-index': '9999999999'});
        showAd.css({'width': '100%', 'height': '470px'});
        showAdTop.css({'position': 'relative', 'width': '100%', 'background': '#444','border-width': '1px 1px 0 0','border-radius': '40px', 'height': '40px'});
        showAdTop.find('p').css({'position': 'relative', 'z-index': '7', 'display': 'inline-block','margin': '0 15px','color': '#fff','line-height':'42px','font-size':'16px'});
        showAdTopClose.css({'position': 'relative', 'z-index': '7', 'float': 'right','padding': '0 15px','color': '#fff','line-height':'42px','font-size':'18px'});
        showAdId.find('.view-content-showAd-bg').css({'position': 'absolute', 'bottom': '0', 'left': '0','background': '#444','width': '100%','height':'20px','z-index':'5'});
        showAdId.find('.view-content-showAd-content').css({'position': 'absolute', 'top': '40px', 'left': '0','height': '430px','background':'#fff', 'border': '2px solid #444','overflow-y':'scroll','-webkit-overflow-scrolling':'touch','width':'100%','box-sizing':'border-box'});
        showAdId.find('.view-content-showAd-content iframe').css({'width': '100%', 'height': '430px'});
    };
    this.Event = function () {
        var showAdId = $MCI('#mci-bannerBottom');
        var showAdTop = showAdId.find('.view-content-showAd-top');
        var showAdTopClose = showAdTop.find('.view-content-showAd-close');
        var byline = $MCI('.view-byline-bottom');
        var adTop = '';
        var adTopNum = 500;
        var adNum = 0;
        var adNum2 = 0;

        $MCI(window).on('scroll', function() {
            if(adNum == 0){
                if($MCI(window).scrollTop() > 100) {
                    adTop = byline.offset();
                    adTopNum = parseInt(adTop.top) - 736;
                    adNum = 1;
                }
            }
            if(adNum2 == 0){
                if($MCI(window).scrollTop() > adTopNum) {
                    showAdId.animate({'bottom': '0px'}, 1000);
                    adNum2 = 1;
                }
            }
        });

        showAdTopClose.on('click',function () {
            showAdId.animate({'bottom': '-470px'}, 500);
        });
    }
    return this.Init();
}
new MCI_KOREA_ADBANNERBOTTOM();
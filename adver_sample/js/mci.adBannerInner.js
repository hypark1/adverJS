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
        var targetId = $MCI('#aiin-pull-landing');
        var markup = document.createElement('div');
        markup.id = "mci-bannerBottom";
        markup.innerHTML = "<div class=\"view-content-showAd\"><div class=\"view-content-showAd-top\"><p>AD</p><span class=\"view-content-showAd-close\">X</span><div class=\"view-content-showAd-bg\"></div></div><div class=\"view-content-showAd-content\"><iframe src=\"http://ph-investment.com/phlotto\"></iframe></div><div class=\"view-content-showAd-bottom\"><div class=\"view-content-showAd-bg2\"></div></div></div>"
        targetId.html(markup);

        var showAdId = $MCI('#mci-bannerBottom');
        var showAd = showAdId.find('.view-content-showAd');
        var showAdTop = showAdId.find('.view-content-showAd-top');
        var showAdTopClose = showAdTop.find('.view-content-showAd-close');
        var showAdBottom = showAdId.find('.view-content-showAd-bottom');

        showAdId.css({'width': '100%', 'position': 'relative', 'height': '0px','left': '0','top': '0px', 'z-index': '9999999999', 'overflow': 'hidden'});
        showAd.css({'width': '100%', 'height': '490px'});
        showAdTop.css({'position': 'relative', 'width': '100%', 'background': '#444','border-width': '1px 1px 0 0','border-radius': '40px', 'height': '40px'});
        showAdTop.find('p').css({'position': 'relative', 'z-index': '7', 'display': 'inline-block','margin': '0 15px','color': '#fff','line-height':'42px','font-size':'16px'});
        showAdBottom.css({'position': 'absolute', 'width': '100%', 'bottom': '0px', 'background': '#444','border-width': '0 1px 1px 0','border-radius': '-40px', 'height': '20px'});
        showAdTopClose.css({'position': 'relative', 'z-index': '7', 'float': 'right','padding': '0 15px','color': '#fff','line-height':'42px','font-size':'18px'});
        showAdId.find('.view-content-showAd-bg').css({'position': 'absolute', 'bottom': '0', 'left': '0','background': '#444','width': '100%','height':'20px','z-index':'5'});
        showAdId.find('.view-content-showAd-bg2').css({'position': 'absolute', 'bottom': '0', 'left': '0','background': '#444','width': '100%','height':'10px','z-index':'5'});
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
        var adNum = false;
        var adNum2 = false;
        var adNum3 = false;
        $MCI(window).on('scroll', function() {
            if(adNum == false){
                if($MCI(window).scrollTop() > 100) {
                    adTop = byline.offset();
                    adTopNum = parseInt(adTop.top) - 500;
                    adNum = true;
                }
            }
            if(adNum2 == false){
                if($MCI(window).scrollTop() > adTopNum) {
                    showAdId.animate({'height': '470px'}, 1000);
                    adNum2 = true;
                }
            }
            if(adNum3 == false) {
                if ($MCI(window).scrollTop() > adTopNum + 650) {
                    showAdId.animate({'height': '0px'}, 1000);
                    adNum3 = true;
                }
            }
        });
        showAdTopClose.on('click',function () {
            showAdId.animate({'height': '0px'}, 500);
        });
    }
    return this.Init();
}
new MCI_KOREA_ADBANNERBOTTOM();
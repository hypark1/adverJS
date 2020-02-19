var MCI_KOREA_ADBANNERSCROLL = function() {
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
                    MDL.$ZONE = $MCI('#mci-bannerScroll');
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js"];
        loadScripts(scripts);
    };
    this.markup = function() {
        var markup = document.createElement('div');
        markup.id = "mci-bannerScroll";
        markup.innerHTML = "<div id=\"view-banner-bot\"><div class=\"view-banner-bot-img\"><img src=\"\" style=\"display:none\"/></div></div>"
        document.body.appendChild(markup);

        var scrollBanner = $MCI('#mci-bannerScroll');
        var scrollBannerImg = scrollBanner.find('.view-banner-bot-img');
        var scrollBannerImgSrc = '/app/view/remocon/sample2/images/scrollBanner.jpg';
        scrollBannerImg.find('img').attr('src', scrollBannerImgSrc);
        scrollBanner.find('#view-banner-bot').css({'position': 'fixed', 'left': '0', 'bottom': '0','width': '100%','overflow': 'hidden', 'z-index': '9999999999'});
        scrollBannerImg.css({'width': '1024px','height': '50px'});
        scrollBannerImg.find('img').css({'display':'block','width': '100%'});
    };
    this.Event = function () {
        var scrollBanner = $MCI('#mci-bannerScroll');
        var scrollBannerImg = scrollBanner.find('.view-banner-bot-img');
        var scrollBannerImgWidth = scrollBannerImg.css('width');
        scrollBannerImgWidth = parseInt(scrollBannerImgWidth.replace('px', ""));
        var windowWidth = Number($MCI(window).width());
        var maxScroll = (scrollBannerImgWidth - windowWidth) * 10 / 7;
        $MCI(window).on('scroll', function() {
            var scroll = parseInt($MCI(window).scrollTop());
            if(scroll <= parseInt(maxScroll) && scroll > 0){
                scrollBannerImg.css({'margin-left': -(scroll * 0.7) + 'px'});
            }else if(scroll > maxScroll){
                scrollBannerImg.css({'margin-left': -(maxScroll * 0.7) + 'px'});
            }
        });
    }
    return this.Init();
}
new MCI_KOREA_ADBANNERSCROLL();
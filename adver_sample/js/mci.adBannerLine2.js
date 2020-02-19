var MCI_KOREA_ADBANNERLIGHT = function() {
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
                    MDL.$ZONE = $MCI('#mci-bannerLight');
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js"];
        loadScripts(scripts);
    };
    this.markup = function() {
        var AdBanner = $MCI('#mci-adBanner-content .banner');
        for(var i=0; i<AdBanner.length; i++){
            var AdImg = AdBanner.eq(i).find('img');
            AdImg.wrap('<div></div>');
            AdImg.parent('div').attr('id', 'mci-bannerLight'+i);
            var bannerLight = $MCI('#mci-bannerLight'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerLine-img";
            markup.innerHTML = "<div class=\"mci-img-line\"><div class=\"mci-img-line-1\"></div><div class=\"mci-img-line-2\"></div></div>";
            bannerLight.find('img').before(markup);

            bannerLight.css({'position':'relative'});
            bannerLight.find('#mci-bannerLine-img').css({'position':'absolute','top':'0','left':'0','width':'100%','height':'100%','overflow':'hidden'});
            bannerLight.find('.mci-img-line').css({'position': 'absolute','top': '0','left': '-150%','width': '100%','height': '110%','z-index': '10','opacity': '0.5'});
            bannerLight.find('.mci-img-line-1').css({'float': 'left','width': '3%','height': '110%','background-color': '#fff','-webkit-transform': 'skewX(-20deg)','-moz-transform': 'skewX(-20deg)','-ms-transform': 'skewX(-20deg)','-o-transform': 'skewX(-20deg)','transform': 'skewX(-20deg)'});
            bannerLight.find('.mci-img-line-2').css({'float': 'left','width': '40%','height': '110%',    'margin':'0 0 0 20px','background-color': '#fff','-webkit-transform': 'skewX(-20deg)','-moz-transform': 'skewX(-20deg)','-ms-transform': 'skewX(-20deg)','-o-transform': 'skewX(-20deg)','transform': 'skewX(-20deg)'});
        }
    };
    this.Event = function () {
        var AdBanner = $MCI('#mci-adBanner-content .banner');

        this.MCIbannerLineLoop = function() {
            for(var i=0; i<AdBanner.length; i++) {
                var bannerLine = $MCI('#mci-bannerLight' + i);
                bannerLine.find('.mci-img-line').animate({'left': '150%'}, 1100)
                    .animate({'left': '-150%'}, 0)
                    .animate({'left': '150%'}, 1100)
                    .animate({'left': '-150%'}, 0)
                    .delay(800).animate({'left': '-150%'}, 0);
            }
        };
        setInterval(MDL.MCIbannerLineLoop);
    }
    return this.Init();
}
new MCI_KOREA_ADBANNERLIGHT();
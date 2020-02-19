var MCI_KOREA_ADBANNERLIGHT = function() {
    var MDL;
    /*sample32*/
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
        var AdBanner = $MCI('#mci-adBanner-content .banner_box');
        for(var i=0; i<AdBanner.length; i++){
            var AdImg = AdBanner.eq(i).find('img');
            AdImg.wrap('<div></div>');
            AdImg.parent('div').attr('id', 'mci-bannerLight'+i);
            var bannerLight = $MCI('#mci-bannerLight'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerLine-img";
            markup.innerHTML = "<div class=\"view-banner-bg\"></div>";
            bannerLight.find('img').before(markup);

            bannerLight.css({'position':'relative','width':'100%', 'height':'100%'});
            bannerLight.find('.view-banner-bg').css({'position':'absolute','top':'0','left':'0','width':'100%','height':'100%','opacity':'0','background':'#fff','overflow':'hidden'});
        }
    };
    this.Event = function () {
        var AdBanner = $MCI('#mci-adBanner-content .banner');
        MDL.Event.MCIbannerLineLoop = function() {
            for(var i=0; i<AdBanner.length; i++) {
                var bannerLine = $MCI('#mci-bannerLight' + i);
                bannerLine.find('.view-banner-bg')
                    .animate({'opacity': '.7'}, 0)
                    .animate({'opacity': '0'}, 500)
                    .animate({'opacity': '.7'}, 0)
                    .animate({'opacity': '0'}, 500);
            }
        };
        setInterval(function(){
            MDL.Event.MCIbannerLineLoop();
        }, 2500);
    }
    return this.Init();
}
new MCI_KOREA_ADBANNERLIGHT();
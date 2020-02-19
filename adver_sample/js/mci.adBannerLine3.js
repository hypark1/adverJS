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
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js"];
        loadScripts(scripts);
    };
    this.markup = function() {
        this.AdBanner = $MCI('#mci-adBanner-content .banner');
        for(var i=0; i<MDL.AdBanner.length; i++){
            var AdImg = MDL.AdBanner.eq(i).find('img');
            AdImg.wrap('<div></div>');
            AdImg.parent('div').attr('id', 'mci-bannerLight'+i);
            var bannerWidth = AdImg.width();
            var bannerHeight = AdImg.height();
            var bannerLight = $MCI('#mci-bannerLight'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerLine-img";
            markup.innerHTML = "<div class=\"mci-bannerFloat-bg\"></div><div class=\"mci-bannerFloat-img\"><a href=\"\"><img src=\"\"></a></div>";
            bannerLight.find('img').before(markup);

            bannerLight.css({'width':bannerWidth+'px','height':bannerHeight+'px'})
            bannerLight.find('#mci-bannerLine-img').css({'position':'relative','width':bannerWidth+'px','height':bannerHeight+'px'});
            bannerLight.find('.mci-bannerFloat-bg').css({'position':'absolute','top':'50%','left':'50%','margin':'-'+(bannerHeight/2 - 7.5)+'px 0 0 -'+(bannerWidth/2 - 7.5)+'px','width':(bannerWidth-15) + 'px','height':(bannerHeight-15) + 'px','background':'#ff016b'});
            bannerLight.find('.mci-bannerFloat-img').css({'position':'absolute','top':'10px','left':'10px'});
            bannerLight.find('img').css({'width':(bannerWidth-20)+'px','height':(bannerHeight-20)+'px'}).attr('src', AdImg.attr('src'));
            AdImg.css({'opacity':'0'});
        }
    };
    this.Event = function () {
        MDL.Event.floatBgMove = function () {
            for(var i=0; i<MDL.AdBanner.length; i++){
                var bannerLight = $MCI('#mci-bannerLight'+i);
                var bannerWidth = bannerLight.width();
                var bannerHeight = bannerLight.height();
                bannerLight.find('.mci-bannerFloat-bg')
                    .animate({'width':bannerWidth + 'px','height':bannerHeight + 'px','margin':'-' +(bannerHeight/2) +'px 0 0 -' +(bannerWidth/2) +'px'},200)
                    .animate({'width':(bannerWidth - 15) + 'px','height':(bannerHeight - 15) + 'px','margin':'-' +((bannerHeight/2)-7.5) +'px 0 0 -' +((bannerWidth/2)-7.5) +'px'},200)
            };
        };

        MDL.Event.floatBgMove();
        var rollingBg = setInterval(function(){
            MDL.Event.floatBgMove();
        }, 400);
    };
    return this.Init();
}
new MCI_KOREA_ADBANNERLIGHT();
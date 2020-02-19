var MCI_KOREA_ADBANNERLINE = function() {
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
                    MDL.$ZONE = $MCI('#mci-bannerLine');
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
            AdImg.parent('div').attr('id', 'mci-bannerLine'+i);
            var bannerLine = $MCI('#mci-bannerLine'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerLine-img";
            markup.innerHTML = "<div class=\"img-line img-line-1\"></div><div class=\"img-line img-line-2\"></div>";
            bannerLine.find('img').before(markup);

            bannerLine.css({'position':'relative'});
            bannerLine.find('#mci-bannerLine-img').css({'position':'absolute','top':'0','left':'0','width':'100%','height':'100%','overflow':'hidden'});
            bannerLine.find('.img-line').css({'display':'none','position':'absolute','background':'#ea2016'});
            bannerLine.find('.img-line-1').css({'top':'0','left':'0','width':'60px','height':'5px'});
            bannerLine.find('.img-line-2').css({'bottom':'0','right':'0','width':'60px','height':'5px'});
        }
    };
    this.Event = function () {

        var bannerTop = [];
        var bannerLeft = [];
        var AdBanner = $MCI('#mci-adBanner-content .banner');

        setTimeout(function(){
            for(var i=0;i<AdBanner.length; i++){
                var bannerLine = $MCI('#mci-bannerLine'+i);
                bannerTop[i] = Number(bannerLine.height()) - 5;
                bannerLeft[i] = Number(bannerLine.width()) - 5;
            }
            setInterval(MDL.MCIbannerLineLoop);
        }, 1000);

        this.MCIbannerLineLoop = function() {
            for(var i=0;i<AdBanner.length; i++) {
                var bannerLine = $MCI('#mci-bannerLine' + i);
                bannerLine.find('.img-line').css({'display':'block'});

                bannerLine.find('.img-line-1').animate({'width':'60px','height':'5px','top':'0','left':'0'},300)
                    .animate({'left':bannerLeft[i]+'px'},500)
                    .animate({'width':'5px','height':'60px'},300)
                    .animate({'top':bannerTop[i]+'px'},500)
                    .animate({'width':'60px','height':'5px'},100)
                    .animate({'left':'0'},500)
                    .animate({'width':'5px','height':'60px'},300)
                    .animate({'top':'0'},300)
                    .animate({'height':'5px'},200);

                bannerLine.find('.img-line-2').animate({'width':'60px','height':'5px','bottom':'0','right':'0'},300)
                    .animate({'right':bannerLeft[i]+'px'},500)
                    .animate({'width':'5px','height':'60px'},300)
                    .animate({'bottom':bannerTop[i]+'px'},500)
                    .animate({'width':'60px','height':'5px'},100)
                    .animate({'right':'0'},500)
                    .animate({'width':'5px','height':'60px'},300)
                    .animate({'bottom':'0'},300)
                    .animate({'height':'5px'},200);
            }
        };
    }
    return this.Init();
}
new MCI_KOREA_ADBANNERLINE();
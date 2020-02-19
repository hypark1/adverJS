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
        this.widthHalf = [];
        for(var i=0; i<AdBanner.length; i++){
            var AdImg = AdBanner.eq(i).find('img');
            var AdImgWidth = parseInt(AdImg.width());
            var AdImgHeight = parseInt(AdImg.height());
            MDL.widthHalf[i] = AdImgWidth /2;
            AdImg.wrap('<div></div>');
            AdImg.parent('div').attr('id', 'mci-bannerLight'+i);
            var bannerLight = $MCI('#mci-bannerLight'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerLine-box";
            markup.innerHTML = "<div class=\"mci-bannerLine-list-wrap\"><div id=\"mci-bannerLine-list-dom\"></div></div>";
            bannerLight.find('img').before(markup);
            var rotateY = [0, 90, 180, -90]
            var $origin = bannerLight.find('#mci-bannerLine-list-dom');
            for (var j = 0; j < 4 ; j++) {
                var $dom = $origin.clone(true);
                $dom.removeAttr('id').addClass('mci-bannerLine-list mci-bannerLine-list'+j);
                var url = AdImg.attr('src');
                $dom.css({'background':'url('+ url +') no-repeat','background-size':'100%','transform':'rotateY('+ rotateY[j] +'deg) translateZ('+MDL.widthHalf[i]+'px)'});
                $origin.before($dom);
            };

            bannerLight.css({'position':'relative','width':'100%', 'height':'100%'});
            bannerLight.find('#mci-bannerLine-box').css({'width':AdImgWidth + 'px','height': AdImgHeight + 'px','perspective':AdImgWidth + 'px','perspective-origin':'50% 50%'});
            bannerLight.find('.mci-bannerLine-list-wrap').css({'width':AdImgWidth + 'px','height': AdImgHeight + 'px','position':'relative','transform-style':'preserve-3d','transform':'translateZ(-'+MDL.widthHalf[i]+'px) rotateX(  0deg) rotateY(0deg)'});
            bannerLight.find('.mci-bannerLine-list').css({'position':'absolute','width':AdImgWidth + 'px','height': AdImgHeight + 'px','backface-visibility':'hidden'});
            bannerLight.find('#mci-bannerLine-list-dom').css({'display':'none'});
            AdImg.css({'display':'none'});
        }
    };
    this.Event = function () {
        var AdBanner = $MCI('#mci-adBanner-content .banner');

        MDL.Event.rolling = function(i){
                var bannerLight = $MCI('#mci-bannerLight' + i);
                var widthHalf = MDL.widthHalf[i];
                bannerLight.find('.mci-bannerLine-list-wrap').css({
                    'transition': 'all 3s ease-in-out',
                    'transform': 'translateZ(-' + widthHalf + 'px) rotateX(0deg) rotateY(-90deg)'
                });
                setTimeout(function () {
                    bannerLight.find('.mci-bannerLine-list-wrap').css({'transform': 'translateZ(-' + widthHalf + 'px) rotateX(0deg) rotateY(-180deg)'})
                }, 6000);
                setTimeout(function () {
                    bannerLight.find('.mci-bannerLine-list-wrap').css({'transform': 'translateZ(-' + widthHalf + 'px) rotateX(0deg) rotateY(-270deg)'})
                }, 12000);
                setTimeout(function () {
                    bannerLight.find('.mci-bannerLine-list-wrap').css({
                        'transition': 'all 0s',
                        'transform': 'translateZ(-' + widthHalf + 'px) rotateX(0deg) rotateY(0deg)'
                    })
                }, 17500)
        };
        for(var i=0; i<AdBanner.length; i++) {
            MDL.Event.rolling(i);
        }
        setInterval(function () {
            for(var i=0; i<AdBanner.length; i++) {
                MDL.Event.rolling(i);
            }
        },18000)


    };
    return this.Init();
}
new MCI_KOREA_ADBANNERLIGHT();
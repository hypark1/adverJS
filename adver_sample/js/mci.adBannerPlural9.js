var MCI_KOREA_ADBANNERLINE = function() {
    var MDL;
    /*sample41*/
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
        var AdBanner = $MCI('.appladBanner');
        this.listNum = 3;

        this.link = new Array();
        for(var i=0; i<AdBanner.length; i++) {
            var AdImg = AdBanner.eq(i).find('img');
            var AdLink = AdBanner.eq(i).find('a');
            var arr = new Array();
            for(var j=0; j<AdImg.length; j++){
                arr[j] = {
                    src : AdImg.eq(j).attr('src'),
                    href : AdLink.attr('href')
                }

            }
            MDL.link[i] = arr;
            console.log(MDL.link)
            AdLink.eq(0).siblings().remove();
            var AdImgHeight = parseInt(AdImg.height());
            var listHeight= AdImgHeight / MDL.listNum;
            AdImg.wrap('<div></div>');
            AdImg.parent('div').attr('id', 'mci-bannerLight'+i);
            var bannerLight = $MCI('#mci-bannerLight'+i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerLine-box";
            markup.innerHTML = "<div id=\"mci-bannerLine-list-dom\"></div>";
            bannerLight.find('img').before(markup);

            var $origin = bannerLight.find('#mci-bannerLine-list-dom');
            for (var j = 0; j < MDL.listNum ; j++) {
                var $dom = $origin.clone(true);
                $dom.removeAttr('id').addClass('mci-bannerLine-list mci-bannerLine-list'+j);
                $dom.css({'z-index':50 + (2 * j)});
                if(j % 2 == 1){
                    $dom.css({'top':(listHeight * j) -10 + 'px','right':'-5%','height': listHeight + 30 + 'px','transform':'rotate(-8deg)'});
                }else{
                    $dom.css({'top':(listHeight * j) -15 + 'px','left':'0','height': listHeight + 35 + 'px'});
                }
                $origin.before($dom);
            };
            bannerLight.css({'position':'relative','width':'100%', 'height':'100%','overflow':'hidden'});
            bannerLight.find('.mci-bannerLine-list').css({'position':'absolute','background':'orange','box-shadow':'rgba(0, 0, 0, 0.3) 1px 1px 10px'});
            bannerLight.find('#mci-bannerLine-list-dom').css({'display':'none'});
        }
    };
    this.Event = function () {
        var AdBanner = $MCI('#mci-adBanner-content .banner');

        var sec = 300;

        MDL.Event.lineDom = function (bannerLight) {
            var num = 0;
            for (var j = 0; j< MDL.listNum; j++) {
                setTimeout(function () {
                    bannerLight.find('.mci-bannerLine-list').eq(num).animate({'width':'110%'},sec);
                    num++;
                }, sec * j)
            }
        };
        MDL.Event.lineDomRe = function (bannerLight) {
            var num = MDL.listNum-1;
            for (var j = 0; j < MDL.listNum; j++) {
                setTimeout(function () {
                    bannerLight.find('.mci-bannerLine-list').eq(num).animate({'width':'0'},sec);
                    num--;
                }, sec * (MDL.listNum - (j+1)))
            }
        };
        var linkNum = 0;
        MDL.Event.lineDomTime = function(){
            for(var i=0;i<AdBanner.length;i++) {
                var bannerLight = $MCI('#mci-bannerLight' + i);
                MDL.Event.lineDom(bannerLight);
            }
            var link = MDL.link[0];
            setTimeout(function () {
                linkNum++;
                if(linkNum == MDL.link[0].length){
                    linkNum = 0;
                }
                for(var i=0;i<AdBanner.length;i++) {
                    var bannerLight = $MCI('#mci-bannerLight' + i);
                    MDL.Event.lineDomRe(bannerLight);
                    var AdImg = AdBanner.eq(i).find('img');
                    AdImg.attr('src',link[linkNum].src);
                }
            },MDL.listNum * sec + 100)
        };

        setInterval(function () {
            MDL.Event.lineDomTime();
        },(MDL.listNum * sec) + 3000);
    };

    return this.Init();
};
new MCI_KOREA_ADBANNERLINE();
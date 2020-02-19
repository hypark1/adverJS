var MCI_KOREA_ADBANNERROLLING = function() {
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
        var markup = document.createElement('div');
        markup.id = "mci-bannerRolling";
        markup.innerHTML = "<div id=\"view-banner-top\"><div class=\"top-banner-rolling\"><ul><li><img src=\"\"></li><li><img src=\"\"></li><li><img src=\"\"></li></ul></div></div>"
        document.body.appendChild(markup);

        var viewBannerTopId = $MCI('#mci-bannerRolling');
        var viewBannerTop = viewBannerTopId.find('#view-banner-top');
        var rollingAdBanner = viewBannerTopId.find('.top-banner-rolling ul');
        var rollingAdBannerLi = rollingAdBanner.find('li');
        var rollingAdBannerLength = rollingAdBannerLi.length;
        var rollingAdBannerImg = [
            '/app/view/remocon/sample1/images/gagutalk_banner_1.gif',
            '/app/view/remocon/sample1/images/gagutalk_banner_2.gif'
        ];
        for(var i=0; i<rollingAdBannerLength-1; i++){
            rollingAdBannerLi.eq(i).find('img').attr('src', rollingAdBannerImg[i]);
        }
        rollingAdBannerLi.eq(rollingAdBannerLength-1).find('img').attr('src', rollingAdBannerImg[0]);
        viewBannerTopId.css({'display': 'none', 'position': 'fixed', 'top': '-85px','left': '0','width': '100%','height':'70px', 'z-index': '99999', 'box-shadow':'0px 2px 10px 0px rgba(0, 0, 0, 0.1)', '-webkit-transition':'all .7s', '-moz-transition':'all .7s', 'transition':'all .7s'});
        viewBannerTop.css({'width': '100%','height':'70px'});
        viewBannerTopId.find('img').css({'width': '320px','margin':'10px 0'});
        viewBannerTopId.find('.top-banner-rolling').css({'position': 'relative','width':'100%', 'height':'70px', 'overflow':'hidden'});
        rollingAdBanner.css({'position':'absolute', 'top':'0', 'left':'0', 'width':'100%'});
        rollingAdBannerLi.css({'width':'100%', 'height':'70px','text-align':'center','background':'#fff'});
    };
    this.Event = function () {
        var viewBannerTopId = $MCI('#mci-bannerRolling');
        var rollingAdBanner = viewBannerTopId.find('.top-banner-rolling ul');
        var rollingAdBannerLi = rollingAdBanner.find('li');
        var rollingAdBannerLength = rollingAdBannerLi.length;
        var rollingAdBannerLiHeight = Number(rollingAdBannerLi.css('height').substring(0, 2));
        var rollingAdNum = 0;

        function rollingAd(){
            rollingAdNum -= rollingAdBannerLiHeight;
            rollingAdBanner.animate({'top':rollingAdNum + 'px'}, 1000);
            if(rollingAdNum == -rollingAdBannerLiHeight * (rollingAdBannerLength - 1)){
                rollingAdBanner.animate({'top':'0px'}, 0);
                rollingAdNum = 0;
            }
        };

        var rollingId;

        var lastScrollTop = 0;
        viewBannerTopId.addClass('on');

        var scrollUp = 0;
        var scrollDown = 0;

        $MCI(window).on('scroll', function() {
            //스크롤방향에 따라 헤더변경
            if(viewBannerTopId.css('display') == 'none'){
                viewBannerTopId.css({'display':'block'});
            }
            if($MCI(window).scrollTop() > 30){
                var nowScrollTop = $MCI(this).scrollTop();
                if(nowScrollTop < lastScrollTop) {
                    //Up
                    if((scrollUp == 5) && (viewBannerTopId.hasClass('on') == false)){
                        viewBannerTopId.css({'top':'-85px'}).addClass('on');
                        clearInterval(rollingId);
                        scrollUp = 0;
                        scrollDown = 0;
                    }else if(scrollUp < 5){
                        scrollUp += 1;
                    }
                }else {
                    //Down
                    if((scrollDown == 5) && (viewBannerTopId.hasClass('on'))){
                        viewBannerTopId.css({'top':'0px'}).removeClass('on');
                        rollingId  = setInterval(function() {
                            rollingAd();
                        }, 3000);
                        scrollUp = 0;
                        scrollDown = 0;
                    }else if(scrollDown < 5){
                        scrollDown += 1;
                    }
                }
                lastScrollTop = nowScrollTop;
            }
        });
    }
    return this.Init();
}
new MCI_KOREA_ADBANNERROLLING();
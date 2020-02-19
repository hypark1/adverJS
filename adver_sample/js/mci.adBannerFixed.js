var MCI_KOREA_ADBANNERFIXED = function() {
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
                    MDL.Rest();
                    MDL.Event();
                    MDL.$ZONE = $MCI('#mci-bannerFixed');
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js", "//" + this.host + "/mci_controller/idangerous.swiper.js"];
        loadScripts(scripts);
    };
    this.markup = function() {
        var loadCss = function(scripts) {
            var script = scripts.shift();
            var el = document.createElement('link');
            el.href = script;
            el.rel = "stylesheet";
            document.head.appendChild(el);
            el.onload = function() {
                if (scripts.length) {
                    loadScripts(scripts);
                }
            };
        };
        var css = ["//" + this.host + "/mci_controller/idangerous.swiper.css"];
        loadCss(css);

        var markup = document.createElement('div');
        markup.id = "mci-bannerFixed";
        markup.innerHTML = "<div class=\"mci-bannerFixed-btn\"></div><div class=\"view-banner-wrap\"><div class=\"swiper-container\"><div class=\"swiper-wrapper\"><div class=\"swiper-slide\"><div class=\"banner-box\"><p class=\"banner-tit banner-ranking-tit\">현재 이 기사를 보는 사람 <span></span></p><div class=\"banner-box-mid\"><ul class=\"banner-ranking\"><li id=\"banner-ranking-list-dom\"><a href=\"\" class=\"link\" target=\"_blank\"><p></p><span></span></a></li></ul></div></div></div><div class=\"swiper-slide\"><div class=\"banner-box\"><p class=\"banner-tit\">실시간 인기 키워드</p><div class=\"banner-box-mid\"><ul class=\"banner-keyword\"><li id=\"banner-keyword-dom\"><a href=\"\" class=\"keyword-link\"></a> </li></ul></div></div></div><div class=\"swiper-slide\"><div class=\"banner-box\"><div class=\"banner-Ad\"><img src=\"\"></div></div></div></div><div class=\"swiper-pagination\"></div></div></div>"
        document.body.appendChild(markup);

        var fixedBanner = $MCI('#mci-bannerFixed');
        fixedBanner.css({'position':'fixed','left':'0','bottom':'0','width':'100%','height':'200px','background':'#222','-webkit-box-shadow': 'rgba(0, 0, 0, 0.2) 0px 0px 5px 1px','-moz-box-shadow': 'rgba(0, 0, 0, 0.2) 0px 0px 5px 1px','box-shadow': 'rgba(0, 0, 0, 0.2) 0px 0px 5px 1px','-webkit-transition':'all .3s','-moz-transition':'all .3s','-ms-transform':'all .3s','-o-transform':'all .3s','transition':'all .3s'});
        fixedBanner.find('.mci-bannerFixed-btn').css({'position':'absolute','top':'-30px','left':'50%','margin-left':'-40px','width':'80px','height':'80px','border-radius':'50%','background':'#222 url(/mci_controller/images/bannerArrow.png) no-repeat','background-position':' 50% 20%','-webkit-background-size':'25px','background-size':'25px','-webkit-box-shadow': 'rgba(0, 0, 0, 0.2) 0px 0px 5px 1px','-moz-box-shadow': 'rgba(0, 0, 0, 0.2) 0px 0px 5px 1px','box-shadow': 'rgba(0, 0, 0, 0.2) 0px 0px 5px 1px','z-index':'50'});
        fixedBanner.find('.view-banner-wrap').css({'position':'relative','margin-top':'10px','background':'#222','z-index':'52'});
        fixedBanner.find('.swiper-container').css({'width':'100%','height':'190px'});
        fixedBanner.find('.swiper-slide').css({'width':'100%','color':'#fff'});
        fixedBanner.find('.banner-box').css({'height':'180px','padding':'5px 25px'});
        fixedBanner.find('.banner-tit').css({'color':'#ffee05','font-size':'18px','padding-bottom':'5px','text-align':'center'});
        fixedBanner.find('.swiper-pagination').css({'position':'absolute','left':'50%','bottom':'5px','margin-left':'-30px'});
        fixedBanner.find('.banner-box-mid').css({'width':'100%','margin-top':'7px'});
        fixedBanner.find('.banner-ranking-tit').css({'text-align':'left','border-bottom':'1px solid rgba(255, 255, 255, 0.5)'});
        fixedBanner.find('.banner-ranking-tit span').css({'color':'#ffee05','font-size':'18px','vertical-align':'top'});
        fixedBanner.find('.banner-ranking').css({'position':'relative','width':'100%','height':'120px','margin-top':'5px'});
        fixedBanner.find('.banner-keyword').css({'width':'100%','height':'120px','overflow':'hidden'});
        fixedBanner.find('.banner-Ad').css({'width':'100%','height':'150px','text-align':'center'});
        fixedBanner.find('.banner-Ad img').attr('src','http://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_256%2Cw_460%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//www.enewstoday.co.kr/news/photo/201902/1270166_355603_2114.jpg').css({'width':'auto','max-width':'100%','height':'150px'});
    };
    this.Rest = function () {

        this.getRankingData = function() {
            $.ajax({
                url : 'http://send.mci1.co.kr/AdController/getRankNews',
                type : 'post'
            }).done(function(resp) {
                var resp = JSON.parse(resp);
                if (resp) {
                    console.log(resp)
                    var data = resp;

                    var $originRank = MDL.$ZONE.find('#banner-ranking-list-dom');
                    var rankList = MDL.$ZONE.find('.banner-ranking-list');
                    if(rankList){
                        MDL.$ZONE.find('.banner-ranking-list').fadeOut();
                        if(rankList.length == 16) {
                            for (var i = 0; i < 4; i++) {
                                rankList.eq(i).remove();
                            }
                        }
                    };
                    for (var i = 0; i < 4; i++) {
                        var $dom = $originRank.clone(true);
                        $dom.removeAttr('id').addClass('banner-ranking-list');
                        $dom.find('.link').attr('href',data.news[i].url);
                        var title = data.news[i].title;
                        title = title.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/&#039;/g, "'").replace(/&quot;/g, '"');
                        $dom.find('p').text((i+1)+'. '+title);
                        $dom.find('span').text(parseInt(data.news[i].score) + '명');
                        $originRank.before($dom);
                    };
                    MDL.$ZONE.find('.banner-ranking-tit span').text(1 + '명');

                    var $originKeyword = MDL.$ZONE.find('#banner-keyword-dom');
                    MDL.$ZONE.find('.banner-keyword-list').fadeOut().remove();
                    for (var i = 0; i < 10; i++) {
                        var $dom = $originKeyword.clone(true);
                        $dom.removeAttr('id').addClass('banner-keyword-list');
                        $dom.find('.keyword-link').text('#' + data.keyword[i].keyword);
                        var url = data.keyword[i].news;
                        if(url == null){
                            url = {url : "#"}
                        }
                        url = url.url
                        $dom.find('.keyword-link').attr('href',url);
                        $originKeyword.before($dom);
                    };
                    MDL.rankingCss();
                    MDL.keywordCss();
                }
            });
        };

        this.rankingCss = function(){
            MDL.$ZONE.find('.banner-ranking-list').css({'position':'absolute','left':'0','width':'100%','margin-bottom':'5px'});
            var bannerRankingListNum = 0;
            for(var i=0;i<8;i++){
                MDL.$ZONE.find('.banner-ranking-list').eq(i).css({'top':bannerRankingListNum+'px'});
                bannerRankingListNum += 28;
                if(i == 3){
                    bannerRankingListNum = 0;
                };
            };
            MDL.$ZONE.find('.banner-ranking-list p').css({'display':'inline-block','width':'85%','font-size':'16px','color':'#fff','overflow': 'hidden','text-overflow': 'ellipsis','white-space': 'nowrap'});
            MDL.$ZONE.find('.banner-ranking-list span').css({'float':'right','display':'block','color':'#fff','font-size':'16px','margin-top':'4px'});

            var rankUl = MDL.$ZONE.find('.banner-ranking');
            var rankUlHtml = rankUl.eq(0).html();
            rankUl.eq(1).html('').html(rankUlHtml);
            for (var i = 8; i < 12; i++) {
                MDL.$ZONE.find('.banner-ranking-list').eq(i).fadeOut();
            }
        };

        this.keywordCss = function(){
            MDL.$ZONE.find('.banner-keyword-list').css({'display':'inline-block','margin':'0 15px 3px 0','color':'#fff','font-size':'16px'});
            MDL.$ZONE.find('#banner-keyword-dom').css({'display':'none'});
        };

        MDL.getRankingData();

        setInterval(function(){
            MDL.getRankingData();
        }, 5000);
    };
    this.Event = function () {
        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 0,
            loop: true,
            centeredSlides: true,
            speed: 1000,
            autoplay: 7000,
            autoplayDisableOnInteraction: false,
            pagination: '.swiper-pagination',
            paginationClickable: true,
        });
        
        var fixedBanner = $MCI('#mci-bannerFixed');
        var fixedBannerBtn = fixedBanner.find('.mci-bannerFixed-btn');
        var fixedBannerNum = 0;
        fixedBannerBtn.on('click',function () {
            if(fixedBannerNum == 0){
                fixedBanner.css({'bottom':'-185px'});
                fixedBannerBtn.css({'transform':'rotate(180deg)','background-position':'50% 80%'});
                fixedBannerNum = 1;
            }else{
                fixedBanner.css({'bottom':'0'});
                fixedBannerBtn.css({'transform':'rotate(0deg)','background-position':'50% 20%'});
                fixedBannerNum = 0;
            }
        });
    };
    return this.Init();
}
new MCI_KOREA_ADBANNERFIXED();
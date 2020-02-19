var MCI_KOREA_ADBANNERCOUPON = function() {
    var MDL;
    /*sample32*/
    this.Init = function () {
        this.host = document.location.hostname;
        MDL = this;
        MDL.onLoad();
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
                    MDL.$ZONE = $MCI('#mci-bannerCoupon');
                    MDL.markup();
                    MDL.Event();
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js"];
        loadScripts(scripts);
    };
    this.markup = function() {

        this.couponLink = [];
        MDL.couponLink.push(
            { txt : '쿠폰 다운로드받기1' , 'link' : '#'},
            { txt : '쿠폰 다운로드받기2' , 'link' : '#'},
            { txt : '쿠폰 다운로드받기3' , 'link' : '#'},
        )

        var AdBanner = $MCI('.appladBanner');
        for(var i=0; i<AdBanner.length; i++){
            var adBox = AdBanner.eq(i);
            var markup = document.createElement('div');
            markup.id = "mci-bannerCoupon"+i;
            markup.innerHTML = "<div class=\"mci-bannerCoupon-box\"><div class=\"view-banner-top\">로고</div><div class=\"view-banner-content\"><div class=\"view-banner-listBox\"><div id=\"view-banner-list-dom\"><a href=\"#\"><p></p><i class=\"fas fa-arrow-down\"></i></a></div></div></div></div>";
            adBox.find('.banner_box').append(markup);

            var bannerCoupon = $MCI('#mci-bannerCoupon'+i);
            var $origin = bannerCoupon.find('#view-banner-list-dom');
            for (var j = 0; j <MDL.couponLink.length; j++) {
                var $dom = $origin.clone(true);
                $dom.removeAttr('id').addClass('view-banner-list');
                $dom.find('p').text(MDL.couponLink[j].txt);
                $dom.find('a').attr('href', MDL.couponLink[j].link);
                $origin.before($dom);
            };

            bannerCoupon.css({'position':'relative','width':'100%', 'height':'100%'});
            bannerCoupon.find('.mci-bannerCoupon-box').css({'width':'100%'});
            bannerCoupon.find('.view-banner-top').css({'width':'100%','height':'45px','text-align':'center','background':'skyblue','line-height':'45px'});
            bannerCoupon.find('.view-banner-content').css({'width':'100%','border':'1px solid #d9d9d9','box-sizing':'border-box','background':'#fff'});
            bannerCoupon.find('.view-banner-listBox').css({'padding':'15px'});
            bannerCoupon.find('.view-banner-list').css({'background':'#fff','border':'1px solid skyblue','border-radius':'5px','padding':'10px','margin-bottom':'10px'});
            var bannerCouponLength = bannerCoupon.find('.view-banner-list').length;
            bannerCoupon.find('.view-banner-list').eq(bannerCouponLength -1).css({'margin-bottom':'0'});
            bannerCoupon.find('.view-banner-list p').css({'display':'inline-block','margin':'0','font-size':'16px','color':'#222'});
            bannerCoupon.find('.view-banner-list i').css({'float':'right','margin-top':'3px','font-size':'16px','color':'#222'});
            bannerCoupon.find('#view-banner-list-dom').css({'display':'none'});
        }
    };
    this.Event = function () {
        var AdBanner = $MCI('.appladBanner');
        var num = 0;
        var bool = true;
        MDL.Event.couponDom = function () {
            for(var i=0; i<AdBanner.length; i++) {
                var bannerCoupon = $MCI('#mci-bannerCoupon' + i);
                var bannerIdx = bannerCoupon.find('.view-banner-list').eq(num);
                bannerIdx.css({'background':'skyblue'}).siblings().css({'background':'#fff'});
                bannerIdx.find('p').css({'color':'#fff'});
                bannerIdx.find('i').css({'color':'#fff'});
                MDL.Event.couponDomTime(i, num);
            }
            if(bool){
                setTimeout(function () {
                    MDL.Event.couponDom();
                },500)
                bool = false;
            }else{
                num ++;
                if(num == MDL.couponLink.length){
                    num = 0;
                }
                bool = true;
            }
        };

        MDL.Event.couponDomTime = function (i, num) {
            setTimeout(function () {
                var bannerCoupon = $MCI('#mci-bannerCoupon' + i);
                var bannerIdx = bannerCoupon.find('.view-banner-list').eq(num);
                bannerIdx.css({'background': '#fff'});
                bannerIdx.find('p').css({'color':'#222'});
                bannerIdx.find('i').css({'color':'#222'});
            }, 250)
        };

        setInterval(function () {
            MDL.Event.couponDom();
        }, 2000)
    };
    return this.Init();
}
new MCI_KOREA_ADBANNERCOUPON();
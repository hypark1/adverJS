var MCI_KOREA_CONTROLLER = function() {
    var MDL;
    this.Init = function() {
        this.host = document.location.hostname;
        MDL = this;
        this.markup();
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
                    MDL.$ZONE = $MCI('#MCI_KOREA_CONTROLLER');
                    MDL.Event();
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js", "https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v3.2&appId=553372755150589&autoLogAppEvents=1", "https://apis.google.com/js/platform.js", "https://apis.google.com/js/api:client.js", "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js", "//developers.kakao.com/sdk/js/kakao.min.js", "https://platform.twitter.com/widgets.js"];
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
        var css = ["//" + this.host + "/mci_controller/mci.controller.css"];
        loadCss(css);
        var markup = document.createElement('div');
        markup.id = "MCI_KOREA_CONTROLLER";
        markup.innerHTML = "<input type=\"hidden\" id=\"top\" value=\"\" /><div class=\"banner-rolling-shawdow\"></div><div id=\"banner-rolling\"></div><div class=\"banner-rolling-box\"><div id=\"view-banner-bot\"><div class=\"view-banner-bot-img\"><img src=\"\"></div></div></div><div id=\"banner-rolling-btnbg\"></div><div id=\"menu-round-bg\"><div class=\"menu-round-bg-question\"><i class=\"far fa-question-circle\"></i></div><div class=\"menu-round-bg-close\"><i class=\"fas fa-times\"></i></div><div class=\"menu-ranking\"><p class=\"menu-ranking-tit\">홍길동님을 위한 추천기사</p><ul><li><a href=\"#\">1.[오늘금시세]2월26일금값시세,소폭하락한국금거래소국제금값</a></li><li><a href=\"#\">2.맥도날드2월행사,버거킹·롯데리아·KFC·맘스터치2월행사大공개!“햄버거세트가단돈4900원”</a></li><li><a href=\"#\">3.정겨운전아내와이혼사유는?정겨운김우림초스피도재혼…김우림직업•학교•인스타•나이차이</a></li><li><a href=\"#\">4.다이어트커피로알려진'방탄커피',원리와부작용은?</a></li><li><a href=\"#\">5.귀에서삐소리'이명'난청의지름길?'이명 원인과 완화방법 알아보자'</a></li></ul><img src=\"https://ssl.pstatic.net/tveta/libs/1219/1219136/77d10fb6ab77aa297ff7_20190227180729376.jpg\" alt=\"[광고]메리츠화재 암보험, 하나면된다 암, 뇌졸중, 급성심근경색 동시보장(특약) 10초 보험료 계산(가입상담 1800-2869)\"data-content-type=\"image\"style=\"vertical-align:top;border:none\"></div><div class=\"menu-weather\"><p class=\"menu-weather-tit\">오늘의 날씨</p><div class=\"menu-temperature\"><i class=\"fas fa-cloud-sun\"></i><p class=\"menu-temperature-txt\">9℃</p></div><div class=\"menu-mise\"><ul class=\"cf\"><li>미세먼지<br><i class=\"far fa-smile\"></i><br><span>보통</span></li><li>초미세먼지<br><i class=\"far fa-angry\"></i><br><span>매우나쁨</span></li></ul></div></div></div><div class=\"menu-round-core left\"><div class=\"menu-round-dom \"><p class=\"icon\"><i class=\"fas\"></i><br><span></span></p></div><div class=\"menu-round-btn\"><i class=\"fas fa-plus\"></i></div></div><div class=\"menu-2depth-box\"><div class=\"menu-share menu-round-box-com\"><div id=\"tw-link-btn\"class=\"menu-2depth-com\"><p class=\"icon\"><img src=\"/mci_controller/images/tw-login.png\"/></p></div><div id=\"fb-link-btn\"class=\"menu-2depth-com\"><p class=\"icon\"><img src=\"/mci_controller/images/fb-login.png\"/></p></div><div id=\"naver-link-btn\"class=\"menu-2depth-com\"><p class=\"icon\"><img src=\"/mci_controller/images/naver-login.png\"/></p></div><div id=\"kakao-link-btn\"class=\"menu-2depth-com\"><p class=\"icon\"><img src=\"/mci_controller/images/kakao-login.png\"/></p></div><div id=\"copy-link-btn\"class=\"menu-2depth-com\"><p class=\"icon\"><input type=\"text\"class=\"sns-copyurl-url-input\"value=\"\"/><i class=\"fas fa-copy\"></i></p></div></div><div class=\"menu-subscription2\"><p class=\"menu-subscription-tit\">SNS 계정으로 로그인하세요.<br>추천 기사를 메일로 보내드립니다.</p><div class=\"menu-subscription-3rd\"><input type=\"checkbox\" id=\"subscription-3rd\" name=\"subscription-3rd\" class=\"3rdChk\"><label for=\"subscription-3rd\"><i class=\"fas fa-check-circle\"></i>제3자 동의 (필수)</label><div class=\"menu-subscription-3rd-text\"><p>이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등 대부분의 네이버 서비스를 회원과 동일하게 이용할 수 있습니다. 이용자가 메일, 캘린더, 카페, 블로그 등과 같이 개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할 경우, 네이버는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.</p></div><p class=\"menu-subscription-3rd-warning\"><i class=\"fas fa-exclamation-circle\"></i>이슈톡 제3자 동의에 동의해주세요.</p></div></div><div class=\"menu-subscription menu-round-box-com\"><div id=\"news-login-btn\"class=\"menu-2depth-com\"><p class=\"icon\">뉴스</p></div><div id=\"fb-login-btn\"class=\"menu-2depth-com\"><p class=\"icon\"><img src=\"/mci_controller/images/fb-login.png\"/></p></div><div id=\"insta-login-btn\"class=\"menu-2depth-com\"><p class=\"icon\"><img src=\"/mci_controller/images/insta-login.png\"/></p></div><div id=\"gg-login-btn\"class=\"menu-2depth-com\"><p class=\"icon\"><img src=\"/mci_controller/images/gg-login.png\"/></p></div><div id=\"naver-login-btn2\"class=\"menu-2depth-com\"><a id=\"naver-login-btn\"><p class=\"icon\"><img src=\"/mci_controller/images/naver-login.png\"/></p><span id=\"naverIdLogin\"class=\"hidden\"></span></a></div><div id=\"kakao-login-btn\"class=\"menu-2depth-com\"><p class=\"icon\"><img src=\"/mci_controller/images/kakao-login.png\"/></p></div></div><div class=\"menu-menu menu-round-box-com\"><div class=\"menu-2depth-dom\"><p class=\"icon\"></p></div></div><div class=\"menu-dark\"><div class=\"menu-dark-box\"><p class=\"menu-dark-lg\"><i class=\"fas fa-plus\"></i></p></div><div class=\"menu-dark-box\"><p class=\"menu-dark-sm\"><i class=\"fas fa-minus\"></i></p></div></div><div class=\"menu-login menu-round-box-com\"><div id=\"fb-login-btn\"class=\"menu-2depth-com\"><p class=\"icon\"><img src=\"/mci_controller/images/fb-login.png\"/></p></div><div id=\"insta-login-btn\"class=\"menu-2depth-com\"><p class=\"icon\"><img src=\"/mci_controller/images/insta-login.png\"/></p></div><div id=\"gg-login-btn\"class=\"menu-2depth-com\"><p class=\"icon\"><img src=\"/mci_controller/images/gg-login.png\"/></p></div><div id=\"naver-login-btn2\"class=\"menu-2depth-com\"><a id=\"naver-login-btn\"><p class=\"icon\"><img src=\"/mci_controller/images/naver-login.png\"/></p><span id=\"naverIdLogin\"class=\"hidden\"></span></a></div><div id=\"kakao-login-btn\"class=\"menu-2depth-com\"><p class=\"icon\"><img src=\"/mci_controller/images/kakao-login.png\"/></p></div></div><div class=\"menu-setting\"><ul class=\"cf\"><li class=\"menu-setting-dom\"><input type=\"checkbox\"id=\"\"class=\"setting-check\"value=\"\"/><label for=\"\"><i class=\"fas fa-check-circle\"></i><p></p></label></li></ul><div class=\"check-save\">저장</div></div><div class=\"menu-admin\"><div class=\"menu-admin-box\"><div class=\"menu-admin-setMenu\"><p class=\"menu-admin-tit\">사용자에게 보여지는 1depth 메뉴</p><ul class=\"cf\"><li class=\"menu-setting-dom\"><input type=\"checkbox\"id=\"\"class=\"setMenu-check\"value=\"\"/><label for=\"\"><i class=\"fas fa-check-circle\"></i><p></p></label></li></ul><ul class=\"mci-setMenu-sortable cf\"><li class=\"mci-setMenu-sortable-dom\"><p class=\"mci-setMenu-sortable-name\"></p><p class=\"mci-setMenu-sortable-val\"></p></li></ul></div><div class=\"menu-admin-setMenuChk\"><p class=\"menu-admin-tit\">보여지는 1depth 메뉴중 필수항목 5개이상</p><ul class=\"cf\"><li class=\"menu-setting-dom\"><input type=\"checkbox\"id=\"\"class=\"setMenuChk-check\"value=\"\"/><label for=\"\"><i class=\"fas fa-check-circle\"></i><p></p></label></li></ul></div><div class=\"menu-admin-menu\"><p class=\"menu-admin-tit\">1depth의 메뉴안에 2depth 설정</p><ul class=\"cf\"><li class=\"menu-setting-dom\"><input type=\"checkbox\"id=\"\"class=\"menu-check\"value=\"\"/><label for=\"\"><i class=\"fas fa-check-circle\"></i><p></p></label></li></ul></div></div><div class=\"menu-admin-save\">저장</div></div></div>";
        document.body.appendChild(markup);
        document.body.onload = function() {
            MDL.onLoad();
        }
    };
    this.Event = function () {

        //값 받기
        ;(function ($) {
            $.mciController = function (opts) {
                return this.each(function () {
                    var options = $.extend({}, $.mciController.contents, opts || {});
                })
            }
            $.mciController.contents = {
                url : '', //공유할 기사url
                title : '', //공유할 기사타이틀
                description : '', //공유할 기사내용
                img : '', //공유할 기사이미지
            }
        })(jQuery);


        /* FACEBOOK 로그인 */
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '{553372755150589}',
                cookie     : true,
                xfbml      : true,
                version    : 'v3.2'
            });
            FB.AppEvents.logPageView();

            FB.getLoginStatus(function(resp) {
                MDL.statusChangeCallback(resp);
            });
        };
        // SDK를 비동기적으로 호출
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/ko_KR/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        this.statusChangeCallback = function(resp) {
            console.log(resp);
            if (resp.status === 'connected') {
                // 페이스북을 통해서 로그인이 되어있다.
                sessionStorage.clear();
                sessionStorage.setItem('idToken', resp.authResponse.accessToken);
                MDL.testAPI();
            } else if (resp.status === 'not_authorized') {
                // 페이스북에는 로그인 했으나, 앱에는 로그인이 되어있지 않다.
                MDL.testAPI();
            } else {
                // 페이스북에 로그인이 되어있지 않다. 따라서, 앱에 로그인이 되어있는지 여부가 불확실하다.
            }
        }
        this.testAPI = function() {
            FB.api(
                '/me',
                {"fields":"id,name,email,birthday,gender,location,picture"},
                function(resp) {
                    console.log(resp);
                    sessionStorage.setItem('type', 'facebook');
                    sessionStorage.setItem('id', resp.id);
                    sessionStorage.setItem('name', resp.name);
                    sessionStorage.setItem('email', resp.email);
                    sessionStorage.setItem('gender', resp.gender);
                    sessionStorage.setItem('age', resp.birthday);
                    sessionStorage.setItem('pic', resp.picture.data.url);
                }
            );
        }
        this.fbAuthBtn = function(){
            FB.login(function(resp){
                MDL.statusChangeCallback(resp)
            })
        }
        MDL.$ZONE.on('click', '#fb-login-btn', function() {
            if(MDL.$ZONE.find('.menu-subscription2').hasClass('on')){
                MDL.fbAuthBtn();
            }else{
                MDL.$ZONE.find('.menu-subscription-3rd-warning').css({'display':'block'})
            }
        });

        /*INSTAGRAM 로그인*/
        this.instagramLogin = function() {
            MDL.authenticateInstagram(
                'f5a5059444f840f2ad1df45e5341eae6',
                'http://issue.famtimes.co.kr/news/view/',
                MDL.login_callback //optional - a callback function
            );
            return false;
        }
        var instaAccessToken = null;
        this.authenticateInstagram = function(instagramClientId, instagramRedirectUri, callback) {
            // Pop-up window size, change if you want
            var popupWidth = 700,
                popupHeight = 500,
                popupLeft = (window.screen.width - popupWidth) / 2,
                popupTop = (window.screen.height - popupHeight) / 2;
            // Url needs to point to instagram_auth.php
            var popup = window.open('instagram_auth.php', '', 'width='+popupWidth+',height='+popupHeight+',left='+popupLeft+',top='+popupTop+'');
            popup.onload = function() {
                // Open authorize url in pop-up
                if(window.location.hash.length == 0) {
                    popup.open('https://instagram.com/oauth/authorize/?client_id='+instagramClientId+'&redirect_uri='+instagramRedirectUri+'&response_type=token', '_self');
                }
                // An interval runs to get the access token from the pop-up
                var interval = setInterval(function() {
                    try {
                        // Check if hash exists
                        if(popup.location.hash.length) {
                            // Hash found, that includes the access token
                            clearInterval(interval);
                            instaAccessToken = popup.location.hash.slice(14); //slice #access_token= from string
                            popup.close();
                            if(callback != undefined && typeof callback == 'function'){
                                callback();
                            }
                        }
                    }
                    catch(evt) {
                        // Permission denied
                    }
                }, 100);
            };
        };
        this.login_callback = function(){
            //alert("You are successfully logged in! Access Token: "+accessToken);
            $.ajax({
                type: "GET",
                dataType: "jsonp",
                url: "https://api.instagram.com/v1/users/self/?access_token="+instaAccessToken,
                success: function(resp){
                    console.log(resp);
                    sessionStorage.clear();
                    sessionStorage.setItem('idToken', instaAccessToken);
                    sessionStorage.setItem('type', 'instagram');
                    sessionStorage.setItem('id', resp.data.id);
                    sessionStorage.setItem('name', resp.data.username);
                    sessionStorage.setItem('email', '');
                    sessionStorage.setItem('gender', '');
                    sessionStorage.setItem('age', '');
                    sessionStorage.setItem('pic', resp.data.profile_picture);
                }
            });
        }
        MDL.$ZONE.on('click', '#insta-login-btn', function() {
            if(MDL.$ZONE.find('.menu-subscription2').hasClass('on')){
                MDL.instagramLogin();
            }else{
                MDL.$ZONE.find('.menu-subscription-3rd-warning').css({'display':'block'})
            }
        });

        /* GOOGLE 로그인 */
        var googleUser = {};
        this.startApp = function() {
            gapi.load('auth2', function(){
                // Retrieve the singleton for the GoogleAuth library and set up the client.
                auth2 = gapi.auth2.init({
                    client_id: '585751540530-bdovgfa1vni0k8gmq7e6999ffqsb5bds.apps.googleusercontent.com',
                    cookiepolicy: 'single_host_origin',
                    // Request scopes in addition to 'profile' and 'email'
                    //scope: 'additional_scope'
                });
                MDL.attachSignin(document.getElementById('gg-login-btn'));
            });
        };

        this.attachSignin = function(element) {
            auth2.attachClickHandler(element, {},
                function(googleUser) {
                    console.log(googleUser)
                    MDL.onSignIn(googleUser)
                }, function(error) {
                    console.log(JSON.stringify(error, undefined, 2));
                }
            );
        }
        this.onSignIn = function(googleUser) {
            var profile = googleUser.getBasicProfile();
            sessionStorage.clear();
            sessionStorage.setItem('type', 'google');
            sessionStorage.setItem('id', profile.getId());
            sessionStorage.setItem('name', profile.getName());
            sessionStorage.setItem('email', profile.getEmail());
            sessionStorage.setItem('pic', profile.getImageUrl());
            sessionStorage.setItem('idToken', googleUser.getAuthResponse().id_token);
        }

        MDL.$ZONE.on('click', '#gg-login-btn', function() {
            if(MDL.$ZONE.find('.menu-subscription2').hasClass('on')){
                MDL.startApp();
            }else{
                MDL.$ZONE.find('.menu-subscription-3rd-warning').css({'display':'block'});
            }
        });

        /* NAVER */
        var naverLogin = new naver.LoginWithNaverId(
            {
                clientId: "RIUHCIiABfvERn5JsTyv",
                callbackUrl: "http://issue.famtimes.co.kr/news/callreferer",
                isPopup: false, /* 팝업을 통한 연동처리 여부 */
                loginButton: {color: "green", type: 3, height: 60} /* 로그인 버튼의 타입을 지정 */
            }
        );
        /* 설정정보를 초기화하고 연동을 준비 */
        naverLogin.init();
        /* (4-1) 임의의 링크를 설정해줄 필요가 있는 경우 */
        //MDL.$ZONE.find("#naver-login-btn").attr("href", naverLogin.generateAuthorizeUrl());

        MDL.$ZONE.on('click', '#naver-login-btn', function() {
            if(MDL.$ZONE.find('.menu-subscription2').hasClass('on')){
                window.location.href = naverLogin.generateAuthorizeUrl();
            }else{
                MDL.$ZONE.find('.menu-subscription-3rd-warning').css({'display':'block'})
            }
        });
        /* KAKAOTALK 로그인 */
        // 사용할 앱의 JavaScript 키를 설정해 주세요.
        Kakao.init('32adecee75ebdcd6751f2dfc3b4b966b');
        this.loginWithKakao = function() {
            // 로그인 창을 띄웁니다.
            Kakao.Auth.login({
                success: function(authObj) {
                    // 로그인 성공시, API를 호출합니다.
                    console.log(authObj)
                    sessionStorage.clear();
                    sessionStorage.setItem('idToken', authObj.access_token);
                    Kakao.API.request({
                        url: '/v2/user/me',
                        success: function(resp) {
                            console.log(resp);
                            sessionStorage.setItem('type', 'kakao');
                            sessionStorage.setItem('id', resp.id);
                            sessionStorage.setItem('name', resp.properties.nickname);
                            sessionStorage.setItem('email', resp.kakao_account.email);
                            sessionStorage.setItem('gender', resp.kakao_account.gender);
                            sessionStorage.setItem('age', resp.kakao_account.age_range);
                            sessionStorage.setItem('pic', resp.properties.profile_image);
                        },
                        fail: function(error) {
                            console.log(JSON.stringify(error));
                        }
                    });
                },
                fail: function(err) {
                    console.log(JSON.stringify(err));
                }
            });
        };
        MDL.$ZONE.on('click', '#kakao-login-btn', function() {
            if(MDL.$ZONE.find('.menu-subscription2').hasClass('on')){
                MDL.loginWithKakao();
            }else{
                MDL.$ZONE.find('.menu-subscription-3rd-warning').css({'display':'block'})
            }
        });

        /*FACEBOOK 공유*/
        this.fbShare = function() {
            FB.ui({
                method: "feed"
                , name   : $.mciController.contents.title  // 타이틀
                , link   : $.mciController.contents.url   // 공유할 주소
                , picture: $.mciController.contents.img // 사진
                , description: $.mciController.contents.description // 설명
            },function(resp) {

            });
        }
        MDL.$ZONE.find('#fb-link-btn').on('click',function () {
            MDL.fbShare();
        });
        /*NAVER 공유*/
        this.naverShare = function() {
            var url = encodeURI(encodeURIComponent($.mciController.contents.url));
            var title = encodeURI($.mciController.contents.title);
            var shareURL = "https://share.naver.com/web/shareView.nhn?url=" + url + "&title=" + title;
            window.open(shareURL);
        }
        MDL.$ZONE.find('#naver-link-btn').on('click',function () {
            MDL.naverShare();
        });
        /*KAKAO 공유*/
        this.kakaoShare = function() {
            Kakao.Link.sendDefault({
                objectType: 'feed',
                content: {
                    title: $.mciController.contents.title,
                    description: $.mciController.contents.description,
                    imageUrl: $.mciController.contents.img,
                    link: {
                        mobileWebUrl: $.mciController.contents.url,
                        webUrl: $.mciController.contents.url
                    }
                },
                success: function(authObj) {
                    // 로그인 성공시, API를 호출합니다.
                    Kakao.API.request({
                        url: '/v2/user/me',
                        success: function(res) {
                            console.log(JSON.stringify(res));
                        },
                        fail: function(error) {
                            console.log(JSON.stringify(error));
                        }
                    });
                },
                installTalk : true,
                fail : function(){
                    alert('카카오톡이 설치된 스마트기기에서만 이용 가능합니다.');
                },/*
                social: {
                    likeCount: 286,
                    commentCount: 45,
                    sharedCount: 845
                },
                buttons: [
                    {
                        title: '웹으로 보기',
                        link: {
                            mobileWebUrl: viewUrl,
                            webUrl: viewUrl
                        }
                    }
                ]*/
            });
        }
        MDL.$ZONE.find('#kakao-link-btn').on('click',function () {
            MDL.kakaoShare();
        });
        /*TWITTER 공유*/
        this.twitterShare = function() {
            var url = encodeURI($.mciController.contents.url);
            var title = encodeURI($.mciController.contents.title);
            window.open('https://twitter.com/intent/tweet?text='+title+'%20-%20'+url);
        }
        MDL.$ZONE.find('#tw-link-btn').on('click',function () {
            MDL.twitterShare();
        });

        /*버튼 옆 스크롤광고*/
        this.adBannerScroll = function () {
            var scrollBannerImg = MDL.$ZONE.find('.view-banner-bot-img');
            var scrollBannerImgSrc = '/mci_controller/images/scrollBanner.jpg';
            scrollBannerImg.find('img').attr('src', scrollBannerImgSrc);
            var scrollBannerWidth = Number($MCI(window).width() - 100);
            MDL.$ZONE.find('#view-banner-bot').css({'position': 'fixed', 'left': '92px', 'bottom': '9px','width': scrollBannerWidth+'px','overflow': 'hidden', 'z-index': '53'});
            scrollBannerImg.css({'width': '1024px','height': '50px'});
            scrollBannerImg.find('img').css({'display':'block','width': '100%'});

            var scrollBannerImgWidth = scrollBannerImg.css('width');
            scrollBannerImgWidth = parseInt(scrollBannerImgWidth.replace('px', ""));
            var windowWidth = Number($MCI(window).width() - 92);
            var maxScroll = parseInt((scrollBannerImgWidth - windowWidth) * 10 / 7);

            $MCI(window).on('scroll', function() {
                var scroll = parseInt($MCI(window).scrollTop());
                if(scroll <= maxScroll && scroll > 0){
                    scrollBannerImg.css({'margin-left': -(scroll * 0.7) + 'px'});
                }else if(scroll > maxScroll){
                    scrollBannerImg.css({'margin-left': -(maxScroll * 0.7) + 'px'});
                }
            });
        };

        MDL.adBannerScroll();

        var menuCore = MDL.$ZONE.find('.menu-round-core');
        var menuBg = MDL.$ZONE.find('#menu-round-bg');
        var menuSettingLi = '';

        /*메뉴 닫을때*/
        this.menu1Close = function(){
            //접을때
            $MCI('body').css({'position':'relative','top':'0','height': 'auto','overscroll-behavior':'auto'});
            $MCI(window).scrollTop(MDL.$ZONE.find('#top').val());
            menuCore.removeClass('on');
            menuBg.css({'display':'none'});
            MDL.$ZONE.find('.menu-round-btn i').css({
                "-webkit-transform":"rotate(0)",
                "-ms-transform":"rotate(0)",
                "transform":"rotate(0)"
            });
            for(var i=2;i<5;i++){
                MDL.$ZONE.find('.menu-round-'+i).css({
                    "-webkit-transform":"translate(0)",
                    "-ms-transform":"translate(0)",
                    "transform":"translate(0)"
                });
                MDL.$ZONE.find('.menu-round-'+i+' .icon').css({
                    "-webkit-transform":"translate(0)",
                    "-ms-transform":"translate(0)",
                    "transform":"translate(0)"
                });
            }
        }

        /*메뉴설정 체크박스*/
        MDL.$ZONE.on('change', 'input[type=checkbox]', function() {
            var name = $MCI(this).attr('class');
            if($MCI(this).is(":checked")){
                //클릭 됐을때
                $MCI(this).siblings('label').find('i').css({'color':'#fff'});
            }else{
                //클릭 안됐을때
                $MCI(this).siblings('label').find('i').css({'color':'#888'});
            }
            if(name == '3rdChk') {
                /*제3자동의*/
                if($MCI(this).is(":checked")) {
                    MDL.$ZONE.find('.menu-subscription2').addClass('on');
                }else {
                    MDL.$ZONE.find('.menu-subscription2').removeClass('on');
                }
            }else if(name == 'setMenu-check'){
                /*1depth 메뉴 설정*/
                var txt = $MCI(this).siblings('label').find('p').text();
                var txtEn = $MCI(this).val();
                if($MCI(this).is(":checked")){
                    var origin = MDL.$ZONE.find('.mci-setMenu-sortable-dom');
                    var dom = origin.clone(true);
                    dom.removeClass('mci-setMenu-sortable-dom').addClass('mci-setMenu-sortable-com');
                    dom.find('.mci-setMenu-sortable-name').text(txt);
                    dom.find('.mci-setMenu-sortable-val').text(txtEn);
                    origin.before(dom);
                }else{
                    var setMenuSortLi = MDL.$ZONE.find('.mci-setMenu-sortable-com');
                    for(var i=0;i<setMenuSortLi.length;i++){
                        var setMenuSortName = setMenuSortLi.eq(i).find('.mci-setMenu-sortable-name').text();
                        if(txt == setMenuSortName){
                            setMenuSortLi.eq(i).remove();
                        }
                    }

                    var bool = MDL.$ZONE.find('.menu-admin-setMenuChk').find('input[value=' + txtEn + ']').prop('checked');
                    if(bool){
                        MDL.$ZONE.find('.menu-admin-setMenuChk').find('input[value=' + txtEn + ']').prop('checked',false).siblings('label').find('i').css({'color':'#888'});
                    }
                }
            }else if(name == 'setMenuChk-check') {
                /*1depth 메뉴 중 필수메뉴*/
                if ($MCI(this).is(":checked")) {
                    var txtEn = $MCI(this).val();
                    var bool = MDL.$ZONE.find('.menu-admin-setMenu').find('input[value=' + txtEn + ']').prop('checked');
                    if (bool == false) {
                        alert('해당 메뉴를 먼저 1depth 메뉴에서 선택하세요.');
                        $MCI(this).prop('checked', false).siblings('label').find('i').css({'color': '#888'});
                    }
                }
            }
        });
        /*메뉴설정 체크박스 저장버튼 클릭*/
        MDL.$ZONE.on('click', '.check-save', function() {
            var checkList = new Array();
            var checkLi = MDL.$ZONE.find('.menu-setting li');
            var data = new Object();
            for(var i=0; i<checkLi.length; i++){
                var idx = checkLi.eq(i).find(".setting-check");
                if(idx.is(":checked")){
                    var num = idx.val();
                    var name = idx.siblings('label').text();
                    /*data = {
                        num : num,
                        name : name
                    }*/
                    data = idx.val();
                    checkList.push(data);
                }
            }
            sessionStorage.setItem('checkList', checkList);
            //location.reload();
            checkData = sessionStorage.getItem('checkList');
            var checkDataList = checkData.split(',');
            for(var i=0;i<checkDataList.length;i++) {
                menuSettingLi.eq(checkDataList[i]-1).find('.setting-check').prop("checked", true);
                menuSettingLi.eq(checkDataList[i]-1).find('.setting-check').siblings('label').find('i').css({'color':'#fff'});
            }
            MDL.setCategoryDom(checkDataList);
            MDL.menu1Close();
            MDL.menuCoreSettingDom();
            MDL.menuCoreHide();
            if(menuCore.hasClass('left')){
                MDL.menuCoreCssLeft();
            }else if(menuCore.hasClass('right')){
                MDL.menuCoreCssRight();
            }
            MDL.menuCoreStart234();
            MDL.$ZONE.find('.menu-round-com').css({'display':'block'});
            MDL.$ZONE.find('.menu-round-btn').css({'display':'block'});
            MDL.$ZONE.find('.menu-ranking').css({'display':'block'});
            MDL.$ZONE.find('.menu-round-box-com').removeClass('on');
            MDL.$ZONE.find('.menu-round-box-com').css({'display':'none'});
            MDL.$ZONE.find('.menu-setting').removeClass('on');
            MDL.$ZONE.find('.menu-setting').css({'display':'none'});
            MDL.$ZONE.find('.menu-2depth-box').removeClass('on');
        });

        /*메뉴설정 체크박스 저장버튼 클릭*/
        MDL.$ZONE.on('click', '.menu-admin-save', function() {

            var setMenuList = new Array();
            var setMenuChkList = new Array();
            var menuList = new Array();
            var setMenuLi = MDL.$ZONE.find('.mci-setMenu-sortable-com');
            var setMenuChkLi = MDL.$ZONE.find('.menu-admin-setMenuChk .menu-setting-com');
            var menuLi = MDL.$ZONE.find('.menu-admin-menu .menu-setting-com');
            var data = new Object();

            for(var i=0; i<setMenuLi.length; i++) {
                var idx = setMenuLi.eq(i).find(".mci-setMenu-sortable-val").text();
                data = idx;
                setMenuList.push(data);
            }
            if(setMenuList.length >= 5){
                for(var i=0; i<setMenuChkLi.length; i++){
                    var idx = setMenuChkLi.eq(i).find(".setMenuChk-check");
                    if(idx.is(":checked")){
                        data = idx.val();
                        setMenuChkList.push(data);
                    }
                }
                if(setMenuChkList.length >= 5){
                    for(var i=0; i<menuLi.length; i++){
                        var idx = menuLi.eq(i).find(".menu-check");
                        if(idx.is(":checked")){
                            data = idx.val();
                            menuList.push(data);
                        }
                    }
                    if(menuList.length >= 5){
                        sessionStorage.setItem('mci-setMenu', setMenuList);
                        sessionStorage.setItem('mci-setMenuChk', setMenuChkList);
                        sessionStorage.setItem('mci-menu', menuList);

                        /*MDL.menu1Close();
                        if(menuCore.hasClass('left')){
                            MDL.menuCoreCssLeft();
                        }else if(menuCore.hasClass('right')){
                            MDL.menuCoreCssRight();
                        }
                        MDL.menuCoreStart234();
                        MDL.$ZONE.find('.menu-round-com').css({'display':'block'});
                        MDL.$ZONE.find('.menu-round-btn').css({'display':'block'});
                        MDL.$ZONE.find('.menu-ranking').css({'display':'block'});
                        MDL.$ZONE.find('.menu-round-box-com').removeClass('on');
                        MDL.$ZONE.find('.menu-round-box-com').css({'display':'none'});
                        MDL.$ZONE.find('.menu-setting').removeClass('on');
                        MDL.$ZONE.find('.menu-setting').css({'display':'none'});
                        MDL.$ZONE.find('.menu-2depth-box').removeClass('on');
                        MDL.$ZONE.find('.menu-admin').removeClass('on');
                        MDL.$ZONE.find('.menu-admin').css({'display':'none'});*/

                        location.reload();
                    }else{
                        alert('메뉴의 2depth 메뉴를 5개이상 선택하세요.');
                    }
                }else{
                    alert('1depth 메뉴 중 필수메뉴를 5개이상 선택하세요.');
                }
            }else{
                alert('1depth 메뉴를 5개이상 선택하세요.');
            }


        });

        var checkData = sessionStorage.getItem('checkList');
        if(checkData == null){
            sessionStorage.setItem('checkList', 'home,menu,setting,admin,login,share,subscription');
            sessionStorage.setItem('mci-setMenu', 'menu,setting,home,share,subscription,dark,next,admin');
            sessionStorage.setItem('mci-setMenuChk', 'home,menu,setting,subscription,share');
            sessionStorage.setItem('mci-menu', 'news,entertainment,food,health,webtoon,shopping,video');
            checkData = sessionStorage.getItem('checkList');
        }
        var checkDataList = checkData.split(',');

        /*저장된 체크박스값 적용*/
        this.checkMenu = function(){
            checkData = sessionStorage.getItem('checkList');
            checkDataList = checkData.split(',');
            menuSettingLi = MDL.$ZONE.find('.menu-setting li');
            for(var i=0;i<menuSettingLi.length;i++) {
                for(var j=0;j<checkDataList.length;j++){
                    if(menuSettingLi.eq(i).find('.setting-check').val() == checkDataList[j]){
                        menuSettingLi.eq(i).find('.setting-check').prop("checked", true);
                        menuSettingLi.eq(i).find('.setting-check').siblings('label').find('i').css({'color':'#fff'});
                    }
                }
            }
        };

        /*1depth 메뉴 자동 생성*/
        this.setCategoryDom = function(data) {
            var origin = MDL.$ZONE.find('.menu-round-dom');
            MDL.$ZONE.find('.menu-round-com').remove();
            //console.log(data)
            for (var i = 0; i < data.length; i++) {
                var dom = origin.clone(true);
                dom.removeClass('menu-round-dom').addClass('menu-round-com');
                if(data[i] == 'home'){
                    dom.find('i').addClass('fa-home');
                    dom.attr('id','menu-round-home');
                    dom.find('span').text('홈으로')
                }else if(data[i] == 'menu'){
                    dom.find('i').addClass('fa-bars');
                    dom.attr('id','menu-round-menu');
                    dom.find('span').text('메뉴')
                }else if(data[i] == 'setting'){
                    dom.find('i').addClass('fa-cog');
                    dom.attr('id','menu-round-setting');
                    dom.find('span').text('설정')
                }else if(data[i] == 'login'){
                    dom.find('i').addClass('fa-user');
                    dom.attr('id','menu-round-login');
                    dom.find('span').text('로그인')
                }else if(data[i] == 'share'){
                    dom.find('i').addClass('fa-share-square');
                    dom.attr('id','menu-round-share');
                    dom.find('span').text('공유')
                }else if(data[i] == 'subscription'){
                    dom.find('i').addClass('fa-envelope');
                    dom.attr('id','menu-round-subscription');
                    dom.find('span').text('구독')
                }else if(data[i] == 'dark'){
                    dom.find('i').addClass('fa-moon');
                    dom.attr('id','menu-round-dark');
                    dom.find('span').text('다크모드')
                }else if(data[i] == 'next'){
                    dom.find('i').addClass('fa-angle-right');
                    dom.attr('id','menu-round-next');
                    dom.find('span').text('다음기사')
                }else if(data[i] == 'write'){
                    dom.find('i').addClass('fa-edit');
                    dom.find('span').text('글쓰기')
                }else if(data[i] == 'admin'){
                    dom.find('i').addClass('fa-tools');
                    dom.attr('id','menu-round-admin');
                    dom.find('span').text('어드민')
                }
                dom.data('data', data[i]);
                origin.before(dom);
            }
        };
        MDL.setCategoryDom(checkDataList);

        /*2depth 메뉴 자동 생성*/
        this.setMenuDom = function() {
            var menu = sessionStorage.getItem('mci-menu')
            var menuDataList = menu.split(',');
            var origin = MDL.$ZONE.find('.menu-menu .menu-2depth-dom');
            MDL.$ZONE.find('.menu-menu .menu-2depth-com').remove();
            for (var i = 0; i < menuDataList.length; i++) {
                var dom = origin.clone(true);
                dom.removeClass('menu-2depth-dom').addClass('menu-2depth-com');
                if(menuDataList[i] == 'news'){
                    dom.find('p').text('뉴스');
                }else if(menuDataList[i] == 'entertainment'){
                    dom.find('p').text('연예');
                }else if(menuDataList[i] == 'food'){
                    dom.find('p').text('음식');
                }else if(menuDataList[i] == 'health'){
                    dom.find('p').text('건강');
                }else if(menuDataList[i] == 'webtoon'){
                    dom.find('p').text('웹툰');
                }else if(menuDataList[i] == 'shopping'){
                    dom.find('p').text('쇼핑');
                }else if(menuDataList[i] == 'video'){
                    dom.find('p').text('영상');
                };
                dom.data('data', menuDataList[i]);
                origin.before(dom);
            };
        };

        //설정값 체크박스 생성
        this.SettingListIfDom = function (dom, tit, num, txt, data, name) {
            if(data == tit){
                dom.find('input').prop("checked", true).attr('disabled', 'disabled');
                dom.find('label').find('i').css({'color':'#fff'});
                dom.find('label').find('p').css({'color':'#fff'});
            }
            dom.find('input').attr('id', name+num);
            dom.find('input').val(tit);
            dom.find('label').attr('for', name+num);
            dom.find('label p').text(txt);
        };

        //설정값 체크박스 생성
        this.adminSettingListIfDom = function (dom, tit, num, txt, data, name) {
            if(data == tit){
                dom.find('input').prop("checked", true);
                dom.find('label').find('i').css({'color':'#fff'});
                dom.find('label').find('p').css({'color':'#fff'});
            }
            dom.find('input').attr('id', name+num);
            dom.find('input').val(tit);
            dom.find('label').attr('for', name+num);
            dom.find('label p').text(txt);
        };

        //설정값 체크박스 생성
        this.adminsetMenuSettingListIfDom = function (dom, txt, txtEn) {
            dom.find('.mci-setMenu-sortable-name').text(txt);
            dom.find('.mci-setMenu-sortable-val').text(txtEn);
        };

        //setting - 관리자 설정값으로 변경
        this.userSettingDom = function() {
            var menu = sessionStorage.getItem('mci-setMenu');
            var menuDataList = menu.split(',');
            var menuChk = sessionStorage.getItem('mci-setMenuChk');
            var menuChkDataList = menuChk.split(',');
            var origin = MDL.$ZONE.find('.menu-setting .menu-setting-dom');
            var name = 'user-check-';
            MDL.$ZONE.find('.menu-setting .menu-setting-com').remove();
            for (var i = 0; i < menuDataList.length; i++) {
                var dom = origin.clone(true);
                dom.removeClass('menu-setting-dom').addClass('menu-setting-com');
                for(var j=0; j < menuChkDataList.length; j++){
                    if(menuDataList[i] == 'home'){
                        MDL.SettingListIfDom(dom,'home','1','홈으로',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'menu'){
                        MDL.SettingListIfDom(dom,'menu','2','메뉴',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'setting'){
                        MDL.SettingListIfDom(dom,'setting','3','설정',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'login'){
                        MDL.SettingListIfDom(dom,'login','4','로그인',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'share'){
                        MDL.SettingListIfDom(dom,'share','5','공유',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'subscription'){
                        MDL.SettingListIfDom(dom,'subscription','6','구독',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'dark'){
                        MDL.SettingListIfDom(dom,'dark','7','다크모드',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'next'){
                        MDL.SettingListIfDom(dom,'next','8','다음기사',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'write'){
                        MDL.SettingListIfDom(dom,'write','9','글쓰기',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'admin') {
                        MDL.SettingListIfDom(dom, 'admin', '10', '어드민', menuChkDataList[j], name);
                    }
                }
                dom.data('data', menuDataList[i]);
                origin.before(dom);
            }
        };

        //admin - 관리자 설정값 나타나는곳
        this.adminSettingDom = function() {
            var menu = 'home,menu,setting,login,share,subscription,dark,next,write,admin';
            var menuDataList = menu.split(',');
            var menuChk = sessionStorage.getItem('mci-setMenu');
            var menuChkDataList = menuChk.split(',');
            var origin = MDL.$ZONE.find('.menu-admin-setMenu .menu-setting-dom');
            var name = 'admin-check-';
            MDL.$ZONE.find('.menu-admin-setMenu .menu-setting-com').remove();
            for (var i = 0; i < menuDataList.length; i++) {
                var dom = origin.clone(true);
                dom.removeClass('menu-setting-dom').addClass('menu-setting-com');
                for(var j=0; j < menuChkDataList.length; j++){
                    if(menuDataList[i] == 'home'){
                        MDL.adminSettingListIfDom(dom,'home','1','홈으로',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'menu'){
                        MDL.adminSettingListIfDom(dom,'menu','2','메뉴',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'setting'){
                        MDL.adminSettingListIfDom(dom,'setting','3','설정',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'login'){
                        MDL.adminSettingListIfDom(dom,'login','4','로그인',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'share'){
                        MDL.adminSettingListIfDom(dom,'share','5','공유',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'subscription'){
                        MDL.adminSettingListIfDom(dom,'subscription','6','구독',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'dark'){
                        MDL.adminSettingListIfDom(dom,'dark','7','다크모드',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'next'){
                        MDL.adminSettingListIfDom(dom,'next','8','다음기사',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'write'){
                        MDL.adminSettingListIfDom(dom,'write','9','글쓰기',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'admin') {
                        MDL.adminSettingListIfDom(dom, 'admin', '10', '어드민', menuChkDataList[j], name);
                    }
                }
                dom.data('data', menuDataList[i]);
                origin.before(dom);
            }
        };

        //admin - 관리자 설정값 나타나는곳 - 설정된 메뉴 순서대로
        this.adminSettingDom2 = function() {
            var menuChk = sessionStorage.getItem('mci-setMenu');
            var menuChkDataList = menuChk.split(',');
            MDL.$ZONE.find('.mci-setMenu-sortable-com').remove();
            var origin = MDL.$ZONE.find('.mci-setMenu-sortable-dom');
            for(var i=0; i < menuChkDataList.length; i++){
                var dom = origin.clone(true);
                dom.removeClass('mci-setMenu-sortable-dom').addClass('mci-setMenu-sortable-com');
                if(menuChkDataList[i] == 'home'){
                    MDL.adminsetMenuSettingListIfDom(dom, '홈으로', menuChkDataList[i]);
                }else if(menuChkDataList[i] == 'menu'){
                    MDL.adminsetMenuSettingListIfDom(dom,'메뉴', menuChkDataList[i]);
                }else if(menuChkDataList[i] == 'setting'){
                    MDL.adminsetMenuSettingListIfDom(dom,'설정', menuChkDataList[i]);
                }else if(menuChkDataList[i] == 'login'){
                    MDL.adminsetMenuSettingListIfDom(dom,'로그인', menuChkDataList[i]);
                }else if(menuChkDataList[i] == 'share'){
                    MDL.adminsetMenuSettingListIfDom(dom,'공유', menuChkDataList[i]);
                }else if(menuChkDataList[i] == 'subscription'){
                    MDL.adminsetMenuSettingListIfDom(dom,'구독', menuChkDataList[i]);
                }else if(menuChkDataList[i] == 'dark'){
                    MDL.adminsetMenuSettingListIfDom(dom,'다크모드', menuChkDataList[i]);
                }else if(menuChkDataList[i] == 'next'){
                    MDL.adminsetMenuSettingListIfDom(dom,'다음기사', menuChkDataList[i]);
                }else if(menuChkDataList[i] == 'write'){
                    MDL.adminsetMenuSettingListIfDom(dom,'글쓰기', menuChkDataList[i]);
                }else if(menuChkDataList[i] == 'admin') {
                    MDL.adminsetMenuSettingListIfDom(dom,'어드민', menuChkDataList[i]);
                }
                origin.before(dom);
            }
        };

        //admin - 디폴트메뉴 설정 5개이상
        this.adminCheckedSettingDom = function() {
            var menu = 'home,menu,setting,login,share,subscription,dark,next,write,admin'
            var menuDataList = menu.split(',');
            var menuChk = sessionStorage.getItem('mci-setMenuChk');
            var menuChkDataList = menuChk.split(',');
            var origin = MDL.$ZONE.find('.menu-admin-setMenuChk .menu-setting-dom');
            var name = 'admin-checked-';
            MDL.$ZONE.find('.menu-admin-setMenuChk .menu-setting-com').remove();
            for (var i = 0; i < menuDataList.length; i++) {
                var dom = origin.clone(true);
                dom.removeClass('menu-setting-dom').addClass('menu-setting-com');
                for(var j=0; j < menuChkDataList.length; j++){
                    if(menuDataList[i] == 'home'){
                        MDL.adminSettingListIfDom(dom,'home','1','홈으로',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'menu'){
                        MDL.adminSettingListIfDom(dom,'menu','2','메뉴',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'setting'){
                        MDL.adminSettingListIfDom(dom,'setting','3','설정',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'login'){
                        MDL.adminSettingListIfDom(dom,'login','4','로그인',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'share'){
                        MDL.adminSettingListIfDom(dom,'share','5','공유',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'subscription'){
                        MDL.adminSettingListIfDom(dom,'subscription','6','구독',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'dark'){
                        MDL.adminSettingListIfDom(dom,'dark','7','다크모드',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'next'){
                        MDL.adminSettingListIfDom(dom,'next','8','다음기사',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'write'){
                        MDL.adminSettingListIfDom(dom,'write','9','글쓰기',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'admin') {
                        MDL.adminSettingListIfDom(dom, 'admin', '10', '어드민', menuChkDataList[j], name);
                    }
                }
                dom.data('data', menuDataList[i]);
                origin.before(dom);
            }
        };

        //admin - 메뉴의 2depth 메뉴값 설정 5개이상
        this.adminMenuSettingDom = function() {
            var menu = 'news,entertainment,food,health,webtoon,shopping,video'
            var menuDataList = menu.split(',');
            var menuChk = sessionStorage.getItem('mci-menu');
            var menuChkDataList = menuChk.split(',');
            var origin = MDL.$ZONE.find('.menu-admin-menu .menu-setting-dom');
            var name = 'admin-menu-';
            MDL.$ZONE.find('.menu-admin-menu .menu-setting-com').remove();
            for (var i = 0; i < menuDataList.length; i++) {
                var dom = origin.clone(true);
                dom.removeClass('menu-setting-dom').addClass('menu-setting-com');
                for(var j=0; j < menuChkDataList.length; j++){
                    if(menuDataList[i] == 'news'){
                        MDL.adminSettingListIfDom(dom,'news','1','뉴스',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'food'){
                        MDL.adminSettingListIfDom(dom,'food','2','음식',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'health'){
                        MDL.adminSettingListIfDom(dom,'health','3','건강',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'webtoon'){
                        MDL.adminSettingListIfDom(dom,'webtoon','4','웹툰',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'shopping'){
                        MDL.adminSettingListIfDom(dom,'shopping','5','쇼핑',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'video'){
                        MDL.adminSettingListIfDom(dom,'video','6','영상',menuChkDataList[j], name);
                    }else if(menuDataList[i] == 'entertainment'){
                        MDL.adminSettingListIfDom(dom,'entertainment','7','연예',menuChkDataList[j], name);
                    }
                }
                dom.data('data', menuDataList[i]);
                origin.before(dom);
            }
        };

        /*1depth*/
        var menuCoreLength = MDL.$ZONE.find('.menu-round-com').length;

        /*2depth*/
        var menu2 = MDL.$ZONE.find('.menu-round-box-com');
        var menu2Length = menu2.length;

        var menuList = new Array();

        this.menuListDom = function () {
            for(var i=0; i<menu2Length; i++){
                var data = new Object();
                data.name = '.'+menu2.eq(i).attr('class').split(' ')[0];
                data.length = menu2.eq(i).find('.menu-2depth-com').length;
                menuList.push(data);

                if(data.length > 3){

                }
            }
        }

        /*처음 펼칠때 3개 이외의 것들이 보이지 않게하기위해*/
        this.menuCoreHide = function(){
            for(var i=5;i<(menuCoreLength+1);i++){
                MDL.$ZONE.find('.menu-round-'+i).css({'display':'none'});
            }
            MDL.$ZONE.find('.menu-round-1').css({'display':'none'});
        };
        this.menuCoreShow = function(){
            for(var i=5;i<(menuCoreLength+1);i++){
                MDL.$ZONE.find('.menu-round-'+i).css({'display':'block'});
            }
            MDL.$ZONE.find('.menu-round-1').css({'display':'block'});
        };

        /*1depth - class붙이기*/
        this.menuCoreSettingDom = function(){
            menuCoreLength = MDL.$ZONE.find('.menu-round-com').length;
            for(var i=0;i<menuCoreLength;i++){
                MDL.$ZONE.find('.menu-round-com').eq(i).addClass('menu-round-'+(i+1));
                MDL.$ZONE.find('.menu-round-com').eq(i+1).addClass('menu-round-1-'+(i+1));
            }
            MDL.$ZONE.find('.menu-round-com').eq(0).addClass('menu-round-2-'+menuCoreLength);
        }

        /*1depth - css적용*/
        this.menuCoreCssLeft = function(){
            var numDiv = -180;
            var numP = 180;
            for(var i=1;i<7;i++){
                numDiv += 45;
                MDL.$ZONE.find('.menu-round-'+i).css({
                    "-webkit-transform":"rotate("+numDiv+"deg) translate(110px)",
                    "-ms-transform":"rotate("+numDiv+"deg) translate(110px)",
                    "transform":"rotate("+numDiv+"deg) translate(110px)"
                });
                numP -= 45;
                MDL.$ZONE.find('.menu-round-'+i+' .icon').css({
                    "-webkit-transform":"rotate("+numP+"deg) translate(0)",
                    "-ms-transform":"rotate("+numP+"deg) translate(0)",
                    "transform":"rotate("+numP+"deg) translate(0)"
                });
            }
            for(var i=7;i<(menuCoreLength+1);i++){
                MDL.$ZONE.find('.menu-round-'+i).css({
                    "-webkit-transform":"rotate(180deg) translate(110px)",
                    "-ms-transform":"rotate(180deg) translate(110px)",
                    "transform":"rotate(180deg) translate(110px)"
                });
                numP -= 45;
                MDL.$ZONE.find('.menu-round-'+i+' .icon').css({
                    "-webkit-transform":"rotate(-180deg) translate(0)",
                    "-ms-transform":"rotate(-180deg) translate(0)",
                    "transform":"rotate(-180deg) translate(0)"
                });
            }
        }

        /*1depth - css적용*/
        this.menuCoreCssRight = function(){
            var numDiv = -270;
            var numP = 270;
            for(var i=1;i<7;i++){
                numDiv += 45;
                MDL.$ZONE.find('.menu-round-'+i).css({
                    "-webkit-transform":"rotate("+numDiv+"deg) translate(110px)",
                    "-ms-transform":"rotate("+numDiv+"deg) translate(110px)",
                    "transform":"rotate("+numDiv+"deg) translate(110px)"
                });
                numP -= 45;
                MDL.$ZONE.find('.menu-round-'+i+' .icon').css({
                    "-webkit-transform":"rotate("+numP+"deg) translate(0)",
                    "-ms-transform":"rotate("+numP+"deg) translate(0)",
                    "transform":"rotate("+numP+"deg) translate(0)"
                });
            }
            for(var i=7;i<(menuCoreLength+1);i++){
                MDL.$ZONE.find('.menu-round-'+i).css({
                    "-webkit-transform":"rotate(-270deg) translate(110px)",
                    "-ms-transform":"rotate(-270deg) translate(110px)",
                    "transform":"rotate(-270deg) translate(110px)"
                });
                numP -= 45;
                MDL.$ZONE.find('.menu-round-'+i+' .icon').css({
                    "-webkit-transform":"rotate(270deg) translate(0)",
                    "-ms-transform":"rotate(270deg) translate(0)",
                    "transform":"rotate(270deg) translate(0)"
                });
            }
        }

        /*1depth - css적용(보이는세개)*/
        this.menuCoreStart234 = function(){
            var numDiv = -135;
            var numP = 135;
            for(var i=2;i<5;i++){
                numDiv += 45;
                MDL.$ZONE.find('.menu-round-'+i).css({
                    "-webkit-transform":"translate(0)",
                    "-ms-transform":"translate(0)",
                    "transform":"translate(0)",
                    "display":"block"
                });
                numP -= 45;
                MDL.$ZONE.find('.menu-round-'+i+' .icon').css({
                    "-webkit-transform":"translate(0)",
                    "-ms-transform":"translate(0)",
                    "transform":"translate(0)"
                });
            }
        }

        /*1depth - css적용(보이는세개)*/
        this.menuLRMove = function(){
            MDL.$ZONE.find('.menu-round-com').css({'display':'none'});
        }

        /*1depth - 돌리기 왼쪽*/
        this.menuRolling1depthLeft = function(){
            MDL.$ZONE.find('.menu-round-com').removeClass('menu-round-left');
            if(MDL.$ZONE.find('.menu-round-com').hasClass('menu-round-2-'+menuCoreLength)){
                for(var i=2;i<menuCoreLength;i++){
                    MDL.$ZONE.find('.menu-round-1-'+i).addClass('menu-round-2-'+(i-1)+' menu-round-'+(i)).removeClass('menu-round-1-'+i+' menu-round-'+(i+1));
                }
                MDL.$ZONE.find('.menu-round-2-'+menuCoreLength).addClass('menu-round-2-'+(menuCoreLength-1)+' menu-round-'+menuCoreLength+' menu-round-left').removeClass('menu-round-2-'+menuCoreLength+' menu-round-1');
                MDL.$ZONE.find('.menu-round-1-1').addClass('menu-round-1-'+menuCoreLength+' menu-round-1').removeClass('menu-round-1-1 menu-round-2');
            }else{
                for(var i=2;i<menuCoreLength;i++){
                    MDL.$ZONE.find('.menu-round-2-'+i).addClass('menu-round-1-'+(i-1)+' menu-round-'+(i)).removeClass('menu-round-2-'+i+' menu-round-'+(i+1));
                }
                MDL.$ZONE.find('.menu-round-1-'+menuCoreLength).addClass('menu-round-1-'+(menuCoreLength-1)+' menu-round-'+menuCoreLength+' menu-round-left').removeClass('menu-round-1-'+menuCoreLength+' menu-round-1');
                MDL.$ZONE.find('.menu-round-2-1').addClass('menu-round-2-'+menuCoreLength+' menu-round-1').removeClass('menu-round-2-1 menu-round-2');
            }
            if(menuCore.hasClass('left')){
                MDL.menuCoreCssLeft();
            }else if(menuCore.hasClass('right')){
                MDL.menuCoreCssRight();
            }
        }

        /*1depth - 돌리기 오른쪽*/
        this.menuRolling1depthRight = function(){
            MDL.$ZONE.find('.menu-round-com').removeClass('menu-round-left');
            if(MDL.$ZONE.find('.menu-round-com').hasClass('menu-round-2-'+menuCoreLength)){
                for(var i=1;i<(menuCoreLength-1);i++){
                    MDL.$ZONE.find('.menu-round-1-'+i).addClass('menu-round-2-'+(i+1)+' menu-round-'+(i+2)).removeClass('menu-round-1-'+i+' menu-round-'+(i+1));
                }
                MDL.$ZONE.find('.menu-round-1-'+(menuCoreLength-1)).addClass('menu-round-1-'+menuCoreLength+' menu-round-1 menu-round-left').removeClass('menu-round-1-'+(menuCoreLength-1)+' menu-round-'+menuCoreLength);
                MDL.$ZONE.find('.menu-round-2-'+menuCoreLength).addClass('menu-round-2-1 menu-round-2').removeClass('menu-round-2-'+menuCoreLength+' menu-round-1');
            }else{
                for(var i=1;i<(menuCoreLength-1);i++){
                    MDL.$ZONE.find('.menu-round-2-'+i).addClass('menu-round-1-'+(i+1)+' menu-round-'+(i+2)).removeClass('menu-round-2-'+i+' menu-round-'+(i+1));
                }
                MDL.$ZONE.find('.menu-round-2-'+(menuCoreLength-1)).addClass('menu-round-2-'+menuCoreLength+' menu-round-1 menu-round-left').removeClass('menu-round-2-'+(menuCoreLength-1)+' menu-round-'+menuCoreLength);
                MDL.$ZONE.find('.menu-round-1-'+menuCoreLength).addClass('menu-round-1-1 menu-round-2').removeClass('menu-round-1-'+menuCoreLength+' menu-round-1');
            }
            if(menuCore.hasClass('left')){
                MDL.menuCoreCssLeft();
            }else if(menuCore.hasClass('right')){
                MDL.menuCoreCssRight();
            }
        }

        /*2depth - class붙이기*/
        this.menu2SettingDom = function(){
            for(var j=0;j<menu2Length;j++){
                var menu2List = menu2.eq(j).find('.menu-2depth-com');
                var menu2ListLength = menu2List.length;
                for(var i=0;i<menu2ListLength;i++){
                    menu2List.eq(i).addClass('menu-2depth-'+(i+1));
                    menu2List.eq(i+1).addClass('menu-2depth-1-'+(i+1));
                }
                menu2List.eq(0).addClass('menu-2depth-2-'+menu2ListLength);
            }
        }

        /*2depth - css적용*/
        this.menu2CssLeft = function(){
            var numDiv = -180;
            var numP = 180;
            for(var i=1;i<8;i++){
                numDiv += 45;
                MDL.$ZONE.find('.menu-2depth-'+i).css({
                    "-webkit-transform":"rotate("+numDiv+"deg) translate(110px)",
                    "-ms-transform":"rotate("+numDiv+"deg) translate(110px)",
                    "transform":"rotate("+numDiv+"deg) translate(110px)"
                });
                numP -= 45;
                MDL.$ZONE.find('.menu-2depth-'+i+' .icon').css({
                    "-webkit-transform":"rotate("+numP+"deg) translate(0)",
                    "-ms-transform":"rotate("+numP+"deg) translate(0)",
                    "transform":"rotate("+numP+"deg) translate(0)"
                });
            }
            for(var j=0;j<menu2Length;j++) {
                var menu2List = menu2.eq(j).find('.menu-2depth-com');
                var menu2ListLength = menu2List.length;
                if(menu2ListLength > 7){
                    for(var i=8;i<(menu2ListLength+1);i++){
                        MDL.$ZONE.find('.menu-2depth-'+i).css({
                            "-webkit-transform":"rotate(180deg) translate(110px)",
                            "-ms-transform":"rotate(180deg) translate(110px)",
                            "transform":"rotate(180deg) translate(110px)"
                        });
                        numP -= 45;
                        MDL.$ZONE.find('.menu-2depth-'+i+' .icon').css({
                            "-webkit-transform":"rotate(-180deg) translate(0)",
                            "-ms-transform":"rotate(-180deg) translate(0)",
                            "transform":"rotate(-180deg) translate(0)"
                        });
                    }
                }
            }
        }

        /*1depth - css적용*/
        this.menu2CssRight = function(){
            var numDiv = -270;
            var numP = 270;
            for(var i=1;i<8;i++){
                numDiv += 45;
                MDL.$ZONE.find('.menu-2depth-'+i).css({
                    "-webkit-transform":"rotate("+numDiv+"deg) translate(110px)",
                    "-ms-transform":"rotate("+numDiv+"deg) translate(110px)",
                    "transform":"rotate("+numDiv+"deg) translate(110px)"
                });
                numP -= 45;
                MDL.$ZONE.find('.menu-2depth-'+i+' .icon').css({
                    "-webkit-transform":"rotate("+numP+"deg) translate(0)",
                    "-ms-transform":"rotate("+numP+"deg) translate(0)",
                    "transform":"rotate("+numP+"deg) translate(0)"
                });
            }
            for(var j=0;j<menu2Length;j++) {
                var menu2List = menu2.eq(j).find('.menu-2depth-com');
                var menu2ListLength = menu2List.length;
                if(menu2ListLength > 7){
                    for(var i=8;i<(menu2ListLength+1);i++){
                        MDL.$ZONE.find('.menu-2depth-'+i).css({
                            "-webkit-transform":"rotate(90deg) translate(110px)",
                            "-ms-transform":"rotate(90deg) translate(110px)",
                            "transform":"rotate(90deg) translate(110px)"
                        });
                        numP -= 45;
                        MDL.$ZONE.find('.menu-2depth-'+i+' .icon').css({
                            "-webkit-transform":"rotate(-90deg) translate(0)",
                            "-ms-transform":"rotate(-90deg) translate(0)",
                            "transform":"rotate(-90deg) translate(0)"
                        });
                    }
                }
            }
        }

        /*2depth - 돌리기 왼쪽*/
        this.menuRolling2depthLeft = function(menuLength, menuID){
            menuID.find('.menu-2depth-com').removeClass('menu-round-left');
            if(menuID.find('.menu-2depth-com').hasClass('menu-2depth-2-'+menuLength)){
                for(var i=2;i<menuLength;i++){
                    menuID.find('.menu-2depth-1-'+i).addClass('menu-2depth-2-'+(i-1)+' menu-2depth-'+(i)).removeClass('menu-2depth-1-'+i+' menu-2depth-'+(i+1));
                }
                menuID.find('.menu-2depth-2-'+menuLength).addClass('menu-2depth-2-'+(menuLength-1)+' menu-2depth-'+menuLength+' menu-round-left').removeClass('menu-2depth-2-'+menuLength+' menu-2depth-1');
                menuID.find('.menu-2depth-1-1').addClass('menu-2depth-1-'+menuLength+' menu-2depth-1').removeClass('menu-2depth-1-1 menu-2depth-2');
            }else{
                for(var i=2;i<menuLength;i++){
                    menuID.find('.menu-2depth-2-'+i).addClass('menu-2depth-1-'+(i-1)+' menu-2depth-'+(i)).removeClass('menu-2depth-2-'+i+' menu-2depth-'+(i+1));
                }
                menuID.find('.menu-2depth-1-'+menuLength).addClass('menu-2depth-1-'+(menuLength-1)+' menu-2depth-'+menuLength+' menu-round-left').removeClass('menu-2depth-1-'+menuLength+' menu-2depth-1');
                menuID.find('.menu-2depth-2-1').addClass('menu-2depth-2-'+menuLength+' menu-2depth-1').removeClass('menu-2depth-2-1 menu-2depth-2');
            }
            if(menuCore.hasClass('left')){
                MDL.menu2CssLeft();
            }else if(menuCore.hasClass('right')){
                MDL.menu2CssRight();
            }
        }

        /*2depth - 돌리기 오른쪽*/
        this.menuRolling2depthRight = function(menuLength, menuID){
            menuID.find('.menu-2depth-com').removeClass('menu-round-left');
            if(menuID.find('.menu-2depth-com').hasClass('menu-2depth-2-'+menuLength)){
                for(var i=1;i<(menuLength-1);i++){
                    menuID.find('.menu-2depth-1-'+i).addClass('menu-2depth-2-'+(i+1)+' menu-2depth-'+(i+2)).removeClass('menu-2depth-1-'+i+' menu-2depth-'+(i+1));
                }
                menuID.find('.menu-2depth-1-'+(menuLength-1)).addClass('menu-2depth-1-'+menuLength+' menu-2depth-1 menu-round-left').removeClass('menu-2depth-1-'+(menuLength-1)+' menu-2depth-'+menuLength);
                menuID.find('.menu-2depth-2-'+menuLength).addClass('menu-2depth-2-1 menu-2depth-2').removeClass('menu-2depth-2-'+menuLength+' menu-2depth-1');
            }else{
                for(var i=1;i<(menuLength-1);i++){
                    menuID.find('.menu-2depth-2-'+i).addClass('menu-2depth-1-'+(i+1)+' menu-2depth-'+(i+2)).removeClass('menu-2depth-2-'+i+' menu-2depth-'+(i+1));
                }
                menuID.find('.menu-2depth-2-'+(menuLength-1)).addClass('menu-2depth-2-'+menuLength+' menu-2depth-1 menu-round-left').removeClass('menu-2depth-2-'+(menuLength-1)+' menu-2depth-'+menuLength);
                menuID.find('.menu-2depth-1-'+menuLength).addClass('menu-2depth-1-1 menu-2depth-2').removeClass('menu-2depth-1-'+menuLength+' menu-2depth-1');
            }
            if(menuCore.hasClass('left')){
                MDL.menu2CssLeft();
            }else if(menuCore.hasClass('right')){
                MDL.menu2CssRight();
            }
        }

        this.depth2Dom1 = function(depth2, depth1){
            //2depth 펼때
            depth2.addClass('on');
            menuCore.removeClass('on');
            MDL.$ZONE.find('.menu-2depth-box').addClass('on');
            depth1.css({
                "-webkit-transform":"translate(0)",
                "-ms-transform":"translate(0)",
                "transform":"translate(0)"
            });
            depth1.find('.icon').css({
                "-webkit-transform":"translate(0)",
                "-ms-transform":"translate(0)",
                "transform":"translate(0)"
            });
            depth1.siblings().fadeOut(0);
            depth2.fadeIn(200);
            MDL.mobileVibrate(50);
        }

        this.depth2Dom2 = function(depth2, depth1){
            //2depth 접을때 - 왼쪽
            depth2.removeClass('on');
            menuCore.addClass('on');
            MDL.$ZONE.find('.menu-2depth-box').removeClass('on');
            if(depth1.hasClass('menu-round-2')){
                depth1.css({
                    "-webkit-transform":"rotate(-90deg) translate(110px)",
                    "-ms-transform":"rotate(-90deg) translate(110px)",
                    "transform":"rotate(-90deg) translate(110px)"
                });
                depth1.find('.icon').css({
                    "-webkit-transform":"rotate(90deg) translate(0)",
                    "-ms-transform":"rotate(90deg) translate(0)",
                    "transform":"rotate(90deg) translate(0)"
                });
            }else if(depth1.hasClass('menu-round-3')){
                depth1.css({
                    "-webkit-transform":"rotate(-45deg) translate(110px)",
                    "-ms-transform":"rotate(-45deg) translate(110px)",
                    "transform":"rotate(-45deg) translate(110px)"
                });
                depth1.find('.icon').css({
                    "-webkit-transform":"rotate(45deg) translate(0)",
                    "-ms-transform":"rotate(45deg) translate(0)",
                    "transform":"rotate(45deg) translate(0)"
                });
            }else if(depth1.hasClass('menu-round-4')){
                depth1.css({
                    "-webkit-transform":"rotate(0deg) translate(110px)",
                    "-ms-transform":"rotate(0deg) translate(110px)",
                    "transform":"rotate(0deg) translate(110px)"
                });
                depth1.find('.icon').css({
                    "-webkit-transform":"rotate(0deg) translate(0)",
                    "-ms-transform":"rotate(0deg) translate(0)",
                    "transform":"rotate(0deg) translate(0)"
                });
            }
            depth1.siblings().fadeIn(200);
            depth2.fadeOut(0);
            MDL.mobileVibrate(50);
        }

        this.depth2Dom3 = function(depth2, depth1){
            //2depth 접을때 - 오른쪽
            depth2.removeClass('on');
            menuCore.addClass('on');
            MDL.$ZONE.find('.menu-2depth-box').removeClass('on');
            if(depth1.hasClass('menu-round-2')){
                depth1.css({
                    "-webkit-transform":"rotate(-180deg) translate(110px)",
                    "-ms-transform":"rotate(-180deg) translate(110px)",
                    "transform":"rotate(-180deg) translate(110px)"
                });
                depth1.find('.icon').css({
                    "-webkit-transform":"rotate(180deg) translate(0)",
                    "-ms-transform":"rotate(180deg) translate(0)",
                    "transform":"rotate(180deg) translate(0)"
                });
            }else if(depth1.hasClass('menu-round-3')){
                depth1.css({
                    "-webkit-transform":"rotate(-135deg) translate(110px)",
                    "-ms-transform":"rotate(-135deg) translate(110px)",
                    "transform":"rotate(-135deg) translate(110px)"
                });
                depth1.find('.icon').css({
                    "-webkit-transform":"rotate(135deg) translate(0)",
                    "-ms-transform":"rotate(135deg) translate(0)",
                    "transform":"rotate(135deg) translate(0)"
                });
            }else if(depth1.hasClass('menu-round-4')){
                depth1.css({
                    "-webkit-transform":"rotate(-90deg) translate(110px)",
                    "-ms-transform":"rotate(-90deg) translate(110px)",
                    "transform":"rotate(-90deg) translate(110px)"
                });
                depth1.find('.icon').css({
                    "-webkit-transform":"rotate(90deg) translate(0)",
                    "-ms-transform":"rotate(90deg) translate(0)",
                    "transform":"rotate(90deg) translate(0)"
                });
            }
            depth1.siblings().fadeIn(200);
            depth2.fadeOut(0);
            MDL.mobileVibrate(50);
        }

        /*core 왼쪽일때 2depth 펼치고닫기 css*/
        this.depth2DomLeft = function(depth2, depth1){
            if(MDL.$ZONE.find(depth2).hasClass('on')){
                //2depth 접을때
                MDL.depth2Dom2(MDL.$ZONE.find(depth2), MDL.$ZONE.find(depth1));
            }else {
                //2depth 펼칠때
                MDL.depth2Dom1(MDL.$ZONE.find(depth2), MDL.$ZONE.find(depth1));
            }
        }

        /*core 오른쪽일때 2depth 펼치고닫기 css*/
        this.depth2DomRight = function(depth2, depth1){
            if(MDL.$ZONE.find(depth2).hasClass('on')){
                //2depth 접을때
                MDL.depth2Dom3(MDL.$ZONE.find(depth2), MDL.$ZONE.find(depth1));
            }else {
                //2depth 펼칠때
                MDL.depth2Dom1(MDL.$ZONE.find(depth2), MDL.$ZONE.find(depth1));
            }
        }

        window.addEventListener('touchstart', function(event) {
            var touch = event.touches[0];
            touchstartX = touch.clientX;
            touchstartY = touch.clientY;
        }, false);
        window.addEventListener('touchend', function(event) {
            if(event.touches.length == 0) {
                var touch = event.changedTouches[event.changedTouches.length - 1];
                //console.log(touch)
                touchendX = touch.clientX;
                touchendY = touch.clientY;
                touchoffsetX = touchendX - touchstartX;
                touchoffsetY = touchendY - touchstartY;

                if(menuCore.hasClass('on') || $('.menu-2depth-box').hasClass('on')){
                    //1depth 펼쳐있을때
                    if(Math.abs(touchoffsetX) >= 20 && Math.abs(touchoffsetY) >= 10) {
                        if(touchoffsetX < 0){
                            //alert("swipe left");
                            if(menuCore.hasClass('on')){
                                MDL.menuRolling1depthLeft();
                            }
                            for(var i=0;i<menuList.length;i++){
                                if(MDL.$ZONE.find(menuList[i].name).hasClass('on')){
                                    MDL.menuRolling2depthLeft(menuList[i].length, MDL.$ZONE.find(menuList[i].name));
                                }
                            }
                        }else{
                            //alert("swipe right");
                            if(menuCore.hasClass('on')){
                                MDL.menuRolling1depthRight();
                            }
                            for(var i=0;i<menuList.length;i++){
                                if(MDL.$ZONE.find(menuList[i].name).hasClass('on')){
                                    MDL.menuRolling2depthRight(menuList[i].length, MDL.$ZONE.find(menuList[i].name));
                                }
                            }

                        }
                    }
                }else{
                    //1depth 접혀있을때
                    if(touch.clientX < 150){
                        //왼쪽터치
                        if(MDL.$ZONE.find('.menu-2depth-box').hasClass('on')){
                            //2depth 펼쳐있을때
                        }else{
                            //2depth 접혀있을때
                            menuCore.stop().animate({'left':'-30px'},200).addClass('left').removeClass('right');
                            MDL.$ZONE.find('#banner-rolling-btnbg').stop().animate({'left':'3px'},200);
                            MDL.$ZONE.find('#view-banner-bot').stop().animate({'left':'92px'},200);
                            MDL.menuLRMove();
                            MDL.menuCoreStart234();
                        }
                    }else if(touch.clientX > 200){
                        //오른쪽터치
                        if(MDL.$ZONE.find('.menu-2depth-box').hasClass('on')){
                            //2depth 펼쳐있을때
                        }else{
                            //2depth 접혀있을때
                            var left = ($MCI('body').width() - 128)
                            menuCore.stop().animate({'left': left + 'px'}, 200).addClass('right').removeClass('left');
                            MDL.$ZONE.find('#banner-rolling-btnbg').stop().animate({'left':($MCI('body').width() - 95)+'px'},200)
                            MDL.$ZONE.find('#view-banner-bot').stop().animate({'left':'8px'},200);
                            MDL.menuLRMove();
                            MDL.menuCoreStart234();
                        }
                    }
                }
            }
        }, false);

        //진동
        this.mobileVibrate = function(time){
            navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
            if (navigator.vibrate) {
                // 진동 1000 ==  1초
                navigator.vibrate(time);
            }
            /*if (navigator.userAgent.indexOf("Android") > 0){
                navigator.vibrate(100);
            }*/
        }

        /*하단 원형메뉴*/
        MDL.$ZONE.on('click', '.menu-round-btn', function() {
            if(menuCore.hasClass('on')){
                //접을때
                MDL.mobileVibrate(100);
                MDL.menu1Close();
            }else{
                //펼칠때
                MDL.mobileVibrate(100);
                var top = $MCI(window).scrollTop();
                MDL.$ZONE.find('#top').val(top);
                $MCI('body').css({'position':'fixed','top':-top+'px','height': '100%','overscroll-behavior':'contain'});
                menuCore.addClass('on');
                menuBg.css({'display':'block'});
                MDL.$ZONE.find('.menu-round-btn i').css({
                    "-webkit-transform":"rotate(45deg)",
                    "-ms-transform":"rotate(45deg)",
                    "transform":"rotate(45deg)"
                });
                MDL.menuCoreShow();
                if(MDL.$ZONE.find('.menu-menu .menu-2depth-dom').hasClass('on')){
                }else{
                    MDL.setMenuDom();
                    MDL.menu2SettingDom();
                    MDL.$ZONE.find('.menu-menu .menu-2depth-dom').addClass('on');
                    MDL.menuListDom();
                }
                if(menuCore.hasClass('left')){
                    //메뉴 왼쪽
                    MDL.menuCoreCssLeft();
                    MDL.menu2CssLeft();
                    MDL.$ZONE.find('.menu-2depth-box').css({'left':'3px','right':'auto'});
                    MDL.$ZONE.find('.menu-weather').css({'right':'-2px','left':'auto'});
                    MDL.$ZONE.find('.menu-dark').css({'left':'90px','right':'auto'});
                }else if(menuCore.hasClass('right')){
                    //메뉴 오른쪽
                    MDL.menuCoreCssRight();
                    MDL.menu2CssRight();
                    MDL.$ZONE.find('.menu-2depth-box').css({'right':'85px','left':'auto'});
                    MDL.$ZONE.find('.menu-weather').css({'left':'18px','right':'auto'});
                    MDL.$ZONE.find('.menu-dark').css({'right':'90px','left':'auto'});
                }
                MDL.checkMenu();
            }
        });

        /*메뉴 background close 버튼*/
        MDL.$ZONE.on('click', '.menu-round-bg-close', function() {
            MDL.menu1Close();
            MDL.$ZONE.find('.menu-round-com').css({'display':'block'});
            MDL.$ZONE.find('.menu-round-btn').css({'display':'block'});
            MDL.$ZONE.find('.menu-ranking').css({'display':'block'});
            MDL.$ZONE.find('.menu-round-box-com').removeClass('on');
            MDL.$ZONE.find('.menu-round-box-com').css({'display':'none'});
            MDL.$ZONE.find('.menu-setting').css({'display':'none'});
            MDL.$ZONE.find('.menu-setting').removeClass('on');
            MDL.$ZONE.find('.menu-subscription2').css({'display':'none'});
            MDL.$ZONE.find('.menu-admin').css({'display':'none'});
            MDL.$ZONE.find('.menu-admin').removeClass('on');
        });

        /*depth1 클릭시 depth2들 펼치고닫기*/
        MDL.$ZONE.on('click', '.menu-round-com', function() {
            if($MCI(this).attr('id')){
                //2depth가 있는메뉴
                var name = $MCI(this).attr('id').split('-')[2];
                var depth1 = '#menu-round-'+name;
                var depth2 = '.menu-'+name;
                if(menuCore.hasClass('left')){
                    //메뉴 왼쪽
                    MDL.depth2DomLeft(depth2, depth1);
                }else if(menuCore.hasClass('right')){
                    //메뉴 오른쪽
                    MDL.depth2DomRight(depth2, depth1);
                }
            }
        });

        /*circleMenu - 공유 URL 복사*/
        MDL.$ZONE.on('click', '#copy-link-btn', function() {
            MDL.$ZONE.find('.sns-copyurl-url-input').val($.mciController.contents.url);
            MDL.$ZONE.find('.sns-copyurl-url-input').select();
            try {
                var successful = document.execCommand('copy');
                alert('복사되었습니다.')
            } catch (err) {
                alert('이 브라우저는 지원하지 않습니다.')
            }
        });

        /*circleMenu - setting*/
        MDL.$ZONE.on('click', '#menu-round-setting', function() {
            MDL.userSettingDom();
            MDL.$ZONE.find('.menu-setting').css({'display':'block'});
            MDL.checkMenu();
            if(MDL.$ZONE.find('.menu-setting').hasClass('on')){
                MDL.$ZONE.find('.menu-ranking').css({'display':'none'});
            }else{
                MDL.$ZONE.find('.menu-ranking').css({'display':'block'});
            }
        });

        /*circleMenu - 구독하기*/
        MDL.$ZONE.on('click', '#menu-round-subscription', function() {
            if(MDL.$ZONE.find('.menu-subscription').hasClass('on')){
                MDL.$ZONE.find('.menu-ranking').css({'display':'none'});
                MDL.$ZONE.find('.menu-subscription2').css({'display':'block'});
            }else{
                MDL.$ZONE.find('.menu-ranking').css({'display':''});
                MDL.$ZONE.find('.menu-subscription2').css({'display':'none'});
            }
        });

        /*circleMenu - 어드민*/
        MDL.$ZONE.on('click', '#menu-round-admin', function() {
            var windowHeight = Number($MCI(window).height());
            MDL.$ZONE.find('.menu-admin-box').css({'height':windowHeight - 350 +'px'});
            MDL.adminSettingDom();
            MDL.adminSettingDom2();
            MDL.adminCheckedSettingDom();
            MDL.adminMenuSettingDom();
            if(MDL.$ZONE.find('.menu-admin').hasClass('on')){
                MDL.$ZONE.find('.menu-ranking').css({'display':'none'});
                MDL.$ZONE.find('.menu-admin').css({'display':'block'});
            }else{
                MDL.$ZONE.find('.menu-ranking').css({'display':'block'});
                MDL.$ZONE.find('.menu-admin').css({'display':'none'});
            }
        });

        MDL.$ZONE.on('click', '#menu-round-home', function() {
            window.location.href = '/';
        });

        MDL.$ZONE.on('click', '#menu-round-next', function() {
            var nextLink = $MCI('.view-list-content .view-list-box').eq(0).find('#list-link').attr('href');
            window.location.href = nextLink;
        });

        /*circleMenu - 다크모드*/
        MDL.$ZONE.on('click', '#menu-round-dark', function() {
            if(MDL.$ZONE.find('.menu-dark').hasClass('on')){
                //다크모드 설정시
                menuBg.css({'display':'none'});
                $MCI('body').addClass('mci-dark-mode');
                $MCI('body').css({'position':'relative','top':'0','height': 'auto'});
                $MCI('#content-container').css({'padding-top':'0'});
                $MCI(window).scrollTop(MDL.$ZONE.find('#top').val());
            }else{
                //다크모드 해제시
                menuBg.css({'display':'block'});
                $MCI('body').removeClass('mci-dark-mode');
                var top = $MCI(window).scrollTop();
                MDL.$ZONE.find('#top').val(top);
                $MCI('body').css({'position':'fixed','top':-top+'px','height': '100%','z-index': '90'});
                $MCI('#content-container').css({'padding-top':'46px'});
            }
        });

        /*폰트 크기 설정*/
        var fontClass = Number(sessionStorage.getItem('fontClass'));

        this.fontClassSet = function () {
            if(fontClass == 0){
                fontClass = 3;
                sessionStorage.setItem('fontClass', fontClass);
            }
            $MCI('.view-content p').addClass('mci-view-font-size-'+fontClass);
        }

        MDL.$ZONE.on('click', '.menu-dark-sm', function() {
            fontClass = Number(sessionStorage.getItem('fontClass'));
            if(fontClass > 1){
                fontClass -= 1;
                sessionStorage.setItem('fontClass', fontClass);
                $MCI('.view-content p').removeClass();
                $MCI('.view-content p').addClass('mci-view-font-size-'+fontClass);
            }
        });
        MDL.$ZONE.on('click', '.menu-dark-lg', function() {
            fontClass = Number(sessionStorage.getItem('fontClass'));
            if(fontClass < 7){
                fontClass += 1;
                sessionStorage.setItem('fontClass', fontClass);
                $MCI('.view-content p').removeClass();
                $MCI('.view-content p').addClass('mci-view-font-size-'+fontClass);
            }
        });


        MDL.menuCoreSettingDom();
        MDL.menuCoreHide();
        MDL.menuCoreCssLeft();
        MDL.menuCoreStart234();
        MDL.menu2SettingDom();
        MDL.menu2CssLeft();
        MDL.fontClassSet();

        /*$('.mci-setMenu-sortable').sortable({
            update: function(evt) {
                //console.log(JSON.stringify($(this).sortable('serialize')));
            }
        });*/
    }
    return this.Init();
}
new MCI_KOREA_CONTROLLER();

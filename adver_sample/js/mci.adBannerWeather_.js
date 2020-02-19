var MCI_KOREA_ADBANNERLIGHT = function() {
    var MDL;
    /*sample29*/
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

        var iframe = $MCI('.banner iframe');
        var iframeAdd = "<div class='appladBanner'><div class='appladLogo' onclick=\"window.open('http://www.appldp.com/appl_adcut.php');\"></div><div class='banner_box'><a href='#' target='_blank'><img src='//img.mobon.net/ad/imgfile//2019/aGFud2hhZGlyZWN0/fbdc5f80-a125-4c24-851b-dc71250f46a601.png' style='width:100%'></a></div></div>"
        var body = iframe.contents().find("body");
        body.attr('id', 'iframeID');
        body.append(iframeAdd);

        var bannerBox = body.find('.appladBanner');
        var weatherHtml = "<div class=\"applad-weather\"><div class=\"applad-weather-txt\"><p class=\"applad-weather-tit\">오늘의 날씨</p><div class=\"applad-weather-box\"><div class=\"applad-weather-icon\"></div><div class=\"applad-weather-info\"><p class=\"applad-weather-temper\">12°C</p><p>비</p></div></div></div></div>"
        bannerBox.append(weatherHtml);
        var weatherBox = bannerBox.find('.applad-weather');
        console.log(weatherBox);
        weatherBox.css({'width':'100%','height':'50px','background':'#fff','margin-top': '5px','border': '1px solid #999','border-radius': '6px'});
        weatherBox.find('p').css({'display':'inline-block','margin':'0'});
        weatherBox.find('.applad-weather-tit').css({'display':'inline-block','margin-top':'13px','text-align':'center','width':'95px','font-size': '14px','vertical-align': 'top'});
        weatherBox.find('.applad-weather-box').css({'display':'inline-block'});
        weatherBox.find('.applad-weather-icon').css({'display':'inline-block','width':'50px','height':'50px','background-image':'url(/mci_controller/images/mci-weather-icon.png)','background-position':'-7px -42px'});
        weatherBox.find('.applad-weather-info').css({'display':'inline-block','vertical-align': 'top','margin-top':'13px'});
        weatherBox.find('.applad-weather-temper').css({'font-size':'15px','letter-spacing':'-0.5','margin-right':'5px'})

    };
    this.Event = function () {
        MDL.Event.falling = function(type, num) {
            var snowflakes = [],
                moveAngle = 0,
                animationInterval;

            function getRandomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            function createSnowflake() {
                var el = document.createElement('div'),
                    style = el.style;
                if(type == 'snow'){
                    style.borderRadius = '100%';
                    style.border = getRandomNumber(1, 4) + 'px solid white';
                }else if(type == 'rain'){
                    style.width = '1px';
                    style.height = getRandomNumber(8, 16) + 'px';
                    style.background = 'white';
                }else if(type == 'flower'){
                    style.width = getRandomNumber(16, 20) + 'px';
                    style.height = style.width;
                    style.background = 'url(/mci_controller/images/flower.png)';
                    style.backgroundSize = '100% 100%'
                }
                style.position = 'fixed';
                style.zIndex = '999999';
                style.top = getRandomNumber(0, window.innerHeight) + 'px';
                style.left = getRandomNumber(0, window.innerWidth) + 'px';

                return el;
            }

            function moveSnowflakes() {
                var l = snowflakes.length,
                    i;

                moveAngle += 0.01;

                for (i=0; i<l; i++) {
                    moveSnowflake(snowflakes[i]);
                }
            }

            function moveSnowflake(el) {
                var style = el.style,
                    height = window.innerHeight,
                    radius,
                    top;
                if(type == 'snow') {
                    radius = parseInt(style.border, 10);
                }else if(type == 'rain') {
                    radius = parseInt(style.height, 10);
                }else if(type == 'flower') {
                    radius = parseInt(style.height, 10);
                }
                top = parseInt(style.top, 10);
                top += Math.cos(moveAngle) + 1 + radius/2;

                if (top > height) {
                    resetSnowflake(el);
                } else {
                    style.top = top + 'px';
                }
            }

            function resetSnowflake(el) {
                var style = el.style;

                style.top = '0px';
                style.left = getRandomNumber(0, window.innerWidth) + 'px';
            }

            function setup() {
                var number = 70,
                    particle,
                    i;
                if(type == 'flower'){
                    number = 20
                }
                var iframe = $MCI('.banner iframe');

                var body = iframe.eq(num).contents().find("body");
                for (i=0; i<number; i++) {
                    particle = snowflakes[i] = createSnowflake();
                    body.append(particle);
                }

                animationInterval = setInterval(moveSnowflakes, 33);
            }
            setup();


        };

        //var type = 'rain';
        var select = [];
        select.push({
            type : 'rain', num : 0
        },{
            type : 'snow', num : 1
        },{
            type : 'flower', num : 2
        })
        for(var i=0; i<select.length; i++){
            MDL.Event.falling(select[i].type, select[i].num);
        }

        /*function getLocation() {
            if (navigator.geolocation) { // GPS를 지원하면
                navigator.geolocation.getCurrentPosition(function(position) {
                    alert(position.coords.latitude + ' ' + position.coords.longitude);
                }, function(error) {
                    console.error(error);
                }, {
                    enableHighAccuracy: false,
                    maximumAge: 0,
                    timeout: Infinity
                });
            } else {
                alert('GPS를 지원하지 않습니다');
            }
        }
        getLocation();*/
    }
    return this.Init();
}
new MCI_KOREA_ADBANNERLIGHT();
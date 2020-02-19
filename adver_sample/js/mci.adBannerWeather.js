var MCI_KOREA_ADBANNERWEATHER = function() {
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
                    MDL.Rest();
                    MDL.Event();
                }
            };
        };
        var scripts = ["//" + this.host + "/mci_controller/custom_jquery.js"];
        loadScripts(scripts);
    };
    this.markup = function() {
        var AdBanner = $MCI('#mci-adBanner-content .banner');
        for(var i=0; i<1; i++){
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

        var iframe = AdBanner.eq(0).find('iframe');
        var iframeAdd = "<div class='appladBanner'><div class='appladLogo' onclick=\"window.open('http://www.appldp.com/appl_adcut.php');\"></div><div class='banner_box'><a href='#' target='_blank'><img src='https://imgnewad.ytn.co.kr/image/gsenc/190408_gsnc_300_250.jpg' style='width:100%'></a></div></div>";
        MDL.markup.body = iframe.contents().find("body");
        MDL.markup.head = iframe.contents().find("head");
        MDL.markup.body.attr('id', 'iframeID').css({'margin':'0','overflow':'hidden'});
        MDL.markup.body.append(iframeAdd);
        MDL.markup.body.find('.banner_box').css({'overflow':'hidden'});

        var bannerBox = MDL.markup.body.find('.appladBanner');
        var weatherHtml = "<div class=\"applad-weather\"><div class=\"applad-weather-txt\"><p class=\"applad-weather-tit\">오늘의 날씨</p><div class=\"applad-weather-box\"><div class=\"applad-weather-icon\"></div><div class=\"applad-weather-info\"><p class=\"applad-weather-temper\">12°C</p><p>비</p></div></div><div class=\"applad-weather-gps\">위치</div></div></div>";
        bannerBox.append(weatherHtml);
        var weatherBox = bannerBox.find('.applad-weather');
        weatherBox.css({'width':'99%','height':'50px','background':'#fff','margin-top': '5px','border': '1px solid #999','border-radius': '6px'});
        weatherBox.find('p').css({'display':'inline-block','margin':'0'});
        weatherBox.find('.applad-weather-tit').css({'display':'inline-block','margin-top':'13px','text-align':'center','width':'95px','font-size': '14px','vertical-align': 'top'});
        weatherBox.find('.applad-weather-box').css({'display':'inline-block'});
        weatherBox.find('.applad-weather-icon').css({'display':'inline-block','width':'50px','height':'50px','background-image':'url(/mci_controller/images/mci-weather-icon.png)','background-position':'-7px -42px'});
        weatherBox.find('.applad-weather-info').css({'display':'inline-block','vertical-align': 'top','margin-top':'13px'});
        weatherBox.find('.applad-weather-temper').css({'font-size':'15px','letter-spacing':'-0.5','margin-right':'5px'});
        weatherBox.find('.applad-weather-gps').css({'float':'right','margin':'10px'})

        weatherBox.find('.applad-weather-gps').on('click',function () {

        });

        var bannerBtn = $MCI('.banner-btn-ul');
        bannerBtn.css({'width':'100%'});
        bannerBtn.find('li').css({'float':'left','width':'46%','height':'40px','margin':'1%','border':'1px solid #eee','text-align':'center','line-height':'40px'});

    };
    this.Event = function () {
        var bannerBtn = $MCI('.banner-btn-ul');
        var body = MDL.markup.body;
        bannerBtn.find('li').on('click',function () {
            body.find('.banner_box div').remove();
            body.find('.banner_box canvas').remove();
            body.find('.sakura').remove();
            MDL.markup.head.find('link').attr('href', '');
            MDL.Event.width = parseInt(body.find('.appladBanner').width());
            MDL.Event.height = parseInt(body.find('.appladBanner').height());
            body.css({'width':MDL.Event.width + 'px','height':(MDL.Event.height) + 'px'});
            var btnClass = $MCI(this).attr('class');
            if(btnClass == 'btn-snow'){
                MDL.Rest.snow();
            }else if(btnClass == 'btn-rain'){
                MDL.Rest.rain();
            }else if(btnClass == 'btn-sun'){
                MDL.Rest.sun();
            }else if(btnClass == 'btn-storm'){
                MDL.Rest.storm();
            }else if(btnClass == 'btn-cloud'){
                MDL.Rest.cloud();
            }else if(btnClass == 'btn-flower'){
                MDL.Rest.fall(btnClass);
            }else if(btnClass == 'btn-fall'){
                MDL.Rest.fall(btnClass);
            }else if(btnClass == 'btn-wind'){
                MDL.Rest.wind();
            }else if(btnClass == 'btn-flowers'){
                MDL.Rest.flowers();
            }
            body.find('.banner_box canvas').css({'width':MDL.Event.width + 'px','height':(MDL.Event.height-57) + 'px'});
        });
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

        var bannerBox = body.find('.appladBanner');
        var weatherBox = bannerBox.find('.applad-weather');
        weatherBox.find('.applad-weather-gps').on('click',function () {
            alert('eee')
        })
    };
    this.Rest = function () {
        var body = MDL.markup.body;
        MDL.Rest.snow = function(){
            class Snowflake {
                constructor() {
                    this.x = 0;
                    this.y = 0;
                    this.vx = 0;
                    this.vy = 0;
                    this.radius = 0;
                    this.alpha = 0;
                    this.reset();
                }

                reset() {
                    this.x = this.randBetween(0, window.innerWidth);
                    this.y = this.randBetween(0, -window.innerHeight);
                    this.vx = this.randBetween(-3, 3);
                    this.vy = this.randBetween(2, 5);
                    this.radius = this.randBetween(1, 4);
                    this.alpha = this.randBetween(0.6, 0.9);
                }

                randBetween(min, max) {
                    return min + Math.random() * (max - min);
                }

                update() {
                    this.x += this.vx;
                    this.y += this.vy;

                    if (this.y + this.radius > window.innerHeight) {
                        this.reset();
                    }
                }
            }

            class Snow {
                constructor() {
                    this.canvas = document.createElement("canvas");
                    this.ctx = this.canvas.getContext("2d");

                    body.find('.banner_box a').append(this.canvas);
                    body.find('canvas').css({'position':'absolute','left':'0','top':'0'});
                    window.addEventListener("resize", () => this.onResize());
                    this.onResize();
                    this.updateBound = this.update.bind(this);
                    requestAnimationFrame(this.updateBound);

                    this.createSnowflakes();
                }

                onResize() {
                    this.width = MDL.Event.width;
                    this.height = MDL.Event.height -57;
                    this.canvas.width = this.width;
                    this.canvas.height = this.height;
                }

                createSnowflakes() {
                    const flakes = MDL.Event.width / 4;

                    this.snowflakes = [];

                    for (let s = 0; s < flakes; s++) {
                        this.snowflakes.push(new Snowflake());
                    }
                }

                update() {
                    this.ctx.clearRect(0, 0, this.width, this.height);

                    for (let flake of this.snowflakes) {
                        flake.update();

                        this.ctx.save();
                        this.ctx.fillStyle = "#FFF";
                        this.ctx.beginPath();
                        this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
                        this.ctx.closePath();
                        this.ctx.globalAlpha = flake.alpha;
                        this.ctx.fill();
                        this.ctx.restore();
                    }
                    requestAnimationFrame(this.updateBound);
                }
            }
            new Snow();
        };

        MDL.Rest.rain = function() {
            var html = "<div class=\"mci-rain mci-front-row\"></div><div class=\"mci-rain mci-back-row\"></div>";
            body.find('.banner_box a').append(html);
            body.addClass('back-row-toggle splat-toggle');
            body.find('.mci-rain').css({'width':MDL.Event.width + 'px','height':(MDL.Event.height-57) + 'px'});

            MDL.Rest.rain.makeItRain = function() {
                body.find('.mci-rain').empty();

                var increment = 0,
                    drops = "",
                    backDrops = "";

                while (increment < 100) {
                    var randoHundo = (Math.floor(Math.random() * (90 - 1 + 1) + 1));
                    var randoFiver = (Math.floor(Math.random() * (10 - 2 + 1) + 2));

                    increment += randoFiver;

                    drops += '<div class="mci-drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="mci-stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="mci-splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
                    backDrops += '<div class="mci-drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="mci-stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="mci-splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
                }
                body.find('.mci-rain.mci-front-row').append(drops);
                body.find('.mci-rain.mci-back-row').append(backDrops);
            };
            MDL.Rest.rain.makeItRain();

            MDL.Rest.rain.rainCss = function(){
                var style = document.createElement('style');
                style.type='text/css';
                var test = `
                    .mci-rain {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 2;
                    }
                    
                    .mci-rain.mci-back-row {
                        display: none;
                        z-index: 1;
                        bottom: 60px;
                        opacity: 1;
                    }
                    
                    body.back-row-toggle .mci-rain.mci-back-row {
                        display: block;
                    }
                    
                    .mci-drop {
                        position: absolute;
                        bottom: 100%;
                        width: 15px;
                        height: 120px;
                        pointer-events: none;
                        animation: mci-drop 0.5s linear infinite;
                    }
                    
                    @keyframes mci-drop {
                        0% {
                            transform: translateY(0vh);
                        }
                        75% {
                            transform: translateY(90vh);
                        }
                        100% {
                            transform: translateY(90vh);
                        }
                    }
                    
                    .mci-stem {
                        width: 1px;
                        height: 60%;
                        margin-left: 7px;
                        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.35));
                        animation: mci-stem 0.5s linear infinite;
                    }
                    
                    @keyframes mci-stem {
                        0% {
                            opacity: 1;
                        }
                        65% {
                            opacity: 1;
                        }
                        75% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 0;
                        }
                    }
                    
                    .mci-splat {
                        width: 15px;
                        height: 10px;
                        border-top: 2px dotted rgba(255, 255, 255, 0.8);
                        border-radius: 50%;
                        opacity: 1;
                        transform: scale(0);
                        animation: mci-splat 0.5s linear infinite;
                        display: none;
                    }
                    
                    body.splat-toggle .mci-splat {
                        display: block;
                    }
                    
                    @keyframes mci-splat {
                        0% {
                            opacity: 1;
                            transform: scale(0);
                        }
                        80% {
                            opacity: 1;
                            transform: scale(0);
                        }
                        90% {
                            opacity: 0.5;
                            transform: scale(1);
                        }
                        100% {
                            opacity: 0;
                            transform: scale(1.5);
                        }
                    }
                    
                    .toggles {
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 3;
                    }
                    
                    .toggle {
                        position: absolute;
                        left: 20px;
                        width: 50px;
                        height: 50px;
                        line-height: 51px;
                        box-sizing: border-box;
                        text-align: center;
                        font-family: sans-serif;
                        font-size: 10px;
                        font-weight: bold;
                        background-color: rgba(255, 255, 255, 0.2);
                        color: rgba(0, 0, 0, 0.5);
                        border-radius: 50%;
                        cursor: pointer;
                        transition: background-color 0.3s;
                    }
                    
                    .toggle:hover {
                        background-color: rgba(255, 255, 255, 0.25);
                    }
                    
                    .toggle:active {
                        background-color: rgba(255, 255, 255, 0.3);
                    }
                    
                    .toggle.active {
                        background-color: rgba(255, 255, 255, 0.4);
                    }
                    
                    .splat-toggle {
                        top: 20px;
                    }
                    
                    .back-row-toggle {
                        top: 90px;
                        line-height: 12px;
                    }
                    
                    .single-toggle {
                        top: 160px;
                    }
                    
                    body.single-toggle .drop {
                        display: none;
                    }
                    
                    body.single-toggle .drop:nth-child(10) {
                        display: block;
                    }
                `;

                style.appendChild(document.createTextNode(test));
                return style;
            };

            var rainStyle = MDL.Rest.rain.rainCss();
            body.append(rainStyle);
        };

        MDL.Rest.sun = function() {
            var html = "<div class=\"sun\"></div>";
            body.find('.banner_box a').append(html);
            var width = Number(body.find('.banner_box a').width()) - 16;
            var sunWidth = width * 2;
            var sun = body.find('.sun');

            sun.css({'position':'absolute','top':'-' + (width + 20) +'px','left':'20px','width':sunWidth + 'px','height': sunWidth + 'px','-webkit-background-size':sunWidth + 'px ' + sunWidth + 'px','background-size':sunWidth + 'px ' + sunWidth + 'px','background-repeat':'no-repeat','background-image':'url(//'+ MDL.host + '/mci_controller/images/sun.png)','background-position':'0 0','transform':'rotate(0deg)'});

            MDL.Rest.sun.rotateDom = function () {
                sun.css({'transition':'all 4s linear','transform':'rotate(360deg)'});
                setTimeout(function () {
                    sun.css({'transition':'all 0s linear','transform':'rotate(0deg)'});
                },4000)
            };
            MDL.Rest.sun.rotateDom();

            setInterval(function () {
               MDL.Rest.sun.rotateDom();
            },4050)
        };

        MDL.Rest.storm = function() {
            const HAS_FLASH = true;
            const TIME_BETWEEN_LIGHTNING = 1000;

            const MAX_POINTS = 120;
            const MAX_X_DISTANCE = 9; // 10 - 30
            const MAX_Y_DISTANCE = 8; // 10 - 30
            const MAX_WIDTH = 3; // 1 - 10

            const FADE_INCREMENT = 0.013; // 0 - 0.02

            const LIGHTNING_CHANCE = 0.03;
            const SHEET_CHANCE = 0.2;
            const BRANCH_CHANCE = 0.01;
            const FLICKER_CHANCE = 0.023;
            const BRANCH_BRANCH_CHANCE = 0.90;
            const getTimestamp = () => {
                return (new Date()).getTime();
            };
            const random = (max = 1, unsigned = false) => {
                return unsigned ? ((Math.random() - 0.5) * 2) * max : Math.random() * max;
            };
            const lightningCanvas = document.createElement("canvas");
            lightningCanvas.id = 'lightning';
            const ctx = lightningCanvas.getContext("2d");
            body.find('.banner_box a').append(lightningCanvas);
            body.find('canvas').css({'position':'absolute','top':'0','left':'0','z-index':'50'});

            let lightning = [];
            let flashes = [];

            let stageWidth = 0;
            let stageHeight = 0;
            let previousTimestamp = getTimestamp();

            const loop = () => {
                ctx.clearRect(0, 0, stageWidth, stageHeight);

                lightning.forEach((path) => {
                    path.animate();
                    path.render();
                });

                if (HAS_FLASH) {
                    flashes.forEach((path) => {
                        path.animate();
                        path.render();
                    });
                }

                if (
                    random() < LIGHTNING_CHANCE &&
                    getTimestamp() - previousTimestamp > TIME_BETWEEN_LIGHTNING
                ) {

                    if (random() > 0.4) {
                        lightning.push(new Lightning());
                    } else {
                    }

                    previousTimestamp = getTimestamp();
                }

                lightning = lightning.filter(path => path.alpha > 0);
                flashes = flashes.filter(sheet => sheet.alpha > 0);

                requestAnimationFrame(loop);
            };

            class Lightning {

                constructor(ox, oy, width, isBranch = false, branchDirection) {
                    const x = ox || (random(stageWidth));
                    const y = oy || (40 + random(100));
                    let newCloud;

                    this.paths = [];
                    this.red = 255;
                    this.green = 255;
                    this.blue = 255;
                    this.alpha = 1;
                    this.hasEnded = false;
                    this.width = width || random(MAX_WIDTH) + 1;
                    this.isBranch = isBranch;
                    this.xDeviation = isBranch ? 1.3 : 1;
                    this.branchDirection = branchDirection || (Math.random() - 0.5) * 2;
                    this.flickerCount = 0;
                    this.clouds = [];

                    this.paths.push({
                        x,
                        y
                    });

                    if (HAS_FLASH) {
                        flashes.push(new Flash(this.width));
                    }

                    if (this.isBranch) {
                        this.width = 1;
                    }
                }

                animate() {
                    const newLines = 3 + random(5);
                    const branchChance = this.isBranch ? BRANCH_BRANCH_CHANCE : BRANCH_CHANCE;

                    if (!this.hasEnded) {
                        const previousPoint = this.getLastPoint();
                        let lastX = previousPoint.x;
                        let lastY = previousPoint.y;
                        let newX, newY;
                        let xDirection;

                        for (let i = 0; i < newLines; i++) {
                            xDirection = (this.isBranch ? this.branchDirection : (Math.random() - 0.5) * 2);
                            newX = lastX + xDirection * MAX_X_DISTANCE * this.xDeviation;
                            newY = lastY + random(MAX_Y_DISTANCE) + 2;

                            lastX = newX;
                            lastY = newY;
                            this.paths.push({
                                x: newX,
                                y: newY
                            });

                            if (this.isBranch && random() < 0.03) {
                                lightning.push(new Lightning(lastX, lastY, this.width, true));
                            }
                        }

                        this.hasEnded =
                            lastY / stageHeight > 0.8 ||
                            (random() > 0.6 && this.paths.length > MAX_POINTS * 3/4) ||
                            this.paths.length > MAX_POINTS ||
                            (this.isBranch && this.paths.length > 5)
                        ;

                        if (
                            random() > branchChance &&
                            this.paths.length > 5 &&
                            this.paths.length < MAX_POINTS * 2/3
                        ) {
                            lightning.push(new Lightning(lastX, lastY, this.width, true));
                        }
                    }

                    if (this.alpha > 0) {
                        this.alpha -= FADE_INCREMENT;

                        // fade out purple
                        if (this.alpha < 0.5) {
                            this.green -= 4.5;
                        }

                        if (this.isBranch) {
                            this.alpha -= FADE_INCREMENT / 2;
                        }
                    }

                    if (
                        !this.isBranch &&
                        random() < FLICKER_CHANCE &&
                        this.flickerCount < 2 &&
                        this.alpha > 0.3
                    ) {
                        this.alpha = 1;
                        this.green = 240;
                        this.flickerCount++;

                        this.clouds.map((cloud) => {
                            cloud.alpha = random(0.6) + 0.3;
                        });
                    }

                    if (
                        (this.isBranch && (this.flickerCount > 0)) ||
                        this.alpha < 0
                    ) {
                        this.alpha = 0;
                    }
                }

                render() {
                    const colour = this.getColour();

                    ctx.beginPath();
                    ctx.strokeStyle = colour;
                    ctx.lineWidth = this.width;

                    this.paths.forEach((path) => {
                        ctx.lineTo(path.x, path.y);
                    });

                    ctx.stroke();
                }

                getColour(red, green, blue, alpha) {
                    return `rgba(${red || this.red}, ${green || this.green}, ${blue || this.blue}, ${alpha || this.alpha})`;
                }

                getLastPoint() {
                    if (this.paths.length > 0) {
                        const lastPoint = this.paths[this.paths.length - 1];

                        return {
                            x: lastPoint.x,
                            y: lastPoint.y
                        };
                    } else {
                        return {x: 0, y: 0};
                    }
                }

            }

            class Flash {
                constructor(flash = 1) {
                    this.alpha = 0.09 * flash;
                }
                animate() {
                    this.alpha -= FADE_INCREMENT * 2;
                }
                render() {
                    ctx.beginPath();
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
                    ctx.fillRect(0, 0, stageWidth, stageHeight);
                }

            }

            const updateCanvasSize = () => {
                stageWidth = window.innerWidth;
                stageHeight = window.innerHeight;

                lightningCanvas.width = stageWidth;
                lightningCanvas.height = stageHeight;
            };

            $MCI(window).on('mousedown', (e) => {
                lightning.push(new Lightning(e.clientX, e.clientY));
            });

            updateCanvasSize();
            $MCI(window).resize(updateCanvasSize);

            lightning.push(new Lightning(400, 100));
            loop();
        };

        MDL.Rest.cloud = function () {
            var html = "<div class=\"mci-cloud\"><div id=\"mci-cloud-list-dom\"></div></div>";
            body.find('.banner_box a').append(html);

            var cloudBox = body.find('.mci-cloud');
            var positionTop = [-10, 0, 40, -20, 25, -5, 35];
            var origin = cloudBox.find('#mci-cloud-list-dom');
            for (var i = 0; i < positionTop.length; i++) {
                var dom = origin.clone(true);
                dom.removeAttr('id').addClass('mci-cloud-list mci-cloud-list' + (i+1));
                dom.css({'top': positionTop[i] + 'px', 'left': '-100px'});
                origin.before(dom);
            }

            cloudBox.css({'position': 'absolute', 'top': '0', 'left': '0','width':MDL.Event.width + 'px','height':(MDL.Event.height-57) + 'px','overflow':'hidden'});
            cloudBox.find('.mci-cloud-list').css({
                'position': 'absolute',
                'width': '100px',
                'height': '75px',
                'background': 'url(//' + MDL.host + '/mci_controller/images/cloud.png) no-repeat',
                '-webkit-background-size': '100px 75px','background-size': '100px 75px',
                'opacity': '0.7'
            });

            MDL.Rest.cloud.cloudDom = function () {
                var num = -300;
                for(var i=1; i<(positionTop.length+1); i++){
                    num += 300;
                    if(i == 3){
                        num += 100;
                    }
                    if(i == 4){
                        num -= 100;
                    }
                    if(i == 6){
                        num += 200;
                    }
                    cloudBox.find('.mci-cloud-list'+ i)
                        .delay(num).animate({'left': (MDL.Event.width + 100) + 'px'},5000)
                        .animate({'left':'-100px'},0);
                }
            };
            MDL.Rest.cloud.cloudDom();
            setInterval(function () {
                MDL.Rest.cloud.cloudDom();
            }, (1000 * positionTop.length) + 500)
        };

        MDL.Rest.fall = function (type) {
            var html = "<div class=\"falling-leaves\"></div>";
            body.find('.banner_box a').append(html);

            var LeafScene = function(el) {
                this.viewport = el;
                this.world = document.createElement('div');
                this.leaves = [];
                this.options = {
                    numLeaves: 15,
                    wind: {
                        magnitude: 1,
                        maxSpeed: 7,
                        duration: 500,
                        start: 0,
                        speed: 0
                    },
                };

                this.width = MDL.Event.width;
                this.height = MDL.Event.height -57;
                this.timer = 0;

                this._resetLeaf = function(leaf) {
                    leaf.x = this.width * 2 - Math.random()*this.width*1.75;
                    leaf.y = -10;
                    leaf.z = Math.random()*200;
                    if (leaf.x > this.width) {
                        leaf.x = this.width + 10;
                        leaf.y = Math.random()*this.height/2;
                    }

                    if (this.timer == 0) {
                        leaf.y = Math.random()*this.height;
                    }

                    leaf.rotation.speed = Math.random()*10;
                    var randomAxis = Math.random();
                    if (randomAxis > 0.5) {
                        leaf.rotation.axis = 'X';
                    } else if (randomAxis > 0.25) {
                        leaf.rotation.axis = 'Y';
                        leaf.rotation.x = Math.random()*180 + 90;
                    } else {
                        leaf.rotation.axis = 'Z';
                        leaf.rotation.x = Math.random()*360 - 180;
                        leaf.rotation.speed = Math.random()*3;
                    }

                    leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
                    leaf.ySpeed = Math.random() + 1.5;

                    return leaf;
                };

                this._updateLeaf = function(leaf) {
                    var leafWindSpeed = this.options.wind.speed(this.timer - this.options.wind.start, leaf.y);
                    var xSpeed = leafWindSpeed + leaf.xSpeedVariation;
                    leaf.x -= xSpeed;
                    leaf.y += leaf.ySpeed;
                    leaf.rotation.value += leaf.rotation.speed;

                    var t = 'translateX( ' + leaf.x + 'px ) translateY( ' + leaf.y + 'px ) translateZ( ' + leaf.z + 'px )  rotate' + leaf.rotation.axis + '( ' + leaf.rotation.value + 'deg )';
                    if (leaf.rotation.axis !== 'X') {
                        t += ' rotateX(' + leaf.rotation.x + 'deg)';
                    }
                    leaf.el.style.webkitTransform = t;
                    leaf.el.style.MozTransform = t;
                    leaf.el.style.oTransform = t;
                    leaf.el.style.transform = t;

                    if (leaf.x < -10 || leaf.y > this.height + 10) {
                        this._resetLeaf(leaf);
                    }
                };

                this._updateWind = function() {
                    if (this.timer === 0 || this.timer > (this.options.wind.start + this.options.wind.duration)) {
                        this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
                        this.options.wind.duration = this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
                        this.options.wind.start = this.timer;

                        var screenHeight = this.height;

                        this.options.wind.speed = function(t, y) {
                            var a = this.magnitude/2 * (screenHeight - 2*y/3)/screenHeight;
                            return a * Math.sin(2*Math.PI/this.duration * t + (3 * Math.PI/2)) + a;
                        }
                    }
                }
            };

            LeafScene.prototype.init = function() {
                for (var i = 0; i < this.options.numLeaves; i++) {
                    var leaf = {
                        el: document.createElement('div'),
                        x: 0,
                        y: 0,
                        z: 0,
                        rotation: {
                            axis: 'X',
                            value: 0,
                            speed: 0,
                            x: 0
                        },
                        xSpeedVariation: 0,
                        ySpeed: 0,
                        path: {
                            type: 1,
                            start: 0,

                        },
                        image: 1
                    };
                    this._resetLeaf(leaf);
                    this.leaves.push(leaf);
                    this.world.appendChild(leaf.el);
                }

                this.world.className = 'leaf-scene';
                this.viewport.append(this.world);
                this.world.style.webkitPerspective = "400px";
                this.world.style.MozPerspective = "400px";
                this.world.style.oPerspective = "400px";
                this.world.style.perspective = "400px";

                var self = this;
                window.onresize = function(event) {
                    self.width = MDL.Event.width;
                    self.height = MDL.Event.height;
                };
            };

            LeafScene.prototype.render = function() {
                this._updateWind();
                for (var i = 0; i < this.leaves.length; i++) {
                    this._updateLeaf(this.leaves[i]);
                }

                this.timer++;

                requestAnimationFrame(this.render.bind(this));
            };

            var leafContainer = body.find('.falling-leaves'),
                leaves = new LeafScene(leafContainer);
            leaves.init();
            leaves.render();

            leafContainer.css({'position': 'absolute','top': '0','left': '0','width': '100%','height': (MDL.Event.height - 57) +'px','overflow': 'hidden'});

            body.find('.leaf-scene').css({'position': 'absolute','top': '0','bottom': '0','left': '0','width': '100%','transform-style':'preserve-3d'});

            body.find('.leaf-scene div').css({'position': 'absolute','top': '0','left': '0','transform': 'translate(-50%, 0)','transform-style':'preserve-3d','backface-visibility':'visible'});

            if(type == 'btn-flower'){
                body.find('.leaf-scene div').css({'width': '12px','height': '15px','background': 'url(//'+ MDL.host +'/mci_controller/images/sakura.png) no-repeat','-webkit-background-size':'100%','background-size': '100%'});
            }else if(type == 'btn-fall'){
                body.find('.leaf-scene div').css({'width': '20px','height': '20px','background': 'url(//'+ MDL.host +'/mci_controller/images/leaves.png) no-repeat','-webkit-background-size':'100%','background-size': '100%'});
            }
        }

        /*MDL.Rest.flower = function(){
            var BlossomScene = function(iframe) {
                var container = iframe.contents().find("#blossom_container"),
                    placeholder = document.createElement('div'),
                    petals = [],
                    options = {
                        numPetals: 16,
                        gravity: 0.8,
                        wind: {
                            magnitude: 0.2,
                            maxSpeed: 2,
                            duration: 14,
                            start: 0
                        },
                    },
                    width = container[0].offsetWidth,
                    height = iframe[0].offsetHeight,

                    timer = 0;
                /!**
                 * Reset the petal position when it goes out of container
                 *!/
                function resetPetal(petal) {
                    petal.x = width * 1 - Math.random() * width * 1.75;
                    petal.y = -10;
                    petal.z = Math.random() * 200;
                    if (petal.x > width) {
                        petal.x = width + 10;
                        petal.y = Math.random() * height / 2;
                    }
                    if (timer === 0) {
                        petal.y = Math.random() * height;
                    }

                    // Rotation
                    petal.rotation.speed = Math.random() * 10;
                    var randomAxis = Math.random();
                    if (randomAxis > 0.5) {
                        petal.rotation.axis = 'X';
                    } else if (randomAxis > 0.25) {
                        petal.rotation.axis = 'Y';
                        petal.rotation.x = Math.random() * 180 + 90;
                    } else {
                        petal.rotation.axis = 'Z';
                        petal.rotation.x = Math.random() * 360 - 180;
                        // looks weird if the rotation is too fast around this axis
                        petal.rotation.speed = Math.random() * 3;
                    }

                    // random speed
                    petal.xSpeedVariation = Math.random() * 0.8 - 0.4;
                    petal.ySpeed = Math.random() + options.gravity;

                    return petal;
                }

                /!**
                 * Update petal position
                 *!/
                function updatePetal(petal) {
                    var petalWindSpeed = options.wind.speed(timer - options.wind.start, petal.y),
                        xSpeed = petalWindSpeed + petal.xSpeedVariation;

                    petal.x -= xSpeed;
                    petal.y += petal.ySpeed;
                    petal.rotation.value += petal.rotation.speed;


                    var t = 'translateX( ' + petal.x + 'px ) translateY( ' + petal.y + 'px ) translateZ( ' + petal.z + 'px )  rotate' + petal.rotation.axis + '( ' + petal.rotation.value + 'deg )';
                    if (petal.rotation.axis !== 'X') {
                        t += ' rotateX(' + petal.rotation.x + 'deg)';
                    }
                    petal.el.style.webkitTransform = t;
                    petal.el.style.MozTransform = t;
                    petal.el.style.oTransform = t;
                    petal.el.style.transform = t;

                    // reset if out of view
                    if (petal.x < -10 || petal.y > height + 10) {
                        resetPetal(petal);
                    }
                }

                /!**
                 * Change the wind speed
                 *!/
                function updateWind() {
                    // wind follows a sine curve: asin(b*time + c) + a
                    // where a = wind magnitude as a function of petal position, b = wind.duration, c = offset
                    // wind duration should be related to wind magnitude, e.g. higher windspeed means longer gust duration

                    if (timer === 0 || timer > (options.wind.start + options.wind.duration)) {
                        options.wind.magnitude = Math.random() * options.wind.maxSpeed;
                        options.wind.duration = options.wind.magnitude * 50 + (Math.random() * 20 - 10);
                        options.wind.start = timer;

                        var screenHeight = height;

                        options.wind.speed = function(t, y) {
                            var a = this.magnitude / 2 * (screenHeight - 2 * y / 3) / screenHeight;
                            return a * Math.sin(2 * Math.PI / this.duration * t + (3 * Math.PI / 2)) + a;

                        }
                    }
                }

                /!**
                 * Get a random int number, max is excluded
                 *!/
                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min)) + min;
                }

                /!**
                 * Create the petals elements
                 *!/
                function createPetals() {
                    var petal,
                        petalElement;

                    for (var i = 0; i < options.numPetals; i++) {
                        petalElement = document.createElement('div');
                        petalElement.className = 'petal petal-style' + getRandomInt(1, 5);

                        petal = {
                            el: petalElement,
                            x: 0,
                            y: 0,
                            z: 0,
                            rotation: {
                                axis: 'X',
                                value: 0,
                                speed: 0,
                                x: 0
                            },
                            xSpeedVariation: 0,
                            ySpeed: 0,
                            path: {
                                type: 1,
                                start: 0,
                            },
                            image: 1
                        };

                        resetPetal(petal);
                        petals.push(petal);
                        placeholder.appendChild(petal.el);
                    }
                    placeholder.className = 'blossom-scene';
                    container[0].appendChild(placeholder);
                    var blossoomCss = createCss();
                    container[0].appendChild(blossoomCss);
                }

                function createCss(){
                    var style = document.createElement('style');
                    style.type='text/css';
                    var test = `
                        #blossom_container {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;
                        }

                        .blossom-scene {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            overflow: hidden;
                            transform-style: preserve-3d;
                        }
                        .blossom-scene .petal {
                            position: absolute;
                            top: 3;
                            transform-style: preserve-3d;
                            backface-visibility: visible;
                            background: url(../mci_controller/images/cherry-blossom-petals.png) no-repeat;
                        }
                        .blossom-scene .petal.petal-style1 {
                            width: 33px;
                            height: 16px;
                            background-position: -28px 0;
                        }
                        .blossom-scene .petal.petal-style2 {
                            width: 32px;
                            height: 18px;
                            background-position: 0 -13.5px;
                        }
                        .blossom-scene .petal.petal-style3 {
                            width: 20px;
                            height: 27px;
                            background-position: -35.5px -27.7px;
                        }
                        .blossom-scene .petal.petal-style4 {
                            width: 28px;
                            height: 19px;
                            background-position: 0px -37.5px;
                        }
                    `;

                    style.appendChild(document.createTextNode(test));
                    return style;
                }

                /!**
                 * Update the animation frame
                 *!/
                function updateFrame() {
                    updateWind();
                    for (var i = 0; i < petals.length; i++) {
                        updatePetal(petals[i]);
                    }

                    timer++;
                    requestAnimationFrame(updateFrame);
                }

                createPetals();

                return {
                    start: function() {
                        requestAnimationFrame(updateFrame);
                    }
                };
            }

            function setup() {
                var iframe = $MCI('.banner iframe');
                var body = iframe.contents().find("body");
                var blossomDiv = document.createElement("div");
                blossomDiv.id = "blossom_container";
                body.find(".banner_box a").append(blossomDiv);

                // Init Cherry Blossom Scene
                var CherryBlossoms = new BlossomScene(iframe.eq(0));
                CherryBlossoms.start();
            }
            setup();
        };

        MDL.Rest.flowers = function(){
            var loadCss = function(scripts) {
                var script = scripts.shift();
                var el = document.createElement('link');
                el.href = script;
                el.rel = "stylesheet";
                MDL.markup.head.append(el);
                el.onload = function() {
                    if (scripts.length) {
                        loadScripts(scripts);
                    }
                };
            };
            var css = ["//" + MDL.host + "/mci_controller/mci.sakura.css"];
            loadCss(css);

            !function(n){
                !function(){for(var n=0,i=["ms","moz","webkit","o"],a=0;a<i.length&&!window.requestAnimationFrame;++a)window.requestAnimationFrame=window[i[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[a]+"CancelAnimationFrame"]||window[i[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i){var a=(new Date).getTime(),t=Math.max(0,16-(a-n)),o=window.setTimeout(function(){i(a+t)},t);return n=a+t,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(n){clearTimeout(n)})}(),n.fn.sakura=function(i){function a(n,i){return Math.floor(Math.random()*(i-n+1))+n}function t(n,i,a){for(var t=0;e>t;t++)o[t]||(i=i.toLowerCase()),n.get(0).addEventListener(o[t]+i,a,!1)}var o=["moz","ms","o","webkit",""],e=o.length,m={blowAnimations:["blow-soft-left","blow-medium-left","blow-hard-left","blow-soft-right","blow-medium-right","blow-hard-right"],className:"sakura",fallSpeed:1,maxSize:14,minSize:9,newOn:600,swayAnimations:["sway-0","sway-1","sway-2","sway-3","sway-4","sway-5","sway-6","sway-7","sway-8"]},i=n.extend({},m,i),r=n(document).height(),s=n(document).width(),w=n('<div class="'+i.className+'" />');n(MDL.markup.body).css({"overflow-x":"hidden"});var d=function(){setTimeout(function(){requestAnimationFrame(d)},i.newOn);var o=i.blowAnimations[Math.floor(Math.random()*i.blowAnimations.length)],e=i.swayAnimations[Math.floor(Math.random()*i.swayAnimations.length)],m=(Math.round(.007*r)+5*Math.random())*i.fallSpeed,l="fall "+m+"s linear 0s 1, "+o+" "+((m>30?m:30)-20+a(0,20))+"s linear 0s infinite, "+e+" "+a(2,4)+"s linear 0s infinite",u=w.clone(),c=a(i.minSize,i.maxSize),h=Math.random()*s-100,f=-(20*Math.random()+15);t(u,"AnimationEnd",function(){n(this).remove()}),t(u,"AnimationIteration",function(a){-1!=n.inArray(a.animationName,i.blowAnimations)&&n(this).remove()}),u.css({"-webkit-animation":l,"-o-animation":l,"-ms-animation":l,"-moz-animation":l,animation:l,height:c,left:h,"margin-top":f,width:c}).appendTo(MDL.markup.body)};n(window).resize(function(){r=n(document).height(),s=n(document).width()}),requestAnimationFrame(d)}
            }(jQuery);

            $("body").sakura();
        };

        MDL.Rest.falling = function() {
            var snowflakes = [],
                moveAngle = 0,
                animationInterval;

            function getRandomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            function createSnowflake() {
                var el = document.createElement('div'),
                    style = el.style;
                style.width = getRandomNumber(16, 20) + 'px';
                style.height = style.width;
                style.background = 'url(/mci_controller/images/flower.png)';
                style.backgroundSize = '100% 100%';
                style.position = 'fixed';
                style.zIndex = '999999';
                style.top = getRandomNumber(0, MDL.Event.height) + 'px';
                style.left = getRandomNumber(0, MDL.Event.width) + 'px';

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
                radius = parseInt(style.height, 10);
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
                var number = 20,
                    particle,
                    i;

                for (i=0; i<number; i++) {
                    particle = snowflakes[i] = createSnowflake();
                    MDL.markup.body.find('.banner_box a').append(particle);
                }

                animationInterval = setInterval(moveSnowflakes, 33);
            }
            setup();
        };

        MDL.Rest.wind = function () {
            var html = "<div class=\"mci-wind\"><div id=\"mci-wind-list-dom\"></div></div>";
            MDL.markup.body.find('.banner_box a').append(html);

            var windBox = MDL.markup.body.find('.mci-wind');
            var origin = windBox.find('#mci-wind-list-dom');
            var windBoxWidth = parseInt(MDL.markup.body.width()) * 2 + 100;
            var sec = 5000;
            var listLength = 650;
            var iNum = 25;

            MDL.Rest.wind.Dom = function () {
                windBox.find('.mci-wind-list').remove();
                var widthNum = 0;
                var widthNumJ = 0;
                var rotateNum = 0;
                var rotateNumJ = 0;

                for(var i=0; i<listLength; i++){
                    var dom = origin.clone(true);
                    dom.removeAttr('id').addClass('mci-wind-list mci-wind-list'+i);
                    dom.css({'top':widthNum + 'px', 'left':rotateNum + 'px'});
                    origin.before(dom);
                    var num = Math.floor(Math.random() * 5) + 4;
                    widthNum -= num;
                    rotateNum += num;

                    for(var j=0; j< (listLength / iNum); j++){
                        if ( i == (iNum * (j + 1)) ){
                            /!*var random = Math.floor(Math.random()*3) + 1;
                            widthNumJ += random;
                            widthNum = widthNumJ;
                            random = Math.floor(Math.random()*3) + 1;
                            rotateNumJ += random;
                            rotateNum = rotateNumJ;*!/
                            if(i % 10  == 0){
                                widthNumJ += 2;
                                widthNum = widthNumJ;
                                rotateNumJ += 3;
                                rotateNum = rotateNumJ;
                            }else if(i % 10 == 5){
                                widthNumJ += -4;
                                widthNum = widthNumJ;
                                rotateNumJ += 11;
                                rotateNum = rotateNumJ;
                            }
                        }
                    }

                }

                windBox.css({'position':'absolute','bottom': '330', 'left': '0','width':windBoxWidth+'px','height':windBoxWidth + 'px','transform':'rotate(280deg)'});
                windBox.find('.mci-wind-list').css({'position':'absolute','width':'2px','height':'1px','-webkit-border-radius':'50%','-moz-border':'50%','border-radius':'50%','background':'skyblue','opacity':'.5'});
            };
            MDL.Rest.wind.Dom();

            setTimeout(function () {
                windBox.css({'transition':'all 3s','transform':'rotate(150deg)'});
            },1000)
            /!*MDL.Rest.wind.setIn = function () {

            };
            MDL.Rest.wind.setIn();*!/
/!*
            setTimeout(function () {
                MDL.Rest.wind.Dom();
            },sec + 50);

            setInterval(function () {
                MDL.Rest.wind.setIn();
                setTimeout(function () {
                    MDL.Rest.wind.Dom();
                },sec + 50)
            },sec + 200);*!/
        }*/

    };
    return this.Init();
}
new MCI_KOREA_ADBANNERWEATHER();
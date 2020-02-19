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
        for(var i=0; i<AdBanner.length; i++) {
            var AdImg = AdBanner.eq(i).find('a');
            AdImg.css({'display': 'block'});
            AdImg.wrap('<div></div>');
            AdImg.parent('div').addClass('mci-bannerList');
            AdImg.append('<canvas></canvas>');
            AdImg.find('canvas').attr('id', 'canvas_' + i);
            MDL.markup.width = Number(AdBanner.eq(i).find('img').width());
            MDL.markup.height = Number(AdBanner.eq(i).find('img').height());
            AdBanner.eq(i).find('img').css({'display': 'none'});

            AdBanner.find('canvas').css({
                'width': MDL.markup.width + 'px',
                'height': MDL.markup.height + 'px',
                'background-image': 'url(//img.mobon.net/ad/imgfile//2019/RmlsYQ==/7ebd3a9a-f1a9-4f9c-b288-bcc89bcb23f901.png)',
                'background-repeat':'no-repeat',
                'background-size': MDL.markup.width + 'px '+ MDL.markup.height + 'px',
                'background-position': 'center'
            })
        }
    };
    this.Event = function () {
        MDL.Event.cracked = function (crack_idx) {
            var id, x, y, cracks, cracksLength, interCracks, interCracksLength, maxCrackGap, parentChip, dir, distanceFromCenter, length, segments, endX , endY, parentChipId, parentCrack_1, parentCrack_2, chipId, dir1, dir2, a, aSpeed, dist, points;

            MDL.Event.cracked.Chip = function(idd, xx, yy) {
                id     = idd;
                x      = xx;
                y      = yy;
                cracks = [];
                cracksLength;
                interCracks = [];
                interCracksLength = Math.floor(Math.random()*100)+50;
                maxCrackGap = 100;
            }

            MDL.Event.cracked.Chip.prototype.init = function() {
                var dir = 0, i = 0;
                while(dir < 360) {
                    // Define direction angle for each crack
                    if (i == 0) dir = Math.floor(Math.random()*maxCrackGap);
                    else dir += Math.floor(Math.random()*maxCrackGap);

                    // Create crack
                    cracks[i] = new MDL.Event.cracked.Crack(id, i, dir);
                    if (i > 0) pieces[i-1] = new MDL.Event.cracked.Piece(id, i-1, cracks[i-1].dir, cracks[i].dir);
                    i++;
                }
                // Last piece
                pieces[i-1] = new MDL.Event.cracked.Piece(id, i-1, cracks[i-1].dir, cracks[0].dir);
                cracksLength = i-1;
                for (var u = 0; u < interCracksLength; u++) {
                    var randomCrackId_1 = Math.floor(Math.random()*(cracksLength-1));
                    var randomCrackId_2 = randomCrackId_1+1;
                    interCracks[u] = new MDL.Event.cracked.InterCrack(id, u, randomCrackId_1, randomCrackId_2);
                }
            };

            MDL.Event.cracked.Chip.prototype.die = function() {
                chips[id] = null;
                delete chips[id];
            };

            MDL.Event.cracked.Crack = function(parentChipp, idd, dirr) {
                parentChip = parentChipp;
                id         = idd;
                dir        = dirr;
                distanceFromCenter = Math.floor(Math.random()*10);
                x          = chips[parentChip].x;
                y          = chips[parentChip].y;

                length     = DIAG;
                segments	= Math.floor(Math.random()*2);

                endX       = x + Math.cos(degToRad(dir)) * length;
                endY       = y + Math.sin(degToRad(dir)) * length;

                MDL.Event.cracked.Crack.prototype.draw();
            };

            MDL.Event.cracked.Crack.prototype.draw = function() {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = "red";
                var line_width = Math.random();
                if (line_width < .3) ctx.lineWidth = 1;
                if (line_width >= .3 && line_width <= .8) ctx.lineWidth = 2;
                if (line_width > .8) ctx.lineWidth = 3;
                ctx.stroke();
                ctx.closePath();
            };

            MDL.Event.cracked.InterCrack = function(parentChipIdd, idd, parentCrack_11, parentCrack_22) {
                parentChipId    = parentChipIdd;
                id            = idd;
                parentCrack_1 = parentCrack_11;
                parentCrack_2 = parentCrack_22;

                distanceFromCenter	= Math.floor(Math.random()*Math.max(WIDTH, HEIGHT)) +10;
                parentChip = chips[parentChipId];
                parentCrack_1 = parentChip.cracks[parentCrack_11];
                parentCrack_2 = parentChip.cracks[parentCrack_22];
                x = parentChip.x + Math.cos(degToRad(parentCrack_1.dir)) * distanceFromCenter;
                y = parentChip.y + Math.sin(degToRad(parentCrack_1.dir)) * distanceFromCenter;

                endX = parentChip.x + Math.cos(degToRad(parentCrack_2.dir)) * distanceFromCenter;
                endY = parentChip.y + Math.sin(degToRad(parentCrack_2.dir)) * distanceFromCenter;

                MDL.Event.cracked.InterCrack.prototype.draw();
            };

            MDL.Event.cracked.InterCrack.prototype.draw = function() {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.closePath();
            };

            MDL.Event.cracked.Piece = function(chipIdd, idd, dir11, dir22) {
                chipId = chipIdd;
                id = idd;
                dir1 = dir11;
                dir2 = dir22;
                a = 0;
                dist = DIAG;
                aSpeed = .004;
                points = {
                    x1: chips[chipId].x,
                    y1: chips[chipId].y,
                    x2: chips[chipId].x + Math.cos(degToRad(dir1)) * dist,
                    y2: chips[chipId].y + Math.sin(degToRad(dir1)) * dist,
                    x3: chips[chipId].x + Math.cos(degToRad(dir2)) * dist,
                    y3: chips[chipId].y + Math.sin(degToRad(dir2)) * dist
                };
            };

            MDL.Event.cracked.Piece.prototype.update = function() {
                a += aSpeed;
                MDL.Event.cracked.Piece.prototype.draw();
            };

            MDL.Event.cracked.Piece.prototype.draw = function() {
                ctx.globalCompositeOperation = "destination-out";
                ctx.fillStyle = "rgba(255,255,255,"+a+")";
                ctx.beginPath();
                ctx.moveTo(points.x1, points.y1);
                ctx.lineTo(points.x2, points.y2);
                ctx.lineTo(points.x3, points.y3);
                ctx.closePath();
                ctx.fill();
            };

            MDL.Event.cracked.Piece.prototype.die = function() {
                pieces[id] = null;
                delete pieces[id];
            };

            var canvas = document.getElementById('canvas_'+crack_idx),
                ctx = canvas.getContext('2d'),
                WIDTH  = 0,
                HEIGHT = 0,
                DIAG = 0;

            var init = true,
                sky1_src = "//img.mobon.net/ad/imgfile/916b5a3c7f2bb266b230f8e4467a0c5d0218160.jpg",
                sky2_src = "//img.mobon.net/ad/imgfile//2019/RmlsYQ==/7ebd3a9a-f1a9-4f9c-b288-bcc89bcb23f901.png",
                chips  = [],
                pieces = [],
                intervals = [],
                animationOn = true,
                phase = 1,
                listening = true;


            MDL.Event.cracked.setCanvasSize = function() {
                WIDTH  = MDL.markup.width,
                    HEIGHT = MDL.markup.height;
                DIAG = Math.sqrt(Math.pow(WIDTH,2) + Math.pow(HEIGHT,2));
                canvas.setAttribute("width", WIDTH);
                canvas.setAttribute("height", HEIGHT);
            };

            MDL.Event.cracked.setCanvasSize();

            var sky2 = new Image();
            sky2.src = sky2_src;
            sky2.onload = function(){
                drawCoverImage(ctx, this, WIDTH,HEIGHT);
                if (init) {
                    init = false;
                    setTimeout(function(){
                        canvas.style.backgroundImage = "url("+sky1_src+")";
                    },500);

                }

                ctx.globalCompositeOperation = "destination-out";

                MDL.Event.cracked.eventDom = function() {
                    if (!listening) return;

                    var chipId = 0;
                    var clientX = parseInt(Math.random() * (MDL.markup.width -160)) + 80;
                    var clientY = parseInt(Math.random() * (MDL.markup.height -160)) + 80;
                    chips[chipId] = new MDL.Event.cracked.Chip(chipId, clientX, clientY);
                    chips[chipId].init();
                    listening = false;

                    setTimeout(function() {
                        animate(0);
                    }, 1500);
                };

                MDL.Event.cracked.eventDom();
            };

            MDL.Event.cracked.reset = function() {
                listening = true;
                animationOn = true;

                // Reset pieces
                for (var i in pieces) {
                    pieces[i].die();
                }
                pieces = [];

                // Reset chip
                chips[0].die();
                chips = [];

                // Reset animation intervals
                for (var i in intervals) {
                    clearInterval(intervals[i]);
                }
                intervals = [];

                // Image swap
                if (phase == 1) {
                    sky2.src = sky1_src;
                    setTimeout(function() {
                        canvas.style.backgroundImage = "url("+sky2_src+")";
                    }, 500);
                    phase = 2;
                } else {
                    sky2.src = sky2_src;
                    setTimeout(function() {
                        canvas.style.backgroundImage = "url("+sky1_src+")";
                    }, 500);
                    phase = 1;
                }
            };

            function degToRad(deg) {
                return deg * (Math.PI / 180);
            }

            function drawCoverImage(ctx, img, w, h) {
                ctx.globalCompositeOperation = "source-over";
                var image_w = w,
                    image_h = h,
                    scene_w = w,
                    scene_h = h;
                if (scene_w/scene_h <= image_w/image_h) {
                    var drawn_w = image_w*(scene_h/image_h),
                        x_offset = ((drawn_w - scene_w) / 2)* -1;
                    ctx.drawImage(img, x_offset, 0, drawn_w, scene_h);
                } else {
                    var drawn_h = image_h*(scene_w/image_w),
                        y_offset = ((drawn_h - scene_h) / 2)* -1;
                    ctx.drawImage(img, 0, y_offset, scene_w, drawn_h);
                }
            };

            function animate(pieceId){
                var stop = false;
                intervals[pieceId] = setInterval(function(){
                    if (pieceId >= pieces.length) {
                        animationOn = false;
                        clearInterval(intervals[pieceId]);
                        return;
                    }
                    if (typeof pieces[pieceId] != "undefined") pieces[pieceId].update();
                }, 17);
                setTimeout(function() {
                    if (animationOn) animate(pieceId+1);
                    else setTimeout(MDL.Event.cracked.reset, 2500);
                }, 50);
            };
        };

        var AdBanner = $MCI('.appladBanner');
        for(var i=0; i<AdBanner.length; i++) {
            MDL.Event.cracked(i);
        }
    };
    return this.Init();
};
new MCI_KOREA_ADBANNERLINE();
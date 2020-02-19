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
                    MDL.Event1(0);
                    MDL.Event2(1);
                    MDL.Event3(2);
                    MDL.Event4(3);
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
            });
        }
    };
    this.Event = function () {
        MDL.Event.EventDom = function (Event, canvasNum) {
            Event.cracked = function (canvasNum) {
                Event.cracked.Chip = function(id, x, y) {
                    this.id     = id;
                    this.x      = x;
                    this.y      = y;
                    this.cracks = [];
                    this.cracksLength;
                    this.interCracks = [];
                    this.interCracksLength = Math.floor(Math.random()*100)+50;
                    this.maxCrackGap = 100;
                };

                Event.cracked.Chip.prototype.init = function() {
                    var dir = 0, i = 0;
                    while(dir < 360) {
                        // Define direction angle for each crack
                        if (i == 0) dir = Math.floor(Math.random()*this.maxCrackGap);
                        else dir += Math.floor(Math.random()*this.maxCrackGap);

                        // Create crack
                        this.cracks[i] = new Event.cracked.Crack(this.id, i, dir);
                        if (i > 0) pieces[i-1] = new Event.cracked.Piece(this.id, i-1, this.cracks[i-1].dir, this.cracks[i].dir);
                        i++;
                    }
                    // Last piece
                    pieces[i-1] = new Event.cracked.Piece(this.id, i-1, this.cracks[i-1].dir, this.cracks[0].dir);
                    this.cracksLength = i-1;
                    for (var u = 0; u < this.interCracksLength; u++) {
                        var randomCrackId_1 = Math.floor(Math.random()*(this.cracksLength-1));
                        var randomCrackId_2 = randomCrackId_1+1;
                        this.interCracks[u] = new Event.cracked.InterCrack(this.id, u, randomCrackId_1, randomCrackId_2);
                    }
                };

                Event.cracked.Chip.prototype.die = function() {
                    chips[this.id] = null;
                    delete chips[this.id];
                };

                Event.cracked.Crack = function(parentChip, id, dir) {
                    this.parentChip = parentChip;
                    this.id         = id;
                    this.dir        = dir;
                    this.distanceFromCenter = Math.floor(Math.random()*10);
                    this.x          = chips[this.parentChip].x;
                    this.y          = chips[this.parentChip].y;

                    this.length     = DIAG;
                    this.segments	= Math.floor(Math.random()*2);

                    this.endX       = this.x + Math.cos(Event.degToRad(this.dir)) * this.length;
                    this.endY       = this.y + Math.sin(Event.degToRad(this.dir)) * this.length;

                    this.draw();
                };

                Event.cracked.Crack.prototype.draw = function() {
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.endX, this.endY);
                    ctx.strokeStyle = "red";
                    var line_width = Math.random();
                    if (line_width < .3) ctx.lineWidth = 1;
                    if (line_width >= .3 && line_width <= .8) ctx.lineWidth = 2;
                    if (line_width > .8) ctx.lineWidth = 3;
                    ctx.stroke();
                    ctx.closePath();
                };

                Event.cracked.InterCrack = function(parentChipId, id, parentCrack_1, parentCrack_2) {
                    this.parentChipId    = parentChipId;
                    this.id            = id;
                    this.parentCrack_1 = parentCrack_1;
                    this.parentCrack_2 = parentCrack_2;

                    this.distanceFromCenter	= Math.floor(Math.random()*Math.max(WIDTH, HEIGHT)) +10;
                    var parentChip = chips[this.parentChipId];
                    var parentCrack_1 = parentChip.cracks[parentCrack_1];
                    var parentCrack_2 = parentChip.cracks[parentCrack_2];
                    this.x = parentChip.x + Math.cos(Event.degToRad(parentCrack_1.dir)) * this.distanceFromCenter;
                    this.y = parentChip.y + Math.sin(Event.degToRad(parentCrack_1.dir)) * this.distanceFromCenter;

                    this.endX = parentChip.x + Math.cos(Event.degToRad(parentCrack_2.dir)) * this.distanceFromCenter;
                    this.endY = parentChip.y + Math.sin(Event.degToRad(parentCrack_2.dir)) * this.distanceFromCenter;

                    this.draw();
                };

                Event.cracked.InterCrack.prototype.draw = function() {
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineTo(this.endX, this.endY);
                    ctx.strokeStyle = "black";
                    ctx.stroke();
                    ctx.closePath();
                };

                Event.cracked.Piece = function(chipId, id, dir1, dir2) {
                    this.chipId = chipId;
                    this.id = id;
                    this.dir1 = dir1;
                    this.dir2 = dir2;
                    this.a = 0;
                    this.dist = DIAG;
                    this.aSpeed = .004;
                    this.points = {
                        x1: chips[chipId].x,
                        y1: chips[chipId].y,
                        x2: chips[chipId].x + Math.cos(Event.degToRad(this.dir1)) * this.dist,
                        y2: chips[chipId].y + Math.sin(Event.degToRad(this.dir1)) * this.dist,
                        x3: chips[chipId].x + Math.cos(Event.degToRad(this.dir2)) * this.dist,
                        y3: chips[chipId].y + Math.sin(Event.degToRad(this.dir2)) * this.dist
                    };
                };

                Event.cracked.Piece.prototype.update = function() {
                    this.a += this.aSpeed;
                    this.draw();
                };

                Event.cracked.Piece.prototype.draw = function() {
                    ctx.globalCompositeOperation = "destination-out";
                    ctx.fillStyle = "rgba(255,255,255,"+this.a+")";
                    ctx.beginPath();
                    ctx.moveTo(this.points.x1, this.points.y1);
                    ctx.lineTo(this.points.x2, this.points.y2);
                    ctx.lineTo(this.points.x3, this.points.y3);
                    ctx.closePath();
                    ctx.fill();
                };

                Event.cracked.Piece.prototype.die = function() {
                    pieces[this.id] = null;
                    delete pieces[this.id];
                };

                var canvas = document.getElementById('canvas_'+canvasNum),
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

                Event.cracked.setCanvasSize = function() {
                    WIDTH  = MDL.markup.width,
                        HEIGHT = MDL.markup.height;
                    DIAG = Math.sqrt(Math.pow(WIDTH,2) + Math.pow(HEIGHT,2));
                    canvas.setAttribute("width", WIDTH);
                    canvas.setAttribute("height", HEIGHT);
                };

                Event.cracked.setCanvasSize();

                var sky2 = new Image();
                sky2.src = sky2_src;
                sky2.onload = function(){
                    Event.drawCoverImage(ctx, this, WIDTH,HEIGHT);
                    if (init) {
                        init = false;
                        setTimeout(function(){
                            canvas.style.backgroundImage = "url("+sky1_src+")";
                        },500);

                    }

                    ctx.globalCompositeOperation = "destination-out";

                    Event.cracked.eventDom = function() {
                        if (!listening) return;

                        var chipId = 0;
                        var clientX = parseInt(Math.random() * (MDL.markup.width -160)) + 80;
                        var clientY = parseInt(Math.random() * (MDL.markup.height -160)) + 80;
                        chips[chipId] = new Event.cracked.Chip(chipId, clientX, clientY);
                        chips[chipId].init();
                        listening = false;

                        setTimeout(function() {
                            Event.animate(0);
                        }, 1500);
                    };

                    Event.cracked.eventDom();
                };

                Event.cracked.reset = function() {
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

                Event.degToRad = function(deg) {
                    return deg * (Math.PI / 180);
                };

                Event.drawCoverImage = function(ctx, img, w, h) {
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

                Event.animate = function(pieceId){
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
                        if (animationOn) Event.animate(pieceId+1);
                        else setTimeout(Event.cracked.reset, 2500);
                    }, 50);
                };
            };

            Event.cracked(canvasNum);
        }

        this.Event1 = function (canvasNum) {
            var Event = MDL.Event1;
            MDL.Event.EventDom(Event, canvasNum);
        };
        this.Event2 = function (canvasNum) {
            var Event = MDL.Event2;
            MDL.Event.EventDom(Event, canvasNum);
        };
        this.Event3 = function (canvasNum) {
            var Event = MDL.Event3;
            MDL.Event.EventDom(Event, canvasNum);
        };
        this.Event4 = function (canvasNum) {
            var Event = MDL.Event4;
            MDL.Event.EventDom(Event, canvasNum);
        };
    };

    return this.Init();
};
new MCI_KOREA_ADBANNERLINE();
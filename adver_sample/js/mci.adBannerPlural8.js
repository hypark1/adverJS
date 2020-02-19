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
                    MDL.jqueryColor();
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
        for(var i=0; i<1; i++) {
            var AdImg = AdBanner.eq(i).find('a');
            AdImg.css({'display': 'block'});
            AdImg.wrap('<div></div>');
            AdImg.parent('div').addClass('mci-bannerList');

            AdImg.find('img').wrap('<div></div>');
            AdImg.find('img').parent('div').addClass('mci-bannerBox');
            AdImg.find('img').addClass('bg-image bg-image-main animated')
            AdImg.find('.mci-bannerBox').append('<div class="drawing ui-corner-all animated">\n' +
                '       <canvas id="draw-refract"></canvas>\n' +
                '       <canvas id="draw-reflect"></canvas>\n' +
                '       <canvas id="draw-fractures"></canvas>\n' +
                '       <canvas id="draw-mainline"></canvas>\n' +
                '       <canvas id="draw-noise"></canvas>\n' +
                '       <canvas id="draw-debug" style="display: none;"></canvas>\n' +
                '       <div id="draw-picker"></div>\n' +
                '  </div>');
            /*AdImg.find('.mci-bannerContainer').attr('id', 'mci-bannerContainer_' + i);*/
            AdBanner.eq(i).find('.drawing').css({'position': 'relative','height':'343px'});
            AdBanner.eq(i).find('.drawing canvas').css({'position': 'absolute','top':'0','left':'0'});
            AdBanner.eq(i).find('.drawing div').css({'position': 'absolute','top':'0','left':'0'});

            MDL.markup.width = Number(AdBanner.eq(i).find('.mci-bannerBox').width());
            MDL.markup.height = Number(AdBanner.eq(i).find('.drawing').height());

            AdBanner.eq(i).find('.bg-image').css({'position': 'absolute','width':MDL.markup.width+'px'});
        }
    };
    this.Event = function () {
        var Event = MDL.Event;
        Event.renderCrackEffectRefract = function(cvs, img, p1, p2, line){
            var ctx = cvs.getContext('2d'),

                tx = line.tx,
                ty = line.ty,

                cp = line.cpt,

                ns = 3,
                td = 6,

                x1 = line.bbx1,
                y1 = line.bby1,
                w = line.bbwidth+ns*2,
                h = line.bbheight+ns*2;

            if (80 === 0) {
                return;
            }

            ctx.globalAlpha = 80 || 1;

            ctx.save();

            ctx.beginPath();
            ctx.moveTo(p1.x+ns*tx, p1.y+ns*ty);
            ctx.quadraticCurveTo(cp.x,cp.y,p2.x+ns*tx,p2.y+ns*ty);
            ctx.lineTo(p2.x-ns*tx, p2.y-ns*ty);
            ctx.quadraticCurveTo(cp.x,cp.y,p1.x-ns*tx,p1.y-ns*ty);
            ctx.closePath();
            ctx.clip();

            try
            {
                if (x1+td*tx < 0) {x1 = -td*tx;}
                if (y1+td*ty < 0) {y1 = -td*ty;}
                if (w+x1+td*tx > ctx.canvas.window.innerWidth) {w = ctx.canvas.window.innerWidth - x1+td*tx;}
                if (h+y1+td*ty > ctx.canvas.window.innerHeight) {h = ctx.canvas.window.innerHeight - y1+td*ty;}

                ctx.drawImage(img, x1+td*tx, y1+td*ty, w, h, x1, y1, w, h);
            }
            catch (e)
            {
                // Bounds debugging
                // console.log('x1:'+x1+',mx:'+td*tx+',y1:'+y1+',my:'+td*ty+',w:'+w+',h:'+h);
            }

            ctx.restore();
        }

        Event.renderCrackEffectReflect = function(cvs, img, p1, p2, line, options){
            var ctx = cvs.getContext('2d'),

                tx = line.tx,
                ty = line.ty,

                cp = line.cpt,

                dd = line.dl / 3,
                grd,
                clr = jQuery.Color('rgb(255,255,255)');

            if (0.3 === 0) return;

            ctx.globalAlpha = 0.3 || 1;

            try
            {
                grd = ctx.createLinearGradient(p1.x+dd*tx,p1.y+dd*ty,p1.x-dd*tx,p1.y-dd*ty);
            }
            catch (e)
            {
                // Bounds debugging
                console.log('x1:'+(p1.x+dd*tx)+',y1:'+(p1.y+dd*ty)+',x2:'+(p1.x-dd*tx)+',y2:'+(p1.y-dd*ty));
            }

            grd.addColorStop(0  , clr.alpha(0).toRgbaString());
            grd.addColorStop(0.5, clr.alpha(0.5).toRgbaString());
            grd.addColorStop(1  , clr.alpha(0).toRgbaString());

            ctx.fillStyle = grd;

            ctx.beginPath();
            ctx.moveTo(p1.x+dd*tx, p1.y+dd*ty);
            ctx.lineTo(p2.x+dd*tx, p2.y+dd*ty);
            ctx.lineTo(p2.x-dd*tx, p2.y-dd*ty);
            ctx.lineTo(p1.x-dd*tx, p1.y-dd*ty);
            ctx.closePath();
            ctx.fill();
        }

        Event.renderCrackEffectFractures = function(cvs, img, p1, p2, line, options){
            var ctx = cvs.getContext('2d'),

                tx = line.tx,
                ty = line.ty,

                sx = line.sx,
                sy = line.sy,

                sz = 33,

                dl = line.dl,
                mp = dl / 2,

                mpp = line.mpp,
                cma = line.cma,
                mpl1 = line.mpl1,
                mpl2 = line.mpl2,

                s, p, c, w, h1, h2, t,

                clr = jQuery.Color('rgb(255,255,255');

            if (0.4 === 0) return;

            ctx.globalAlpha = 0.4 || 1;

            ctx.lineWidth = 1;

            for (s=0;s<dl;s++)
            {

                if (s < mpp*dl)
                    c = cma * (1-Math.pow((mpl1-s)/mpl1, 2));
                else
                    c = cma * (1-Math.pow((mpl2-(dl-s))/mpl2, 2));

                c /= 2;

                p = Math.pow((s > mp ? dl - s : s)/mp, 2);

                w = Math.random() * 1 + 1;
                h1 = sz - Math.random() * p * sz + 1;
                h2 = sz - Math.random() * p * sz + 1;
                t = Math.random() * 20 - 10;

                if (Math.random() > p-sz/mp)
                {
                    ctx.fillStyle = clr.alpha(Math.round(Math.random() * 8 + 4) / 12).toRgbaString();

                    ctx.beginPath();
                    ctx.moveTo(p1.x + s*sx + c*tx,                 p1.y + s*sy + c*ty);
                    ctx.lineTo(p1.x + (t+s+w/2)*sx + h1*tx + c*tx,   p1.y + (-t+s+w/2)*sy + h1*ty + c*ty);
                    ctx.lineTo(p1.x + (s+w)*sx + c*tx,             p1.y + (s+w)*sy + c*ty);
                    ctx.lineTo(p1.x + (-t+s+w/2)*sx - h2*tx + c*tx,   p1.y + (t+s+w/2)*sy - h2*ty + c*ty);
                    ctx.closePath();
                    ctx.fill();
                }

                s += mp * (p/2+0.5);
            }
        }

        Event.renderCrackEffectMainLine = function(cvs, img, p1, p2, line, options){
            var ctx = cvs.getContext('2d'),

                tx = line.tx,
                ty = line.ty,

                cp = line.cpt,

                ns = 0.03 || 1,
                st = 0.14 || 1,
                hl = 0.2 || 0,
                tt = Math.random() * (ns*2) - (ns*2)/2,

                clr = jQuery.Color('rgb(255,255,255)'),
                nn = clr.lightness();

            if (65 === 0) return;

            ctx.globalAlpha = 65 || 1;

            ctx.lineWidth = 1;

            while (st > 0){
                ctx.strokeStyle =
                    clr
                        .lightness( (nn > 0.5 ? nn : (1-nn)) * (1-hl*Math.random()) )
                        .alpha(Math.round(Math.random() * 8 + 4) / 12)
                        .toRgbaString();


                ctx.beginPath();
                ctx.moveTo(p1.x+(st+tt)*tx, p1.y+(st-tt)*ty);
                ctx.quadraticCurveTo(cp.x,cp.y,p2.x+(st-tt)*tx,p2.y+(st+tt)*ty);
                ctx.stroke();

                st--;
            }

        }

        Event.renderCrackEffectNoise = function(cvs, img, p1, p2, line, options){
            var ctx = cvs.getContext('2d'),

                tx = line.tx,
                ty = line.ty,

                sx = line.sx,
                sy = line.sy,

                freq = 0.4,

                dl = line.dl,
                mp = dl / 2,

                mpp = line.mpp,
                cma = line.cma,
                mpl1 = line.mpl1,
                mpl2 = line.mpl2,

                dd = dl / 3,
                step = Math.ceil(dd * (1-(freq+0.5)/1.5) + 1),

                c, t, s, pos, cnt, m,

                clr = jQuery.Color('rgb(255,255,255)');

            if (1 === 0) return;

            ctx.globalAlpha = 1 || 1;

            ctx.lineWidth = 1;

            for (s=0;s<dl;s++){
                if (s < mpp*dl)
                    c = cma * (1-Math.pow((mpl1-s)/mpl1, 2));
                else
                    c = cma * (1-Math.pow((mpl2-(dl-s))/mpl2, 2));

                c /= 2;

                for (t=-dd;t<dd;t++){
                    if (Math.random() > Math.abs(t) / dd ){
                        cnt = Math.floor(Math.random()*4+0.5);
                        m = Math.random() * 2 - 1;

                        while (cnt >= 0){
                            ctx.strokeStyle = clr.alpha(Math.round(Math.random() * 10 + 2) / 30).toRgbaString();

                            pos = Math.floor(Math.random()*5+0.5);

                            ctx.beginPath();
                            ctx.moveTo(p1.x + (s-pos)*sx + (m+t)*tx + c*tx, p1.y + (s-pos)*sy + (-m+t)*ty + c*ty);
                            ctx.lineTo(p1.x + (s+pos)*sx + (-m+t)*tx + c*tx, p1.y + (s+pos)*sy + (m+t)*ty + c*ty);
                            ctx.stroke();

                            cnt--;
                            pos++;
                        }
                    }
                    t += Math.random()*step*2;
                }
                s += Math.random()*step*4;
            }
        };

        Event.renderCrackEffectDebug = function(cvs, img, p1, p2, line, options)
        {
            var ctx = cvs.getContext('2d'),

                tx = line.tx,
                ty = line.ty,

                sx = line.sx,
                sy = line.sy,

                mpp = line.mpp,
                cma = line.cma/2,
                mpl1 = line.mpl1,

                cp = line.cpt;

            ctx.strokeStyle = 'rgba(0,0,0,0)';
            ctx.fillStyle = 'rgba(0,0,0,0)';

            ctx.fillRect(p1.x, p1.y, 3, 3);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            ctx.strokeStyle = 'rgba(0,0,0,0)';

            ctx.beginPath();
            ctx.moveTo(p1.x+mpl1*sx, p1.y+mpl1*sy);
            ctx.lineTo(p1.x+mpl1*sx+cma*tx, p1.y+mpl1*sy+cma*ty);
            ctx.stroke();

            ctx.strokeStyle = 'rgba(0,0,0,0)';

            ctx.beginPath();
            ctx.moveTo(p1.x+(mpl1-5)*sx+cma*tx, p1.y+(mpl1-5)*sy+cma*ty);
            ctx.lineTo(p1.x+(mpl1+5)*sx+cma*tx, p1.y+(mpl1+5)*sy+cma*ty);
            ctx.stroke();
        }

        Event.renderCrackEffectAll = function($canvas, $image, paths, options){
            var i, line,
                len = paths.length;

            for (i=0;i<len;i++){
                line = paths[i];
                Event.renderCrackEffectRefract($canvas[0], $image[0], line.p1, line.p2, line.desc);
                Event.renderCrackEffectReflect($canvas[1], $image[0], line.p1, line.p2, line.desc);
                Event.renderCrackEffectFractures($canvas[2], $image[0], line.p1, line.p2, line.desc);
                Event.renderCrackEffectMainLine($canvas[3], $image[0], line.p1, line.p2, line.desc);
                Event.renderCrackEffectNoise($canvas[4], $image[0], line.p1, line.p2, line.desc);

                if ('Show') {Event.renderCrackEffectDebug($canvas[5], $image[0], line.p1, line.p2, line.desc)};

            }

        };

        var _RAD = Math.PI / 180;

        Event.findPointOnCircle = function(c, r, a)
        {
            return {
                x: c.x + r * Math.cos(a*_RAD) - r * Math.sin(a*_RAD),
                y: c.y + r * Math.sin(a*_RAD) + r * Math.cos(a*_RAD)
            };
        }

        Event.describeLinePath = function(p1, p2, cv)
        {
            var o = {},
                ll,
                cv = 5*cv;

            o.dx = (p2.x - p1.x);
            o.dy = (p2.y - p1.y);
            o.dl = Math.sqrt(o.dx*o.dx + o.dy*o.dy);

            // Vectors
            o.sx = o.dx / o.dl;
            o.sy = o.dy / o.dl;

            o.tx = o.dy / o.dl;
            o.ty = -o.dx / o.dl;

            //Curvature
            o.mpp = Math.random() * 0.5 + 0.3;
            o.mpl1 = o.dl * o.mpp;
            o.mpl2 = o.dl - o.mpl1;

            ll = Math.log(o.dl*Math.E);
            o.cma = Math.random() * ll * cv - ll * cv / 2;
            o.cpt = {x: p1.x + o.sx*o.mpl1 + o.tx*o.cma, y: p1.y + o.sy*o.mpl1 + o.ty*o.cma};

            // Bounding box
            o.bbx1 = Math.min(p1.x, p2.x, o.cpt.x);
            o.bby1 = Math.min(p1.y, p2.y, o.cpt.y);
            o.bbx2 = Math.max(p1.x, p2.x, o.cpt.x);
            o.bby2 = Math.max(p1.y, p2.y, o.cpt.y);
            o.bbwidth = o.bbx2 - o.bbx1;
            o.bbheight = o.bby2 - o.bby1;

            return o;
        }

        Event.findCrackEffectPaths = function(options){
            var imx = 0,
                imy = 0,
                imw = options.width,
                imh = options.height,
                ctx,
                main = [[]],
                lines = [],
                level = 1,
                maxl = 0,
                r = 15,
                c = options.center,
                pt1, pt2, ang, num, num2;

            num = 20;
            ang = 360/(num+1);

            while (main[0].length < num){
                num2 = (ang*main[0].length)+10;
                pt2 = Event.findPointOnCircle(c, 5, num2);
                main[0].push({angle: num2, point: pt2});
            }

            while(r < 500){
                main[level]=[];
                for (num2=0;num2<num;num2++){
                    pt1 = main[level-1][num2];
                    main[level][num2] = null;

                    if (pt1){
                        if ((pt1.point.x > imx && pt1.point.x < imw) && (pt1.point.y > imy && pt1.point.y < imh))
                        {
                            ang = pt1.angle + Math.random() * 10 / num - 10 / 2 / num;
                            if (ang > 350) ang = 350;

                            pt1 = pt1.point;
                            pt2 = Event.findPointOnCircle(c, r+Math.random()*r/level-r/(level*2), ang);
                            main[level][num2] = {angle: ang, point: {x: pt2.x, y: pt2.y}};
                        }else if (maxl == 0){
                            maxl = level;
                        }
                    }
                }

                level++;
                r *= Math.random()*1.5 + (1.5 - 50 / 100);
            }

            if (maxl == 0) maxl = level;

            var l=1, g=0;

            for (;l<level;l++){
                for (g=0;g<num;g++){
                    pt1 = main[l-1][g];
                    pt2 = main[l][g];

                    if (pt1 && pt2){
                        lines.push({
                            p1: {x:pt1.point.x, y:pt1.point.y},
                            p2: {x:pt2.point.x, y:pt2.point.y},
                            desc: Event.describeLinePath(pt1.point, pt2.point, 30 / 100),
                            level: l
                        });

                        if (Math.random() < (60 / 100)){
                            pt1 = main[l][(g+1)%num];
                            if (pt1){
                                lines.push({
                                    p1: {x:pt2.point.x, y:pt2.point.y},
                                    p2: {x:pt1.point.x, y:pt1.point.y},
                                    desc: Event.describeLinePath(pt2.point, pt1.point, 30 / 100),
                                    level: l
                                });
                            }
                        }

                        if (l < level-1 && Math.random() < (30 / 100)){
                            pt1 = main[l+1][(g+1)%num];
                            if (pt1){
                                lines.push({
                                    p1: {x:pt2.point.x, y:pt2.point.y},
                                    p2: {x:pt1.point.x, y:pt1.point.y},
                                    desc: Event.describeLinePath(pt2.point, pt1.point, 30 / 100),
                                    level: l
                                });
                            }
                        }
                    }
                }
            }
            return lines;
        };

        Event.clearDrawing = function($canvas){
            $canvas.each(function(){
                var ctx = this.getContext('2d');
                ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
            });
        };

        Event.validate = function(){
            var f = $('.c-field:not([fieldtype=none])'),
                b, g, pos,
                o = {};

            f.each(function (){
                var $el = $MCI(this), val=null;

                switch ($el.attr('fieldtype')){
                    case 'spinner' :
                        val = +$el.find('input')[0].value;
                        break;

                    case 'slider' :
                        val = $el.slider('value');
                        break;
                }

                b = $el.attr('databind');
                if (b.indexOf('.') > 0){
                    g = b.split('.')[0];
                    b = b.split('.')[1];

                    o[g] = o[g] || {};
                    o[g][b] = val;
                }else{
                    o[b] = val;
                }
            });

            return o;
        };

        Event.init = function(){
            var $canvas = $MCI('canvas'),
                $image = $MCI('.bg-image-main'),
                options, paths, currentCenter;

            $canvas.each(function() {
                this.height = MDL.markup.height;
                this.width = MDL.markup.width;
            });

            $MCI('#draw-picker').css({
                height: MDL.markup.height,
                width: MDL.markup.width
            });

            Event.init.rollingDom = function(){
                var x = Math.floor(Math.random() * (MDL.markup.width -100)) + 50,
                    y = Math.floor(Math.random() * (MDL.markup.height -100)) + 50;

                currentCenter = { x: x, y: y };

                if (options = Event.validate()){
                    options.height = MDL.markup.height;
                    options.width = MDL.markup.width;
                    options.center = currentCenter;
                    options.debug = true;

                    paths = Event.findCrackEffectPaths(options);

                    // clearDrawing($canvas);
                    Event.renderCrackEffectAll($canvas, $image, paths, options);
                }
            };
            setInterval(function () {
                Event.init.rollingDom();
                setTimeout(function () {
                    Event.clearDrawing($canvas);
                },1500)
            },3000);
        };

        $MCI('.bg-image-main')
            .one('load', Event.init)
            .each(function() { /* Opera! */ if (this.complete) { $MCI(this).trigger("load"); } });

    };

    this.jqueryColor = function () {
        /*! jQuery Color v@2.1.2 http://github.com/jquery/jquery-color | jquery.org/license */
        (function(a,b){function m(a,b,c){var d=h[b.type]||{};return a==null?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a)}function n(b){var c=f(),d=c._rgba=[];return b=b.toLowerCase(),l(e,function(a,e){var f,h=e.re.exec(b),i=h&&e.parse(h),j=e.space||"rgba";if(i)return f=c[j](i),c[g[j].cache]=f[g[j].cache],d=c._rgba=f._rgba,!1}),d.length?(d.join()==="0,0,0,0"&&a.extend(d,k.transparent),c):k[b]}function o(a,b,c){return c=(c+1)%1,c*6<1?a+(b-a)*c*6:c*2<1?b:c*3<2?a+(b-a)*(2/3-c)*6:a}var c="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",d=/^([\-+])=\s*(\d+\.?\d*)/,e=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1]*2.55,a[2]*2.55,a[3]*2.55,a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],f=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},g={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},h={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},i=f.support={},j=a("<p>")[0],k,l=a.each;j.style.cssText="background-color:rgba(1,1,1,.5)",i.rgba=j.style.backgroundColor.indexOf("rgba")>-1,l(g,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),f.fn=a.extend(f.prototype,{parse:function(c,d,e,h){if(c===b)return this._rgba=[null,null,null,null],this;if(c.jquery||c.nodeType)c=a(c).css(d),d=b;var i=this,j=a.type(c),o=this._rgba=[];d!==b&&(c=[c,d,e,h],j="array");if(j==="string")return this.parse(n(c)||k._default);if(j==="array")return l(g.rgba.props,function(a,b){o[b.idx]=m(c[b.idx],b)}),this;if(j==="object")return c instanceof f?l(g,function(a,b){c[b.cache]&&(i[b.cache]=c[b.cache].slice())}):l(g,function(b,d){var e=d.cache;l(d.props,function(a,b){if(!i[e]&&d.to){if(a==="alpha"||c[a]==null)return;i[e]=d.to(i._rgba)}i[e][b.idx]=m(c[a],b,!0)}),i[e]&&a.inArray(null,i[e].slice(0,3))<0&&(i[e][3]=1,d.from&&(i._rgba=d.from(i[e])))}),this},is:function(a){var b=f(a),c=!0,d=this;return l(g,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],l(e.props,function(a,b){if(g[b.idx]!=null)return c=g[b.idx]===f[b.idx],c})),c}),c},_space:function(){var a=[],b=this;return l(g,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var c=f(a),d=c._space(),e=g[d],i=this.alpha()===0?f("transparent"):this,j=i[e.cache]||e.to(i._rgba),k=j.slice();return c=c[e.cache],l(e.props,function(a,d){var e=d.idx,f=j[e],g=c[e],i=h[d.type]||{};if(g===null)return;f===null?k[e]=g:(i.mod&&(g-f>i.mod/2?f+=i.mod:f-g>i.mod/2&&(f-=i.mod)),k[e]=m((g-f)*b+f,d))}),this[d](k)},blend:function(b){if(this._rgba[3]===1)return this;var c=this._rgba.slice(),d=c.pop(),e=f(b)._rgba;return f(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return a==null?b>2?1:0:a});return c[3]===1&&(c.pop(),b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return a==null&&(a=b>2?1:0),b&&b<3&&(a=Math.round(a*100)+"%"),a});return c[3]===1&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(d*255)),"#"+a.map(c,function(a){return a=(a||0).toString(16),a.length===1?"0"+a:a}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),f.fn.parse.prototype=f.fn,g.hsla.to=function(a){if(a[0]==null||a[1]==null||a[2]==null)return[null,null,null,a[3]];var b=a[0]/255,c=a[1]/255,d=a[2]/255,e=a[3],f=Math.max(b,c,d),g=Math.min(b,c,d),h=f-g,i=f+g,j=i*.5,k,l;return g===f?k=0:b===f?k=60*(c-d)/h+360:c===f?k=60*(d-b)/h+120:k=60*(b-c)/h+240,h===0?l=0:j<=.5?l=h/i:l=h/(2-i),[Math.round(k)%360,l,j,e==null?1:e]},g.hsla.from=function(a){if(a[0]==null||a[1]==null||a[2]==null)return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],e=a[3],f=d<=.5?d*(1+c):d+c-d*c,g=2*d-f;return[Math.round(o(g,f,b+1/3)*255),Math.round(o(g,f,b)*255),Math.round(o(g,f,b-1/3)*255),e]},l(g,function(c,e){var g=e.props,h=e.cache,i=e.to,j=e.from;f.fn[c]=function(c){i&&!this[h]&&(this[h]=i(this._rgba));if(c===b)return this[h].slice();var d,e=a.type(c),k=e==="array"||e==="object"?c:arguments,n=this[h].slice();return l(g,function(a,b){var c=k[e==="object"?a:b.idx];c==null&&(c=n[b.idx]),n[b.idx]=m(c,b)}),j?(d=f(j(n)),d[h]=n,d):f(n)},l(g,function(b,e){if(f.fn[b])return;f.fn[b]=function(f){var g=a.type(f),h=b==="alpha"?this._hsla?"hsla":"rgba":c,i=this[h](),j=i[e.idx],k;return g==="undefined"?j:(g==="function"&&(f=f.call(this,j),g=a.type(f)),f==null&&e.empty?this:(g==="string"&&(k=d.exec(f),k&&(f=j+parseFloat(k[2])*(k[1]==="+"?1:-1))),i[e.idx]=f,this[h](i)))}})}),f.hook=function(b){var c=b.split(" ");l(c,function(b,c){a.cssHooks[c]={set:function(b,d){var e,g,h="";if(d!=="transparent"&&(a.type(d)!=="string"||(e=n(d)))){d=f(e||d);if(!i.rgba&&d._rgba[3]!==1){g=c==="backgroundColor"?b.parentNode:b;while((h===""||h==="transparent")&&g&&g.style)try{h=a.css(g,"backgroundColor"),g=g.parentNode}catch(j){}d=d.blend(h&&h!=="transparent"?h:"_default")}d=d.toRgbaString()}try{b.style[c]=d}catch(j){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=f(b.elem,c),b.end=f(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},f.hook(c),a.cssHooks.borderColor={expand:function(a){var b={};return l(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},k=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);
    }

    return this.Init();
};
new MCI_KOREA_ADBANNERLINE();
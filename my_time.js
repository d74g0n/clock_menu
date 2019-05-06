/* let tdisp = document.getElementById("time_display"); */
/* tdisp.innerHTML = time; */

/* TODO:

- font

*/



class dragon_time {
    constructor(bg = 'transparent', borderD = 'black', color = 'black', top = '10px', left = '0px', right = '0px', w = '64px', h = '19px') {
        console.log('[dragon_time][created]');
        // init:
        this.top = top;
        this.left = left;
        this.right = right;
        this.w = w;
        this.h = h;
        this.bg = bg;
        this.color = color;
        this.borderD = borderD;

        this.logicToggleA = false;
        this.logicToggleB = false;

        /* -=[ createDIV: */
        this.div = document.createElement('div');
        this.div.id = 'time_div';
        //        this.div.style.background = 'transparent';
        this.div.style.background = this.bg;
        document.body.appendChild(this.div);
        // style div::
        const sd = this.div.style;
        this.div.style.position = 'fixed';
        this.div.style.top = this.top;
        this.div.style.left = this.left;
        this.div.style.right = this.right;
        this.div.style.width = this.w;
        this.div.style.height = this.h;
        // border:
        this.div.style.border = `2px solid ${this.borderD}`;
        this.div.style.borderRadius = '15px';
        this.div.style.borderRadius = '15px';
        this.div.style.marginLeft = 'auto';
        this.div.style.marginRight = 'auto';

        this.div.onclick = function () {
            if (dt.logicToggleB) {
//                 dt.sskDiv('transform','rotateY(0deg)');
            } else {
//                dt.sskDiv('transform','rotateY(60deg)');
            }
            dt.logicToggleB = !dt.logicToggleB;
        }


        /* -=[ SPAN */
//        this.span = document.createElement('span');
        this.span = document.createElement('span');
        this.span.id = 'time_span';

        this.span.onclick = function () {
            console.log('[onclick][time_span]');
            if (dt.logicToggleA) {
                /*
                dt.sskDiv('height', '64px');
                dt.sskDiv('borderRadius','5px');
                dt.sskDiv('borderTopLeftRadius','50px');
                dt.sskDiv('borderTopRightRadius','50px');
                dt.sskSpan('background', 'white');
                dt.sskSpan('boxShadow', '0px 1px 2px #000');
                */
//                dt.sskDiv('transform','rotateX(180deg)');
                
            } else {
                /*
                dt.sskSpan('background', 'transparent');
                dt.sskSpan('color', 'white');
                dt.sskDiv('height', '19px');
                dt.sskDiv('borderRadius','100px');
                
                setTimeout(function(){
                dt.sskSpan('boxShadow', '0px 0px 0px #000');
                    }, 999);
                */
//                dt.sskDiv('transform','rotateX(360deg)');
            }
            dt.logicToggleA = !dt.logicToggleA;
            
            
        }

        this.div.appendChild(this.span);


        // SPAN Styling:
        const ss = this.span.style;
        this.span.style.display = 'inherit';
//        this.span.style.display = 'absolute';
        this.span.style.margin = '0';
        this.span.style.padding = '0';
        //        ss.color = this.color;
        this.span.style.color = this.color;
        // centering:
        ss.marginLeft = 'auto';
        ss.marginRight = 'auto';
        ss.textAlign = 'center';
        // border:
        this.span.style.border = '2px solid grey';
        this.span.style.borderRadius = '15px';
//        this.span.style.boxShadow = '0px 0px 2px red';
        // selection:
        this.span.style.userSelect = 'none';
        this.span.style.fontFamily = 'monospace';
        // EXPERIMENTAL:::
        this.span.style.textShadow = '0px 0px 1px black, 0 0 1px black, 0 0 0.1em black';

        this.getTime = function () {
            let now = new Date();
            let time = now.getHours() + ":" + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes() + ":" + (now.getSeconds() < 10 ? '0' : '') + now.getSeconds();
            document.getElementById('time_span').textContent = time;
        }


    }

    start() {
        this.timer = setInterval(this.getTime, 1000);
    }

    stop() {
        clearInterval(this.timer);
    }


    getheight() {
        return document.getElementById('time_div').clientHeight;
    }

    sskDiv(key, params) {
        this.div.style[key] = params;
        return this;
    }

    sskSpan(key, params) {
        this.span.style[key] = params;
        return this;
    }


}

console.log('starting');
let dt = new dragon_time('transparent');

dt.start();

/* dt.start(); */

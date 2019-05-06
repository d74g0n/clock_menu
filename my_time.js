/* let tdisp = document.getElementById("time_display"); */
/* tdisp.innerHTML = time; */

/* TODO:

- font

*/



class dragon_time {
    constructor(bg = 'transparent', borderD = 'black', color = 'black', top = '10px', left = '0px', right = '0px', w = '66px', h = '26px') {
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
            if (dt.logicToggleA) {
                //                 dt.sskDiv('transform','rotateY(0deg)');

                dt.sskDiv('height', '66px');
                dt.sskDiv('borderRadius', '5px');
                dt.sskDiv('borderTopLeftRadius', '50px');
                dt.sskDiv('borderTopRightRadius', '50px');
                dt.sskSpan('background', 'white');
            } else {
                //                dt.sskDiv('transform','rotateY(60deg)');
                dt.sskDiv('height', '26px');
                dt.sskDiv('width', '100px');
                dt.sskDiv('borderRadius', '100px');

            }
            dt.logicToggleA = !dt.logicToggleA;
        }


        /* -=[ SPAN */
        //        this.span = document.createElement('span');
        this.span = document.createElement('span');
        this.span.id = 'time_span';


        this.div.appendChild(this.span);

        this.sstyler = document.getElementById('time_span').style;

        this.sstyler.display = 'inherit';
        this.sstyler.height = '400px';




        // SPAN Styling:

        //        this.span.style.display = 'inherit';
        //        this.span.style.display = 'fixed';
        //        this.span.style.display = 'fixed';
        //        
        //        this.span.style.width = '200px';
        //        this.span.style.left = 0;
        /*        this.span.style.right = '100px';
                this.span.style.width = this.w;
                this.span.style.height = this.h-4;
                */

        /*        
                this.span.style.margin = '0';
                this.span.style.padding = '4px';
                //        ss.color = this.color;
                this.span.style.color = this.color;
                // centering:
                this.span.style.marginLeft = 'auto';
                this.span.style.marginRight = 'auto';
                this.span.style.margin = 'auto';
                this.span.style.padding = 'auto';
                this.span.style.textAlign = 'center';
                */
        //        this.span.style.height = '22px';


        // border:
        this.span.style.border = '2px solid grey';
        this.span.style.borderRadius = '15px';
        //        this.span.style.boxShadow = '0px 0px 2px red';
        // selection:
        this.span.style.userSelect = 'none';
        this.span.style.fontFamily = 'monospace';
        // EXPERIMENTAL:::
        this.span.style.textShadow = '0px 0px 1px black, 0 0 1px black, 0 0 0.1em black';




        this.span.onclick = function () {
            console.log('[onclick][time_span]');
            if (dt.logicToggleB) {} else {}
            dt.logicToggleB = !dt.logicToggleB;


        }



        this.getTime = function () {
            let now = new Date();
            //            let time = now.getHours() + ":" + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes() + ":" + (now.getSeconds() < 10 ? '0' : '') + now.getSeconds();
            //            let time = now.getHours() + ":" + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();

            let hours = now.getHours();
            if (hours > 12) {
                hours -= 12;
            }

            let time = hours + ":" + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes() + (now.getHours() < 12 ? 'AM' : 'PM');
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

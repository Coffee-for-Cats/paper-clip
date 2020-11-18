import {drawSize, tileString} from './configurations.js';

export {toBuffer, smash}

function toBuffer(map) {
    let canvas = document.createElement('canvas');
    canvas.width = map[0].length * drawSize;

    canvas.height = map.length * drawSize;
    canvas.style['image-rendering'] = 'pixelated';
    canvas.hidden = true;

    document.body.appendChild(canvas);

//you can ignore it
const ctx = canvas.getContext('2d');
let x = 0; let y = 0;

    map.forEach(() => { //for Each y...
        
        //console.log(map)
        map[y].forEach(() => { //for Each x...
            
            ctx.drawImage(
                tileString[map[y][x]],
                x*drawSize, y*drawSize,

                drawSize, drawSize
            )
            
            x++;
        })
        y++;
        x = 0;
    })

    return canvas
}


function smash() {
    //smashes all "paperS " into one.
}
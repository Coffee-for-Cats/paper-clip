import {clip} from './clip.js';
import {reZoom} from './configurations.js'

export {viewport, update}

const viewport = document.getElementById('viewport');
//console.log(viewport);
const ctx = viewport.getContext('2d');

let camera = {
    x: viewport.width / 2,
    y: viewport.height / 2,

    xRoot() {
        return camera.x - viewport.width/2;},
    yRoot() {
        return camera.y - viewport.height/2;},
}

function update() {

    ctx.clearRect(0, 0, viewport.width, viewport.height);

    ctx.drawImage(
        clip.papers[0], //proximo passo é usar apenas o "paper"
        camera.xRoot(), camera.yRoot(),
        viewport.width, viewport.height,
        0, 0,

        viewport.width * reZoom,
        viewport.height * reZoom
    )

    window.getAnimationFrame(update)
}
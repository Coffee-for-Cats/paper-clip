const tileSize = 16;
const zoom = 1;
const reZoom = 1; //changing this can consume more processing, it will zoom more and by this form you can decrease the normal zoom; decrease the normal zoom consume less memory per block.

const drawSize = tileSize * zoom;
const tileString = document.querySelectorAll('.tiles');
export {tileSize, zoom, reZoom, drawSize, tileString}
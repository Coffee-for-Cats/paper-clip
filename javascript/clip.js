import {toBuffer} from './backRender.js'
import {update} from './viewing.js'
import {smash} from './backRender.js'

export let clip

clip = {
    papers: []
}

clip.paper = function(maps) {
    for (var i = 0; i < maps.length; i++) {
        let paper = toBuffer(maps[i]) //loads the map in a new canvas

        clip.papers.push( paper ) //add the canvas to the "papers" array
    }

    smash()

    update()
}


//testes / exemplos
const map1 = [
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
]

clip.paper([map1])
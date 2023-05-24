/**
 * este es A-60 de doors del juego de roblox
 */
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        for (let index2 = 0; index2 <= 4; index2++) {
            led.plot(index, index2)
        }
        basic.pause(1)
    }
    for (let index = 0; index <= 4; index++) {
        for (let index2 = 0; index2 <= 4; index2++) {
            led.unplot(index, index2)
        }
        basic.pause(1)
    }
})

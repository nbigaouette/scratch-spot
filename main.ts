input.onButtonPressed(Button.A, function () {
    led.unplot(barre, 4)
    barre += -1
    if (barre < 0) {
        barre = 4
    }
    led.plot(barre, 4)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(barre, 4)
    barre += 1
    if (barre > 4) {
        barre = 0
    }
    led.plot(barre, 4)
})
let collision = false
let barre = 0
barre = 2
led.plot(barre, 4)
let tetris_x = 2
let tetris_y = 0
led.plot(tetris_x, tetris_y)
basic.forever(function () {
    basic.pause(500)
    while (collision == false) {
        led.unplot(tetris_x, tetris_y)
        tetris_y += 1
        if (tetris_y >= 5) {
            tetris_y = 0
            tetris_x = randint(0, 4)
        }
        led.plot(tetris_x, tetris_y)
        collision = tetris_x == barre && tetris_y == 4
        basic.pause(500)
    }
    images.createImage(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `).showImage(0)
})

input.onSound(DetectedSound.Loud, function () {
    ON = !(ON)
    if (ON) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.pause(40)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . . # . .
                . . . . .
                `)
            basic.pause(40)
            basic.showLeds(`
                . # . # .
                # # # # #
                # # # # #
                . # # # .
                . . # . .
                `)
            basic.pause(40)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . . # . .
                . . . . .
                `)
            basic.pause(40)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.pause(40)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(40)
        }
    } else {
        basic.clearScreen()
    }
})
let ON = false
input.setSoundThreshold(SoundThreshold.Loud, 128)

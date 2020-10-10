input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . . . . .
        # . . . .
        # # # # .
        # # # # #
        . . . . .
        `)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        . # # # .
        . . # . .
        `)
})
basic.forever(function () {
	
})

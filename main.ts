input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P1, 0)
    timer_on = true
    time_left_divide_1000 = 5
    while (time_left_divide_1000 != 0) {
        if (timer_on) {
            basic.pause(1000)
            time_left_divide_1000 += -1
        }
        basic.clearScreen()
        basic.showNumber(time_left_divide_1000 + 1)
    }
    if (time_left_divide_1000 == 0) {
        pins.analogWritePin(AnalogPin.P1, 1023)
        music.play(music.stringPlayable("E - C5 C A - F - ", 120), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    timer_on = false
    time_left_divide_1000 = 5
    basic.showString("r")
    pins.analogWritePin(AnalogPin.P1, 0)
})
let timer_on = false
let time_left_divide_1000 = 0
basic.clearScreen()
time_left_divide_1000 = 5
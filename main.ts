input.onButtonPressed(Button.A, function () {
    timer_on = true
    time_left_divide_1000 = 300
    while (time_left_divide_1000 != 0) {
        if (timer_on) {
            basic.pause(1000)
            time_left_divide_1000 += -1
        }
        basic.clearScreen()
        basic.showNumber(time_left_divide_1000)
    }
})
input.onButtonPressed(Button.AB, function () {
    timer_on = false
    time_left_divide_1000 = 300
    basic.showString("Reset Timer")
})
input.onButtonPressed(Button.B, function () {
    timer_on = !(timer_on)
    basic.showNumber(time_left_divide_1000)
    basic.showString("Paused timer")
})
let timer_on = false
let time_left_divide_1000 = 0
time_left_divide_1000 = 300

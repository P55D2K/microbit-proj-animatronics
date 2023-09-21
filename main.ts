let timer_on = false
let time_left_divide_100 = 3000
input.onButtonPressed(Button.A, function () {
    if (time_left_divide_100 != 0)
        if (timer_on) {
            basic.pause(100)
        }
        time_left_divide_100--;
    }
})
input.onButtonPressed(Button.AB, function () {
    timer_on = false
})
input.onButtonPressed(Button.B, function () {
	
})

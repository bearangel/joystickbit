radio.setGroup(10)
basic.forever(function () {
    radio.sendValue("Left_x", joystick.Gamepad_Wiggly(Wiggly.JOYSTICK_left_wi, Shaft.JOYSTICK_X_Shaft))
    radio.sendValue("Left_y", joystick.Gamepad_Wiggly(Wiggly.JOYSTICK_left_wi, Shaft.JOYSTICK_Y_Shaft))
    radio.sendValue("Rigth_x", joystick.Gamepad_Wiggly(Wiggly.JOYSTICK_right_wi, Shaft.JOYSTICK_X_Shaft))
    radio.sendValue("Right_y", joystick.Gamepad_Wiggly(Wiggly.JOYSTICK_right_wi, Shaft.JOYSTICK_Y_Shaft))
})

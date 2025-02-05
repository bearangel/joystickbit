def isJoystickTrigger(joystickValue: number):
    if joystickValue > 130 or joystickValue < 126:
        return True
    return False
def encode_frame(gamepad_id: number, joystick1_x: number, joystick1_y: number, joystick2_x: number, joystick2_y: number):
    bytearray
rigth_y = 0
rigth_x = 0
left_y = 0
left_x = 0
frame_format = "BhhhhH"
radio.set_group(10)

def on_forever():
    global left_x, left_y, rigth_x, rigth_y
    left_x = joystick.Gamepad_Wiggly(Wiggly.JOYSTICK_LEFT_WI, Shaft.JOYSTICK_X_SHAFT)
    left_y = joystick.Gamepad_Wiggly(Wiggly.JOYSTICK_LEFT_WI, Shaft.JOYSTICK_Y_SHAFT)
    rigth_x = joystick.Gamepad_Wiggly(Wiggly.JOYSTICK_RIGHT_WI, Shaft.JOYSTICK_X_SHAFT)
    rigth_y = joystick.Gamepad_Wiggly(Wiggly.JOYSTICK_RIGHT_WI, Shaft.JOYSTICK_Y_SHAFT)
    radio.send_value("left_x", left_x)
    radio.send_value("left_y", left_y)
    radio.send_value("rigth_x", rigth_x)
    radio.send_value("rigth_y", rigth_y)
basic.forever(on_forever)

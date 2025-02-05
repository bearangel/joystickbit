function setJoystickRange (srcRange: number) {
    newRange = Math.constrain(srcRange, minRange, maxRange)
    if (Math.abs(newRange) < 10) {
        // 添加死区
        newRange = 0
    }
    return newRange
}
let vr = 0
let vy = 0
let vx = 0
let newRange = 0
let minRange = 0
let maxRange = 0
let rr = 0
let lr = 0
let rf = 0
let lf = 0
basic.showIcon(IconNames.House)
maxRange = 255
minRange = -255
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    // 设置左x轴范围,前进后退
    vx = Math.map(joystick.Gamepad_Wiggly(Wiggly.JOYSTICK_left_wi, Shaft.JOYSTICK_X_Shaft), 0, 255, minRange, maxRange)
    vx = setJoystickRange(vx)
    // 设置左Y轴范围，左移右移
    vy = Math.map(joystick.Gamepad_Wiggly(Wiggly.JOYSTICK_left_wi, Shaft.JOYSTICK_Y_Shaft), 0, 255, minRange, maxRange)
    vy = setJoystickRange(vy)
    // 设置右X轴范围，左右旋转
    vr = Math.map(joystick.Gamepad_Wiggly(Wiggly.JOYSTICK_right_wi, Shaft.JOYSTICK_X_Shaft), 0, 255, minRange, maxRange)
    vr = setJoystickRange(vr)
    // 计算4个轮子的速度, 并作限幅处理
    // 左前轮
    lf = Math.constrain(vy + vx + vr, minRange, maxRange)
    // 右前轮
    rf = Math.constrain(vy - vx - vr, minRange, maxRange)
    // 左后轮
    lr = Math.constrain(vy - vx + vr, minRange, maxRange)
    // 右后轮
    rr = Math.constrain(vy + vx - vr, minRange, maxRange)
    radio.sendString("" + (`${lf},${rf},${lr},${rr}`))
})

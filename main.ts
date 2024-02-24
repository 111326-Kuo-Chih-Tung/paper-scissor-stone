radio.onReceivedNumber(function (receivedNumber) {
    basic.pause(1000)
    player_2 = randint(1, 3)
    if (player_2 == 1) {
        basic.showIcon(IconNames.Square)
    } else if (player_2 == 2) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
    basic.pause(1000)
    if (receivedNumber == player_2) {
        basic.showString("=")
        radio.sendString("=")
    } else if (receivedNumber == 3 && player_2 == 1) {
        basic.showString("W")
        radio.sendString("L")
    } else if (receivedNumber == 3 && player_2 == 2) {
        basic.showString("L")
        radio.sendString("W")
    } else if (receivedNumber == 2 && player_2 == 1) {
        basic.showString("L")
        radio.sendString("W")
    } else if (receivedNumber == 2 && player_2 == 3) {
        basic.showString("W")
        radio.sendString("L")
    } else if (receivedNumber == 1 && player_2 == 2) {
        basic.showString("W")
        radio.sendString("L")
    } else if (receivedNumber == 1 && player_2 == 3) {
        basic.showString("L")
        radio.sendString("W")
    }
})
input.onButtonPressed(Button.A, function () {
    player_1 = 1
    basic.showIcon(IconNames.Square)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    player_1 = 3
    basic.showIcon(IconNames.SmallSquare)
    radio.sendNumber(3)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    player_1 = 2
    basic.showIcon(IconNames.Scissors)
    radio.sendNumber(2)
})
let player_1 = 0
let player_2 = 0
radio.setGroup(1)

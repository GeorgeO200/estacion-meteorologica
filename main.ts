input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showNumber(Temperatura)
    basic.pause(1000)
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showNumber(Humedad)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Switch = !(Switch)
})
let Switch = false
let Humedad = 0
let Temperatura = 0
dht11_dht22.queryData(
DHTtype.DHT11,
DigitalPin.P0,
true,
false,
true
)
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    Humedad = dht11_dht22.readData(dataType.humidity)
    Temperatura = dht11_dht22.readData(dataType.temperature)
    basic.pause(1000)
    if (Switch) {
        serial.writeValue("Temp(°C)", Temperatura)
        basic.pause(2000)
    } else {
        serial.writeValue("Humedad", Humedad)
        basic.pause(2000)
    }
})

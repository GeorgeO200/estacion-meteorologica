input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . # . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showNumber(Presión)
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
    basic.showLeds(`
        # . . # .
        # . . # .
        # . . # .
        # . . # .
        # # . # #
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showNumber(Lluvia)
    basic.pause(1000)
    basic.clearScreen()
})
pins.onPulsed(DigitalPin.P1, PulseValue.High, function () {
    ContLluvia += 1
})
let Lluvia = 0
let Humedad = 0
let Temperatura = 0
let Presión = 0
dht11_dht22.queryData(
DHTtype.DHT11,
DigitalPin.P0,
true,
false,
true
)
let ContLluvia = 0
let CtePluviometro = 1
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
    Temperatura = envirobit.getTemperature()
    Presión = envirobit.getPressure()
    Lluvia = ContLluvia * CtePluviometro
    basic.pause(1000)
})

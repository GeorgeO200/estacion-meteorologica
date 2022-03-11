def on_button_pressed_a():
    basic.show_leds("""
        . # # # .
                . # . # .
                . # # # .
                . # . . .
                . # . . .
    """)
    basic.pause(1000)
    basic.clear_screen()
    basic.show_number(Presión)
    basic.pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        # # # # #
                . . # . .
                . . # . .
                . . # . .
                . . # . .
    """)
    basic.pause(1000)
    basic.clear_screen()
    basic.show_number(Temperatura)
    basic.pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        . # . # .
                . # . # .
                . # # # .
                . # . # .
                . # . # .
    """)
    basic.pause(1000)
    basic.clear_screen()
    basic.show_number(Humedad)
    basic.pause(1000)
    basic.clear_screen()
    basic.show_leds("""
        # . . # .
                # . . # .
                # . . # .
                # . . # .
                # # . # #
    """)
    basic.pause(1000)
    basic.clear_screen()
    basic.show_number(Lluvia)
    basic.pause(1000)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pulsed_p1_high():
    global ContLluvia
    ContLluvia += 1
pins.on_pulsed(DigitalPin.P1, PulseValue.HIGH, on_pulsed_p1_high)

Lluvia = 0
Humedad = 0
Temperatura = 0
Presión = 0
dht11_dht22.query_data(DHTtype.DHT11, DigitalPin.P0, True, False, True)
ContLluvia = 0
CtePluviometro = 1
basic.show_leds("""
    . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
""")
basic.pause(500)
basic.clear_screen()

def on_forever():
    global Humedad, Temperatura, Presión, Lluvia
    Humedad = dht11_dht22.read_data(dataType.HUMIDITY)
    Temperatura = envirobit.get_temperature()
    Presión = envirobit.get_pressure()
    Lluvia = ContLluvia * CtePluviometro
    basic.pause(1000)
basic.forever(on_forever)

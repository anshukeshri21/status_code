import React from 'react'
import { HardwareContainer } from './HardwareComponent'
function Hardware() {
  return (
    <div style={{ height: '100vh', top: '0'} }>
      <HardwareContainer>
        <h1 style={{textAlign: 'center'}}>Below are shown the details of hardware components used</h1><br/>
        <ul>
          <li>
            <h2>Microcontroller (e.g., Arduino UNO)</h2><br/>
            <h3>Function:</h3><br/>
            <p>Acts as the brain of the project, processing input signals (like those from the Bluetooth module and ultrasonic sensor) and controlling the output devices (motors, LEDs, horn, etc.).
            </p>
            <br/>
            <h3>Specifications:</h3><br/>
            <p>Processor: ATmega328P
            Operating Voltage: 5V
            Digital I/O Pins: 14 (of which 6 can be used as PWM outputs)
            Analog Input Pins: 6
            Flash Memory: 32 KB
            Clock Speed: 16 MHz
            </p>
          </li>
          <br/>
          <li>
            <h2>HC-05 Bluetooth Module</h2>
            <h3>Function:</h3><br/>
            <p>Allows wireless communication between the car and a smartphone or another Bluetooth-enabled device. It receives commands from the smartphone app and sends them to the microcontroller.
            </p>
            <br/>
            <h3>Specifications:</h3><br/>
            <p>Operating Voltage: 4.0V to 6.0V (typically 5V)
            Communication: UART (RX, TX)
            Range: Up to 10 meters
            Bluetooth Version: 2.0+EDR
            </p>
          </li>
          <br/>
          <li>
            <h2> L298N Motor Driver Module</h2>
            <h3>Function:</h3><br/>
            <p>Controls the motors based on signals received from the microcontroller. It can control the speed and direction of two DC motors independently.
            </p>
            <br/>
            <h3>Specifications:</h3><br/>
            <p>Operating Voltage: 5V to 35V
            Current: Up to 2A per channel
            Number of Channels: 2 (H-bridge)
            Control Logic Voltage: 5V (can be supplied by the Arduino)
            </p>
          </li>
          <br/>
          <li>
            <h2> DC Motors</h2>
            <h3>Function:</h3><br/>
            <p>Provide the driving force for the car's wheels. The speed and direction are controlled by the L298N motor driver.
            </p>
            <br/>
            <h3>Specifications:</h3>
            <p>
            Operating Voltage: Typically 6V to 12V
            RPM: Varies (e.g., 100 RPM, 200 RPM)
            Current: Depends on the motor size (usually within 0.5A to 1A under normal load)
            </p>
          </li>
          <br/>
          <li>
            <h2>Ultrasonic Sensor (HC-SR04)</h2>
            <h3>Function:</h3><br/>
            <p>Measures the distance to an obstacle in front of the car. It sends out ultrasonic pulses and measures the time it takes for the echoes to return.
            </p>
            <br/>
            <h3>Specifications:</h3><br/>
            <p>Operating Voltage: 5V
            Detection Range: 2 cm to 400 cm
            Accuracy: ±3mm
            Working Frequency: 40 kHz
            Pins: VCC, Trigger (Trig), Echo, GND
            </p>
          </li>
          <br/>
          <li>
            <h2>LEDs (LEDF, LEDB, LEDP)</h2>
            <h3>Function:</h3><br/>
            <p>Indicate the car's status (e.g., front lights, back lights, parking lights).
            </p>
            <br/>
            <h3>Specifications:</h3><br/>
            <p>Operating Voltage: 2V to 3.3V (usually connected with a current-limiting resistor)
            Current: Typically 20mA
            Colors: Varies (e.g., white, red)
            </p>
          </li>
          <br/>
          <li>
            <h2>Power Supply</h2>
            <h3>Function:</h3><br/>
            <p>
            Provides the necessary power to the microcontroller, motor driver, motors, and other components.
            Options:
            Battery: Common options include 9V batteries, AA batteries in series, or a LiPo battery pack.
            Voltage Regulator: Used if the power supply voltage needs to be regulated down to 5V for the Arduino or other components.
            </p>
          </li>
          <br/>
          <li>
            <h2>Chassis</h2>
            <h3>Function:</h3><br/>
            <p>
            The structure that holds all the components together. It provides mounting points for the motors, wheels, and other hardware.
            Materials: Typically plastic, metal, or acrylic.
            Size: Depends on the design and motor size.
            </p>
          </li>
          <br/>
          <li>
            <h2>Wheels</h2>
            <h3>Function:</h3><br/>
            <p>
            he wheels allow the car to move and are driven by the DC motors.
            Specifications:
            Diameter: Varies depending on design
            Material: Plastic or rubber
            </p>
          </li>
          <br/>
          <li>
            <h2>Jumper Wires</h2>
            <h3>Function:</h3>
            <p>
            Connect components on a breadboard or directly to the microcontroller.
            Types: Male-to-male, female-to-female, male-to-female.
            </p>
          </li>
        </ul>
      </HardwareContainer>
    </div>
  )
}

export default Hardware

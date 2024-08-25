// Define pins for motor control (adjust these based on your setup)
#define in1 3
#define in2 5
#define in3 6
#define in4 11

// Define pins for HC-SR04 Ultrasonic Sensor
#define TRIG_PIN 12
#define ECHO_PIN 13

// Threshold distance for auto-braking (in cm)
#define THRESHOLD_DISTANCE 40

int Speed = 160; // 0 - 255.

void setup() {
  // Initialize motor control pins as outputs
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
  pinMode(in3, OUTPUT);
  pinMode(in4, OUTPUT);

  // Initialize pins for ultrasonic sensor
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);

  // Initialize serial communication for Bluetooth
  Serial.begin(9600);

  // Test motors
  Stop();
}

void loop() {
  // Measure distance using the ultrasonic sensor
  unsigned int distance = measureDistance();

  // Send distance data to Bluetooth module
  Serial.print("Distance:");
  Serial.println(distance);

  // Read Bluetooth commands
  if (Serial.available()) {
    char command = Serial.read();
    executeCommand(command, distance);
  }

  // Add a small delay to avoid spamming the Bluetooth channel
  delay(100);
}

unsigned int measureDistance() {
  // Send a 10µs pulse to trigger the ultrasonic sensor
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  // Read the echo time in microseconds
  unsigned long duration = pulseIn(ECHO_PIN, HIGH);

  // Calculate the distance in centimeters
  unsigned int distance = duration * 0.034 / 2;

  return distance;
}

void executeCommand(char command, unsigned int distance) {
  switch (command) {
    case 'F':  // Move forward
      if (distance > THRESHOLD_DISTANCE) {
       forward();
      } else {
        Stop();  // Auto-brake if too close
      }
      break;
    case 'B':  // Move backward
      back();
      break;
    case 'L':  // Turn left
      left();
      break;
    case 'R':  // Turn right
      right();
      break;
    case 'S':  // Stop
      Stop();
      break;
    case '1'...'3':
      adjustSpeed(command);
      break;
    default:
      Stop();
      break;
  }
}

//function to adjust speed based on command
void adjustSpeed(int command) {
    switch (command) {
        case '1': Speed = 100; break;
        case '2': Speed = 191; break;
        case '3': Speed = 255; break;
    }
}

void forward() {
    analogWrite(in1, Speed);
    analogWrite(in3, Speed);
}

void back() {
    analogWrite(in2, Speed);
    analogWrite(in4, Speed);
}

void left() {
    analogWrite(in3, Speed);
    analogWrite(in2, Speed);
}

void right() {
    analogWrite(in4, Speed);
    analogWrite(in1, Speed);
}

void Stop() {
    analogWrite(in1, 0);
    analogWrite(in2, 0);
    analogWrite(in3, 0);
    analogWrite(in4, 0);
}

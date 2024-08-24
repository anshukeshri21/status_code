#define in1 3
#define in2 5
#define in3 6
#define in4 11

// Ultrasonic sensor pins
#define trigPin 12
#define echoPin 13

int command; // Int to store app command state.
int Speed = 204; // 0 - 255.
int Speedsec;
int distanceThreshold = 20; // Auto-brake threshold distance in cm

bool obstacleDetected = false;

void setup() {
    pinMode(in1, OUTPUT);
    pinMode(in2, OUTPUT);
    pinMode(in3, OUTPUT);
    pinMode(in4, OUTPUT);
   
    // Ultrasonic sensor setup
    pinMode(trigPin, OUTPUT);
    pinMode(echoPin, INPUT);

    Serial.begin(9600); // Set the baud rate to your Bluetooth module.
}

void loop() {
    if (Serial.available() > 0) {
        command = Serial.read();
    }
    
    long distance = measureDistance();
    
    if (distance <= distanceThreshold) {
        if (!obstacleDetected) {
            Stop(); // Stop the car when an obstacle is detected
            obstacleDetected = true;
        }
    } else {
        obstacleDetected = false;
    }

    if (!obstacleDetected) {
        handleCommand(command);
    }
}

void handleCommand(int command) {
    switch (command) {
        case 'F':
            forward();
            break;
        case 'B':
            back();
            break;
        case 'L':
            left();
            break;
        case 'R':
            right();
            break;
        case 'S':
            Stop();
            break;
        
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

long measureDistance() {
    digitalWrite(trigPin, LOW);
    delayMicroseconds(2);
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin, LOW);

    long duration = pulseIn(echoPin, HIGH);
    long distance = duration * 0.034 / 2; // Calculate distance in cm
    return distance;
}

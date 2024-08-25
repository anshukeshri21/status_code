import React, { useState } from 'react';
import { ManualContainer, Paragraph, SectionTitle, ContentCard, SearchBar } from './ManualElements';

function Manual() {
  const [searchTerm, setSearchTerm] = useState('');

  const content = [
    {
      title: 'Step 1: Assembly',
      text: `
        Start by laying out all the components on a clean workspace. Begin with the car’s chassis, which will serve as the base for all other components. Attach the motors to the rear of the chassis using screws or brackets, ensuring that the motor shafts are aligned properly for smooth wheel rotation. Once the motors are securely mounted, attach the wheels to the motor shafts. Spin each wheel manually to check for any resistance or misalignment.
        
        Next, place the battery holder on the chassis in a location that balances the car's weight. Secure it with screws or adhesive. Connect the battery holder’s wires to the motor driver, making sure to follow the correct polarity to avoid damaging the components. Now, mount the Bluetooth module on the chassis. Ensure it is positioned away from the motors to avoid interference. Use jumper wires to connect the Bluetooth module to the motor driver and the power supply. Double-check all connections for any loose or exposed wires that could cause short circuits.
        
        Finally, inspect the entire assembly to ensure all components are firmly in place. The car should be sturdy, with no loose parts. This step is crucial for reliable operation during movement.`
    },
    {
      title: 'Step 2: Pairing Bluetooth',
      text: `
        With the assembly complete, turn on the car by connecting the battery or flipping the power switch, if available. The Bluetooth module should enter pairing mode, indicated by a blinking LED. On your mobile device, navigate to the Bluetooth settings and initiate a scan for nearby devices. The car's Bluetooth module should appear in the list, typically named something like "HC-05" or "BT Module."
        
        Select the car’s Bluetooth signal to initiate pairing. You will be prompted to enter a passcode, usually "1234" or "0000." Once entered, the LED on the Bluetooth module should stop blinking and become solid, indicating a successful connection. If the pairing fails, restart both the car and your mobile device, then repeat the process. A stable Bluetooth connection is essential for controlling the car effectively. Keep your mobile device within range to maintain a strong signal.`
    },
    {
      title: 'Step 3: Control via App',
      text: `
        After successfully pairing your mobile device with the car, open the control app designed for this project. The app interface should display controls for movement, speed adjustment, and an emergency stop. Begin by testing the basic movements: forward, backward, left, and right. Ensure that the car responds accurately to each command. If the car does not move as expected, recheck the wiring, particularly the connections between the Bluetooth module, motor driver, and motors.
        
        The app also includes advanced features like speed control, which allows you to adjust the car's speed by varying the power supplied to the motors. This is particularly useful for navigating tight spaces or performing precise maneuvers. Additionally, the emergency stop button is a critical safety feature. Pressing it will immediately cut power to the motors, bringing the car to an instant halt. Familiarize yourself with these controls before using the car in more complex environments.`
    },
    {
      title: 'Step 4: Maintenance',
      text: `
        Regular maintenance is key to ensuring the longevity and optimal performance of your Bluetooth-controlled car. Start by periodically inspecting the motors for any signs of wear or overheating. If the motors become noisy or start to lose power, they may need lubrication or replacement. Check the wheels for debris that could obstruct movement, and clean them with a soft brush if necessary.
        
        The Bluetooth module and connections should also be checked regularly. Ensure that all wires are securely attached and that there are no signs of corrosion or damage. If you notice any connectivity issues, such as a weak signal or frequent disconnections, try repositioning the Bluetooth module or replacing the jumper wires.
        
        Battery maintenance is equally important. Rechargeable batteries should be charged fully before each use to prevent sudden power loss. If using disposable batteries, replace them when they start to lose charge. Store the car in a cool, dry place to prevent dust buildup and protect the electronics from moisture. By following these maintenance tips, you can keep your car in excellent condition for long-term use.`
    },
  ];

  const filteredContent = content.filter(item => 
    searchTerm === '' 
    ? item.title === 'Step 1: Assembly' 
    : item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ManualContainer>
      <SectionTitle>Manual</SectionTitle>
      <SearchBar
        type="text"
        placeholder="Search in the manual..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredContent.map((item, index) => (
        <ContentCard key={index}>
          <h3>{item.title}</h3>
          <Paragraph>{item.text}</Paragraph>
        </ContentCard>
      ))}
    </ManualContainer>
  );
}

export default Manual;

import React, {useState} from 'react'
import { ManualContainer , Paragraph , SectionTitle ,ContentCard, SearchBar} from './ManualElements';
function Manual() {
  const [searchTerm, setSearchTerm] = useState('');

  const content = [
    {
      title: 'Step 1: Assembly',
      text: 'Begin by assembling all the components of the car. Ensure all connections are secure and the Bluetooth module is correctly connected.',
    },
    {
      title: 'Step 2: Pairing Bluetooth',
      text: 'Turn on the car and your mobile device. Go to the Bluetooth settings on your mobile, find the car\'s Bluetooth signal, and pair with it using the provided code.',
    },
    {
      title: 'Step 3: Control via App',
      text: 'Once paired, open the control app on your mobile. Use the interface to move the car forward, backward, left, or right. The app also provides emergency stop functionality.',
    },
    {
      title: 'Step 4: Maintenance',
      text: 'Regularly check the car\'s components for wear and tear. Ensure the motors are functioning smoothly and the Bluetooth connection remains stable.',
    },
  ];

  const filteredContent = content.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
};

export default Manual

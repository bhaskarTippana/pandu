import React, { useState } from 'react';
import Plans from './Plans';
import Comparison from './Comparison';

function App() {
  const [selectedBanks, setSelectedBanks] = useState([]);

  const handleSelectedBanksChange = (selectedBanks) => {
    setSelectedBanks(selectedBanks);
  };

  return (
    <>
     <Plans onSelectedBanksChange={handleSelectedBanksChange} />

      <Comparison selectedBanks={selectedBanks} />
    </>
  );
}

export default App;

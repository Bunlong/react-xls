import React from 'react';
import { useExcelDownloder } from 'react-xls';

function App() {
  const { ExcelDownloder, setData } = useExcelDownloder();

  // We will make a Workbook contains 2 Worksheets
  const data = {
    // Worksheet named animals
    animals: [
      { name: 'cat', category: 'animal' },
      { name: 'dog', category: 'animal' },
      { name: 'pig', category: 'animal' },
    ],
    // Worksheet named pokemons
    pokemons: [
      { name: 'pikachu', category: 'pokemon' },
      { name: 'Arbok', category: 'pokemon' },
      { name: 'Eevee', category: 'pokemon' },
    ],
  };

  const setMyData = () => {
    const data = {
      // Worksheet named animals
      animals: [
        { name: 'cat1', category: 'animal' },
        { name: 'dog', category: 'animal' },
        { name: 'pig', category: 'animal' },
      ],
      // Worksheet named pokemons
      pokemons: [
        { name: 'pikachu', category: 'pokemon' },
        { name: 'Arbok', category: 'pokemon' },
        { name: 'Eevee', category: 'pokemon' },
      ],
    };
    setData(data);
    alert('Set my data');
  }

  return (
    <div>
      <ExcelDownloder
        data={data}
      >
        Downloader
      </ExcelDownloder>
      <button onClick={() => setMyData()}>Set My Data</button>
    </div>
  );
}

export default App;

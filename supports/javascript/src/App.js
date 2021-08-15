import React from 'react';
import { useExcelDownloder } from 'react-xls';

function App() {
  const { ExcelDownloder, setData, Type } = useExcelDownloder();

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
    // We will make a Workbook contains 2 Worksheets
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
  };

  return (
    <div>
      <ExcelDownloder
        data={data}
        filename={'book'}
        type={Type.Link}
      >
        Downloader
      </ExcelDownloder>
      <br/>
      <button onClick={() => setMyData()}>Set My Data</button>
    </div>
  );
}

export default App;

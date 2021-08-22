import { useExcelDownloder } from 'react-xls';

function App() {
  const { ExcelDownloder, Type } = useExcelDownloder();

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

  return (
    <div>
      <ExcelDownloder
        data={data}
        filename={'book'}
        type={Type.Button} // or type={'button'}
      >
        Download
      </ExcelDownloder>
    </div>
  );
}

export default App;

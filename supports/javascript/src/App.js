import React from 'react';
import { useXLS } from "react-xls";

function App() {
  const {
    Component,
  } = useXLS();

  return (
    <div>
      <Component />
    </div>
  );
}

export default App;

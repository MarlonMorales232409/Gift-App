import React, { useState } from 'react'

import InputForm from './Componets/InputForm';
import InputTask from './Componets/InputTask';

const taskDB = [
  
]

function App() {

  const [dataDB, setDataDB] = useState(taskDB)

  const createData = (data) => {
    data.id = Date.now();
    setDataDB([...dataDB, data])
  };

  const updateData = () => {};

  const delData = () => {};

  return (
    <div className="App">
    <h2>Lista de cosas por hacer</h2>
      <InputForm 
        createData={createData}
        updateData={updateData} 

      />
      <InputTask data={dataDB}/>
    </div>
  );
}

export default App;

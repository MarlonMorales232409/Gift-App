import React, { useState } from 'react'

import InputForm from './Componets/InputForm';
import InputTask from './Componets/InputTask';

const taskDB = [
  
]

function App() {

  const [dataToEdit, setDataToEdit] = useState(null)
  const [dataDB, setDataDB] = useState(taskDB)

  const createData = (data) => {
    data.id = Date.now();
    setDataDB([...dataDB, data])
  };

  const updateData = (data) => {
    let newData = dataDB.map(el => el.id === data.id ? data : el)
    setDataDB(newData)
  };

  const delData = () => {};

  return (
    <div className="App">
    <h2>Lista de cosas por hacer</h2>
      <InputForm 
        createData={createData}
        updateData={updateData} 
        setDataToEdit={setDataToEdit}
        dataToEdit={dataToEdit}
      />
      <InputTask data={dataDB} setDataToEdit={setDataToEdit} />
    </div>
  );
}

export default App;

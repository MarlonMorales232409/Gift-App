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

  const delData = (data) => {
    let confirm = window.confirm("Estas seguro que deseas borrar esta tarea");
    if(confirm){
      let delElement = dataDB.filter(el => el.id !== data);
      setDataDB(delElement)
    }else{
      alert("Se ha cancelado la operacion");
      return
    }
  };

  return (
    <div className="App">
    <h2>Lista de cosas por hacer</h2>
      <InputForm 
        createData={createData}
        updateData={updateData} 
        setDataToEdit={setDataToEdit}
        dataToEdit={dataToEdit}
      />
      <InputTask data={dataDB} setDataToEdit={setDataToEdit} delData={delData} />
    </div>
  );
}

export default App;

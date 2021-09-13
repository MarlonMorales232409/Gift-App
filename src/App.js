import React, { useState, useEffect } from "react";

import InputForm from "./Componets/InputForm";
import InputTask from "./Componets/InputTask";

const taskDB = [];

function App() {
  const [dataToEdit, setDataToEdit] = useState(null);
  const [dataDB, setDataDB] = useState(taskDB);
  const [taskComplete, setTaskComplete] = useState(null);

  useEffect(() => {
    if (taskComplete) {
      let completed = dataDB.map((el) =>
        el.id === taskComplete.id ? (el = taskComplete) : el
      );
      setDataDB(completed);
    } else {
      setTaskComplete(null);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskComplete]);

  const createData = (data) => {
    data.id = Date.now();
    setDataDB([...dataDB, data]);
  };

  const updateData = (data) => {
    let newData = dataDB.map((el) => (el.id === data.id ? data : el));
    setDataDB(newData);
  };

  const delData = (data) => {
    let confirm = window.confirm("Estas seguro que deseas borrar esta tarea");
    if (confirm) {
      let delElement = dataDB.filter((el) => el.id !== data);
      setDataDB(delElement);
    } else {
      alert("Se ha cancelado la operacion");
      return;
    }
  };

  const delComplete = (data) => {
    let confirm = window.confirm(
      "Deseas eliminar todas las tareas completadas"
    );
    if (confirm) {
      let clearData = [];
      for (let i = 0; i < dataDB.length; i++) {
        if (!dataDB[i].complete) {
          clearData.push(dataDB[i]);
        }
      }
      setDataDB(clearData);
    } else {
      alert("Se ha cancelado la operacion");
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
      <InputTask
        data={dataDB}
        setDataToEdit={setDataToEdit}
        delData={delData}
        setTaskComplete={setTaskComplete}
      />

      <button onClick={delComplete}>Eliminar Completadas</button>
    </div>
  );
}

export default App;

import React from "react";
import { InputRowTask } from "./InputRowTask";

const InputTask = ({ data, setDataToEdit, delData, setTaskComplete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Tareas</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          data.length === 0 
          ? (
            <tr>
              <td colSpan='2'>No hay datos</td>
            </tr>
          )
          : (
            data.map(el => <InputRowTask key={el.id} data={el} 
            setDataToEdit={setDataToEdit} delData={delData} setTaskComplete={setTaskComplete}/>)
          )
        }
      </tbody>
    </table>
  );
};

export default InputTask;

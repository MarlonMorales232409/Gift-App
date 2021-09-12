import React from "react";
import { InputRowTask } from "./InputRowTask";

const InputTask = ({ data, setDataToEdit, delData }) => {
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
            data.map(el => <InputRowTask key={el.id} data={el} setDataToEdit={setDataToEdit} delData={delData} />)
          )
        }
      </tbody>
    </table>
  );
};

export default InputTask;

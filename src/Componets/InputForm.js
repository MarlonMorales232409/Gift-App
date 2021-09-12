import React, {useState, useEffect} from 'react'

const initialDB = {
  task: "",
  id: null,
}

const InputForm = ({ createData, updateData, setDataToEdit, dataToEdit }) => {
  const [newTask, setNewTask] = useState(initialDB);

  useEffect(() => {
    if(dataToEdit){
        setNewTask(dataToEdit)
    }else{
        setNewTask(initialDB)
    }
  }, [dataToEdit])
  
  const handleChange = (e) => {
    setNewTask({
      ...newTask, 
      task:e.target.value
    })

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!newTask.task){
      alert("Ingresa datos correctos")
      return;
    }

    if(newTask.id === null){
      createData(newTask);
    }else{
      updateData(newTask);
    }

    handleReset();

  };

  const handleReset = (e)=> {
    setNewTask(initialDB);
    setDataToEdit(null);
  }

  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <input 
          type='text'
          name="name"
          placeholder = 'Nueva tarea por hacer'
          onChange = {handleChange}
          value = {newTask.task}
          />
          <input type='submit' value='Ingresar tarea'/>
          <input type='reset' value='Limpiar' onClick={handleReset}/>
      </form>
    </div>
  )
}

export default InputForm
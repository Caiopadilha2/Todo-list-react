import { Header } from './components/Header'
import { TaskList } from './components/TaskList'

import { PlusCircle } from "@phosphor-icons/react";

import styles from './components/Input.module.css'
import './global.css'
import { useState } from 'react';



export default function App() {

  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  // console.log(text)
  // console.log(tasks)

  
  function handleTextNewTask(event) {
    setText(event.target.value);

  }

  function handleCreateNewTask() {
    setTasks([...tasks, text]);
    setText('')
  }



  return (
    <>
      <Header />
      <div className={styles.inputWrapper}>
      <input type="text" value={text} placeholder='Adicione uma nova tarefa' onChange={handleTextNewTask}/>
      <button disabled={text.length === 0}  type='submit' onClick={handleCreateNewTask}>
        Criar
        <PlusCircle />
      </button>
    </div>
      <main>
        <TaskList tasks={tasks}/>
      </main>
    </>
  )
}



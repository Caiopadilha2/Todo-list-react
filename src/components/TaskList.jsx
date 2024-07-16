/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { Empty } from './Empty'
import { Task } from './Task'

import styles from './TaskList.module.css'
 
export function TaskList({tasks}) {

  // console.log(tasks.length)
  return (
    <div className={styles.taskList}>
      <header className={styles.header}>
        <div>
          <span>Tarefas criadas: </span>
          <span>{tasks.length}</span>
        </div>
        <div>
          <span>Concluídas</span>{' '}
          <span>0 de {tasks.length}</span>
        </div>
      </header>
      {tasks.length > 0 ? tasks.map(task => (
        <Task tasks={task}/>
      )): <Empty />}
    </div>
  )
}
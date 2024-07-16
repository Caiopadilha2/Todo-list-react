/* eslint-disable react/prop-types */
import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

export function Task(props) {

  return (
    <div className={styles.task}>
      <input type="checkbox" className={styles.circle}/>
        <p className={styles.paragrafo}>
          {props.tasks}
        </p>
      <Trash className={styles.trash} size={24}/>
    </div>
  )
}
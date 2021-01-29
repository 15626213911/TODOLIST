import React, { useMemo, Fragment } from 'react'
import TaskList from './TaskList'
import { isNumber } from '../js/utils'

export default function TodoList({ todolist, editTask }) {
  const totalData = useMemo(() => {
    const total = {
      complete: { cny: 0, rub: 0, usd: 0 },
      todo: { cny: 0, rub: 0, usd: 0 },
    }
    if (
      todolist.length > 0 &&
      todolist.every((todo) => isNumber(todo.cny) && isNumber(todo.rub) && isNumber(todo.usd))
    ) {
      for (let k in total.complete) {
        total.complete[k] = todolist.reduce((total, cur) => {
          return cur.complete ? total + cur[k] : total
        }, 0)
      }
      for (let k in total.todo) {
        total.todo[k] = todolist.reduce((total, cur) => {
          return cur.complete ? total : total + cur[k]
        }, 0)
      }
    }
    return total
  }, [todolist])

  return (
    <Fragment>
      <TaskList
        complete={false}
        todolist={todolist}
        total={totalData.todo}
        editTask={editTask}
      ></TaskList>
      <TaskList
        complete={true}
        todolist={todolist}
        total={totalData.complete}
        editTask={editTask}
      ></TaskList>
    </Fragment>
  )
}

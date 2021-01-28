import React, { useMemo, Fragment } from 'react'
import TaskList from './TaskList'
import { isNumber } from '../js/utils'

export default function TodoList(props) {
  const totalData = useMemo(() => {
    const total = {
      complete: { cny: 0, rub: 0, usd: 0 },
      todo: { cny: 0, rub: 0, usd: 0 },
    }
    let todolist = props.todolist
    if (
      todolist.length > 0 &&
      todolist.every((todo) => isNumber(todo.cny) && isNumber(todo.rub) && isNumber(todo.usd))
    ) {
      todolist.forEach((item) => {
        if (item.complete) {
          total.complete.cny += item.cny
          total.complete.rub += item.rub
          total.complete.usd += item.usd
        } else {
          total.todo.cny += item.cny
          total.todo.rub += item.rub
          total.todo.usd += item.usd
        }
      })
    }
    return total
  }, [props.todolist])

  return (
    <Fragment>
      <TaskList
        complete={false}
        todolist={props.todolist}
        total={totalData.todo}
        editTask={props.editTask}
      ></TaskList>
      <TaskList
        complete={true}
        todolist={props.todolist}
        total={totalData.complete}
        editTask={props.editTask}
      ></TaskList>
    </Fragment>
  )
}

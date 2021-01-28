import { useState } from 'react'
import { isNumber, isString, trimStr } from '../js/utils.js'

export default function AddItem(props) {
  const currencyType = [
    { id: 1, name: 'RUB' },
    { id: 2, name: 'CNY' },
    { id: 3, name: 'USD' },
  ]

  const initialTodo = {
    id: 0,
    name: '',
    currencyType: 1,
    cost: '',
    complete: false,
  }
  const [todo, setTodo] = useState(initialTodo)

  const handleInputChange = (event) => {
    let { name, value } = event.target
    if (name === 'cost' || name === 'currencyType') {
      value = Number(value)
    }
    setTodo({ ...todo, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isString(trimStr(todo.name)) && isNumber(todo.cost) && isNumber(todo.currencyType)) {
      props.addTask(todo)
      setTodo(initialTodo)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="任务"
        value={todo.name}
        name="name"
        required
        onChange={handleInputChange}
      ></input>
      <input
        className="input"
        type="number"
        min="0"
        value={todo.cost}
        placeholder="价格"
        name="cost"
        required
        onChange={handleInputChange}
      ></input>
      <select name="currencyType" onChange={handleInputChange} value={todo.currencyType}>
        {currencyType.map((currency) => (
          <option key={currency.id} value={currency.id}>
            {currency.name}
          </option>
        ))}
      </select>
      <button className="addBtn">添加</button>
    </form>
  )
}

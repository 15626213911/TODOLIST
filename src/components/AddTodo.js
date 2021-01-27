import { useState } from 'react'

export default function AddItem(props) {
  const currencyType = [
    { id: 1, name: 'RUB' },
    { id: 2, name: 'CNY' },
    { id: 3, name: 'USD' },
  ]

  const initialTodo = {
    name: '',
    currencyType: 1,
    cost: '',
    complete: false,
  }
  const [todo, setTodo] = useState(initialTodo)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setTodo({ ...todo, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!todo.name || !todo.cost) {
      return
    }
    todo.cost = Number(todo.cost)
    props.addTask(todo)
    setTodo(initialTodo)
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

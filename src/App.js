import { useState, useEffect } from 'react'
import axios from 'axios'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import './App.css'

const currencyName = {
  1: 'RUB',
  2: 'CNY',
  3: 'USD',
}

function App() {
  const [todolist, setTodolist] = useState([])
  const [rateDict, setRateDict] = useState({ CNY: {}, RUB: {}, USD: {} })

  const convertCost = (from, to, cost) => (from === to ? cost : cost * rateDict[from][to])

  const handleEditTask = (updatedTask) => {
    setTodolist(todolist.map((todo) => (todo.id === updatedTask.id ? updatedTask : todo)))
  }

  const handleAddTask = (todo) => {
    const newTask = {
      ...todo,
      cny: convertCost(currencyName[todo.currencyType], 'CNY', todo.cost),
      rub: convertCost(currencyName[todo.currencyType], 'RUB', todo.cost),
      usd: convertCost(currencyName[todo.currencyType], 'USD', todo.cost),
      id: todolist.length + 1,
    }
    setTodolist([...todolist, newTask])
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('https://api.globus.furniture/forex')
        let cnyExchangeRate = result.data
        let rate = {
          CNY: {},
          RUB: {},
          USD: {},
        }
        for (let i in cnyExchangeRate) {
          rate.CNY[i] = cnyExchangeRate[i].value
        }
        rate.USD.CNY = 1 / rate.CNY.USD
        rate.USD.RUB = rate.USD.CNY * rate.CNY.RUB
        rate.RUB.CNY = 1 / rate.CNY.RUB
        rate.RUB.USD = 1 / rate.USD.RUB
        setRateDict({ ...rate })
      } catch (err) {
        window.alert('Error occur!')
      }
    }

    fetchData()
  }, [])

  return (
    <div className="container">
      <div className="row">
        <AddTodo addTask={handleAddTask}></AddTodo>
        <div className="right">
          <span>{rateDict.CNY.RUB ? rateDict.CNY.RUB.toFixed(3) : '...'}₽/¥ </span>
          <span>{rateDict.USD.RUB ? rateDict.USD.RUB.toFixed(3) : '...'}₽/$ </span>
          <span>{rateDict.USD.CNY ? rateDict.USD.CNY.toFixed(3) : '...'}¥/$</span>
        </div>
      </div>
      <div className="row">
        <TodoList todolist={todolist} editTask={handleEditTask}></TodoList>
      </div>
    </div>
  )
}

export default App

export default function TaskList(props) {
  let noCorrectData = props.complete
    ? props.todolist.every((todo) => !todo.complete)
    : props.todolist.every((todo) => todo.complete)

  const handleInputChange = (todo) => {
    return (event) => {
      todo.complete = event.target.checked
      props.editTask(todo)
    }
  }

  return (
    <div>
      <p>{props.complete ? '已完成：' : '计划：'}</p>
      <table width="100%">
        <tbody>
          {props.todolist.length === 0 || noCorrectData ? (
            <tr>
              <td className="noData" colSpan={5} align="center">
                暂无数据
              </td>
            </tr>
          ) : (
            props.todolist.map((todo, index) => {
              if (props.complete === todo.complete) {
                return (
                  <tr key={index}>
                    <td width="30px">
                      <input
                        type="checkbox"
                        checked={todo.complete}
                        onChange={handleInputChange(todo)}
                      />
                    </td>
                    <td width="30%" className={todo.complete ? 'complete' : ''}>
                      {todo.name}
                    </td>
                    <td>￥{todo.cny}</td>
                    <td>₽{todo.rub}</td>
                    <td>${todo.usd}</td>
                  </tr>
                )
              }
            })
          )}
          <tr className="lastLine">
            <td colSpan={2}>{props.complete ? '一共花了：' : '将要花费：'}</td>
            <td>￥{props.total.cny}</td>
            <td>₽{props.total.rub}</td>
            <td>${props.total.usd}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

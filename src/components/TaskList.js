export default function TaskList(props) {
  const { complete, todolist, editTask, total } = props

  let noCorrectData = complete
    ? todolist.every((todo) => !todo.complete)
    : todolist.every((todo) => todo.complete)

  const handleInputChange = (todo) => {
    return (event) => {
      editTask({ ...todo, complete: event.target.checked })
    }
  }

  return (
    <div>
      <p>{complete ? '已完成：' : '计划：'}</p>
      <table width="100%">
        <tbody>
          {todolist.length === 0 || noCorrectData ? (
            <tr>
              <td className="noData" colSpan={5} align="center">
                暂无数据
              </td>
            </tr>
          ) : (
            todolist.map((todo, index) => {
              if (complete === todo.complete) {
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
            <td colSpan={2}>{complete ? '一共花了：' : '将要花费：'}</td>
            <td>￥{total.cny}</td>
            <td>₽{total.rub}</td>
            <td>${total.usd}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

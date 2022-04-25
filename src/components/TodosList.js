import React from "react"
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    const { handleChangeProps, deleteTodoProps, setUpdate } = this.props

    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            setUpdate={setUpdate}
          />
        ))}
      </ul>
    )
  }
}

export default TodosList
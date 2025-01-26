import { checkedTodo, deleteTodo } from "@/store/todos";
import { Todo } from "./todo"

export default function List({todos}: {todos: Todo[]}) {

  return <fieldset>
    <legend>Todo List</legend>
    <ol>
      {todos.map(todo => {
        return <li key={todo.id}>
            <input type="checkbox" checked={todo.checked} onChange={() => checkedTodo(todo)}/>
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
        </li>
      })}
    </ol>
  </fieldset>
}
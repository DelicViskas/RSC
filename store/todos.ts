import { Todo } from '@/components/todoList/todo'
import { atom } from 'nanostores'

export const $todos = atom<Todo[]>([])

export function addTodo(todo: Todo) {
  $todos.set([...$todos.get(), todo])
}

export function checkedTodo(todo: Todo) {
  $todos.set($todos.get().map(t => {
    if(t === todo)
      t.onChecked();
    return t;
  }))
}

export function deleteTodo(id: number) {
  $todos.set($todos.get().filter(todo => todo.id !== id))
}
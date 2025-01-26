'use client'

import { useStore } from '@nanostores/react'
import { $todos } from '@/store/todos'
import SmartInput from '@/components/todoList/SmartInput';
import List from '@/components/todoList/List';

export default function Page() {
  const todos = useStore($todos);

  return <>
    <SmartInput />
    {!!todos.length && <List todos={todos}/>}
  </>
}
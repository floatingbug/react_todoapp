"use client"


import { useState } from "react";
import { AddTodo, TodoList } from "./components";
import { type Todo } from "../types/Todo";


export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(newTodo: Todo): void {
    setTodos(prev => [...prev, newTodo]);
  }

  function deleteTodo(todoId: string) {
    const newTodos = todos.filter(todo => todo.todoId !== todoId);

    setTodos(newTodos);
  }

  return (
    <div className="todos flex flex-col gap-4">
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
      />

      <AddTodo onAddTodo={addTodo} />
    </div>
  );
}

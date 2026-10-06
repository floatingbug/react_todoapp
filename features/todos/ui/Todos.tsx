"use client"


import { useState } from "react";
import AddTodo from "./components/addTodo/AddTodo";
import TodoList from "./components/todoList/TodoList";
import { Todo } from "../types/Todo";


export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(newTodo: Todo): void {
    const newTodos = [
      ...todos,
      newTodo,
    ];

    setTodos(newTodos);
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

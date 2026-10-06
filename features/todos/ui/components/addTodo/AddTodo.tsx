"use client"


import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Todo } from "../../../types/Todo";


interface AddTodoProps {
  onAddTodo: (newTodo: Todo) => void;
}


export default function AddTodo({ onAddTodo }: AddTodoProps) {
  const [todoInput, setTodoInput] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setTodoInput(event.target.value)
  }

  function handleAddTodo(): void {
    if (todoInput === "") return;

    const newTodo: Todo = {
      text: todoInput,
      todoId: crypto.randomUUID(),
    };

    onAddTodo(newTodo);

    setTodoInput("");
  }

  return (
    <div className="flex gap-1">
      <Input
        type="text"
        value={todoInput}
        placeholder="enter a new todo..."
        onChange={handleInputChange}
      />

      <Button
        variant="outline"
        onClick={handleAddTodo}
      >
        Add todo
      </Button>
    </div>
  );
}

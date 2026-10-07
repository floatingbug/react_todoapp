import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { type Todo } from "../../../types/Todo";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";


interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (todoId: string) => void,
};


export default function TodoList({ todos, onDeleteTodo }: TodoListProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          Todos
        </CardHeader>

        <CardContent>
          {
            todos.map(todo => {
              return (
                <div className="flex gap-2"
                  key={todo.todoId}
                >
                  <Checkbox />

                  {todo.text}

                  <Button className="ml-auto"
                    variant="outline"
                    size="icon"
                    onClick={() => onDeleteTodo(todo.todoId)}
                  >
                    <Trash2 />
                  </Button>
                </div>
              )
            })
          }
        </CardContent>
      </Card>
    </div>
  );
}

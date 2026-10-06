import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Todo } from "../../../types/Todo";
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
                  <div>
                    <Checkbox />
                  </div>

                  <div>
                    {todo.text}
                  </div>

                  <div className="ml-auto">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => onDeleteTodo(todo.todoId)}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </div>
              )
            })
          }
        </CardContent>
      </Card>
    </div>
  );
}

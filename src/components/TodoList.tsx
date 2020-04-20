import React from "react";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  toogleTodo: ToogleTodo;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toogleTodo }) => {
  return (
    <ul>
      {todos.map((todo, i) => {
        return <TodoListItem key={i} todo={todo} toogleTodo={toogleTodo} />;
      })}
    </ul>
  );
};

export default TodoList;

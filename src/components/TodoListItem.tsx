import React from "react";

interface TodoListItemProps {
  todo: Todo;
  toogleTodo: ToogleTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toogleTodo }) => {
  return (
    <li>
      <label className={todo.isComplete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={() => toogleTodo(todo)}
        />
        <span className="todoText">{todo.text}</span>
      </label>
    </li>
  );
};

export default TodoListItem;

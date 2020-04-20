import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

const initialTodos: Array<Todo> = [
  { text: "walk the dog", isComplete: true },
  { text: "write app", isComplete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = React.useState(initialTodos);

  const toogleTodo: ToogleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      }

      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    setTodos([...todos, { text: newTodo, isComplete: false }]);
  };

  return (
    <div className="App-header">
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toogleTodo={toogleTodo} />
    </div>
  );
};

export default App;

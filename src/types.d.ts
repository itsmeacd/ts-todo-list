type Todo = {
  text: string;
  isComplete: boolean;
};

type ToogleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

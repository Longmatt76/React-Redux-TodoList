const INITIAL_STATE = {
  todos: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD":
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return { ...state, todos: [...state.todos, newTodo] };
    case "TOGGLE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

export default todoReducer;

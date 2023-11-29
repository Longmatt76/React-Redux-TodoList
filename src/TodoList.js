import TodoForm from "./TodoForm";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"; 
import Todo from "./Todo";


const TodoList = () => {
    const todos = useSelector((store) => store.todos);
    const dispatch = useDispatch();

    function addTodo (text) {
      dispatch({
        type: "ADD",
        payload: text 
      })
    }


    return (
        <>
            <Typography variant="h2" textAlign={"center"} my={5} color={"white"}>Todo List</Typography>
            <TodoForm addTodo={addTodo}/>
         {todos.map((todo) => (
          <Todo key={todo.id} text={todo.text} id={todo.id} status={todo.completed}/>
         ))}
        </>
    ) 


}
export default TodoList;
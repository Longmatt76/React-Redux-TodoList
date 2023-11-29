import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { Typography, Stack, Checkbox, IconButton } from "@mui/material";
const Todo = ({ text, status, id }) => {
  const dispatch = useDispatch();

  const toggleTodo = () => {
    dispatch({
      type: "TOGGLE",
      payload: id,
    });
  };

  const deleteTodo = () => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Stack direction="row" justifyContent="center" alignItems="center" p={1}>
      <Typography
        sx={{
          color: "white",
          fontSize: `${3}rem`,
          textDecoration: status ? "line-through" : undefined,
        }}
      >
        {text}{" "}
        <Checkbox onChange={toggleTodo} {...label} sx={{ color: "white" }} />
        <IconButton sx={{ color: "white" }} onClick={deleteTodo}>
          <DeleteIcon />{" "}
        </IconButton>
      </Typography>
    </Stack>
  );
};

export default Todo;

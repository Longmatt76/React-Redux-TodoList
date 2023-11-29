import React, { useState } from "react";
import { TextField, Button, Grid, Container } from "@mui/material";

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState('');

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');

    }
    return (
        <>
            <Grid>
                <Container maxWidth={"md"} >
                    <form onSubmit={handleSubmit}>
                        <TextField value={todo} onChange={handleChange} fullWidth placeholder="enter todo" sx={{ backgroundColor: "white" }} InputProps={{ endAdornment: <Button type="submit" variant="contained">Add</Button> }}></TextField>
                    </form>
                </Container>
            </Grid>
        </>
    )
}

export default TodoForm
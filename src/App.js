import React, { useState, useEffect } from "react";
import _ from "lodash";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import db from "./config";
import Todos from "./Todos";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").onSnapshot((s) => {
      setTodos(s.docs.map((doc) => doc.data().next));
    });
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); // will stop refreshing the page
    db.collection("todos").add({
      next: input,
    });
    // setTodos([...todos, input]); // will add the data
    setInput(""); // clear the input text
  };

  return (
    <div className="App">
      <h1> 🏃‍♀️ Add List 👩‍🎤</h1>
      <form>
        <TextField
          id="outlined-basic"
          label="Write a Todo"
          // variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {_.map(todos, (i) => (
          <Todos todo={i} key={i} />
        ))}
      </ul>
    </div>
  );
}

export default App;

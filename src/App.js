import { Input, Header, Button, List } from "./components";
import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("TODOS") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      setTodos((prevState) => [
        ...prevState,
        { value, id: Date.now(), complited: false },
      ]);
    }

    setValue("");
  };

  return (
    <div className="inner__item">
      <Header />
      <form className="form" onSubmit={handleSubmit}>
        <Input
          className="input__body"
          onChange={handleChange}
          value={value}
          type="text"
          placeholder="Добавить дело"
        />
        <Button className="form__btn" type="submit">
          Добавить
        </Button>
      </form>
      <List updateTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;

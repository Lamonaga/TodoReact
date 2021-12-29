import { Button } from "..";
import { useState } from "react";
import "./listItem.css";

const ListItem = ({
  todo,
  heandleRemove,
  heandleCreate,
  headleChange,
}) => {
  const [todoReadOnly, settodoReadOnly] = useState(true);
  const [todoValue, setTodoValue] = useState(todo.value);

  const headleClick = (e) => {
    if (e.target.name === "remove") {
      heandleRemove(todo.id);
    } else {
      heandleCreate(todo.id);
    }
  };

  const headleChangeTodo = () => {
    if (todoValue.trim()) {
      headleChange(todo.id, todoValue);
    } else {
      heandleRemove(todo.id);
    }
  };

  const editLi = () => {
    settodoReadOnly((prevState) => !prevState);
  };

  const heandleValueChange = (e) => {
    setTodoValue(e.target.value);
  };

  return (
    <li className={!todo.complited ? null : "todo__comp"} onDoubleClick={editLi}>
      <input
        className={
          !todo.complited ? "todo__input__text" : "todo__input__text todo__comp"
        }
        onBlur={headleChangeTodo}
        type="text"
        onChange={heandleValueChange}
        readOnly={todoReadOnly}
        value={todoValue}
      />
      <div>
        <Button name="create" onClick={headleClick}>
          Выполненно
        </Button>
      </div>
      <div>
        <Button name="remove" onClick={headleClick}>
          Удалить
        </Button>
      </div>
    </li>
  );
};

export default ListItem;

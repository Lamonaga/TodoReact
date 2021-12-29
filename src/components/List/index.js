import { ListItem } from "..";
import "./list.css";

const List = ({ todos, updateTodos }) => {
  const heandleRemove = (id) => {
    updateTodos((prevState) => prevState.filter((item) => id !== item.id));
  };

  const heandleCreate = (id) => {
    updateTodos((prevState) =>
      prevState.map((item) => {
        if (id === item.id) {

          return { ...item, complited: !item.complited };
        }
        return item;
      })
    );
  };

  const headleChange = (id, value) => {
    updateTodos((prevState) =>
      prevState.map((item) => {
        if (id === item.id) {
          return { ...item, value: value.trim() };
        }
        return item;
      })
    );
  };

  return (
    <div className="list__item">
      <ul className="list">
        {todos.map((item) => (
          <ListItem
            headleChange={headleChange}
            heandleRemove={heandleRemove}
            heandleCreate={heandleCreate}
            key={item.id}
            todo={item}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;

import { useState } from "react";
import Search from "./components/Search";
import Button from "./components/Button";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputItem(e.target.value);
  };

  const addItem = () => {
    setItems((oldData) => {
      return [...oldData, inputItem];
    });
    setInputItem("");
  };

  return (
    <>
      <div className="wrapper">
        <div className="title">
          <h1>ToDo List</h1>
        </div>

        <div className="content">
          <div>
            <Search onChange={itemEvent} />
           
          </div>
          <div>
            <Button />
          </div>
        </div>
        <ol>
          {items.map((itemsVal) => {
            return <li>{itemsVal}</li>;
          })}
        </ol>
      </div>
    </>
  );
}

export default App;

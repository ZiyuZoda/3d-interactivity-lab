import { useState } from "react";
import ReactDOM from "react-dom/client";

// const fruit = [
//   "apple",
//   "orange",
//   "pear",
//   "grapefruit",
//   "lemon",
//   "apricot",
//   "banana",
//   "strawberry",
// ];

// function randomFruit() {
//   return fruit[Math.floor(Math.random() * fruit.length)];
// }

function TodoList(props) {
  // console.log(props);
  // let items = [];


  return( <ul style = {{color :props.color}}>
    {props.items.map((str) => (
    
    <li>{str}</li>
    
    
    ))}
  


  </ul>
  );
}

function App() {
  const [items, setItems] = useState([
    "Chips",
    "Candy",
    "Coke"
  ]);

  return (
    <div>
      <TodoList items={items} color = "pink" />
      <button onClick={() => setItems(items.concat(["candy"]))}>Click me</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

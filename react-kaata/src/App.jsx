import "./App.css";
import Main from "./components/Main";
import { useState } from "react";
import Allkata from "./components/Allkata";
import Addkata from "./components/Addkata";


function App() {
  const [show, setShow] = useState(false);
  const [kaata, setKaata] = useState([
    {
      id: 1,
      item: "Diamonds",
      date: "5 feb 2015",
      price: 200000,
      paid : false,
    },
    {
      id: 2,
      item: "La Ferrari",
      date: "8 feb 2015",
      price: 800000,
      paid: true,
    },
    {
      id: 3,
      item: "La Plano",
      date: "10 feb 2015",
      price: 3000000,
      paid: true,
    },
  ]);

  

  // Delete Kata 
  const onDelete = (id) => {
    setKaata(kaata.filter((k) => k.id != id));
  }

  // Toggle Paid Status

  const onToggle = (id) => {
    setKaata(
      kaata.map((k) => k.id == id ? {...k, paid: !k.paid}: k)
    )
  };

  // Add Kata

  const onAdd = (data) => {
    const id = Math.floor(Math.random() * 100000 + 1);

    const newKata = {id, ...data};

    setKaata([...kaata, newKata]);
  };

    // Calculate total sum of unpaid item prices
    const unpaidTotal = kaata
    .filter((k) => !k.paid)
    .reduce((total, k) => total + k.price, 0);

    // toggle Form

    const changeShow = () => [
      setShow(!show)
    ]

  return (
    <div className="container">
      <Main  changeShow={changeShow} show={show}/>
      {show && <Addkata onAdd={onAdd}/>}
      <Allkata kaata={kaata} onDelete={onDelete} onToggle={onToggle} sum={unpaidTotal}/>
    </div>
  );
}

export default App;

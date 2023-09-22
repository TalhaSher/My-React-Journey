import "./App.css";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import Allkata from "./components/Allkata";
import Addkata from "./components/Addkata";

function App() {
  const [show, setShow] = useState(false);
  const [kaata, setKaata] = useState(() => {
    const storedKaata = localStorage.getItem("kaata");
    return storedKaata ? JSON.parse(storedKaata) : [];
  });

  // Load kaata data from local storage on component mount
  useEffect(() => {
    const storedKaata = localStorage.getItem("kaata");
    if (storedKaata) {
      setKaata(JSON.parse(storedKaata));
    }
  }, []);

  // Save kaata data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("kaata", JSON.stringify(kaata));
  }, [kaata]);

  // Delete Kata
  const onDelete = (id) => {
    setKaata(kaata.filter((k) => k.id !== id));
  };

  // Toggle Paid Status
  const onToggle = (id) => {
    setKaata(
      kaata.map((k) => (k.id === id ? { ...k, paid: !k.paid } : k))
    );
  };

  // Add Kata
  const onAdd = (data) => {
    const id = Math.floor(Math.random() * 100000 + 1);
    const newKata = { id, ...data };
    setKaata([...kaata, newKata]);
  };

  // Calculate total sum of unpaid item prices
  const unpaidTotal = kaata
    .filter((k) => !k.paid)
    .reduce((total, k) => total + k.price, 0);

  // Toggle Form
  const changeShow = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <Main changeShow={changeShow} show={show} />
      {show && <Addkata onAdd={onAdd} />}
      <Allkata
        kaata={kaata}
        onDelete={onDelete}
        onToggle={onToggle}
        sum={unpaidTotal}
      />
    </div>
  );
}

export default App;

import UserInput from "./Components/UserInput/UserInput";
import Results from "./Components/Results/Results";
import { useState } from "react";

import "./App.css";

function App() {
  const [data,setData] = useState([])
  

  const submit = (input) => {
    setData([...data,input])
  }

  let rand = Math.floor(Math.random() *10000 + 1)

  return (
    <>
      <UserInput submit={submit} key={rand}/>
      <Results data={data}/>
    </>
  );
}

export default App;

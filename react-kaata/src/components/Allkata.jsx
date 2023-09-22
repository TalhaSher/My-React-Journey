import SingleKata from "./SingleKata";
import { useState } from "react";

const Allkata = ({ kaata, onDelete, onToggle, sum }) => {
  const [currency, setCurrency] = useState(true);
  const US = Math.floor(sum / 296.42);

  const change = () => {
    setCurrency(!currency);
  };

  return (
    <>
      {kaata.map((k) => (
        <SingleKata
          key={k.id}
          kaata={k}
          onDelete={onDelete}
          onToggle={onToggle}
          currency={currency}
        />
      ))}

      {currency ? (
        <p className="Sum" onClick={() => change()}>
          Sum : PKR {sum}
        </p>
      ) : (
        <p className="Sum" onClick={() => change()}>
          Sum : $ {US}
        </p>
      )}
      <h4>Tips :</h4>
      <p style={{marginTop:'10px'}}> • Double tap on the name of the item to change its status to paid</p>
      <p style={{marginTop:'10px'}}> • To change the currency from PKR to Us dollars tap on the sum</p>
      <p style={{marginTop:'10px'}}> • Click on the Show button to reveal the form where you can add to Kaata</p>
    </>
  );
};

export default Allkata;

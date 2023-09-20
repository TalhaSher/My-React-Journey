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
    </>
  );
};

export default Allkata;

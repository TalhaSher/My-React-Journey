import { FaTimes } from "react-icons/fa";

const SingleKata = ({ kaata,onDelete,onToggle,currency }) => {
  return (
    <div className={`kaata ${kaata.paid && 'paid'}`}>
      <h3 onDoubleClick={() => onToggle(kaata.id)}>
        {kaata.item}{" "}
        <FaTimes
          style={{
            color: "red",
            cursor: "pointer",
          }} onClick={() => onDelete(kaata.id)}
        />{" "}
      </h3>
      <p>{kaata.date}</p>
       {currency ? <p>PKR {kaata.price} </p>: <p>$ {kaata.price}</p>} 

      {/*  */}
    </div >
  );
};

export default SingleKata;

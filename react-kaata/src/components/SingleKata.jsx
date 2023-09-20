import { FaTimes } from "react-icons/fa";

const SingleKata = ({ kaata,onDelete,onToggle }) => {
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
      <p>$ {kaata.price}</p>
    </div >
  );
};

export default SingleKata;

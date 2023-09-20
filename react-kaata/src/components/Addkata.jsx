import { useState } from "react";

const Addkata = ({onAdd}) => {
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState(0);
  const [paid, setPaid] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!item || !date || !price){
        alert("Please fill all the required fields")
        return;
    }

    const data = {item,date,price: parseFloat(price),paid}

    onAdd(data);

    setItem('');
    setDate('');
    setPrice(0);
    setPaid(false);

  }



  return (
    <form action="" className="add-form" onSubmit={onSubmit}>


      <div className="form-control">
        <label htmlFor="item">Item Name</label>
        <input
          type="text"
          name="item"
          id="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>


      <div className="form-control">
        <label htmlFor="date">Date</label>
        <input
          type="text"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>


      <div className="form-control">
        <label htmlFor="Price">Price</label>
        <input
          type="number"
          name="Price"
          id="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>


      <div className=" form-control-check">
        <label htmlFor="item">Paid ?</label>
        <input
          type="checkbox"
          name="item"
          id="item"
          checked={paid}
          onChange={(e) => setPaid(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Add" className="submit" />


    </form>
  );
};

export default Addkata;

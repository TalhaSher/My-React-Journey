import { useState, useRef } from "react";

const UserInput = ({ submit }) => {
  // const [data, setData] = useState([]);

  const userName = useRef();
  const userAge = useRef();

  const onSubmit = (e) => {
    const enteredName = userName.current.value;
    const enteredAge = userAge.current.value;

    e.preventDefault();

    let user = { username: enteredName, age: enteredAge };

    submit(user);
  };

  return (
    <>
      <form action="" className="form" onSubmit={onSubmit}>
        <div className="container">
          <label htmlFor="UserName" className="label">
            Username
          </label>
          <input
            type="text"
            name="UserName"
            id="UserName"
            className="input"
            required
            minLength={1}
            ref={userName}
          />
        </div>
        <div className="container">
          <label htmlFor="Age" className="label">
            Age (in Years)
          </label>
          <input
            type="number"
            id="Age"
            className="input"
            required
            min={8}
            ref={userAge}
          />
        </div>
        {/* <button className="btn">Add User</button> */}
        <button>
          <span>Add User</span>
          <i></i>
        </button>
      </form>
    </>
  );
};

export default UserInput;

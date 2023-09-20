import { useState } from "react";

const UserInput = ({ submit }) => {
  // const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    let user = { username: username, age: age };

    submit(user);

    setUsername("");
    setAge("");
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength={1}
            
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
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            min={8}
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

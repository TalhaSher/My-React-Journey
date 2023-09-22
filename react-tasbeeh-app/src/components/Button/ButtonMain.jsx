import Button from "./AddButton/Button.jsx";
import ClearButton from "./ClearButton/ClearButton";
import './ButtonMain.css'

const ButtonMain = ({add,clear}) => {
  return (
    <div className="Main">
      <Button add={add}/>
      <ClearButton clear={clear} />
    </div>
  );
};

export default ButtonMain;

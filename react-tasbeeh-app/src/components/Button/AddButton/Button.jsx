import './Button.css'

const Button = ({add}) => {
  return (
    <button className='Add' onClick={add}><span> + 1 </span><i></i></button>
  )
}

export default Button
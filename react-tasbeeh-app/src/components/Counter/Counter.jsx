import './Counter.css'
const Counter = ({count}) => {
  return (
    <div className='counter'>
        <h3 className='count'>{count}</h3>
    </div>
  )
}

export default Counter
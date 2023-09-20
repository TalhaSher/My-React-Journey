import Button from "./Button"

const Main = ({ changeShow, show}) => {
  return (
    <div >
        <heading>
            <h1>Kaata</h1>
            <Button  changeShow={changeShow} show={show}/>
        </heading>
    </div>
  )
}

export default Main;
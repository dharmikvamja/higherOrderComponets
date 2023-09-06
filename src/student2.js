
import withHoc from "./Hoc"

const student2=(props)=>{


  return(
    <>
    <h1> count: {props.value}</h1>
    <button onMouseOver={props.changeNum}> increment </button>
    </>
  )
}
export default withHoc(student2)
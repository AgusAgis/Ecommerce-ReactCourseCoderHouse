import { Link } from "react-router-dom";
const FinishButton = () =>{
    return(
        <Link to={'/checkout'}className="btn btn-warning ms-4" style={{ whiteSpace: "nowrap", padding: "0.5rem 1rem" }} >Finalizar pedido</Link>
    )
}
export default FinishButton;
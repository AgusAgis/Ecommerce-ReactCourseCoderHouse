import Form from "../Form/Form";
import CartElements from "../CartContent/CartElements";

const Checkout = () => {
    return (
        <div className="container mt-2">
            <div className="row mt-2">
             
                <div className="col-md-8">
                    <div className="d-flex flex-column">
                        <CartElements editable={false}/>                       
                    </div>
                </div>
               
                <div className="col-md-4">
                    <Form />
                </div>       
            </div>
        </div>
    );
}

export default Checkout;

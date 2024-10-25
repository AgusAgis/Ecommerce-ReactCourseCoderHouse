import React from "react";

const Form = () => {
  return (
    <form>
        <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
            Nombre
            </label>
            <input
            type="text"
            className="form-control"
            id="exampleInputName"
            />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputSurname" className="form-label">
            Apellido
            </label>
            <input
            type="text"
            className="form-control"
            id="exampleInputSurname"
            />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
            Email
            </label>
            <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputSurname" className="form-label">
            Whatsapp
            </label>
            <input
            type="text"
            className="form-control"
            id="exampleInputSurname"
            />
        </div>      
        <div className="mb-3 form-check">
            <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
            Acepto términos de uso
            </label>
        </div>
        <button type="submit" className="btn btn-primary">
            Crear pedido
        </button>
    </form>
  );
};
export default Form;

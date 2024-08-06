import React, { useState, useContext } from "react";
import { Context } from "../store/context";
import { Link } from "react-router-dom";

function AddContact() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        comuna: ""
    });
    const { actions } = useContext(Context);


    const handleOnChange = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        actions.handleOnSubmit(data);

      };


    return (
        <div className="container  mb-3 shadow p-3 mb-5 bg-body-tertiary rounded " style={{ width: "800px", paddingTop: "30px"}}>
            
            <h1 className="col-md-12 d-flex justify-content-center">Agregar Nuevo Contacto</h1>
            <form onSubmit={handleOnSubmit} className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="name" className="form-label">Nombre Completo</label>
                    <input
                        onChange={handleOnChange}
                        value={data.name}
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Nombre "

                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        onChange={handleOnChange}
                        value={data.email}
                        type="email"
                        id="email"
                        placeholder="e-mail"
                        className="form-control"
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input
                        onChange={handleOnChange}
                        value={data.phone}
                        type="text"
                        id="phone"
                        className="form-control"
                        placeholder="+cod pais + numero"
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input
                        onChange={handleOnChange}
                        value={data.address}
                        type="text"
                        id="address"
                        className="form-control"
                        placeholder="Calle, Numero, Dpt/casa,"
                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="city" className="form-label">Ciudad</label>
                    <input
                        onChange={handleOnChange}
                        value={data.city}
                        type="text"
                        id="city"
                        className="form-control"
                    />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
            </form>
            <div className="col-12 d-flex justify-content-end">
                <Link to="/">
                    <button className="btn btn-success " type="button">Ver Lista</button>
                </Link>
            </div>
        </div>
    );
}

export default AddContact;

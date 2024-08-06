import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/context";
import { useParams, useNavigate } from "react-router-dom";

function EditContact() {
    const { id } = useParams();
    const { actions, store } = useContext(Context);
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        const contactToEdit = store.contacts.find(c => c.id === parseInt(id));
        if (contactToEdit) {
            setContact(contactToEdit);
        }
    }, [id, store.contacts]);

    const handleOnChange = (e) => {
        setContact({
            ...contact,
            [e.target.id]: e.target.value
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        actions.updateContact(id, contact);
        navigate("/");
    };

    return (
        <div className="container  mb-3 shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: "800px" }}>
            <h1 className="col-md-12 d-flex justify-content-center" >Editar Contacto</h1>
            <form onSubmit={handleOnSubmit} className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="name" className="form-label">Nombre Completo</label>
                    <input
                        onChange={handleOnChange}
                        value={contact.name}
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Nombre completo"
                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        onChange={handleOnChange}
                        value={contact.email}
                        type="email"
                        id="email"
                        className="form-control"
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input
                        onChange={handleOnChange}
                        value={contact.phone}
                        type="text"
                        id="phone"
                        className="form-control"
                        placeholder="Teléfono"
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input
                        onChange={handleOnChange}
                        value={contact.address}
                        type="text"
                        id="address"
                        className="form-control"
                        placeholder="Dirección"
                    />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    );
}

export default EditContact;

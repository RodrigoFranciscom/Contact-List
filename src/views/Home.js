import React, { useContext, useEffect, useState } from "react";
import Contacts from "../components/Contacts";
import { Link } from "react-router-dom";
import { Context } from "../store/context";

function Home() {
    const { actions, store } = useContext(Context);
    const [loaded, setLoaded] = useState(false); // Nueva línea (evita el error 429)

    useEffect(() => {
        if (!loaded) {
            actions.getContacts();
            setLoaded(true); // Nueva línea (para evitar el error 429)
        }
    }, [actions, loaded]); // Modificación de la dependencia (evita el error 429)

    return (
        <div className="container mb-3 shadow p-3 mb-5 bg-body-tertiary rounded" >
            <h1 className="col-md-12 d-flex justify-content-center" style={{paddingTop: "30px"}} >Lista de Contacto</h1>
            <div className="col-12 d-flex justify-content-end" style={{padding: "20px"}}>
                <Link to="/add-contact">
                    <button className="btn btn-success" type="button">Agregar Contacto</button>
                </Link>
            </div>
            <Contacts
                data={store.contacts}
                deleteContact={actions.deleteContact}
            />
        </div>
    );
}

export default Home;

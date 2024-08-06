import React from "react";
import { Link } from "react-router-dom";
import { BsEnvelope, BsFillGeoAltFill, BsFillTelephoneFill, BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

const Contacts = (props) => {
    return (
        <div>
            <ul className="list-group">
                {props.data.map(element => (
                    <li key={element.id} className="list-group-item">
                        <div className="card mb-3 shadow p-3 mb-5 bg-body-tertiary rounded" style={{ maxWidth: "90%" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src="https://img1.picmix.com/output/stamp/normal/1/2/6/2/2362621_26e50.png"
                                        className="imaPerfil rounded-circle img-thumbnail"
                                        style={{ width: "300px" }}
                                        alt="foto Perfil"
                                    />
                                </div>
                                <div className="col-md-8" style={{ paddingLeft: "20px" }}>
                                    <div className="card-body">
                                        <div className="row" style={{ height: "100px" }}>
                                            <div className="col-6">
                                                <h2 className="col-auto me-auto ">{element.name}</h2>
                                            </div>
                                            <div className="col-6">
                                                <h4 className="d-flex justify-content-end">
                                                    <Link to={`/edit-contact/${element.id}`}>
                                                        <button className="btn btn-outline-primary me-2">
                                                            <BsFillPencilFill />
                                                        </button>
                                                    </Link>
                                                    <button className="btn btn-outline-primary me-2" onClick={() => props.deleteContact(element.id)}>
                                                        <BsFillTrashFill />
                                                    </button>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="row justify-content-start" style={{ height: "60px" }}>
                                            <div className="col-1 align-items-center"> <BsEnvelope /></div>
                                            <div className="col-6"> <h4>{element.email}</h4></div>
                                        </div>
                                        <div className="row justify-content-start" style={{ height: "60px" }}>
                                            <div className="col-1 align-items-center"> <BsFillTelephoneFill /></div>
                                            <div className="col-6"> <h4>{element.phone}</h4></div>
                                        </div>
                                        <div className="row justify-content-start" style={{ height: "60px" }}>
                                            <div className="col-1 align-items-center"> <BsFillGeoAltFill /></div>
                                            <div className="col-6"> <h4>{element.address}</h4></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contacts;

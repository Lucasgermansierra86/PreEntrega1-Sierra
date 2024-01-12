import React from "react";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <div className="card" style={{ width: "calc(25% - 20px)", margin: "10px" }}>
      <img src={prod.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{prod.name}</h5>
        <p className="card-text">{prod.description}</p>
        <Link className="btn btn-primary" to={`/item/${prod.id}`}>
          ver mas
        </Link>
      </div>
    </div>
  );
};

export default Item;

import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.jsx";
import Loading from "../loading/Loading.jsx";

export default function Product() {
  const { categoryName } = useParams();
  const { data, error, isLoading } = useFetch(
    `https://dummyjson.com/products/category/${categoryName}`
  );

  if (isLoading) return <Loading />;

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div
      className="container"
      style={{ marginTop: "90px", marginBottom: "100px" }}
    >
      <h1 className="text-center mb-4 text-capitalize">
        {categoryName} Products
      </h1>
      <div className="row gy-4">
        {data.products.map((product) => (
          <div key={product.id} className="col-md-3">
            <div className="card h-100">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="card-img-top"
                style={{ height: "100%" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">{product.description}</p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
                <button className="btn mx-1 text-white" style={{backgroundColor:"rgb(193 52 147)"}}>Buy Now</button>
                <Link to={`/products/${product.id}`} className="btn btn-secondary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

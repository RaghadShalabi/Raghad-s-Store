import React from "react";
import Loading from "../loading/Loading.jsx";
import useFetch from "../hooks/useFetch.jsx";
import { Link } from "react-router-dom";

export default function SomeProduct() {
  const { data, error, isLoading } = useFetch(
    `https://dummyjson.com/products?limit=4`
  );
  console.log(data);

  if (isLoading) return <Loading />;

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="bg-secondary">
      <div
        className="container"
        style={{ paddingTop: "80px", paddingBottom: "100px" }}
      >
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
                  <button
                    className="btn mx-1 text-white"
                    style={{ backgroundColor: "rgb(193 52 147)" }}
                  >
                    Buy Now
                  </button>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-secondary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

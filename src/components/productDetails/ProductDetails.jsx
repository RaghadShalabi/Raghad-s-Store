import React from "react";
import Loading from "../loading/Loading.jsx";
import useFetch from "../hooks/useFetch.jsx";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  if (isLoading) return <Loading />;

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }
  return (
    <div className="container" style={{ marginTop: "100px",marginBottom:"100px" }}>
      <h1 className="text-center mb-4">{data.title}</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="img-fluid rounded"
            style={{ height: "100%" ,objectFit:"cover"}}
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-primary">${data.price}</h3>
          <p className="text-muted">{data.description}</p>
          <p>
            <strong>Brand:</strong> {data.brand}
          </p>
          <p>
            <strong>Category:</strong> {data.category}
          </p>
          <p>
            <strong>Rating:</strong> {data.rating} ⭐
          </p>
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
      {data.images && (
        <div className="mt-4">
          <h4>More Images:</h4>
          <div className="d-flex flex-wrap">
            {data.images.map((image) => (
              <img
                src={image}
                className="img-thumbnail m-2"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

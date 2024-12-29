import React from "react";
import Loading from "../loading/Loading.jsx";
import useFetch from "../hooks/useFetch.jsx";
import { Link } from "react-router-dom";

export default function Category() {
  const { data, error, isLoading } = useFetch(
    "https://dummyjson.com/products/category-list"
  );
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }

  if (error || data.length === 0) {
    return (
      <div>
        <div className="alert alert-danger">{error}</div>
        <Loading />
      </div>
    );
  }

  return (
    <div
      className="container"
      style={{ paddingTop: "50px", paddingBottom: "100px" }}
    >
      <h1 className="text-center mb-4">Categories</h1>
      <div className="row gy-4">
        {data.map((category) => (
          <div className="col-md-4 text-center">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-capitalize">{category}</h4>
                <Link
                  to={`/products/category/${category}`}
                  className="btn btn-secondary mt-2"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

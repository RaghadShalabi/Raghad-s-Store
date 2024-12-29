import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg text-uppercase fixed-top"
      style={{ backgroundColor: "rgb(193 52 147)" }}
    >
      <div className="container">
        <Link
          className="navbar-brand text-white fw-bold"
          to={"/"}
          style={{ fontSize: "2em", padding: "30px" }}
        >
          Raghad's Store
        </Link>
        <button
          className="navbar-toggler text-uppercase fw-bold text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          Menu
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse show" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className="nav-link py-3 px-0 px-lg-3 text-white fw-bold"
                to={"/category-list"}
                style={{ fontSize: "1.3em" }}
              >
                Category
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className="nav-link py-3 px-0 px-lg-3 text-white fw-bold"
                to={"/products"}
                style={{ fontSize: "1.3em" }}
              >
                Product
              </Link>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                className="nav-link py-3 px-0 px-lg-3 text-white fw-bold"
                to={"/products/add"}
                style={{ fontSize: "1.3em" }}
              >
                Add Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

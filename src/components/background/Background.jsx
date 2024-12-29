import store from "../../assets/img/store.jpg";
export default function Background() {
  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${store})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          marginTop: "30px",
          position: "relative",
          opacity: "0.8",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            zIndex: 2,
            color: "white",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "50px",paddingTop:"70px" }}>Welcome to our Store!</h1>
          <p style={{ fontSize: "20px" ,marginTop:"20px"}}>
            We have a wide range of products for you to enjoy.
          </p>
        </div>
      </div>
    </div>
  );
}

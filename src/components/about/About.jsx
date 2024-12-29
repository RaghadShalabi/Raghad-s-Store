export default function About() {
  return (
    <div
      className="about"
      style={{
        backgroundColor: "#343a40",
        color: "#f8f9fa",
        paddingBottom: "80px",
        paddingTop: "80px",
      }}
    >
      <div className="container">
        <h1 className="text-center mb-4" style={{ fontWeight: "bold" }}>
          About Raghad's Store
        </h1>
        <div className="align-items-center">
          <div className="row about-container">
            <div className="col-md-6">
              <p className="lead">
                Welcome to <strong>Raghad's Store</strong>, your one-stop shop
                for high-quality products tailored to your needs. At our store,
                we are committed to providing exceptional service and a wide
                variety of items to suit every taste and lifestyle.
              </p>
              <p>
                Whether you're shopping for the latest gadgets, stylish fashion,
                or everyday essentials, we've got you covered. Our mission is to
                make your shopping experience seamless and enjoyable.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong>Why shop with us?</strong>
              </p>
              <ul>
                <li>🌟 Premium quality products</li>
                <li>💰 Affordable prices</li>
                <li>🤝 Exceptional customer service</li>
                <li>🚚 Fast and reliable delivery</li>
              </ul>
              <p>
                Thank you for choosing <strong>Raghad's Store</strong>. We look
                forward to serving you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

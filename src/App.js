import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomCarousel from "./CustomCarousel"; // Import the component

const App = () => {
  return (
    <div className="container-fluid bg-light min-vh-100">
      {/* Hero Section with Bootstrap Carousel */}
      <div class="container">
        <CustomCarousel />
      </div>
      {/* Brand Details Search */}
      <section className="bg-white py-4">
        <div className="container d-flex justify-content-center">
          <div className="input-group w-50 shadow-sm rounded">
            <input type="text" className="form-control" placeholder="Enter brand name" />
            <button className="btn btn-primary">Check availability</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container text-center py-5">
        <h2 className="fw-bold">Empowering Your Digital Journey</h2>
        <p className="text-muted mx-auto w-75">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum lorem eu eros luctus egestas.
        </p>
        <div className="row mt-4">
          {["Incorporation", "Trademark", "GST Services", "Income Tax"].map((service, index) => (
            <div key={index} className="col-12 col-md-3">
              <div className="card shadow-sm p-4">
                <h4 className="fw-semibold">{index + 1}. {service}</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;

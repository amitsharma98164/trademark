import React from "react";
import { Carousel } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // For arrow icons
import "./CustomCarousel.css"; // Import custom styles

import slider1 from "./images/slider.png"; // Replace with your image paths

const CustomCarousel = () => {
  return (
    <Carousel
      interval={3000} // Auto-slide every 3 seconds
      prevIcon={
        <span className="custom-prev">
          <FaChevronLeft />
        </span>
      }
      nextIcon={
        <span className="custom-next">
          <FaChevronRight />
        </span>
      }
    >
      <Carousel.Item>
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start">
                <h1 className="fw-bold display-5">
                  Legal Protection for Your Unique <span className="text-primary">Identity</span>
                </h1>
                <p className="text-muted mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat eros felis.
                </p>
                <button className="btn btn-primary mt-3">Get Started Now →</button>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img src={slider1} alt="Slide 1" className="img-fluid" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start">
                <h1 className="fw-bold display-5">
                  Legal Protection for Your Unique <span className="text-primary">Identity</span>
                </h1>
                <p className="text-muted mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat eros felis.
                </p>
                <button className="btn btn-primary mt-3">Get Started Now →</button>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img src={slider1} alt="Slide 1" className="img-fluid" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start">
                <h1 className="fw-bold display-5">
                  Legal Protection for Your Unique <span className="text-primary">Identity</span>
                </h1>
                <p className="text-muted mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat eros felis.
                </p>
                <button className="btn btn-primary mt-3">Get Started Now →</button>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img src={slider1} alt="Slide 1" className="img-fluid" />
              </div>
            </div>
          </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;

import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../Images/Family.png";
const Overview = () => {
  return (
    <div className="home container py-4">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="mt-5 content d-flex flex-column justify-content-center mb-4">
            <h3
              className="mb-3"
              style={{ color: " #5e35b1", fontWeight: "700" }}
            >
              <i className="fas fa-exclamation-circle mr-1"></i>
              COVID-19 Alert
            </h3>
            <h1 className="my-2">
              Stay At Home Quarantine to Stop Corona Virus
            </h1>
            <p className="lead text-muted small my-3">
              There is No Specific Medicine To Prevent Or Treat Coronavirus
              Disease (Covid-19), People May Need Supportive Care
            </p>
            <Link to="/world-tracker" className="check-stats">
              Check Stats <i className="ml-2 far fa-arrow-alt-circle-right"></i>
            </Link>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="image ml-4">
            <img src={headerImage} className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

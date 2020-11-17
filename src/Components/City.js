import React from "react";
import { Link } from "react-router-dom";

const City = (props) => {
  const { data, name } = props.location.state;
  console.log(props);
  return (
    <div className="container mt-5 pb-5">
      <h3 className="text-center mb-3" style={{ color: "#5e35b1" }}>
        {name}'s District Wise Stats :
      </h3>
      <h6 className="text-center mb-3" style={{ color: "#5e35b1" }}>
        (Confirmed Cases)
      </h6>
      <div
        // id="districts"
        className="row"
        // style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
      >
        {data.map((item) => {
          return (
            <div className="col-lg-4 col-sm-12 p-3">
              <div
                className="card bg-transparent "
                style={{ border: "1px solid #5e35b1" }}
              >
                <div className="card-body">
                  <h5 className="card-title text-center">{item.name}</h5>
                  <p className="card-title text-center text-muted">
                    {item.confirmed}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/indian-tracker" className="go-back">
        <i className="mr-2 far fa-arrow-alt-circle-left"></i>Go Back
      </Link>
    </div>
  );
};

export default City;

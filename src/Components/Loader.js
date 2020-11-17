import React, { Fragment } from "react";
import virusLoader from "../Components/Images/virusLoader.gif";
const Loader = () => {
  return (
    <Fragment>
      <img
        id="loader"
        src={virusLoader}
        alt="Loading.."
        className="mt-5"
        style={{
          width: "200px",
          height: "200px",
          display: "none",
          margin: "auto",
        }}
      />
    </Fragment>
  );
};

export default Loader;

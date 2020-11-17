import React from "react";
import Virus from "../Images/virus.png";
import Cough from "../Images/Cough.png";
import Contact from "../Images/Contact.png";
import Fever from "../Images/Fever.png";
import Sneeze from "../Images/Sneeze.png";

const Overview = () => {
  return (
    <div className="overview container ">
      <div className="row my-5">
        <div className="col-md-6 col-sm-12">
          <div className="image d-flex flex-column justify-content-center">
            <img
              src={Virus}
              className="w-75"
              style={{ display: "block", margin: "auto" }}
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="content ml-4 d-flex flex-column justify-content-center w-175">
            <h4
              className="mb-3"
              style={{ color: " #5e35b1", fontWeight: "700" }}
            >
              What is Covid-19 ?
            </h4>
            <h3 className=" my-3" style={{ color: "#37474F" }}>
              Coronavirus
            </h3>
            <p className="text-muted my-3" style={{ lineHeight: "1.6" }}>
              Corona Viruses are a type of Virus.There are may different
              Kinds,and some cause disease.A newly identified type has caused a
              recent outbreak of respiratory illness now called Covid-19. On 31
              December 2019, the outbreak was traced to a novel strain of
              coronavirus, which was given the interim name 2019-nCoV by the
              World Health Organization (WHO),later renamed SARS-CoV-2 by the
              International Committee on Taxonomy of Viruses.
            </p>
          </div>
        </div>
      </div>
      <h5 className="text-center mb-3" style={{ color: " #5e35b1" }}>
        Covid-19
      </h5>
      <h1 className="text-center mb-5" style={{ color: "#37474F" }}>
        Symptoms
      </h1>
      <div className="symptoms d-flex flex-row justify-content-between pb-5">
        <div className=" card bg-white p-2 w-25">
          <img
            className="card-img-top px-5 pt-5 pb-3"
            src={Cough}
            alt="Card image cap"
          />
          <h4 className="text-center" style={{ color: " #5e35b1" }}>
            Cough
          </h4>
          <div className="card-body">
            <p className="card-text text-muted text-center">
              Cough is a very common symptom.Patient feels like shortness of
              breath and difficulty in breathing
            </p>
          </div>
        </div>
        <div className=" card bg-white p-2 w-25 ">
          <img
            className="card-img-top px-5 pt-5 pb-3"
            src={Fever}
            alt="Card image cap"
          />
          <h4 className="text-center" style={{ color: " #5e35b1" }}>
            Fever
          </h4>
          <div className="card-body">
            <p className="card-text text-muted text-center">
              Fever or feeling chills is also one of the symptoms.
            </p>
          </div>
        </div>
        <div className=" card bg-white p-2 w-25">
          <img
            className="card-img-top px-5 pt-5 pb-3"
            src={Sneeze}
            alt="Card image cap"
          />
          <h4 className="text-center" style={{ color: " #5e35b1" }}>
            Sneeze
          </h4>
          <div className="card-body">
            <p className="card-text text-muted text-center">
              Runny Nose and Nasal Congestion are also few symptoms found in
              covid affected patiens
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

import React from "react";
import { Link } from "react-router-dom";
const IndianTableData = ({ data, districtData }) => {
  return (
    <div className="table-wrap table-responsive">
      <table class="table table-striped table-data">
        <thead>
          <tr>
            <th scope="col" className=" text-muted">
              Sl No.
            </th>
            <th scope="col" className=" text-muted">
              State
            </th>
            <th className="text-center text-muted" scope="col">
              Confirmed Cases
            </th>
            <th className="text-center text-muted" scope="col">
              Active Cases
            </th>
            <th className="text-center text-muted " scope="col">
              Recovered Cases
            </th>
            <th className="text-center text-muted" scope="col">
              Total Deaths
            </th>
            <th className="text-center text-muted" scope="col">
              Check StateWise
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, count) => (
            <tr>
              <th scope="row" className="text-muted">
                {count + 1}
              </th>
              <td>{item.state}</td>
              <td className="text-center" style={{ color: "#5e35b1" }}>
                {item.confirmed}
              </td>
              <td className="text-center text-danger">{item.active}</td>
              <td className="text-center text-success">{item.recovered}</td>
              <td className="text-center text-muted">{item.deaths}</td>
              <td className="text-center">
                <Link
                  to={{
                    pathname: "/city-data",
                    state: {
                      // let obj=
                      data: districtData[item.state].districtData,
                      name: item.state,
                    },
                  }}
                  className="btn btn-primary"
                >
                  Go <i class="ml-2 fas fa-angle-double-right"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndianTableData;

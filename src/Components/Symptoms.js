import React, { Component, Fragment } from "react";
import runnynose from "./images/runnynose.png";
import cough from "./images/cough.png";
import fever from "./images/fever.png";
import sick from "./images/sick.png";
import weak from "./images/weak.png";
import breath from "./images/breath.png";

export default class Symptoms extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid  pt-5 pb-5" id="sympid" style={{backgroundColor: 'lightsalmon', color: 'white'}}>
          <div className="section_header text-center mb-5 mt-4">
            <h1 className>Coronavirus symptoms </h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12 mt-5 ">
                <figure className="text-center">
                  <img
                    src={cough}
                    className="img-fluid"
                    width={120}
                    height={120}
                  />
                  <figcaption> cough </figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-4 col-12 mt-5 ">
                <figure className="text-center">
                  <img
                    src={runnynose}
                    className="img-fluid"
                    width={120}
                    height={120}
                  />
                  <figcaption> runny nose </figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-4 col-12 mt-5 ">
                <figure className="text-center">
                  <img
                    src={fever}
                    className="img-fluid"
                    width={120}
                    height={120}
                  />
                  <figcaption> fever </figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-4 col-12 mt-5 ">
                <figure className="text-center">
                  <img
                    src={sick}
                    className="img-fluid"
                    width={120}
                    height={120}
                  />
                  <figcaption> cold </figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-4 col-12 mt-5 ">
                <figure className="text-center">
                  <img
                    src={weak}
                    className="img-fluid"
                    width={120}
                    height={120}
                  />
                  <figcaption> tiredness </figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-md-4 col-12 mt-5 ">
                <figure className="text-center">
                  <img
                    src={breath}
                    className="img-fluid"
                    width={120}
                    height={120}
                  />
                  <figcaption> difficulty breathing (severe cases) </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

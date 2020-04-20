import React, { Component, Fragment } from "react";
import handwash from "./images/handwash.png";
import mask from "./images/mask.png";
import quarantine from "./images/quarantine.png";
import home from "./images/home.png";
import news from "./images/news.png";
import medical from "./images/medical.png";
export default class Prevention extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid sub_section pt-5 pb-5" id="preventid" style={{backgroundColor: 'lightcoral', color: 'white'}}>
          <div className="section_header text-center mb-5 mt-4">
            <h1 className="text-capitalize">
              6 steps Prevention against Coronavirus
            </h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4  col-md-4  col-12 mt-5">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12 ">
                    <figure>
                      <img
                        src={handwash}
                        className="img-fluid"
                        width={90}
                        height={90}
                      />
                    </figure>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <p>
                      Wash your hands regularly for 20 seconds, with soap and
                      water or alcohol-based hand rub
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-4  col-12 mt-5">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12 ">
                    <figure>
                      <img
                        src={mask}
                        className="img-fluid"
                        width={90}
                        height={90}
                      />
                    </figure>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <p>
                      Cover your nose and mouth with a disposable tissue or
                      flexed elbow when you cough or sneeze
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-4  col-12 mt-5">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12 ">
                    <figure>
                      <img
                        src={quarantine}
                        className="img-fluid"
                        width={90}
                        height={90}
                      />
                    </figure>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <p>
                      Avoid close contact (1 meter or 3 feet) with people who
                      are unwell
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-4  col-12 mt-5">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12 ">
                    <figure>
                      <img
                        src={home}
                        className="img-fluid"
                        width={90}
                        height={90}
                      />
                    </figure>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <p>
                      Stay home and self-isolate from others in the household if
                      you feel unwell
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-4  col-12 mt-5">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12 ">
                    <figure>
                      <img
                        src={news}
                        className="img-fluid"
                        width={90}
                        height={90}
                      />
                    </figure>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <p>
                      Stay informed by watching news &amp; follow the
                      recommended practices
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-4  col-12 mt-5">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12 ">
                    <figure>
                      <img
                        src={medical}
                        className="img-fluid"
                        width={90}
                        height={90}
                      />
                    </figure>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <p>
                      If you have fever, cough and difficulty breathing, seek
                      medical care early
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

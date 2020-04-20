import React, { Component, Fragment } from "react";
import abouCorona from './images/aboutcorona.jpg'
export default class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid sub_section pt-5 pb-5" id="aboutid" style={{backgroundColor: 'skyblue', color: 'white'}}>
          <div className="section_header text-center mb-5 mt-4">
            <h1 className>About COVID-19</h1>
          </div>
          <div className="row pt-5">
            <div className="col-lg-5 col-md-6  col-6 ml-5">
              <img src={abouCorona} className="img-fluid" />
            </div>
            <div className="col-lg-6  col-md-6 col-6">
              <h2 className="pb-3">What is COVID-19 (Corona-Virus)</h2>
              <p>
                COVID-19 is the infectious disease caused by the most recently
                discovered coronavirus. This new virus and disease were unknown
                before the outbreak began in Wuhan, China, in December 2019.
              </p>
              <p>
                Coronaviruses are a large family of viruses which may cause
                illness in animals or humans. In humans, several coronaviruses
                are known to cause respiratory infections ranging from the
                common cold to more severe diseases such as Middle East
                Respiratory Syndrome (MERS) and Severe Acute Respiratory
                Syndrome (SARS). The most recently discovered coronavirus causes
                coronavirus disease COVID-19.
              </p>
            </div>
          </div>
        </div>
        </Fragment>
    );
  }
}

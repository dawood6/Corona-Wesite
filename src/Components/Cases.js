import React from "react";
import Confirmed from './Cases/Confirmed';
import Cured from './Cases/Cured';
import Death from './Cases/Death';
import './Cases.css'

export default class Cases extends React.Component {
 
  render() {
    return (
      <div>
        <section className="corono_update">
  <div className=" mb-4 ">
    <h3 className="text-center text-uppercase"> covid-19 updates</h3>
  </div>
  <div className=" d-flex justify-content-around align-items-center">
    <div>
      <h1 className="count"> <Confirmed /> </h1>
      <p>Confirmed COVID-19 cases*</p>
    </div>
    <div>
      <h1 className="count"> <Cured /> </h1>
      <p>Curedcases</p>
    </div>
    <div>
      <h1 className="count"> <Death /></h1>
      <p>Death cases</p>
    </div>
  </div>
</section>

      </div>
    );
  }
}

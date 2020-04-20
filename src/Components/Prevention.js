import React, { Component, Fragment } from 'react'

export default class Prevention extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid sub_section pt-5 pb-5" id="preventid">
  <div className="section_header text-center mb-5 mt-4">
    <h1 className="text-capitalize">6 steps Prevention against Coronavirus</h1>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-4  col-md-4  col-12 mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 ">
            <figure>
              <img src="images/handwash.png" className="img-fluid" width={90} height={90} />
            </figure>
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <p>Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4  col-md-4  col-12 mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 ">
            <figure>
              <img src="images/mask.png" className="img-fluid" width={90} height={90} />
            </figure>
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <p>Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4  col-md-4  col-12 mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 ">
            <figure>
              <img src="images/quarantine.png" className="img-fluid" width={90} height={90} />
            </figure>
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <p>Avoid close contact (1 meter or 3 feet) with people who are unwell</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4  col-md-4  col-12 mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 ">
            <figure>
              <img src="images/home.png" className="img-fluid" width={90} height={90} />
            </figure>
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <p>Stay home and self-isolate from others in the household if you feel unwell</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4  col-md-4  col-12 mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 ">
            <figure>
              <img src="images/news.png" className="img-fluid" width={90} height={90} />
            </figure>
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <p>Stay informed by watching news &amp; follow the recommended practices</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4  col-md-4  col-12 mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 ">
            <figure>
              <img src="images/medical.png" className="img-fluid" width={90} height={90} />
            </figure>
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <p>If you have fever, cough and difficulty breathing, seek medical care early</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            </Fragment>
        )
    }
}

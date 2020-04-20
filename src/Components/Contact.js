import React, { Component, Fragment } from "react";

export default class Conatact extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid  pt-5 pb-5 mt-5" id="contactid">
          <div className="section_header text-center mb-5">
            <h1 className="text-capitalize"> Contact us ASAP</h1>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-12">
                <form action="https://formspree.io/mpzjqbaa" method="POST">
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="name"
                      name="username"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Mobile</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="mobile number"
                      name="mobile"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Cnic</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Cnic"
                      name="Cnic"
                    />
                  </div>
                  <div className="form-group">
                    <label>Select Symptoms</label> <br />
                    <div className="custom-control custom-checkbox custom-control-inline text-capitalize">
                      <input
                        type="checkbox"
                        className="custom-control-input "
                        id="customcheckbox1"
                        name="coronasym[]"
                        defaultValue="cold"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customcheckbox1"
                      >
                        Cold
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox custom-control-inline text-capitalize ">
                      <input
                        type="checkbox"
                        className="custom-control-input  "
                        id="customcheckbox2"
                        name="coronasym[]"
                        defaultValue="fever"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customcheckbox2"
                      >
                        fever
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox custom-control-inline text-capitalize ">
                      <input
                        type="checkbox"
                        className="custom-control-input  "
                        id="customcheckbox3"
                        name="coronasym[]"
                        defaultValue="breath"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customcheckbox3"
                      >
                        difficulty in breath
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox custom-control-inline text-capitalize ">
                      <input
                        type="checkbox"
                        className="custom-control-input  "
                        id="customcheckbox4"
                        name="coronasym[]"
                        defaultValue="tired"
                      />
                      <label
                        className="custom-control-label "
                        htmlFor="customcheckbox4"
                      >
                        feeling weak
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Descripe how you are feeling
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      name="msg"
                      defaultValue={""}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-danger"
                    name="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

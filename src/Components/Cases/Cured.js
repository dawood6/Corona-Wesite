import React from "react";
import Odometer from "react-odometerjs";

import "odometer/themes/odometer-theme-default.css";

export default class Cured extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      odometerValue: 0
    };
  }

  componentDidMount() {
    this.setState({ odometerValue: 1970 });
  }

  render() {
    const { odometerValue } = this.state;
    return (
      <div>
        <Odometer format="d" duration={1000} value={odometerValue} />
      </div>
    );
  }
}

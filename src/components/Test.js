import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecasts: [{ firstName: "no name" }],
      loading: true,
      test: "test string",
      search: "fa",
    };
  }

  async populateWeatherData() {
    const response = await fetch(
      "http://localhost:56701/Contact?search=" + this.state.search
    );
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  handleChange(e) {
    console.log(e.target);
    let value = e.target.value;
    this.setState({ search: value });
    this.populateWeatherData();
  }

  render() {
    return (
      <div>
        {this.state.forecasts[0].firstName}
        <input
          type="text"
          value={this.state.search}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

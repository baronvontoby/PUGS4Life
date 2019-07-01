import React, { Component } from "react";
import axios from "axios";
import { MDBRow, MDBCard, MDBCol } from "mdbreact";
const API_KEY = "85fa4de20dcfbd962e68e36c4530c26d";

class WeatherWidget extends Component {
  state = {
    zipcode: undefined,
    name: undefined,
    weathericon: undefined,
    temp: undefined
  };
  componentDidMount() {
    // / const city = e.target.elements.city.value;
    //     // const country = e.target.elements.country.value;
    const zipCode = "55420";
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${API_KEY}&units=imperial`;
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({
          weather: data,
          name: data.name,
          weathericon: `http://openweathermap.org/img/wn/${
            data.weather[0].icon
          }@2x.png`,
          temp: data.main.temp
        });
        console.log(this.state.weathericon);
      });
  }
  render() {
    return (
      <MDBRow>
        <MDBCol>
          <MDBCard
            className="card-image z-depth-3"
            style={{
              maxWidth: "12em",
              maxHeight: "7em"
              //   overflow: "scroll"
            }}
          >
            <div className="text-black text-top d-flex flex-row flex-wrap py-2 m-2 align-items-start">
              <div>
                <span style={{ overflow: "wrap" }}>{this.state.name}</span>
                <img style={{ width: "2em" }} src={this.state.weathericon} />
                <span style={{ overflow: "wrap" }}>{this.state.temp}</span>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}
export default WeatherWidget;

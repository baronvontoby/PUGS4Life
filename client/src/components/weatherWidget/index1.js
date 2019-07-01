import React, { Component } from "react";
import axios from "axios";
import './index.css'
// import { MDBRow, MDBCard, MDBCol } from "mdbreact";
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
    const zipCode = "34683";
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${API_KEY}&units=imperial`;

    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        const temperature = Math.round(data.main.temp);
        console.log(temperature);
        this.setState({
          weather: data,
          name: data.name,
          weathericon:
          `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.weather[0].icon}.png`,
          temp: temperature + ' °F'
        });
        console.log(this.state.weathericon);
      });
  }
  render() {
    return (
      <div className="widget-left widget-left--small">
                <div className="widget-left-menu widget-left-menu--small">
                  <div className="widget-left-menu__header-container">
                    <h2 className="widget-left-menu__header">{this.state.name}</h2>
                  </div>
                  <p className="calendar calendar--grayscale calendar--small">
                    <img width="32" height="32" alt="Weather in Minneapolis, US" className="weather-left-card__img weather-left-card__img--small" 
                    src={this.state.weathericon} />
                  </p>
                  <p className="weather-left-card__number weather-left-card__number--small">{this.state.temp}<span className="weather-left-card__degree"></span></p>
                </div>
  
              </div>

      // <MDBRow>
      //   <MDBCol>
      //     <MDBCard
      //       className="card-image z-depth-3"
      //       style={{
      //         maxWidth: "12em",
      //         maxHeight: "7em"
      //         //   overflow: "scroll"
      //       }}
      //     >
      //       <div className="text-black text-top d-flex flex-row flex-wrap py-2 m-2 align-items-start">
      //         <div>
      //           <span style={{ wordWrap: "break-word", maxWidth: "50px" }} className="h4 overflow-wrap">{this.state.name}</span>
      //           <img style={{ width: "2em" }} src={this.state.weathericon} />
      //           <span style={{ overflow: "wrap" }}>{this.state.temp}</span>
      //         </div>
      //       </div>
      //     </MDBCard>
      //   </MDBCol>
      // </MDBRow>
    );
  }
}
export default WeatherWidget;

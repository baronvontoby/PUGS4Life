import React, { Component } from "react";
// import axios from "axios";
import './index.css'
// import Moment from 'react-moment';
import pugPic from './pugs.png'
// import { userInfo } from "os";

const API_KEY = "85fa4de20dcfbd962e68e36c4530c26d";


class WeatherWidget extends Component {
  state = {
    zipcode: undefined,
    name: undefined,
    weathericon: undefined,
    temp: undefined,
    description: undefined,
    minTemp: undefined,
    maxTemp: undefined
  };
  componentDidMount() {
    // / const city = e.target.elements.city.value;
    //     // const country = e.target.elements.country.value;
    const zipCode = "55420";
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${API_KEY}&units=imperial`;
    fetch(url)
    .then(res => res.json())
    .then(
      (data) => {
        const temperature = Math.round(data.main.temp);
        const minTemp= Math.round(data.main.temp_min);
        const maxTemp= Math.round(data.main.temp_max);
        this.setState({
          weather: data,
          name: data.name,
          weathericon:
          `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${data.weather[0].icon}.png`,
          temp: temperature,
          description: data.weather[0].main,
          max: maxTemp,
          min: minTemp
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )



  }
  render() {
    return (
      <div className="widget-right widget-right--type5 widget-right--brown ml-.5 z-depth mt-1" style={{zIndex: "1000"}}>
            <div className="mx-auto text-center position-relative"><img src={pugPic} style={{width: "8em"} } className="position-absolute pugImg"></img></div>
      <div className="widget-right__layout widget-right__layout--brown mt-1">

        <div className="widget-right-card">
          <div className="widget-right__title">{this.state.name}</div>
          <div className="widget-right__description">{this.state.description}</div>
        </div>
        <img src={this.state.weathericon} width="50" height="50" alt="" className="weather-right__icon weather-right__icon--type5 weather-right__icon--brown" />
        <table className="weather-right-card">
          <tbody>
          <tr className="weather-right-card__items">
            <td className="weather-right-card__item weather-right-card__temperature-min">
              {this.state.min}
              <span>°F</span>
            </td>
            <td className="weather-right-card__item weather-right-card__temperature-max">{this.state.max}
              <span>°F</span>
            </td>
          </tr>
        </tbody>
        </table>
      </div>


     </div>
        
    
    
    );
  }
}
export default WeatherWidget;

import React from "react";
import "./App.css";
import ReactMapGl, { Marker, Popup } from "react-map-gl";

import CDCdata from "./SingleState";

const token =
  "pk.eyJ1Ijoia2ttYXJ0aW5lejk1IiwiYSI6ImNrN25wOHh5MTAwd3czc25pOXplYnpkazMifQ.8lB9XIkOiTxH3PUadXUVdg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: CDCdata,
      // loaded: false,
      newYork: [
        "New York",
        "2020-03-10T17:13:27",
        173,
        0,
        0,
        42.1657,
        -74.9481
      ],
      viewport: {
        latitude: 39.381266,
        longitude: -97.922211,
        width: "80vw",
        height: "80vw",
        zoom: 4
      },
      selectedState: null
    };
  }

  render() {
    let { data } = this.state;

    // data.splice(52).sort();

    console.log("DATA", data);
    let date = new Date(this.state.newYork[1]);

    return (
      <div className="App">
        <header className="App-header">
          <nav></nav>
          <h1>Coro...NAH..</h1>
          <img
            src="https://thumbs.gfycat.com/PinkBraveCobra-size_restricted.gif"
            alt=""
          ></img>
          <h3>
            {this.state.newYork[0]} as of {date.toDateString()}
          </h3>
          <ul>
            <li>Confirmed: {this.state.newYork[2]}</li>
            <li>Deaths: {this.state.newYork[3]}</li>
            <li>Recovered: {this.state.newYork[4]}</li>
          </ul>

          <div className="App-header" id="map">
            <ReactMapGl
              {...this.state.viewport}
              mapboxApiAccessToken={token}
              mapStyle="mapbox://styles/kkmartinez95/ck7npqtrh0cef1ir1ir9opgk8"
              onViewportChange={viewport => {
                this.setState({ viewport });
              }}
            >
              {data.map((state, ind) => {
                return (
                  <Marker
                    key={ind}
                    latitude={state.latitude}
                    longitude={state.longitude}
                  >
                    <button
                      className="sick"
                      onClick={e => {
                        e.preventDefault();
                        this.setState({ selectedState: state });
                      }}
                    >
                      <img src="./sick.png"></img>
                    </button>
                  </Marker>
                );
              })}
              {this.state.selectedState ? (
                <Popup
                  latitude={this.state.selectedState.latitude}
                  longitude={this.state.selectedState.longitude}
                  onClose={() => {
                    this.setState({ selectedState: null });
                  }}
                >
                  <div id="info">
                    <h2>{this.state.selectedState.state}</h2>
                    <p>Cases: {this.state.selectedState.cases} </p>
                  </div>
                </Popup>
              ) : null}
            </ReactMapGl>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

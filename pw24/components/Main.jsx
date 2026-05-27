import React from "react";
import { About } from "./Main/About.jsx";
import { Slider } from "./Main/Slider.jsx";
import { Portfolio } from "./Main/Portfolio.jsx";


export class Main extends React.Component {
  render() {
    return (
      <main style={{ display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "rgba(240, 240, 240, 1)", height: "100%" }}>
        {this.props.view === "portfolio" ? (
          <Portfolio items={this.props.items} openMain={this.props.openMain} />
        ) : (
          <>
            <About delay="0s" />
            <Slider
              delay="0.4s"
              itemsData={this.props.items}
              nextSlide={this.props.nextSlide}
              prevSlide={this.props.prevSlide}
              openPortfolio={this.props.openPortfolio}
            />
          </>
        )}
      </main>
    );
  }
}

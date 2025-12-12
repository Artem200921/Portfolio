import React from "react";
import { About } from "./Main/About.jsx";
import { Slider } from "./Main/Slider.jsx";
import { Portfolio } from "./Main/Portfolio.jsx";


export class Main extends React.Component {
  render() {
    return (
      <main>
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

import React from "react";
import { About } from "./Main/About.jsx";
import { Slider } from "./Main/Slider.jsx";


export class Main extends React.Component {
  render() {
    return (
      <main>
        <About />
        <Slider itemsData={this.props.items} hover={this.props.hover} />
      </main>
    );
  }
}

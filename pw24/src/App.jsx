import React from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import * as itemsData from "../data/dataBase.js";

class App extends React.Component {
  state = {
    slide: 1,
  };

  selectedSlide = () => {
    const slide = document.getElementById(`item-${this.state.slide}`);
    const slides = document.querySelectorAll("li");
    slides.forEach((item) => {
      item.classList.remove("active");
    });
    slide.classList.add("active");
    console.log(slide);
  };
  nextSlide = () => {
    if (this.state.slide < 5) {
      this.setState({ slide: this.state.slide + 1 });
    } else {
      this.setState({ slide: (this.state.slide = 1) });
    }
  };
  prevSlide = () => {
    if (this.state.slide > 1) {
      this.setState({ slide: this.state.slide - 1 });
    } else {
      this.setState({ slide: (this.state.slide = 5) });
    }
  };
  componentDidUpdate() {
    this.selectedSlide();
  }
  componentDidMount() {
    this.selectedSlide();
  }

  render() {
    console.log(itemsData.default);
    return (
      <div className="App">
        <Header />
        <Main
          items={itemsData.default}
          nextSlide={this.nextSlide}
          prevSlide={this.prevSlide}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

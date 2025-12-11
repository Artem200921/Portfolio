import React from "react";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { itemsData } from "./dataBase.js";

console.log(itemsData);

class App extends React.Component {
  hover = () => {
    console.log("hovered");
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main items={itemsData} hover={this.hover} />
        <Footer />
      </div>
    );
  }
}

export default App;

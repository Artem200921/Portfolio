import React from "react";

export class SlideItem extends React.Component {
  render() {
    return (
      <>
        <li id={this.props.id}>
          <div>
            <a href={this.props.url} target="_blank" rel="noreferrer">
              Link on the website
            </a>
            <p>{this.props.description}</p>
            <button onClick={this.props.openPortfolio} className="port">Portfolio</button>
          </div>
          <img
            src={this.props.img}
            alt={this.props.description}
            width="100%"
            height="100%"
          />
          
        </li>
      </>
    );
  }
}

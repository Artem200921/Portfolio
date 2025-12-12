import React from "react";

export class SlideItem extends React.Component {
  render() {
    return (
      <>
        <li
          id={this.props.id}
        >
          <div>
            <a href={this.props.url} target="_blank" rel="noreferrer">
              Посилання на сайт
            </a>
            <p>{this.props.description}</p>
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

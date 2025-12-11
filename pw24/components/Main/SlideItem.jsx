import React from "react";

export class SlideItem extends React.Component {
  render() {
    return (
      <>
        {this.props.itemsData.map((item, index) => (
          <li key={index}>
            <img
              src={item.img}
              alt={item.description}
              onMouseOver={this.props.hover}
            />
          </li>
        ))}
      </>
    );
  }
}

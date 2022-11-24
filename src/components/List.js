import React from "react";
import ListItem from "./ListItem.js";

class List extends React.Component {
  render() {
    console.log(
      "%c Level 3, List",
      "font-size: 20px; font-weight: bold; color: brown;"
    );
    console.log(
      "De invividuele items: van Groceries en ShoppingCard: ",
      this.props.items
    );
    return (
      <div>
        <ul className="app-list">
          {this.props.items.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              clickItem={() => this.props.onItemClick(item)}
                showQuantities={this.props.showQuantities}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;

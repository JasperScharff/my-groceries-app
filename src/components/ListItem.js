import React from "react";

function ListItem({ item, clickItem, showQuantities }) {
  console.log(
    "%c Level 4, ListItem",
    "font-size: 20px; font-weight: bold; color: red;"
  );
  console.log(
    "Dit zijn de titels van de Grocieries en de ShoppingCard wat ik terugkreeg van de List.js: ",
  );

  return (
    <li
      key={item.id}
      className="list-item"
      onClick={clickItem}
      value={item.title}
    >
      <div>{item.title}</div>
      {showQuantities && (
        <div className="item-amount">Amount: {item.amount}</div>
      )}
    </li>
  );
}

export default ListItem;

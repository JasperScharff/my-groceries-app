import React, { Component } from "react";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItems: [
        { id: 1, title: "Apple" },
        { id: 2, title: "Tomato" },
        { id: 3, title: "Mais" },
      ],
      shoppingCartItems: [
        { id: 4, title: "Onions", amount: 1 },
        { id: 5, title: "Fries", amount: 2 },
      ],
    };
  }

  handleClickGroceryItem(item) {
    console.log(`Clicked ${item.id}: ${item.title}`);
  }

  addGroceryItemToCart = (item) => {
    console.log(`addGroceryItemToCart: ${item.title}`);
    if (
      this.state.shoppingCartItems
        .map((item) => item.title)
        .includes(item.title)
    ) {
      this.addAmountToItem(item, 1);
    } else {
      this.setState({
        shoppingCartItems: [
          ...this.state.shoppingCartItems,
          {
            id: item.id,
            title: item.title,
            amount: 1,
          },
        ],
      });
    }
  };

  addItemToGroceryList = (title) => {
    this.setState({
      groceryItems: [
        ...this.state.groceryItems,
        {
          id:
            this.state.groceryItems.length +
            this.state.shoppingCartItems.length +
            1,
          title: title,
          amount: 1,
        },
      ],
    });
  };

  emptyCart = () => {
    this.setState({
      shoppingCartItems: [],
    });
  };

  addAmountToItem = (item, amount) => {
    this.setState({
      shoppingCartItems: this.state.shoppingCartItems.map((listItem) => {
        if (listItem.title === item.title) {
          return {
            id: listItem.id,
            title: listItem.title,
            amount: listItem.amount + amount,
          };
        }
        return listItem;
      }),
    });
  };

  render() {
    console.log(
      "%c Level 1, Container",
      "font-size: 20px; font-weight: bold; color: green;"
    );
    console.log(
      "Dit is de State in de Container van de Groceries die te koop zijn: ",
      <GroceryList items={this.state.groceryItems} />
    );
    console.log(
      "Dit is de State in de Container van de Shopping Card: ",
      <ShoppingCart items={this.state.shoppingCartItems} />
    );
    return (
      <div>
        <header>
          <h1 className="header-main-title">Grocery List</h1>
        </header>
        <main>
          <GroceryList
            items={this.state.groceryItems}
            onItemClick={this.addGroceryItemToCart}
            onItemAdd={this.addItemToGroceryList}
          />
          <ShoppingCart
            items={this.state.shoppingCartItems}
            onItemClick={this.handleClickGroceryItem}
            onEmptyClick={this.emptyCart}
          />
        </main>
      </div>
    );
  }
}

export default Container;

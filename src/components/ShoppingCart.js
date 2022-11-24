import List from "./List";

function ShoppingCart({ items, onItemClick, onEmptyClick }) {
  console.log("%c Level 2, ShoppingCard", "font-size: 20px; font-weight: bold");
  console.log(
    "Dit zijn de items van de Shopping Card in de ShoppingCard.js wat ik terug heb gekregen vanuit de Container: ",
    <List items={items} />
  );
  // De Array items zijn opgeslagen in de props

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <button onClick={onEmptyClick}>Empty the shopping cart</button>
      <List 
          items={items} 
          onItemClick={onItemClick} 
          showQuantities
      />
    </div>
  );
}

export default ShoppingCart;

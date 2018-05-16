import React from "react";
import { formatPrice } from "../helpers";

export default class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    // Make sure the fish is looaded vefore we continue
    if(!fish) return null;

    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : "fish"} is no longer available
        </li>
      );
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    // console.log(this.props.order);
     //console.log(orderIds);
    const total = orderIds.reduce((prevTotal, key) => {
    	console.log(key);
    	console.log(prevTotal)
      const fish = this.props.fishes[key];
      // console.log(this.props.fishes);
      // console.log(fish);
      const count = this.props.order[key];
      // console.log(this.props.order);
      // console.log(count);
      const isAvailable = fish && fish.status === "available";
      
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}



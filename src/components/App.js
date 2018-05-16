import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from '../sample-fishes';
import Fish from "./Fish";
import base from '../base';


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const storeName = this.props.match.params.storeId
    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem(storeName);
    if(localStorage) {
      this.setState({ order: JSON.parse(localStorageRef)})
    }

    this.ref = base.syncState(`${storeName}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }



  componentDidUpdate(prevProps, prevState) { //after the component update thier state or props
    const storeName = this.props.match.params.storeId // that how we get the store name
    localStorage.setItem(storeName , JSON.stringify(this.state.order));
  }


  addFish = fish => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({ fishes });
    
  };

  updateFish = (key, updatedFish) => {
    // 1. Take a copy of the current state
    const fishes = { ...this.state.fishes};
    // 2. Update that State
    fishes[key] = updatedFish;
    // 3. Set that to state
    this.setState({ fishes })
  }

  deleteFish = (key) => {
    // 1. take a copy of state
    const fishes = { ...this.state.fishes };
    // 2. update the state
    fishes[key] = null;
    // 3. update state
    this.setState({ fishes });
  }

  removeFromOrder = key =>{
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. update the state
    delete order[key];
    // 3. update state
    this.setState({ order });
  }

  loadSampleFishes = () => {
    this.setState({ fishes:sampleFishes })
  }

  addToOrder = (key) => {
    // 1. take a copy of the state
    const order = {...this.state.order};
    // 2. Either add to thr order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  }


   render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
         fishes={this.state.fishes}
         order={this.state.order}
         removeFromOrder={this.removeFromOrder} 
         />
        <Inventory
          addFish = {this.addFish}
          loadSampleFishes = {this.loadSampleFishes}
          fishes = {this.state.fishes}
          updateFish = {this.updateFish}
          deleteFish = {this.deleteFish}
        />
      </div>
    );
  }
}

export default App;


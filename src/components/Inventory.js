import React, { Component } from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends Component {
	render() {
		return (
			<div className="inventory">
				<h2>Inventory!!!</h2>
				{console.log(this.props.fishes)}
				{Object.keys(this.props.fishes).map(key => (
					<EditFishForm
					 fish={this.props.fishes[key]}	
					 key={key}
					 index={key}
					 updateFish={this.props.updateFish} />
				))}
				<AddFishForm addFish={this.props.addFish} />
				<button onClick={this.props.loadSampleFishes}>
					Load Sample Fishes
				</button>
			</div>
		);
	}
}

export default Inventory;

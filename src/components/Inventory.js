import React, { Component } from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import PropTypes from "prop-types";


class Inventory extends Component {
	static propTypes = {
		fishes: PropTypes.object, 
		updateFish: PropTypes.func,
		deleteFish: PropTypes.func,
		loadSampleFishes: PropTypes.func
	}
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
						updateFish={this.props.updateFish}
						deleteFish={this.props.deleteFish}
					/>
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

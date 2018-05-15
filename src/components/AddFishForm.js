import React, { Component } from 'react';


export default class AddFishForm extends Component {

	nameRef = React.createRef();
	priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

	createFish = (e) => {
		// 1. stop form from submitting
		e.preventDefault();
		// 2. Create fish object 
		const fish = {
			name: this.nameRef.current.value,
			price: parseFloat(this.priceRef.current.value),
			status:this.statusRef.current.value,
			desc: this.descRef.current.value,
			image:this.imageRef.current.value
		};
		this.props.addFish(fish);
		e.currentTarget.reset();

	}
	render() {
		return (
			<div>
				<form className="fish-edit" onSubmit={this.createFish}>
					<input name="name" type="name" placeholder = 'name' ref={this.nameRef} />
					<input name="price" type="price" placeholder = 'price' ref={this.priceRef} />
					<select name="status" ref={this.statusRef}>
						<option value="availabe">Fresh!</option>
						<option value="unavailabe">Sode out!</option>
					</select>
					<input name="desc" type="desc" placeholder = 'desc' ref={this.descRef} />
					<input name="image" type="text" placeholder = 'image'  ref={this.imageRef} />
					<button type="submit">+ Add Fish</button>
				</form>
			</div>
		);
	}
}

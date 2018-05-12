import React, { Component, Fragment } from 'react';
import StorePicker from './StorePicker';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


export default class App extends Component {
	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header/>
				</div>
				<Order/>
				<Inventory/>
			</div>
		);
	}
}

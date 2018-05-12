import React, { Component , Fragment } from 'react';

export default class Header extends Component {
	render() {
		return (
			<Fragment>
				<header className="top">
					<h1>Catch 
					<span className="ofThe">
					<span className="of">of</span> <span className="the">The </span>
					</span>
					Day</h1>
					
				</header>
				<h3 className="tagline">
					<span>Fresh SeaFood Market</span>
				</h3>
			</Fragment>
		);
	}
}

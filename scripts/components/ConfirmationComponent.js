'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ShipmentModel = require('../models/ShipmentModel.js');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			shipment: null,
			placements: []
		}
	},
	componentWillMount: function() {
		var self = this;
		var query = new Parse.Query(ShipmentModel);
		query
		.get(this.props.shipmentId)
		.then(
			(shipment) => {
				var relation = shipment.relation('placements');

				console.log(relation);
				relation.query().include("book").find({
					success: function(placements) {
						console.log(placements);
						self.setState({shipment: shipment, placements: placements});				
					}
				})
			},
			(err) => {
				console.log(err);
			}
		);
	},
	render: function() {
		var renderShipment = this.state.placements.map(function(placement) {
      	return <div>{placement.get('book').get('title')}</div>
      	});
		return (
			<div className="container-fluid confirmation-page">
				<div className="row">
					<div className="col-md-6">
						<h4>These items are pending shipment:</h4>
						{renderShipment}
					</div>
					<div className="col-md-6">
						<h2>Your books will be shipped to you soon!</h2>
						<h3>We will get them into your door in no time! Check out our rocket!</h3>
						<img src="../images/rocket.jpg.gif" height="100%" width="100%"/>
					</div>
				</div>
			</div>
		);
	}
});
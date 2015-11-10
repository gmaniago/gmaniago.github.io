var React = require('react');
var ReactDOM = require('react-dom');
var $ = require ('jquery');

var UserModel = require('../models/UserModel');
var BooksModel = require('../models/BooksModel');
var CartPlacementModel = require('../models/CartPlacementModel.js');
var ShipmentModel = require('../models/ShipmentModel.js');

var query = new Parse.Query(CartPlacementModel);

module.exports = React.createClass({
	getInitialState: function() {
		return { 
			user: Parse.User.current(),
			placements: {}
		};
	},
	componentWillMount: function() {
		query.equalTo('user', Parse.User.current());
		query.equalTo('shipment', undefined);
        query.include("book");
		query.find({
			success: (original_placements) => {
				var placements = {}
				original_placements.map(function(placement) { 
					var book_id = placement.get('book').id;
					if (placements[book_id]) {
                       placements[book_id].push(placement)
					} else {
						placements[book_id] = [placement]
					}
				})
        		this.setState({
					placements: placements
				});
				console.log(placements);
   			},
		});	
	},
	render: function() {
		var placements = [];
		for (var book_id in this.state.placements) {
          var book = this.state.placements[book_id][0].get('book')
          var qty = this.state.placements[book_id].reduce(function(sum, cur) {
          	return cur.get('qty') + sum
          }, 0)
          placements.push(	     
		      	<tr id={book.id} className="warning">
			        <td><img className="image" src={book.get('image')} height="120px" width="80px"/><br/><a href={'#bookDetails/'+book.id}>{book.get('title')}</a></td>	
					<td className="needs-padding"><h3>{qty}</h3></td>
			        <td className="needs-padding"><button onClick={ this.removeBook.bind(this, book) }>Remove</button></td>
		     	 </tr>
			)
        }
        var enableShipping = placements.length > 0;
		return (		
				<div className="container-fluid col-sm-6 col-sm-offset-3 checkoutCart"> 
					<h2>Cart</h2>         
					<table className="table">
						<thead>
							<tr>
								<th>Title</th>
								<th>Quantity</th>
								<th>Edit</th>
							</tr>
						</thead>
						<tbody>
						    {placements}
						</tbody>
					</table>
					<div>{this.shippingButton(enableShipping)}</div>
				</div>

		);
	},
    shippingButton: function(enableShipping) {
		if (enableShipping) {
		  return <button onClick={this.shipCart} id="shipBtn">Ship my Books</button> 
		 } else {
                   return (
                   <div className="empty-cart">
                   		<h3>You have no books on your cart yet.</h3>
                   		<a href="#browse"><button id="shipBtn">Browse Books</button></a>
                   </div>
                   );
				 }
	},
	removeBook: function(book) {
		query.equalTo('user', Parse.User.current());
		query.equalTo('book', book).
		limit(1).
		find({
			success: (books) => {
				var deleteDiv = document.getElementById(""+book.id);
				deleteDiv.className= "removeDiv";
				var deleteBook = books[0];
				deleteBook.destroy();
			},
			error: (error) => {
				console.log(error);
			}
		});
	},
	shipCart: function(){
		var shipment = new ShipmentModel()
		var relation = shipment.relation("placements");
		for (var book_id in this.state.placements) {
			var placements = this.state.placements[book_id];
			placements.map(function(placement) {
				relation.add(placement);
			});
		}
		shipment.setACL(new Parse.ACL(Parse.User.current()));
		var self = this;
		shipment.save({
			success: function(shipment) {
			for (var book_id in self.state.placements) {
				var placements = self.state.placements[book_id];
				placements.map(function(placement) {
					placement.set('shipment', shipment);
					placement.save();
				});
			}
			self.props.router.confirmation(shipment.id);
			}
		});
	}

});


// <div>{this.shippingButton(enableShipping)}</div>
// {placements}

// <tr class="warning">
// 			        <td><a href={'#bookDetails/'+book.id}>{book.get('title')}</a></td>	
// 					<td>Quantity:{qty}</td>
// 			        <td><button onClick={ this.removeBook.bind(this, book) }>Remove</button></td>
// 		     	 </tr><hr />

// 	        <div id={book.id}>       
// 		      	<tr class="warning">
// 			        <td><a href={'#bookDetails/'+book.id}>{book.get('title')}</a></td>	
// 					<td>Quantity:{qty}</td>
// 			        <td><button onClick={ this.removeBook.bind(this, book) }>Remove</button></td>
// 		     	 </tr><hr />
// 		    </div>

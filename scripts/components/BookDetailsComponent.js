var React = require('react');
var ReactDOM = require('react-dom');
var BooksModel = require('../models/BooksModel.js');
var CartPlacementModel = require('../models/CartPlacementModel.js');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			book: null
		}
	},
	componentWillMount: function() {
		var query = new Parse.Query(BooksModel);
		query
		.get(this.props.bookId)
		.then(
			(book) => {
				this.setState({book: book});
			},
			(err) => {
				console.log(err);
			}
		);
	},
	render: function() {
		var content = <div>Loading</div>;

		if(this.state.book) {
			content = (
				<div className="bookDetails">
					<h3 className="title">{this.state.book.get('title')}</h3>
					<div className="description"><div className="image" ><img src={this.state.book.get('image')}height="500px" width="350px" border="0px"/></div><span>{this.state.book.get('description')}</span></div>
					<div className="detailsAuthor">Author: {this.state.book.get('author')}</div>					
					<button type="button" onClick ={this.clicked}>Add Book</button>
				</div>
			)
		}
		return(
			<div>
				{content}
			</div>
		)
	},
	clicked:function(){
		var placement = new CartPlacementModel();
		placement.set('user', Parse.User.current());
		placement.set('book', this.state.book);
		placement.set('qty', 1)
		placement.setACL(new Parse.ACL(Parse.User.current()));
		placement.save({success: function() {}, error: function(err) { console.log(err) }});

	}
})















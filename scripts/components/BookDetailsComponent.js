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
				<div className="container-fluid bookDetails">
					<div className="row">
						<div className="col-sm-5 image-container">
						<img src={this.state.book.get('image')}height="450px" width="300px" border="0px"/>
						</div>
						<div className="col-sm-6 details">
							<h2 className="title">{this.state.book.get('title')}</h2>
							<p className="descript">{this.state.book.get('description')}</p>
							<p className="detailsAuthor">Author: {this.state.book.get('author')}</p>
							<a href="#browse"><button type="button" onClick ={this.clicked}>Add Book</button></a>
						</div>
					</div>
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















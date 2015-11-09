'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render() {
		if(this.props.books) {
			// this is grabbing the input correctly and converting it to lower case
			var input = this.props.filter.toLowerCase();
			var filteredContent = this.props.books.filter(function(book) {
				return (book.get('title').toLowerCase().indexOf(input) != -1);
			})
			.map(function(book) {
				return (
					<div className="icon-box" key={book.id}>
						{book.get('title')}
					</div>
				);
			});
		}
		return (
			<div>
				{filteredContent}
			</div>
		);
	}
});
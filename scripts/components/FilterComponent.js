'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var FilterComponent = require('./FilterComponent');
var BooksModel = require('../models/BooksModel');

module.exports = React.createClass({
	render() {
		return (
			<div className="filter-container">
				<form>
					<input type="text"
							id="filter-input"
							ref="filterInput"
							placeholder="  Search by title or author."
							value={this.props.filterVal}
							onChange={this.filterTrigger} />
				</form>
			</div>
		);
	},
	filterTrigger(e) {
		e.preventDefault();
		this.props.filterUpdate(this.refs.filterInput.value);
	}
});
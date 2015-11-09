var React = require('react');
var ReactDOM = require('react-dom');
var BooksModel = require('../models/BooksModel.js');
var FilterComponent = require('./FilterComponent');
var _ = require('backbone/node_modules/underscore');

module.exports = React.createClass({
	getInitialState: function() {
		return{
			books: [],
			filterText: '',
			categories: 'choose',
			filteredBooks: []
		};
	},
	componentWillMount: function() {
		var query = new Parse.Query(BooksModel);
		query
		.descending('createdAt')
		.find()
		.then(
			(books) => {	
				var filteredCategories = _.uniq(books, function(book){
					return book.get('category');
				});
				var browseCategories = filteredCategories.map(function(book) {
					return (
						<option key={book.id}>{book.get('category')}</option>
					)
				});
				this.setState({books: books, categories: browseCategories});
			},
			(err) => {
				console.log(err);
			}
		);
	},
	stateUpdate(value) {
		this.setState({ filterText: value });
		var query = new Parse.Query(BooksModel);
		query
		.descending('createdAt')
		.contains("title", value)
		.find()
		.then(
			(books) =>  {
				query = new Parse.Query(BooksModel);
				query.descending('createdAt')
				.contains('author', value)
				.find()
				.then(
					(authorBooks) => {
						books = books.concat(authorBooks);
						this.setState({books: books});
					},
					(err) => {
						console.log(err);
					}
				)		
			},
			(err) => {
				console.log(err);
			}
		);
	},
	render: function() {
		var books = this.state.filteredBooks.length === 0 ? this.state.books : this.state.filteredBooks;
		var browseContent = books.map(function(book) {
			return (
				<div className="singleBook hover01 col-sm-4">
					<a href={'#bookDetails/' + book.id}>
						<figure><img className="mainImage" src={book.get('image')}height="300px" width="200px" border="0px"/></figure>
						<h5 className="title">{book.get('title')}</h5>
					</a>
				</div>

			)
		})
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-4 search-category-container">
						<h3 id="browseBooks">Search</h3><br/>
						<div className="filter-container">
							<FilterComponent filterVal={this.state.filterText} filterUpdate={this.stateUpdate} />
						</div>
						<div className="category-search-container">
							<select ref="category" onChange={this.categoryPick}>
								<option>Categories</option>
								{this.state.categories}
							</select>
						</div>
						<div className="panel panel-warning panel-pricing">
						    <div className="panel-heading">
						        <i className="fa fa-desktop"></i>
						        <h3 className="text-center">Staff Picks</h3>
						        <p className="text-center">We have had the leisure of exploring these titles. You should too!</p>
						    </div>
						    <ul className="list-group text-center">
						        <li className="list-group-item"><i className="fa fa-check"></i><img src="../images/451.jpg" height="250" width="170" /></li>
						        <li className="list-group-item"><i className="fa fa-check"></i><img src="../images/Odd_Thomas.jpg" height="250" width="170"/></li>
						        <li className="list-group-item"><i className="fa fa-check"></i><img src="../images/zombie.jpg" height="250" width="170"/></li>
						    </ul>
						</div>
					</div>
					<div className="col-sm-8">
						<h3 id="browseBooks">Browse Books</h3><br/>
						<div className="bookList container">
							{browseContent}
						</div>
					</div>
				</div>
			</div>
		)
	},
	categoryPick: function() {
		console.log(this.state.books);
		var category = this.refs.category.value;
		console.log(category);
		var newCategory = this.state.books.filter((book) => {
			return book.get('category') === category;
		})
		this.setState({filteredBooks: newCategory})
	}
})


var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function(){
		this.props.router.on('route', () => {
			this.forceUpdate();
		});
	},
	render: function() {
		var links = [];

		if(!Parse.User.current()) {
			links.push(this.createNavLink('browse', 'Browse'));
			links.push(this.createNavLink('login', 'Log In'));
			links.push(this.createNavLink('register', 'Register'));
		}
		else {
			links.push(this.createNavLink('cart', 'Cart'));
			links.push(this.createNavLink('browse', 'Browse'));
			links.push(<li><a href="#" onClick={this.logout}>Logout</a></li>);
		}
		return (
			<section className="navbar">
				<div className="links">
					{links}
				</div>
				<div className="logoLine">
					<a href="">PaperBack</a>
				</div>
			</section>
		)
	},
	logout: function(e) {
		e.preventDefault();
		Parse.User.logOut();
		this.props.router.navigate('login', {trigger: true});
	},
	createNavLink: function(url, label) {
		var currentUrl = Backbone.history.getFragment();
		if(currentUrl === url) {
			return (<li key={url} className="active"><a href={'#'+url}>{label}</a></li>);
		}
		else {
			return (<li key={url}><a href={'#'+url}>{label}</a></li>);
		}
	}
})




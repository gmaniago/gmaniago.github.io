var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	getInitialState: function() {
		return { error: null };
	},
	render: function() {
		var hasError = null;
		if(this.state.error) {
			hasError = (
				<p>{this.state.error}</p>
			);
		}
		return (
			<div className="registerBox">
				<h2>Register Here</h2>
				<form className="form" onSubmit={this.onRegister}>
					<input type="text" ref="username" placeholder="UserName" /><br />
					<input type="email" ref="email" placeholder="Email Address" />
					<br />
					<input type="password" ref="password" placeholder="Password" />
					<br />
					<input type="text" ref="streetAddress" placeholder="street address" />
					<br />
					<input type="text" ref="city" placeholder="city" />
					<br />
					<input type="number" ref="zipcode" placeholder="zip code" />
					<br />
					<input type="text" ref="state" placeholder="state" />
					<br />
					<button>Register</button>
					{hasError}
				</form>
			</div>
			)
	},
	
	onRegister: function(e) {
		e.preventDefault();
		var user = new Parse.User();
		user.signUp(
			{
				username: this.refs.username.value,
				password: this.refs.password.value,
				email: this.refs.email.value,
				streetAddress: this.refs.streetAddress.value,
				city: this.refs.city.value,
				zipcode: this.refs.zipcode.value,
				state: this.refs.state.value

			},
			{
				success: (u) => {
					this.props.router.navigate('', {trigger: true});
				},
				error: (u, error) => {
					this.setState({
						error: error.message
					});
				}
			}
		);
		this.refs.username.value = ''
		this.refs.password.value = ''
		this.refs.email.value = ''
		this.refs.streetAddress.value = ''
		this.refs.city.value = ''
		this.refs.zipcode.value = ''
		this.refs.state.value = ''
	}


})




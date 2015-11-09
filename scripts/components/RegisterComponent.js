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
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4">
					</div>
						<div className="col-md-4 registerBox">
							<form className="form" onSubmit={this.onRegister}>
								<h2>Register Here</h2>
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
								<select className="select form-control">
									<option value="First Choice">
									Plan 1
									</option>
									<option value="Second Choice">
									Plan 2
									</option>
								</select>
								<button>Register</button>
								{hasError}
							</form>
						</div>
					<div className="col-md-4 registerBox">
					</div>
				</div>
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

								// <input type="number" ref="cardName" placeholder="name on card" />
								// <br />
								// <input type="text" ref="creditNumber" placeholder="card number" />
								// <br />
								// <select className="select form-control">
								// 	<option value="First Choice">
								// 	Visa
								// 	</option>
								// 	<option value="Second Choice">
								// 	Mastercard
								// 	</option>
								// 	<option value="Third Choice">
								// 	Amex
								// 	</option>
								// 	<option value="Fourth Choice">
								// 	Discover
								// 	</option>
								// </select>


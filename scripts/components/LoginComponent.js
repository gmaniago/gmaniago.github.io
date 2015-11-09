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
			<div className="container-fluid loginPage">
				<div className="row">
					<div className="col-sm-4">
					</div>
					<div className="col-sm-4">
						<form className="form" onSubmit={this.onLogin}>
							<h2 className="logRegister">Log In</h2>
							<input type="text" ref="username" placeholder="username" />
							<br />
							<input type="password" ref="password" placeholder="password" />
							<br />
							<button>Log In</button>
							{hasError}
						</form>
					</div>
					<div className="col-sm-4">
					</div>
				</div>
			</div>
			)
	},
	
	onLogin: function(e) {
		e.preventDefault();
		var user = new Parse.User();
		Parse.User.logIn(
			this.refs.username.value,
			this.refs.password.value,
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
	}


})




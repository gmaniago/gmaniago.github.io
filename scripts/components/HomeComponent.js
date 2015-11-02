'use strict';
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<section className="homeContent">
				<div className="container-fluid">
					<div className="row hero">
						<div className="col-md-12">
							<div className="jumbotron">
								<h2>
									PaperBack
								</h2>
								<p className="firstP">With PaperBack you will be able to explore a vast library of books.</p>				
								<p>When you are done you can mail it back at no cost and choose another one to enjoy.</p>
								<p>
									<a className="btn btn-primary btn-large" href="#register">Start your free month.</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<section id="plans">
			        <div className="container">
			            <div className="row">

			                <div className="col-md-6 text-center">
			                    <div className="panel panel-danger panel-pricing">
			                        <div className="panel-heading">
			                            <i className="fa fa-desktop"></i>
			                            <h3>Plan 1</h3>
			                        </div>
			                        <div className="panel-body text-center">
			                            <p><strong>$10 / Month</strong></p>
			                        </div>
			                        <ul className="list-group text-center">
			                            <li className="list-group-item"><i className="fa fa-check"></i> 1st Month Free</li>
			                            <li className="list-group-item"><i className="fa fa-check"></i> Borrow 2 up to books a month</li>
			                            <li className="list-group-item"><i className="fa fa-check"></i> Customer Service Support</li>
			                        </ul>
			                        <div className="panel-footer">
			                            <a className="btn btn-lg btn-block btn-danger" href="#register">Choose this Plan!</a>
			                        </div>
			                    </div>
			                </div>

			                <div className="col-md-6 text-center">
			                    <div className="panel panel-warning panel-pricing">
			                        <div className="panel-heading">
			                            <i className="fa fa-desktop"></i>
			                            <h3>Plan 2</h3>
			                        </div>
			                        <div className="panel-body text-center">
			                            <p><strong>$20 / Month</strong></p>
			                        </div>
			                        <ul className="list-group text-center">
			                            <li className="list-group-item"><i className="fa fa-check"></i> 1st Month Free</li>
			                            <li className="list-group-item"><i className="fa fa-check"></i> Unlimited Books</li>
			                            <li className="list-group-item"><i className="fa fa-check"></i> Customer Service Support</li>
			                        </ul>
			                        <div className="panel-footer">
			                            <a className="btn btn-lg btn-block btn-warning" href="#register">Choose this Plan!</a>
			                        </div>
			                    </div>
			                </div>


			            </div>
			        </div>
    		</section>

			</section>

		)
	}

});
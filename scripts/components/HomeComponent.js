'use strict';
var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(

				<section id="plans">
					<div id="wrapper" className="heroContent">
					    <header className="hero">
					      	<h1>Paper<span id="heroBack">Back</span></h1>
								<h3>With PaperBack you will be able to explore a vast library of books.</h3>			
								<p className="centered">
									<a className="btn" href="#register">Start your free month.</a>
								</p>
						</header>
					</div>

					<div className="container-fluid">
						<div className="row">
							<div className="col-md-4 gifs">
							<img src="../images/teacher_animated.gif" height="200px" width="200px" />
							<h3>PaperBack for Students</h3>
							<h4> Let us face it textbooks are not cheap. With PaperBack you can choose to borrow a book then return it when the semester ends.</h4>
							</div>
							<div className="col-md-4 gifs">
							<img src="../images/engineer_animated.gif" height="250px" width="250px" />
							<h3>PaperBack for Anyone</h3>
							<h4>This site is for anyone wanting to learn and explore the beauty of literature.</h4>
							</div>
							<div className="col-md-4 gifs">
							<img src="../images/designer_animated.gif" height="200px" width="200px" />
							<h3>PaperBack for the busy.</h3>
							<h4>Dont have time to go the bookstore. PaperBack is perfect for you.</h4>
							</div>
						</div>
					</div>
					<hr />

					<div className="container">
				        <div className="container-fluid">
							<div className="row">
								<div className="col-md-1">
								</div>
									<div className="col-md-10 appInfo">
										<h1 className="greyFont">Easy as 1, 2, 3</h1>
										<h1>Browse, Choose, Ship for free.</h1>
										<h3 className="greyFont">We do the work and with fast shipping you can get your book within days.</h3>
										<h3 className="greyFont">Choose from a variety of selections. From Fantasy to Science Fiction.</h3>
									</div>
								<div className="col-md-1">
							</div>
						</div>
					</div>
					<hr />
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-3">
							</div>
							<div className="col-md-6 firstMonth">
							<h1 className="greyFont">First month is on us.</h1>
							<p className="pBtn">
								<a className=" btn btn-primary btn-large startButton" href="#register">Start your free month.</a>
							</p>
							</div>
							<div className="col-md-3">
							</div>
						</div>
					</div>
					<hr />
					<div className="col-md-4 col-md-offset-2 text-center pricing">
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
					            <li className="list-group-item"><i className="fa fa-check"></i> Borrow up 2 to books a month</li>
					            <li className="list-group-item"><i className="fa fa-check"></i> Customer Service Support</li>
					        </ul>
					        <div className="panel-footer">
					            <a className="btn btn-lg btn-block btn-danger" href="#register">Choose this Plan!</a>
					        </div>
					    </div>
					</div>
					<div className="col-md-4 text-center pricing">
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
				<hr />
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-3">
						</div>
						<div className="col-md-6 firstMonth">
							<h1 className="greyFont">And Of Course. Cancel Anytime!</h1>
						</div>
					</div>
				</div>
    		</section>
		)
	}

});
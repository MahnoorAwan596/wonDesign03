import React from "react";
import "./HomeNew.css"
import Logo from "../img/Logo5.png";

const FooterNew = () => {
	return (
		<div>
			<section>
				<img src={Logo} alt="" className="footer-logo" />
			</section>
			<footer className="footer-distributed">
				<div className="footer-left">
					<h3>Won<span>Design</span></h3>
					<p className="footer-links">
						<a href="/" className="link-1">Home</a>
						<a href="/browse">Browse</a>
						<a href="/create">Create</a>
						<a href="/contact">Contact</a>
						<a href="/login">Login</a>
						<a href="/signup">SignUp</a>
					</p>
					<p className="footer-company-name">Won Design © 2022</p>
				</div>
				<div className="footer-center">
					<div className="location">
						<i className="fa fa-map-marker"></i>
						<p><span>New City Phase 2</span> Wah Cantt, Pakistan</p>
					</div>
					<div className="phone">
						<i className="fa fa-phone"></i>
						<p>+92 309 593 0745</p>
					</div>
					<div className="email">
						<i className="fa fa-envelope"></i>
						<p><a href="mailto:support@company.com">mishalMahnoor@wondesign.com</a></p>
					</div>
				</div>
				<div className="footer-right">
					<p className="footer-company-about">
						<span>About the company</span>
						We make it easy to work with professional designers, creative experts from Australia to build your brand through custom, memorable design which have lasting impact on your business
					</p>
					<div className="footer-icons">
						<a href="https://facebook.com"><i className="fa fa-facebook"></i></a>
						<a href="https://gmail.com"><i className="fa fa-envelope"></i></a>
						<a href="https://linkedin.com"><i className="fa fa-linkedin"></i></a>
						<a href="https://instagram.com"><i className="fa fa-instagram"></i></a>
					</div>
				</div>
			</footer>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
		</div>
	);
}
export default FooterNew;
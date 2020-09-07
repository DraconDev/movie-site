import React, { useEffect, useState } from "react";
import logo from "../../Assets/netflix-logo-png-2562.png";
import classes from "./Navbar.module.css";

const NavBar = () => {
	const [show, setShow] = useState(true);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setShow(true);
			} else setShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	const topFunction = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return (
		<div className={`${classes.nav} ${show && classes.nav_black}`}>
			<img src={logo} alt="logo" className={classes.nav_logo} />
			<img
				src="https://cdn-images-1.medium.com/max/1200/1*vIR7iO-1GnY2xYxL6NiYkw.png"
				alt="logo"
				onClick={() => topFunction()}
				className={classes.nav_avatar}
			/>
		</div>
	);
};

export default NavBar;

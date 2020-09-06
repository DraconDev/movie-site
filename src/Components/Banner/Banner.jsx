import React, { useEffect, useState } from "react";
import apiConfig from "../../Api/Axios/apiConfig";
import requests from "../../Api/Requests/requests";
import { Button, Box, Typography, makeStyles } from "@material-ui/core";

//? Css
const useStyles = makeStyles((theme) => ({
	banner_title: {
		fontSize: "3rem",
		fontWeight: "800",
		paddingBottom: "0.3rem",
	},

	banner: {
		color: "white",
		objectFit: "contain",
		height: "448px",
	},

	banner_contents: {
		marginLeft: "30px",
		paddingTop: "140px",
		height: "190px",
	},

	banner_description: {
		width: "45rem",
		lineHeight: "1.3rem",
		paddingTop: "1rem",
		fontSize: "0.8rem",
		maxWidth: "360px",
		height: "80px",
	},
	banner_button: {
		marginLeft: "5px",
	},
	banner_fade_bottom: {
		height: "7.4rem",
		backgroundImage:
			"linear-gradient(180deg, transparent, rgba(37, 37 , 37, 0.61), #111)",
	},
}));

const Banner = () => {
	//? Convert Styles into Css
	const classes = useStyles();

	const [movie, setMovie] = useState("");

	useEffect(() => {
		async function fetchData() {
			// console.log(requests.fetchTrending, "test");
			const request = await apiConfig.get(requests.fetchTrending);
			// console.log(request, "test");

			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);

			return request;
		}
		fetchData();
		return () => {
			fetchData();
		};
	}, []);

	useEffect(() => {
		// console.log(movie);
		// console.log("movie.overview", String(movie.overview).length);
	}, [movie]);

	function truncate(str, n) {
		return String(str).length > n ? str.substr(0, n - 1) + "..." : str;
	}

	return (
		<header
			className={classes.banner}
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
			}}
		>
			<Box className={classes.banner_contents}>
				<Typography variant="h1" className={classes.banner_title}>
					{movie?.title || movie?.name || movie?.original_name}
				</Typography>
				<Box className={classes.banner_buttons}>
					<Button
						variant="contained"
						color="secondary"
						className={classes.banner_button}
					>
						Play
					</Button>
					<Button
						variant="contained"
						color="secondary"
						className={classes.banner_button}
					>
						My List
					</Button>
				</Box>
				<Typography variant="h3" className={classes.banner_description}>
					{truncate(movie?.overview, 300)}
				</Typography>
			</Box>
			<div className={classes.banner_fade_bottom}></div>
		</header>
	);
};

export default Banner;

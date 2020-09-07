import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import apiConfig from "../../Api/Axios/apiConfig";
import classes from "./Row.module.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	const { fetchUrl, title, isLarge } = props;
	//* Get movies list
	useEffect(() => {
		async function fetchData() {
			const request = await apiConfig.get(fetchUrl);

			setMovies(request.data.results);
			return request;
		}
		fetchData();
		// fetchData();
		return () => {
			fetchData();
		};
	}, [fetchUrl]);

	const options = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		console.log("movie", movie);
		// console.log(
		// 	"object",
		// 	movie.first_air_date
		// 		? movie.first_air_date.slice(0, 4)
		// 		: movie.release_date.slice(0, 4)
		// );
		if (trailerUrl) {
			setTrailerUrl("");
			console.log("trailerUrl", trailerUrl);
		} else {
			//? Use movie name or title to search a trailer
			movieTrailer(movie?.name || movie?.title, {
				id: true,
				// year: movie.first_air_date
				// 	? movie.first_air_date.slice(0, 4)
				// 	: movie.release_date.slice(0, 4),
			})
				.then((url) => {
					console.log("url", url);
					// const urlParams = new URLSearchParams(new URL(url).search);
					// setTrailerUrl(urlParams.get("v"));
					setTrailerUrl(url);
					// setTrailerUrl(`https://www.youtube.com/watch?v=${url}`);
				})
				.catch((error) => console.log("error", error));
		}
	};

	return (
		<div className={classes.row}>
			<h2>{title}</h2>

			<div className={`${classes.row_posters}`}>
				{movies.map((movie) => {
					return (
						<img
							onClick={() => handleClick(movie)}
							className={`${classes.row_poster} ${isLarge && classes.isLarge}`}
							key={movie.id}
							src={`${base_url}${movie.poster_path}`}
							alt={movie.name}
						/>
					);
				})}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={options}></YouTube>}
		</div>
	);
};

export default Row;

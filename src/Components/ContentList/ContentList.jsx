import React from "react";
import requests from "../../Api/Requests/requests";
import Row from "../Row/Row";

export const contentList = {
	NetflixOriginals: { isLarge: true },
	Trending: { isLarge: false },
	TopRated: { isLarge: false },
	ActionMovies: { isLarge: false },
	ComedyMovies: { isLarge: false },
	HorrorMovies: { isLarge: false },
	RomanceMovies: { isLarge: false },
	Documentaries: { isLarge: false },
};

const ContentList = () => {
	return (
		<React.Fragment>
			{/*//? Adds rows based on the amount of requests we have */}
			{Object.keys(contentList).map((e) => {
				return (
					<Row
						//? Cuts off "fetch word" then add Space before every Capital letter and trims off whitespaces
						key={e}
						title={e
							// .slice(5)
							.replace(/([A-Z])/g, " $1")
							.trim()}
						//? appends query w api key to base url
						fetchUrl={requests[`fetch${e}`]}
						isLarge={contentList[e].isLarge}
					></Row>
				);
			})}
		</React.Fragment>
	);
};

export default ContentList;

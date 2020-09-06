import React, { useMemo, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import ContentList from "./Components/ContentList/ContentList";
import NavBar from "./Components/NavBar/NavBar";
import MyContext from "./Store/MyContext";
//npm i react-youtube
//npm i movie-trailer

function App() {
	//? Base store
	const [value, setValue] = useState({});
	//? Only rerender when props change
	const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);

	return (
		<MyContext.Provider value={providerValue}>
			<div className="App">
				<NavBar></NavBar>
				<Banner></Banner>
				<ContentList />
			</div>
		</MyContext.Provider>
	);
}

export default App;

import Axios from "axios";

// Axios config
const apiConfig = Axios.create({
	// Base url. Rest gets appended

	baseURL: "https://api.themoviedb.org/3",
});

export default apiConfig;

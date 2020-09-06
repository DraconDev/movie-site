import { createContext } from "react";

// const [value, setValue] = useState({ test: "this" });

// const MyContext = createContext([value, setValue]);
const MyContext = createContext(["value", "setValue"]);

export default MyContext;

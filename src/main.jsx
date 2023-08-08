import "./index.css";

import App from "./app/app.jsx";
import { FormContextProvider } from "./context/formContext";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<FormContextProvider>
			<App />
		</FormContextProvider>
	</React.StrictMode>
);

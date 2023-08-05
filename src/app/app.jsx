import Card from "../components/card/card";
import FormPage from "../components/formPage/formPageV2";
import { FormContextProvider } from "../context/formContext";

const App = () => {
	return (
		<FormContextProvider>
			<div className="app--container">
				<div className="app__card">
					<div className="app__card--bg-img"></div>
					<Card />
				</div>
				<div className="app__form">
					<FormPage />
				</div>
			</div>
		</FormContextProvider>
	);
};

export default App;

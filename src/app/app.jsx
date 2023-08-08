import Card from "../components/card/card";
import { FormContext } from "../context/formContext";
import FormPage from "../components/formPage/formPageV2";
import { useContext } from "react";

const App = () => {
	const { submitted } = useContext(FormContext);
	// console.log(submitted);
	return (
		<div className="app--container">
			<div className="app__card">
				<div className="app__card--bg-img"></div>
				<Card />
			</div>

			{submitted ? (
				<div>Form Submitted</div>
			) : (
				<div className="app__form">
					<FormPage />
				</div>
			)}
		</div>
	);
};

export default App;

import Card from "../components/card/card";
import FormPage from "../components/formPage/formPage";

const App = () => {
	return (
		<div className="app--container">
			<div className="app__card">
				<div className="app__card--bg-img">
					{/* <img src={cardBg} alt="#" className="card__section--bg" /> */}
				</div>
				<Card />
			</div>
			<div className="app__form">
				<FormPage />
			</div>
		</div>
	);
};

export default App;

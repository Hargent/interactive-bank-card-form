import PropTypes from "prop-types";
import backImg from "../../../assets/images/bg-card-back.png";

// import React from "react";

const Back = ({ cardCvv }) => {
	const testCvv = "123".split("");
	console.log([...testCvv]);
	return (
		<div className="card__back--container">
			<div className="card__back--bg">
				<img src={backImg} alt="#" />
			</div>
			<div className="card__back--cvv">
				{cardCvv}
				{testCvv.map((val, index) => {
					return (
						<input
							key={index}
							type="text"
							disabled
							value={val}
							className="card__back--cvv-inputs"
						/>
					);
				})}
			</div>
		</div>
	);
};

Back.propTypes = {
	cardCvv: PropTypes.number
};

export default Back;

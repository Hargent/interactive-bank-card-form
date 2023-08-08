import { FormContext } from "../../../context/formContext";
import PropTypes from "prop-types";
import backImg from "../../../assets/images/bg-card-back.png";
import { useContext } from "react";

// import React from "react";
// use framer motion to animate card input
const Back = () => {
	const { initialValues } = useContext(FormContext);
	const cvcValue = initialValues.cvc;
	// console.log(cvcValue);
	const inputCvv = cvcValue != "" ? cvcValue.split("") : "000".split("");
	// console.log(inputCvv);
	return (
		<div className="card__back--container">
			<div className="card__back--bg">
				<img src={backImg} alt="#" />
			</div>
			<div className="card__back--cvv">
				{inputCvv.map((val, index) => {
					return (
						<p
							key={index}
							className={`${
								cvcValue === ""
									? "card__back--cvv-inputs not-active"
									: "card__back--cvv-inputs"
							}`}>
							{val}
						</p>
					);
				})}
				{/* {inputCvv.map((val, index) => {
					return (
						<input
							key={index}
							type="text"
							disabled
							value={val}
							className={`${
								cvcValue === ""
									? "card__back--cvv-inputs not-active"
									: "card__back--cvv-inputs"
							}`}
							placeholder="0"
						/>
					);
				})} */}
			</div>
		</div>
	);
};

Back.propTypes = {
	cardCvv: PropTypes.number
};

export default Back;

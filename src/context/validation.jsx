// validate for letters only in holder name
// validate for numbers only in  card number,date,cvvr
// import React from 'react'

// import { FormContext } from "./formContext";

import PropTypes from "prop-types";

// import { useContext } from "react";

const Validation = (target, value) => {
	// console.log(target, value);
	const holderNamePattern = /^[A-Za-z\s]+$/;
	const cardNumberPattern = /^[0-9\s]+$/;
	const otherPattern = /^[0-9]+$/;

	let error;
	if (value === "") {
		error = "Required";
	}
	// console.log(isNaN(value));
	if (target === "holderName") {
		holderNamePattern.test(value)
			? (error = "")
			: (error = "wrong format, letters only");
	}
	if (target === "cardNumber") {
		cardNumberPattern.test(value)
			? (error = "")
			: (error = "Wrong format , numbers only");
	}
	if (target === "month") {
		error = "Wrong format , numbers only";
		if (otherPattern.test(value)) {
			error = "";
			if (+value > 12) {
				error = "Invalid date";
			}
		}
	}
	if (target === "year") {
		error = "Wrong format , numbers only";
		if (otherPattern.test(value)) {
			error = "";
		}
	}
	if (target === "cvc") {
		// console.log(otherPattern.test(value));
		otherPattern.test(value)
			? (error = "")
			: (error = "Wrong format , numbers only");
	}
	console.log(error);
	return error;
	// handleSetErrors(target, error);
};
Validation.propTypes = {
	target: PropTypes.string,
	value: PropTypes.string
};
export default Validation;

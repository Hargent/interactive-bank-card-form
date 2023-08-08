// validate for letters only in holder name
// validate for numbers only in  card number,date,cvvr
// import React from 'react'

// import { FormContext } from "./formContext";

import PropTypes from "prop-types";

// import { useContext } from "react";

const FinalValidation = (target, value) => {
	let error;
	if (value === "") {
		error = "Required";
	}
	// console.log(isNaN(value));
	if (target === "holderName") {
		const nameLength = value?.split(" ").length;
		error = "Enter full name";

		if (nameLength > 1) {
			error = "";
		}

		if (nameLength > 3) {
			error = "Enter only first,middle and last names ";
		}
		if (value == "") {
			error = "Holder name required";
		}
	}
	if (target === "cardNumber") {
		const numberLength = value?.split("").length;
		error = "";
		if (numberLength < 19) {
			error = `${19 - (numberLength + 3)} digits left`;
		}
		if (value == "") {
			error = "Card number required";
		}
	}

	if (target === "month") {
		error = "";
		if (value == "") {
			error = "Date required";
		}
	}
	if (target === "year") {
		const year = value?.split("").length;
		error = "";
		if (year === 1 || year === 3) {
			error = "invalid date";
		}
		if (value == "") {
			error = "Date required";
		}
	}
	if (target === "cvc") {
		const cvcLength = value?.split("").length;
		error = "";
		if (cvcLength < 3) {
			error = `${3 - cvcLength} digits left`;
		}
		if (value == "") {
			error = "cvc number required";
		}
	}
	// console.log(error);
	return error;
	// handleSetErrors(target, error);
};
FinalValidation.propTypes = {
	target: PropTypes.string,
	value: PropTypes.string
};
export default FinalValidation;

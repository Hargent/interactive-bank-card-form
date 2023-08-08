import { createContext, useState } from "react";

import PropTypes from "prop-types";
import Validation from "./validation";
import FinalValidation from "./finalValidation";
// import FinalValidation from "./finalValidation";

const FormContext = createContext({});

const FormContextProvider = ({ children }) => {
	const [initialValues, setInitialValues] = useState({
		holderName: "",
		cardNumber: "",

		month: "",
		year: "",

		cvc: ""
	});
	const [errors, setErrors] = useState({
		holderName: "",
		cardNumber: "",

		month: "",
		year: "",
		date: "",

		cvc: ""
	});
	const [valid, setValid] = useState({
		holderName: null,
		cardNumber: null,

		month: null,
		year: null,

		cvc: null
	});
	// submitting
	const [submitted, setSubmitted] = useState(false);

	const handleSubmission = val => {
		// let validMeta = {};
		for (val in initialValues) {
			const target = val;
			const value = initialValues[target];
			const error = FinalValidation(target, value);

			const errorData = errors;

			errorData[target] = error;

			setErrors({ ...errorData });

			const validData = valid;

			if (errors[target] == "") {
				validData[target] = true;
			} else {
				validData[target] = null;
			}
			setValid({ ...validData });
			// console.log(val);
		}

		// FinalValidation(target,value)
		console.log(errors);
		console.log(valid);
		const validValues = Object.values(valid);
		const falsyValue = validValues.some(val => val === false);
		const nullValue = validValues.some(val => val === null);
		console.log(falsyValue, nullValue);

		if (falsyValue === true || nullValue == true) {
			console.log("Don't submit");
			return;
		}
		console.log("submit");
		setSubmitted(val);
	};
	//
	const handleSetInitialValues = e => {
		// console.log(e);
		const target = e.target.name;
		const value = e.target.value;

		const eventData = e.nativeEvent.inputType;
		// console.log(target);
		if (eventData === "insertText" && valid[target] === false) {
			console.log("returning");
			return;
		}
		// validating
		const error = Validation(target, value);
		const validData = valid;
		validData[target] = false;
		if (error === "") {
			validData[target] = true;
		}
		setValid({ ...validData });
		const newError = errors;

		newError[target] = error;
		if (newError.month !== "") {
			newError.date = newError.month;
		} else if (newError.year !== "") {
			newError.date = newError.year;
		} else {
			newError.date = "";
		}
		setErrors({ ...newError });

		// console.log("errors");
		// //////////
		const InitialValues = initialValues;
		InitialValues[target] = value;
		setInitialValues({ ...InitialValues });

		if (initialValues[target] === "") {
			// newError[target] = "";
			newError[target] = "Can't be blank";
			validData[target] = null;
			setValid({ ...validData });
			if (
				newError.month === "Can't be blank" ||
				newError.year === "Can't be blank"
			) {
				newError.date = "Can't be blank";
			}
			setErrors({ ...newError });
		}
		// console.log(target, valid[target], errors[target]);
	};
	// const handleSetErrors = () => {
	// 	const newError = errors;
	// 	const target = e.target.name;
	// 	newError[target] = "Can't be blank ";
	// 	// newError[target] = "Can't be blank";
	// 	// if (newError.month === "" && newError.year === "") {
	// 	// 	newError.date = "Can't be blank";
	// 	// }
	// 	setErrors({ ...newError });
	// };

	return (
		<FormContext.Provider
			value={{
				initialValues,
				handleSetInitialValues,
				errors,
				submitted,
				handleSubmission
			}}>
			{children}
		</FormContext.Provider>
	);
};

FormContextProvider.propTypes = {
	children: PropTypes.node
};

export { FormContext, FormContextProvider };

import { createContext, useState } from "react";

import PropTypes from "prop-types";

const FormContext = createContext({
	holderName: "",
	cardNumber: "",

	month: "",
	year: "",

	cvc: ""
});

const FormContextProvider = ({ children }) => {
	const [initialValues, setInitialValues] = useState({
		holderName: "",
		cardNumber: "",

		month: "",
		year: "",

		cvc: ""
	});
	const handleSetInitialValues = e => {
		const target = e.target.name;
		const value = e.target.value;
		const InitialValues = initialValues;
		InitialValues[target] = value;
		setInitialValues({ ...InitialValues });
		// console.log(initialValues);
	};
	return (
		<FormContext.Provider value={{ initialValues, handleSetInitialValues }}>
			{children}
		</FormContext.Provider>
	);
};

FormContextProvider.propTypes = {
	children: PropTypes.node
};

export { FormContext, FormContextProvider };

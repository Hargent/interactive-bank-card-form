import { FormContext } from "../../context/formContext";
import PropTypes from "prop-types";
import { useContext } from "react";

// import React from "react";

const ErrorMessage = ({ name }) => {
	const { errors } = useContext(FormContext);
	// console.log(errors);
	return (
		<label htmlFor={name} className={`error ${name}`}>
			{errors[name]}
		</label>
	);
};

ErrorMessage.propTypes = {
	name: PropTypes.string
};

export default ErrorMessage;

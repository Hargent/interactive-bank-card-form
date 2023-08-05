import PropTypes from "prop-types";

// import React from "react";

const errorMessage = ({ name, children }) => {
	return <label htmlFor={name}>{children}</label>;
};

errorMessage.propTypes = {
	children: PropTypes.node
};

export default errorMessage;

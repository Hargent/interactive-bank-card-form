// import React from "react";

import { useContext } from "react";
import Back from "./back/back";
import Front from "./front/front";
import { FormContext } from "../../context/formContext";

const card = () => {
	const { submitted } = useContext(FormContext);
	return (
		<div
			className={
				submitted ? "card--container submitted" : "card--container"
			}>
			<Front />
			<Back />
		</div>
	);
};

export default card;

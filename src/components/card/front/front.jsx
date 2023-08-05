import { FormContext } from "../../../context/formContext";
import PropTypes from "prop-types";
import frontImg from "../../../assets/images/bg-card-front.png";
import { useContext } from "react";
import {
	getCardMonth,
	getCardName,
	getCardNumber,
	getCardYear,
	getNumberClassName
} from "./getFunctions";

// import React from "react";

const Front = () => {
	const { initialValues } = useContext(FormContext);

	return (
		<div className="card__front--container">
			<div className="card__front--bg">
				<img src={frontImg} alt="#" />
			</div>
			<div className="card__front--content">
				<div className="card__front--header">
					<div className="card__logo"></div>
					<div className="card__icon"></div>
				</div>
				<div className="card__number">
					{getCardNumber(initialValues.cardNumber).map(
						(val, index) => {
							return (
								<input
									key={index}
									type="text"
									disabled
									value={val}
									className={getNumberClassName(
										index,
										initialValues.cardNumber
									)}
								/>
							);
						}
					)}
				</div>
				<div className="card__front--footer">
					<div
						className={`${
							initialValues.holderName === ""
								? "card__name not-active"
								: "card__name"
						}`}>
						{getCardName(initialValues.holderName)}
					</div>
					<div className="card__expiry--date">
						<span
							className={`${
								initialValues.month === "" && "not-active"
							}`}>
							{getCardMonth(initialValues.month)}
						</span>
						<span
							className={`${
								(initialValues.year === "" ||
									initialValues.month === "") &&
								"not-active"
							}`}>
							/
						</span>
						<span
							className={`${
								initialValues.year === "" && "not-active"
							}`}>
							{getCardYear(initialValues.year)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

Front.propTypes = {
	cardNumber: PropTypes.number,
	cardExpiryDate: PropTypes.number,
	cardName: PropTypes.string
};

export default Front;

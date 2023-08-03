import PropTypes from "prop-types";
import frontImg from "../../../assets/images/bg-card-front.png";

// import React from "react";

const Front = ({ cardNumber, cardName, cardExpiryDate }) => {
	const testNumber = "0000000000000000".split("");
	const testName = "Jessie Lee";
	const testMonth = "9";
	// standardizing month number
	const standardMonth = month => {
		const length = month.split("").length;
		let standardMonth = month;
		if (length < 2 && length === 1) {
			standardMonth = `0${month}`;
		}
		return standardMonth;
	};

	const testYear = "25";
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
					{cardNumber}
					{testNumber.map((val, index) => {
						return (
							<input
								key={index}
								type="text"
								disabled
								value={val}
								className={`${
									(index + 1) % 4 === 0 &&
									index != 0 &&
									index / 4 !== 4
										? "card__number-inputs card__number-space"
										: "card__number-inputs"
								}`}
							/>
						);
					})}
					<input
						type="text"
						disabled
						value=" "
						className="card__number-inputs card__number-space-1"
					/>
					<input
						type="text"
						disabled
						value=" "
						className="card__number-inputs card__number-space-2"
					/>
					<input
						type="text"
						disabled
						value=" "
						className="card__number-inputs card__number-space-3"
					/>
				</div>
				<div className="card__front--footer">
					<div className="card__name">
						{cardName}
						{testName}
					</div>
					<div className="card__expiry--date">
						{cardExpiryDate}
						{standardMonth(testMonth)}/{testYear}
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

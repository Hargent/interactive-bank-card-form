const getCardNumber = number => {
	let cardNumber = "0000000000000000".split("");

	if (number != "") {
		cardNumber = number.split(" ").join("").split("");
	}
	// console.log(cardNumber);
	return cardNumber;
};
const getCardName = name => {
	let cardName = "Jane Appleseed";
	if (name != "") {
		cardName = name.split("");
	}
	if (name.length >= 23) {
		const names = name.split(" ");
		const FirstName = names[0];

		let middleName = names[1];
		let lastName = names[2];

		cardName = `${FirstName} ${lastName} ${middleName[0].toUpperCase()}.`;

		if (names.length < 3) {
			middleName = "";
			lastName = names[1];

			cardName = `${FirstName} ${lastName[0].toUpperCase()}.`;
		}
	}

	return cardName;
};

const getCardMonth = month => {
	let cardMonth = "MM";
	if (month !== "") {
		cardMonth = month;
		const length = month.split("").length;
		if (length < 2 && length === 1) {
			cardMonth = `0${month}`;
		}
	}
	return cardMonth;
};
const getCardYear = year => {
	let cardYear = "YY";
	if (year !== "") {
		cardYear = year;
		const length = year.split("").length;

		if (length > 2) {
			length === 4
				? (cardYear = `${year[2]}${year[3]}`)
				: (cardYear = `${year[1]}${year[2]}`);
		}
	}
	return cardYear;
};

const getNumberClassName = (index, value) => {
	let className = "card__number-inputs";
	if ((index + 1) % 4 === 0 && index != 0 && index / 4 !== 4) {
		className = "card__number-inputs card__number-space ";
		if (value === "") {
			className = "card__number-inputs card__number-space not-active";
		}
	} else {
		if (value === "") {
			className = "card__number-inputs  not-active";
		}
	}

	return className;
};

export {
	getCardMonth,
	getCardNumber,
	getCardName,
	getCardYear,
	getNumberClassName
};

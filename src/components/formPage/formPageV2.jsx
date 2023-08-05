import { FormContext } from "../../context/formContext";
import { useContext } from "react";

const FormPage = () => {
	const { initialValues, handleSetInitialValues } = useContext(FormContext);

	const cc_format = value => {
		const v = value
			.replace(/\s+/g, "")
			.replace(/[^0-9]/gi, "")
			.substr(0, 16);
		const parts = [];

		for (let i = 0; i < v.length; i += 4) {
			parts.push(v.substr(i, 4));
		}

		return parts.length > 1 ? parts.join(" ") : value;
	};

	return (
		<div className="form--container">
			<form>
				<div className="form__layout">
					<div className="form__name--container">
						<p className="form__layout__item--labels">
							card-holder name
						</p>
						<div className="form__layout__item">
							<input
								className="form__field"
								type="text"
								value={initialValues?.holderName}
								name="holderName"
								maxLength={30}
								placeholder="e.g Jane Appleseed"
								onChange={handleSetInitialValues}
							/>
						</div>
					</div>
					<div className="form__number--container">
						<p className="form__layout__item--labels">
							Card number
						</p>
						<div className="form__layout__item">
							<input
								className="form__field"
								type="text"
								name="cardNumber"
								value={cc_format(initialValues?.cardNumber)}
								placeholder="e.g 1234 5678 9123 4567"
								maxLength={19}
								onChange={handleSetInitialValues}
							/>
						</div>
					</div>

					<div className="form__date-cvv--container">
						<div className="form__date--container">
							<p className="form__layout__item--labels">
								exp. date(mm/yy)
							</p>
							<div className="form__layout__item">
								<div className="form__date__field">
									<div className="form__layout__item">
										<input
											className="form__field"
											type="text"
											value={initialValues?.month}
											name="month"
											placeholder="MM"
											onChange={handleSetInitialValues}
											maxLength={2}
										/>
									</div>

									<input
										className="form__field"
										type="text"
										name="year"
										value={initialValues?.year}
										onChange={handleSetInitialValues}
										placeholder="YY"
										maxLength={4}
									/>
								</div>
							</div>
						</div>
						<div className="form__cvc--container">
							<p className="form__layout__item--labels">cvc</p>
							<div className="form__layout__item">
								<input
									className="form__field"
									type="text"
									name="cvc"
									placeholder="e.g 123"
									onChange={handleSetInitialValues}
									maxLength={3}
								/>
							</div>
						</div>
					</div>
					<button
						type="submit"
						// disabled={isSubmitting}
						className="form__btn">
						Confirm
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormPage;

// import React from 'react'

import * as Yup from "yup";

import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";

import { useState } from "react";

const FormPage = () => {
	const [formData, setFormData] = useState(null);
	console.log(formData);
	// const cc_format = value => {
	// 	const v = value
	// 		.replace(/\s+/g, "")
	// 		.replace(/[^0-9]/gi, "")
	// 		.substr(0, 16);
	// 	const parts = [];

	// 	for (let i = 0; i < v.length; i += 4) {
	// 		parts.push(v.substr(i, 4));
	// 	}
	// };

	const handleSubmit = data => {
		console.log(data);
	};

	const cardValidationSchema = Yup.object().shape({
		holderName: Yup.string().required("Can't be blank"),
		cardNumber: Yup.number().required("Can't be blank"),
		cvc: Yup.number().required("Can't be blank"),

		date: Yup.array()
			.of(
				Yup.object("Can't be blank").shape({
					month: Yup.number("enter numbers only").required(
						"Can't be blank"
					),
					year: Yup.number("enter numbers only").required(
						"Can't be blank"
					)
				})
			)
			.required("Can't be blank") // these constraints are shown if and only if inner constraints are satisfi
		// month: Yup.number("enter numbers only").required("Can't be blank"), // these constraints take precedence
		// year: Yup.number("enter numbers only").required("Can't be blank") // these constraints take precedence
	});
	// const
	return (
		<div className="form--container">
			<Formik
				initialValues={{
					holderName: "",
					cardNumber: "",

					date: {
						month: "",
						year: ""
					},
					// month: "",
					// year: "",

					cvc: ""
				}}
				validationSchema={cardValidationSchema}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						setFormData(JSON.stringify(values, null, 2));
						setSubmitting(JSON.stringify(values, null, 2));
						handleSubmit(formData);
					}, 400);
				}}>
				{({ isSubmitting, errors, touched }) => (
					<Form className="form__layout">
						<div className="form__name--container">
							<p className="form__layout__item--labels">
								card-holder name
							</p>
							<div className="form__layout__item">
								<Field
									className="form__field"
									type="text"
									name="holderName"
									placeholder="e.g Jane Appleseed"
								/>
								<div className="error">
									{errors.holderName && touched.holderName ? (
										<ErrorMessage name="holderName" />
									) : null}
								</div>
							</div>
						</div>
						<div className="form__number--container">
							<p className="form__layout__item--labels">
								Card number
							</p>
							<div className="form__layout__item">
								<Field
									className="form__field"
									type="text"
									name="cardNumber"
									placeholder="e.g 1234 5678 9123 4567"
									maxlength={16}
								/>
								<div className="error">
									{/* {errors.cardNumber && touched.cardNumber ? (
										<div>{errors.cardNumber}</div>
									) : null} */}
									<ErrorMessage name="cardNumber">
										{() => {
											console.log(errors);
											return (
												<div>
													Wrong format, number only
												</div>
											);
										}}
									</ErrorMessage>
								</div>
							</div>
							<div className="form__layout__item"></div>
						</div>
						<div className="form__date-cvv--container">
							<div className="form__date--container">
								<p className="form__layout__item--labels">
									exp. date(mm/yy)
								</p>
								<div className="form__layout__item">
									<FieldArray
										name="date"
										render={() => {
											return (
												<div className="form__date__field">
													<div className="form__layout__item">
														<Field
															className="form__field"
															type="text"
															name="month"
															placeholder="MM"
															maxlength={2}
														/>
														{/* <div className="error">
															{errors.month &&
															touched.month ? (
																<ErrorMessage name="month" />
															) : null}
														</div> */}
													</div>

													<Field
														className="form__field"
														type="text"
														name="year"
														placeholder="YY"
														maxlength={2}
													/>
													<div className="error">
														<ErrorMessage name="date">
															{() => {
																<div>
																	Numbers only
																</div>;
															}}
														</ErrorMessage>
													</div>
													{/* <div className="error">
														{errors.year &&
														touched.year ? (
															<ErrorMessage name="year" />
														) : null}
													</div> */}
												</div>
											);
										}}
									/>

									<div className="error">
										<ErrorMessage name="date">
											{() => {
												<div>Can&apos;t be blank</div>;
											}}
										</ErrorMessage>
									</div>
								</div>
							</div>
							<div className="form__cvc--container">
								<p className="form__layout__item--labels">
									cvc
								</p>
								<div className="form__layout__item">
									<Field
										className="form__field"
										type="text"
										name="cvc"
										placeholder="e.g 123"
										maxlength={3}
									/>

									<div className="error">
										<ErrorMessage name="cvc">
											{() => {
												return <div>Numbers only</div>;
											}}
										</ErrorMessage>
									</div>
								</div>
							</div>
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							className="form__btn">
							Confirm
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormPage;

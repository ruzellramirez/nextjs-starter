import React, { useState, useCallback } from "react";
import { Modal } from "../";

import { useCreditCardValidator } from "react-creditcard-validator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

interface ccForm {
  cardName: string;
  cardNumber: number;
  cardValidity: number;
  cardCVV: number;
  checkBox: boolean;
  orderTotal: number;
}

const CreditCard = ({ total }: { total: number }) => {
  const [shouldShowModal, setShouldShowModal] = useState<boolean>(false);
  const [state, setState] = useState<ccForm>({
    cardName: "",
    cardNumber: 0,
    cardValidity: 0,
    cardCVV: 0,
    checkBox: false,
    orderTotal: total,
  });

  const {
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    meta: { erroredInputs },
  } = useCreditCardValidator();

  const handleChange = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });
    },
    [state]
  );

  const handleCheckboxChange = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      e.currentTarget.checked
        ? setState({ ...state, [e.currentTarget.name]: true })
        : setState({ ...state, [e.currentTarget.name]: false });
    },
    [state]
  );

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(state);
      if (
        erroredInputs.cardNumber === undefined &&
        erroredInputs.expiryDate === undefined &&
        erroredInputs.cvc === undefined &&
        state.checkBox === true
      ) {
        alert("Credit card information is validated.");
      } else {
        erroredInputs.cardNumber && alert(erroredInputs.cardNumber);
        erroredInputs.expiryDate && alert(erroredInputs.expiryDate);
        erroredInputs.cvc && alert(erroredInputs.cvc);
      }
    },
    [erroredInputs, state]
  );

  //4012888888881881

  return (
    <div id="paymentForm__payment__cc">
      <form className="row my-3" onSubmit={handleSubmit}>
        <div className="paymentForm__cc col-lg-7">
          <label className="form-label fw-bold" htmlFor="cardNumber">
            Card Number&nbsp;
            <span className="paymentForm__cc__required"></span>
          </label>
          <small className="paymentForm__payment__cc__alert">
            {erroredInputs.cardNumber && erroredInputs.cardNumber}
          </small>

          <div className="paymentForm__payment__cc__input">
            <input
              {...getCardNumberProps({ onChange: handleChange })}
              className="form-control"
              name="cardNumber"
              autoComplete="cc-number"
              x-autocompletetype="cc-number"
              id="cardNumber"
              required
            />
            <FontAwesomeIcon
              className="paymentForm__payment__cc__input__icon"
              id="fa__cc"
              icon={faCreditCard}
              color="grey"
            />
          </div>

          <label className="form-label fw-bold m-0" htmlFor="cardValidity">
            Valid thru (mm/yy)&nbsp;
            <span className="paymentForm__cc__required"></span>
          </label>
          <small className="paymentForm__payment__cc__alert">
            {erroredInputs.expiryDate && erroredInputs.expiryDate}
          </small>
          <input
            {...getExpiryDateProps({ onChange: handleChange })}
            className="form-control"
            name="cardValidity"
            autoComplete="cc-exp"
            x-autocompletetype="cc-exp"
            id="cardValidity"
            required
          />

          <label className="form-label fw-bold m-0" htmlFor="cardName">
            Cardholder&apos;s name
            <span className="paymentForm__cc__required"></span>
          </label>
          <input
            className="form-control"
            type="text"
            name="cardName"
            autoComplete="cc-name"
            x-autocompletetype="cc-name"
            id="cardName"
            required
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-lg-5">
          <label className="form-label pt-4 fw-bold m-0" htmlFor="cardCVV">
            CVV/CVC <span className="paymentForm__cc__required"></span>
          </label>
          <small className="paymentForm__payment__cc__alert">
            {erroredInputs.cvc && erroredInputs.cvc}
          </small>
          <div className="paymentForm__payment__cc__input">
            <input
              {...getCVCProps({ onChange: handleChange })}
              type="number"
              className="form-control"
              autoComplete="cc-csc"
              name="cardCVV"
              id="cardCVV"
              required
            />
            <FontAwesomeIcon
              className="paymentForm__payment__cc__input__icon"
              id="fa__cq"
              icon={faCircleQuestion}
              color="grey"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="The 3-digit number on the back of your VISA/Mastercard, or the 4-digit number in front of your AMEX card."
            />
          </div>
        </div>
        <div className="paymentForm__tnc">
          <input
            className="paymentForm__tnc__checkbox"
            name="checkBox"
            type="checkBox"
            onChange={handleCheckboxChange}
            required
          />
          <label htmlFor="checkBox">
            I accept the&nbsp;
            <a
              href="#"
              onClick={() => {
                setShouldShowModal(!shouldShowModal);
              }}
            >
              Terms and Conditions
            </a>
            .
            <Modal
              shouldShow={shouldShowModal}
              onRequestClose={() => {
                setShouldShowModal(false);
              }}
            >
              <>
                <h3 className="mb-2">Terms and Conditions</h3>
                <p>
                  Banjo fingerstache cardigan exercitation, master cleanse
                  officia fixie lumbersexual everyday carry ut. Yuccie affogato
                  excepteur flannel, succulents big mood sint locavore hell of.
                  Coloring book kickstarter mustache do nisi direct trade,
                  artisan hot chicken laborum occaecat. Ipsum af sriracha tilde,
                  waistcoat tattooed keytar letterpress fam quinoa ut chartreuse
                  officia trust fund. Vaporware pop-up tempor, eu paleo dolor
                  salvia mustache. Ennui blog lo-fi adipisicing, neutra offal
                  whatever ut. Sed nisi occaecat ad bicycle rights.
                </p>
                <p className="pt-1">
                  Pinterest jean shorts semiotics, hoodie ut hexagon ramps
                  fingerstache laboris sint sunt tumeric. Proident occupy
                  bitters bodega boys id, vice mumblecore letterpress jianbing
                  +1 normcore celiac synth affogato pabst. Cred vegan anim,
                  small batch activated charcoal laborum kinfolk dolore
                  authentic ut ennui tousled eu iceland shabby chic. Excepteur
                  health goth Brooklyn mustache consectetur. Banh mi tousled ut
                  do artisan literally before they sold out praxis slow-carb
                  plaid man braid swag yr. Same sint consequat tacos. Offal
                  irure everyday carry excepteur pop-up four loko.
                </p>
              </>
            </Modal>
          </label>
        </div>
        <button type="submit" className="btn btn-warning">
          Place Order (${total})
        </button>
      </form>
    </div>
  );
};

export default CreditCard;

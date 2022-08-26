import { useState } from "react";

export default function Form() {
  const [creditCardState, setCreditCardState] = useState({
    CardNumber: "",
    CardOwner: "",
    CardDate: "",
  });

  const valueChangeHandler = (e) => {
    switch (e.target.id) {
      case "cardNumber":
        return setCreditCardState({
          ...creditCardState,
          CardNumber: e.target.value,
        });

      case "cardOwner":
        return setCreditCardState({
          ...creditCardState,
          CardOwner: e.target.value,
        });

      case "cardDate":
        return setCreditCardState({
          ...creditCardState,
          CardDate: e.target.value,
        });
    }
  };

  return (
    <>
      <div>
        Number : {creditCardState.CardNumber}
        Owner : {creditCardState.CardOwner}
        Date : {creditCardState.CardDate}
      </div>
      <form>
        <input
          id="cardNumber"
          type="tel"
          autoComplete="off"
          required
          value={creditCardState.CardNumber}
          onChange={valueChangeHandler}
        />
        <input
          id="cardOwner"
          type="text"
          autoComplete="off"
          required
          value={creditCardState.CardOwner}
          onChange={valueChangeHandler}
        />
        <input
          id="cardDate"
          type="text"
          autoComplete="off"
          required
          value={creditCardState.CardDate}
          onChange={valueChangeHandler}
        />
      </form>
    </>
  );
}

import { useState, useEffect } from "react";

export default function Form() {
  const [creditCardState, setCreditCardState] = useState({
    CardNumber: "################",
    CardOwner: "",
    CardDate: "",
  });

  String.prototype.replaceAt = function (index, replacement) {
    return (
      this.substring(0, index) +
      replacement +
      this.substring(index + replacement.length)
    );
  };

  const valueChangeHandler = (e) => {
    switch (e.target.id) {
      case "cardNumber":
        const cardNumber = creditCardState.CardNumber;

        const userInput = e.target.value;

        const userInputItemsFirst = userInput.charAt(0);
        const cardNumberItemsFirst = cardNumber.charAt(0);

        cardNumberItemsFirst = userInputItemsFirst;

        const updatedCardnumber = cardNumber.replaceAt(0, userInputItemsFirst);

        return setCreditCardState({
          ...creditCardState,
          CardNumber: updatedCardnumber,
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
          type="date"
          autoComplete="off"
          required
          value={creditCardState.CardDate}
          onChange={valueChangeHandler}
        />
      </form>
    </>
  );
}

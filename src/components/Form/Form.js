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
        // Default state Card Number
        const cardNumber = creditCardState.CardNumber;

        // Get User Input
        const userInput = e.target.value;

        // Get seperated values of User input
        const userInputItems = userInput.split("");

        // Replace respective card numbers by user input values
        userInputItems.forEach((letter, index) => {
          const cardNumberUpdate = cardNumber.replaceAt(index, letter);

          // Update card Number
          return setCreditCardState({
            ...creditCardState,
            CardNumber: cardNumberUpdate,
          });
        });

        return creditCardState.CardNumber;

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
          maxLength={16}
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

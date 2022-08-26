import { useState, useEffect } from "react";
import CreditCard from "../CreditCard/CreditCard";

export default function Form() {
  const [creditCardState, setCreditCardState] = useState({
    CardNumber: "################",
    CardOwner: "",
    CardDate: "",
  });

  // Default state Card Number
  const cardNumber = creditCardState.CardNumber;

  String.prototype.replaceAt = function (index, replacement) {
    return (
      this.substring(0, index) +
      replacement +
      this.substring(index + replacement.length)
    );
  };

  function space(el, after) {
    // defaults to a space after 4 characters:
    after = after || 4;

    /* removes all characters in the value that aren't a number,
       or in the range from A to Z (uppercase): */
    var v = el.value.replace(/[^\dA-Z]/g, ""),
      /* creating the regular expression, to allow for the 'after' variable
       to be used/changed: */
      reg = new RegExp(".{" + after + "}", "g");
    el.value = v.replace(reg, function (a, b, c) {
      return a + " ";
    });
  }

  const valueChangeHandler = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "cardNumber":
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
      <CreditCard
        CardNumber={creditCardState.CardNumber}
        CardOwner={creditCardState.CardOwner}
        CardDate={creditCardState.CardDate}
      />
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

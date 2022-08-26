import styled from "styled-components";
import { colors } from "../../styles/colors";
import { pxToRem } from "../../utils/pxToRem";
import { cardLabels, cardNumberFont, cardTextFont } from "../Texts/texts";

export default function CreditCard(props) {
  return (
    <>
      <CreditCardWrapper>
        <CreditCardContent>
          <NumberWrapper>
            <CardNumber>{props.CardNumber}</CardNumber>
          </NumberWrapper>

          <CreditCardBottom>
            <InfoWrapper>
              <Info label={"Card owner"}>{props.CardOwner}</Info>
            </InfoWrapper>

            <InfoWrapper>
              <Info label={"Expiration date"}>{props.CardDate}</Info>
            </InfoWrapper>
          </CreditCardBottom>
        </CreditCardContent>
      </CreditCardWrapper>
    </>
  );
}

const CreditCardBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NumberWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const CreditCardContent = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoWrapper = styled.div``;

const Info = styled.p`
  position: relative;
  color: ${colors.White};
  ${cardTextFont};

  &:after {
    position: absolute;
    display: block;
    width: max-content;
    top: 0;
    left: 0;
    content: "${(props) => props.label || "Placeholder"}";
    ${cardLabels}
    transform: translateY(-100%);
  }
`;

const CardNumber = styled.p`
  position: relative;
  color: ${colors.White};
  ${cardNumberFont};

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: "Card Number";
    ${cardLabels}
    transform: translateY(-100%);
  }
`;

const CreditCardWrapper = styled.div`
  display: flex;
  align-items: end;
  width: ${pxToRem(400)};
  height: ${pxToRem(248)};
  padding: ${pxToRem(32)};
  background-color: ${colors.Primary};
  border-radius: ${pxToRem(24)};
  overflow: hidden;
`;

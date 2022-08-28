import styled from "styled-components";
import { colors } from "../../styles/colors";
import { pxToRem } from "../../utils/pxToRem";
import { cardLabels, cardNumberFont, cardTextFont } from "../Texts/texts";
import Chip from "./Chip";

export default function CreditCard(props) {
  return (
    <>
      <CreditCardWrapper>
        <CreditCardContent>
          <Chip />

          <NumberWrapper>
            <CardNumber>{props.CardNumber}</CardNumber>
          </NumberWrapper>

          <CreditCardBottom>
            <InfoWrapper>
              <Info label={"Card owner"}>{props.CardOwner}</Info>
            </InfoWrapper>

            <InfoWrapper>
              <Info RightSide label={"Expiration date"}>
                {props.CardDate}
              </Info>
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
  position: relative;
  width: 100%;
  height: 40%;
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
    content: "${(props) => props.label || "Placeholder"}";
    ${cardLabels}
    transform: translateY(-100%);
    ${(props) => (props.RightSide ? "right: 0;" : "left: 0;")}
  }
`;

const CardNumber = styled.p`
  position: relative;
  color: ${colors.White};
  ${cardNumberFont};
`;

const CreditCardWrapper = styled.div`
  display: flex;
  align-items: end;
  width: ${pxToRem(400)};
  height: ${pxToRem(248)};
  padding: ${pxToRem(32)};
  border-radius: ${pxToRem(24)};
  overflow: hidden;
  background-color: ${colors.Primary};
  background-color: #1f38c5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%230D192B' stroke-width='90.6' stroke-opacity='0.04' %3E%3Ccircle fill='%231F38C5' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%230c38bc' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%230037b4' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%230037ab' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%230036a2' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23003499' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23003390' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23003186' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23002f7d' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23002d74' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23002b6b' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23002961' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23002658' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2300244f' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23002146' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23051e3d' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%230a1c34' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%230D192B' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`;

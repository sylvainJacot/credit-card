import { css } from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export const cardNumberFont = css`
  font-family: "Old Standard TT", serif;
  font-family: "Rajdhani", sans-serif;
  font-weight: inherit;
  font-size: ${pxToRem(24)};
`;

export const cardTextFont = css`
  font-family: "Old Standard TT", serif;
  font-family: "Rajdhani", sans-serif;
  font-weight: inherit;
  font-size: ${pxToRem(16)};
`;

export const cardLabels = css`
  font-family: "Old Standard TT", serif;
  font-family: "Rajdhani", sans-serif;
  font-weight: inherit;
  opacity: 0.5;
  font-size: ${pxToRem(12)};
`;

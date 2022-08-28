import Image from "next/image";
import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

export default function Chip() {
  return (
    <ChipWrapper>
      <Image src={"/chip.png"} layout="fill" />
    </ChipWrapper>
  );
}

const ChipWrapper = styled.div`
  position: absolute;
  width: ${pxToRem(48)};
  aspect-ratio: 2330/2068;
  top: 0;
  transform: translateY(-150%);
`;

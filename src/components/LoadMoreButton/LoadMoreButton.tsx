import Image from "next/image";

import { ImageContainer, StyledButton } from "./LoadMoreButton.styled";
import { ButtonProp } from "@/types";

const LoadMoreButton = ({ onClick }: ButtonProp) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      Дивитися більше
      <ImageContainer>
        <Image
          src={`/icons/arrow-down.svg`}
          alt="down arrow"
          width={34}
          height={17}
        />
      </ImageContainer>
    </StyledButton>
  );
};

export default LoadMoreButton;

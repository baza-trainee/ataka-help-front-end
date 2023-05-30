import { FC } from "react";
import Image from "next/image";

import { ImageContainer, StyledButton } from "./LoadMoreButton.styled";

const LoadMoreButton: FC = () => {
  return (
    <StyledButton type="button">
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

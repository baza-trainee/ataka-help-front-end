import { FC } from "react";
import Image from "next/image";

import image from "../../assets/rectangle.png";
import { Title, Text, StyledDiv, StyledDivWrap } from "./About.styled";

const About: FC = () => {
  return (
    <section>
      <Title>Про проект</Title>
      <StyledDiv>
        <StyledDivWrap>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque lacus
            vestibulum sed aliquet orci tristique convallis vulputate. Imperdiet
            non rhoncus cursus mattis nec et vestibulum odio. Erat hendrerit
            vitae auctor diam cursus adipiscing donec pharetra. Imperdiet non
            tincidunt eu massa lacus vitae rutrum eu sodales. Phasellus placerat
            donec sed praesent. Imperdiet orci pellentesque duis lorem egestas
            phasellus. Commodo nunc eu non amet imperdiet nec volutpat massa.
            Quisque faucibus vehicula egestas neque ac. Ac donec mauris ipsum a
            faucibus commodo. Magna sed duis dignissim diam. Mattis ullamcorper
            massa donec sapien elit lorem turpis non lobortis. Risus purus sit
            sed diam tempus porttitor ut. Pretium varius pretium at ultrices
            tellus odio.
          </Text>
        </StyledDivWrap>
        <div>
          <Image src={image} alt=" Image" width={610} height={456} />
        </div>
      </StyledDiv>
    </section>
  );
};

export default About;

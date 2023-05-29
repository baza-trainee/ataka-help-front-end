import { FC } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { CarouselBox } from "./Slider.styled";
import { Section } from "../Common/Section.styled";

const Slider: FC = () => {
  return (
    <Section>
      {/* <div style={{ position: "relative" }}> */}
      <Carousel showStatus={false} showThumbs={false} showIndicators={false}>
        {["screen_0", "screen_1", "screen_2", "screen_3"].map(path => (
          <CarouselBox key={path}>
            <Image
              src={`/${path}.png`}
              alt="carusel-img"
              fill
              style={{ objectFit: "cover" }}
              priority={true}
            />
            {/* <h2 style={{ position: "absolute" }}>Знай, як захиститись</h2> */}
          </CarouselBox>
        ))}
      </Carousel>
      {/* </div> */}
    </Section>
  );
};

export default Slider;

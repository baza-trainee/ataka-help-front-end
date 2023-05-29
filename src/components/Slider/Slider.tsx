import { FC } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { CarouselBox, Title } from "./Slider.styled";
import { Section } from "../Common/Section.styled";

const Slider: FC = () => {
  return (
    <Section>
      <div style={{ position: "relative" }}>
        <Carousel showStatus={false} showThumbs={false} showIndicators={false}>
          {[1, 2, 3].map(path => (
            <CarouselBox key={path}>
              <Image
                src={`/${path}.jpg`}
                alt="carusel-img"
                fill
                style={{ objectFit: "cover" }}
                priority={true}
              />
              <Title>Знай, як захиститись</Title>
            </CarouselBox>
          ))}
        </Carousel>
      </div>
    </Section>
  );
};

export default Slider;

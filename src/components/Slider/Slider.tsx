import { FC } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  ArrowWrapper,
  CarouselBox,
  NextArrowButton,
  PrevArrowButton,
  Title,
} from "./Slider.styled";
import { Section } from "../Common/Section.styled";

const Slider: FC = () => {
  return (
    <Section>
      <div style={{ position: "relative" }}>
        <Carousel
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          renderArrowPrev={(
            clickHandler: () => void,
            hasPrev: boolean,
            label: string,
          ) => (
            <PrevArrowButton
              onClick={clickHandler}
              style={{ display: hasPrev ? "block" : "none" }}
            >
              <ArrowWrapper>
                <Image
                  src={"/icons/prev-arrow.svg"}
                  alt="arrow"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </ArrowWrapper>
            </PrevArrowButton>
          )}
          renderArrowNext={(
            clickHandler: () => void,
            hasNext: boolean,
            label: string,
          ) => (
            <NextArrowButton
              onClick={clickHandler}
              style={{ display: hasNext ? "block" : "none" }}
            >
              <ArrowWrapper>
                <Image
                  src={"/icons/next-arrow.svg"}
                  alt="arrow"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </ArrowWrapper>
            </NextArrowButton>
          )}
        >
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

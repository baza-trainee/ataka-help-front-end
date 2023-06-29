import { FC } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Sliders } from "@/types";
import {
  ArrowWrapper,
  CarouselBox,
  Gradient,
  NextArrowButton,
  PrevArrowButton,
  Title,
} from "./Slider.styled";
import { Section } from "../Common/Section.styled";

const Slider: FC<Sliders> = ({ slider }) => {
  return (
    <Section>
      <div style={{ position: "relative" }}>
        <Carousel
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          renderArrowPrev={(clickHandler: () => void, hasPrev: boolean) => (
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
          renderArrowNext={(clickHandler: () => void, hasNext: boolean) => (
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
          {slider?.map(({ id, thumb, title, alt }) => (
            <CarouselBox key={id}>
              <Gradient />
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${thumb}`}
                alt={alt}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
              <Title>{title}</Title>
            </CarouselBox>
          ))}
        </Carousel>
      </div>
    </Section>
  );
};

export default Slider;

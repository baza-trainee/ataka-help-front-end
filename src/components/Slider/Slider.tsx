import { FC } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { CarouselBox } from "./Slider.styled";

const Slider: FC = () => {
  return (
    <section>
      <Carousel showStatus={false} showThumbs={false} showIndicators={false}>
        {[1, 2, 3].map((path) => (
          <CarouselBox key={path}>
            <Image
              src={`/${path}.jpg`}
              alt="carusel-img"
              fill
              style={{ objectFit: "cover" }}
              priority={true}
            />
          </CarouselBox>
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;

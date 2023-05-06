import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const SimpleSlider: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Slider {...settings}>
        {[1, 2, 3].map((path) => (
          <div key={path}>
            <Image
              src={`/${path}.jpg`}
              alt="carusel-img"
              width="500"
              height="360"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SimpleSlider;

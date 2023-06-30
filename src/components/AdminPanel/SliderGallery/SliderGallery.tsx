import Image from "next/image";
import useSWR from "swr";

import { deleteSlide, getSlider } from "@/services";
import Loader from "@/components/Loader";
import { Gradient } from "@/components/Slider/Slider.styled";
import AdminButtonDelete from "../AdminButtonDelete";
import {
  Container,
  Icon,
  ImageWrapper,
  Item,
  List,
  StyledLink,
  Text,
  Title,
} from "./SliderGallery.styled";
import { toast } from "react-toastify";

const SliderGallery = () => {
  const { data, isLoading } = useSWR("slider", getSlider);

  if (isLoading) return <Loader />;

  const onClickHandler = async (id: string) => {
    try {
      await deleteSlide(id);
      toast.success("Слайд успішно видалено");
    } catch (error) {
      toast.error("Сталася помилка, спробуйте пізніше");
    }
  };

  return (
    <List>
      {data &&
        data.slider.map(({ id, thumb, title, alt }) => (
          <Item key={id}>
            <ImageWrapper>
              <Gradient />
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${thumb}`}
                alt={alt}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
              <Title>{title}</Title>

              <AdminButtonDelete
                title="слайд"
                onClick={() => onClickHandler(id)}
                fetcherName="slider"
              />
            </ImageWrapper>
          </Item>
        ))}

      <Container>
        <StyledLink href={"/admin/slider/form"}>
          <Icon />
          <Text>Додати слайд</Text>
        </StyledLink>
      </Container>
    </List>
  );
};

export default SliderGallery;

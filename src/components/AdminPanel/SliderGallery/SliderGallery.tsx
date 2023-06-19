import Image from "next/image";
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
import { Gradient } from "@/components/Slider/Slider.styled";
import AdminButtonDelete from "../AdminButtonDelete";

const SliderGallery = () => {
  return (
    <List>
      {[1, 2, 3].map(path => (
        <Item key={path}>
          <ImageWrapper>
            <Gradient />
            <Image
              src={`/${path}.png`}
              alt="carusel-img"
              fill
              style={{
                objectFit: "cover",
              }}
            />
            <Title>Знай, як захиститись</Title>

            <AdminButtonDelete />
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

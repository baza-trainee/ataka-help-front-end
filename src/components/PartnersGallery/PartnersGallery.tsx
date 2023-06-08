import Image from "next/image";
import React, { FC } from "react";

import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";

import { Section, Container, Title } from "../Common";
import {
  List,
  ImageContainer,
  ContentWrapper,
  Wrapper,
  ListItem,
} from "./PartnersGallery.styled";

const PartnersGallery: FC = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <ContentWrapper>
            <Title textAlignM="center">Наші партнери</Title>
            <List>
              <ListItem>
                <ImageContainer>
                  <Image
                    src={`/images/partner-logo.png`}
                    alt="Universe"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 320px) 100px, (min-width: 834px) 170px, (min-width: 1440px) 237px"
                  />
                </ImageContainer>
              </ListItem>
              <ListItem>
                <ImageContainer>
                  <Image
                    src={`/images/partner-logo.png`}
                    alt="Universe"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 320px) 100px, (min-width: 834px) 170px, (min-width: 1440px) 237px"
                  />
                </ImageContainer>
              </ListItem>
              <ListItem>
                <ImageContainer>
                  <Image
                    src={`/images/partner-logo.png`}
                    alt="Universe"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 320px) 100px, (min-width: 834px) 170px, (min-width: 1440px) 237px"
                  />
                </ImageContainer>
              </ListItem>
              <ListItem>
                <ImageContainer>
                  <Image
                    src={`/images/partner-logo.png`}
                    alt="Universe"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 320px) 100px, (min-width: 834px) 170px, (min-width: 1440px) 237px"
                  />
                </ImageContainer>
              </ListItem>
              <ListItem>
                <ImageContainer>
                  <Image
                    src={`/images/partner-logo.png`}
                    alt="Universe"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 320px) 100px, (min-width: 834px) 170px, (min-width: 1440px) 237px"
                  />
                </ImageContainer>
              </ListItem>
              <ListItem>
                <ImageContainer>
                  <Image
                    src={`/images/partner-logo.png`}
                    alt="Universe"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 320px) 100px, (min-width: 834px) 170px, (min-width: 1440px) 237px"
                  />
                </ImageContainer>
              </ListItem>
              <ListItem>
                <ImageContainer>
                  <Image
                    src={`/images/partner-logo.png`}
                    alt="Universe"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 320px) 100px, (min-width: 834px) 170px, (min-width: 1440px) 237px"
                  />
                </ImageContainer>
              </ListItem>
              <ListItem>
                <ImageContainer>
                  <Image
                    src={`/images/partner-logo.png`}
                    alt="Universe"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 320px) 100px, (min-width: 834px) 170px, (min-width: 1440px) 237px"
                  />
                </ImageContainer>
              </ListItem>
              <ListItem>
                <ImageContainer>
                  <Image
                    src={`/images/partner-logo.png`}
                    alt="Universe"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 320px) 100px, (min-width: 834px) 170px, (min-width: 1440px) 237px"
                  />
                </ImageContainer>
              </ListItem>
              <ListItem>
                <ImageContainer>
                  <Image
                    src={`/images/partner-logo.png`}
                    alt="Universe"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 320px) 100px, (min-width: 834px) 170px, (min-width: 1440px) 237px"
                  />
                </ImageContainer>
              </ListItem>
            </List>
          </ContentWrapper>
          <LoadMoreButton />
        </Wrapper>
      </Container>
    </Section>
  );
};

export default PartnersGallery;

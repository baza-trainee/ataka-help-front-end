import Image from "next/image";
import React, { FC, useState } from "react";

import LoadMoreButton from "../LoadMoreButton";
import { Section, Container, Title } from "../Common";
import { List, ImageContainer, ListItem } from "./PartnersGallery.styled";
import { Partners } from "@/types";

const PartnersGallery: FC<Partners> = ({ partners, total }) => {
  const [page, setPage] = useState(2);
  const [shownPartners, setShownPartners] = useState(partners?.slice(0, 10));

  const onClickHandler = () => {
    setPage(prev => prev + 1);
    setShownPartners(partners?.slice(0, page * 10));
  };

  return (
    <>
      {partners?.length > 0 && (
        <Section>
          <Container>
            <Title textAlignM="center">Наші партнери</Title>
            <List>
              {shownPartners.map(({ id, thumb, alt }) => (
                <ListItem key={id}>
                  <ImageContainer>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${thumb}`}
                      alt={alt}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(min-width: 320px) 100px, (min-width: 834px) 170px, (min-width: 1440px) 237px"
                    />
                  </ImageContainer>
                </ListItem>
              ))}
            </List>

            {total > 10 && total > shownPartners.length && (
              <LoadMoreButton onClick={onClickHandler} />
            )}
          </Container>
        </Section>
      )}
    </>
  );
};

export default PartnersGallery;

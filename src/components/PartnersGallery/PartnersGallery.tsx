import Image from 'next/image';
import { FC } from 'react';

import logo from '../../assets/rectangle.png';

import { List, Title } from './PartnersGallery.styled';

const PartnersGallery: FC = () => {
  return (
    <section>
      <Title>Наші партнери</Title>
      <List>
        <li>
          <Image src={logo} alt="logo" width={295} height={160} />
        </li>
        <li>
          <Image src={logo} alt="logo" width={295} height={160} />
        </li>
        <li>
          <Image src={logo} alt="logo" width={295} height={160} />
        </li>
        <li>
          <Image src={logo} alt="logo" width={295} height={160} />
        </li>
      </List>
    </section>
  );
};

export default PartnersGallery;

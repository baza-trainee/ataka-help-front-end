import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/logo.svg';

const Logo: FC = () => {
  return (
    <>
      <Link href='/'>
        <Image src={logo} width={132} height={52} alt='logo' />
      </Link>
    </>
  );
};

export default Logo;

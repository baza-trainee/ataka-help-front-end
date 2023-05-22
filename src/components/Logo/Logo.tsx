import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo: FC = () => {
  return (
    <>
      <Link href='/'>
        <Image src='/images/logo.png' width={132} height={52} alt='logo' />
      </Link>
    </>
  );
};

export default Logo;

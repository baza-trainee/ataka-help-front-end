import Image from "next/image";
import { FC } from "react";

import { IAdminButton } from "@/types";

export const AdminButton: FC<IAdminButton> = ({
  imgSrc,
  title,
  imgAlt,
  onClick,
  className,
}) => {
  return (
    <button onClick={onClick} className={className}>
      <Image src={imgSrc} alt={imgAlt} />
      {title}
    </button>
  );
};

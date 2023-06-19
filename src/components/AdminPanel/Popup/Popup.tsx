import { FC } from "react";
import { IPopup } from "@/types";

import closeIcon from "public/icons/close-black.svg";

import {
  WrapperPopup,
  PopupItem,
  PopupConatiner,
  ClosedIconWrapper,
  ClosedIcon,
  TitleH3,
  PopupGroupBtn,
  ButtonCancel,
  ButtonRemove,
} from "./Popup.styled";

const Popup: FC<IPopup> = ({ title, onClick, onClose }) => {
  return (
    <WrapperPopup>
      <PopupItem>
        <ClosedIconWrapper onClick={onClose}>
          <ClosedIcon fill src={closeIcon} alt="close icon" />
        </ClosedIconWrapper>
        <PopupConatiner>
          <TitleH3>{`Ви дійсно бажаєте видалити ${title}?`}</TitleH3>
          <PopupGroupBtn>
            <ButtonCancel type="button" onClick={onClose}>
              Відмінити
            </ButtonCancel>
            <ButtonRemove type="button" onClick={onClick}>
              Видалити
            </ButtonRemove>
          </PopupGroupBtn>
        </PopupConatiner>
      </PopupItem>
    </WrapperPopup>
  );
};

export default Popup;

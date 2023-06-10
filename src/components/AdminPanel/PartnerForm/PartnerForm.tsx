import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IPartnerForm } from "@/types";
import { FileScheme } from "@/schemas";
import { deletePartner, getPartners, sendPartner } from "@/services";
import {
  ErrorMessage,
  FileInput,
  FileInputWrapper,
  IconWrapper,
  StyledIcon,
  SubmitButton,
  Text,
  TextInput,
} from "../CommonFormStyles";

/* test */
const getPartnersList = async () => {
  try {
    const response: any = await getPartners();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const deleteOnePartner = async (id: string) => {
  try {
    const response = await deletePartner(id);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
/*=====================*/

const PartnerForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPartnerForm>({
    mode: "all",
    resolver: yupResolver(FileScheme),
    defaultValues: {
      thumb: [],
      alt: "",
    },
  });

  const onSubmitHandler: SubmitHandler<IPartnerForm> = async data => {
    const formData = new FormData();
    formData.append("thumb", data.thumb[0]);
    formData.append("alt", data.alt);
    try {
      const response = await sendPartner(formData);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {/* <hr />
      <p style={{ color: "red" }}>Отримати партнерів</p>

      <button onClick={getPartnersList}>Get logo</button>
      <button
        style={{ backgroundColor: "red", color: "white", marginLeft: "30px" }}
        onClick={() => deleteOnePartner("")}
      >
        Delete partner
      </button>
      <br />
      <hr />
      <hr /> */}

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <FileInputWrapper>
          <FileInput
            type="file"
            accept="image/*,.png,.jpg,.webp,.svg"
            {...register("thumb")}
          />
          <IconWrapper>
            <StyledIcon />
            <Text>Додати зображення</Text>
          </IconWrapper>
        </FileInputWrapper>
        {errors.thumb && <ErrorMessage>{errors.thumb.message}</ErrorMessage>}

        <TextInput
          type="text"
          {...register("alt")}
          placeholder="Опис зображення"
        />
        {errors.alt && <ErrorMessage>{errors.alt.message}</ErrorMessage>}

        <SubmitButton>Надіслати</SubmitButton>
      </form>
    </>
  );
};

export default PartnerForm;

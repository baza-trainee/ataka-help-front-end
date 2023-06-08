import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IPartnerForm } from "@/types";
import { FileScheme } from "@/schemas";
import { deletePartner, getPartners, sendPartner } from "@/services";

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
      <hr />
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
      <hr />
      <p style={{ color: "red" }}>Відправити логотип партнера:</p>
      <br />
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <p style={{ color: "red" }}>Завантажити файл</p>
        <input
          type="file"
          accept="image/*,.png,.jpg,.webp,.svg"
          {...register("thumb")}
        />
        {errors.thumb && <p>{errors.thumb.message}</p>}

        <p style={{ color: "red" }}>Ввести опис лого</p>
        <input type="text" {...register("alt")} />
        {errors.alt && <p>{errors.alt.message}</p>}

        <p style={{ color: "red" }}>Відправлення</p>

        <button>Submit</button>
      </form>
    </>
  );
};

export default PartnerForm;

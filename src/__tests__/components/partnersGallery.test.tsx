import { render, screen } from "@testing-library/react";
import PartnersGallery from "@/components/PartnersGallery";
import "@testing-library/jest-dom";
import { Global, ThemeProvider } from "@emotion/react";

import { theme } from "../../theme";
import { IPartner } from "@/types";
import { getPartners } from "@/services";

export const getStaticProps = async () => {
  const result = await getPartners();
  const res = result.partners;
  return res;
};

async function convertPromiseToArray(promise: Promise<IPartner[]>): Promise<IPartner[]> {
  const result = await promise;
  return result;
}

describe("partnersGallery", () => {
  it("renders appropriate title", () => {
    const partner: IPartner[] = [{
      id: "test",
      thumb: "https://ataka-help.vercel.app/_next/image?url=%2Fimages%2Fpartner-logo.png&w=128&q=75",
      alt: "test"
    }];
    const ress = getStaticProps();
    const promiseResult: Promise<IPartner[]> = ress;

    convertPromiseToArray(promiseResult)
    .then((partners: IPartner[]) => {
      // Use the 'partners' array here
      render(
        <ThemeProvider theme={theme}>
          <PartnersGallery partners={partners} total={1}  />
        </ThemeProvider>,
      );
      console.log(partners);
      const header = screen.getByTestId("Partners");

      expect(header).toBeInTheDocument();
      expect(header).toHaveTextContent("Наші партнери");
    })

  });
  it("renders logo gallery", () => {
    const partner: IPartner[] = [{
      id: "test",
      thumb: "https://ataka-help.vercel.app/_next/image?url=%2Fimages%2Fpartner-logo.png&w=128&q=75",
      alt: "test"
    }];
    const ress = getStaticProps();
    const promiseResult: Promise<IPartner[]> = ress;

    convertPromiseToArray(promiseResult)
    .then((partners: IPartner[]) => {
      // Use the 'partners' array here
      render(
        <ThemeProvider theme={theme}>
          <PartnersGallery partners={partners} total={1}  />
        </ThemeProvider>,
      );
      console.log(partners);
      const header = screen.getByTestId("Image");

      expect(header).toBeInTheDocument();
    })
  });
});

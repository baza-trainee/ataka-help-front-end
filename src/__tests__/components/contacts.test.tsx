import { getNodeText, render, screen } from "@testing-library/react";
import PartnersGallery from "@/components/About";
import "@testing-library/jest-dom";
import { Global, ThemeProvider } from "@emotion/react";

import { theme } from "../../theme";
import Contacts from "@/components/Contacts/Contacts";

describe("aboutProject", () => {
  it("renders appropriate title", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts />
      </ThemeProvider>,
    );
    const header = screen.getByTestId("ContactHeading");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Контакти");
  });
  it("renders appropriate subtitle", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts />
      </ThemeProvider>,
    );
    const header = screen.getByTestId("ContactSubtitle1");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Телефони");
  });
  it("renders appropriate subtitle", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts />
      </ThemeProvider>,
    );
    const header = screen.getByTestId("ContactSubtitle2");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Електронна пошта");
  });
  it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts />
      </ThemeProvider>,
    );
    const paragraph = screen.getByTestId("ContactInfo");

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent("info@ataka-help.tech");
  });
  it("renders appropriate image", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts />
      </ThemeProvider>,
    );
    const image = screen.getByAltText("Universe");

    expect(image).toBeInTheDocument();
  });
  it("renders appropriate image", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts />
      </ThemeProvider>,
    );
    const image = screen.getAllByAltText("Phone icon");

    expect(image[0]).toBeInTheDocument();
    expect(image[1]).toBeInTheDocument();
  });
  it("renders appropriate image", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts />
      </ThemeProvider>,
    );
    const image = screen.getByAltText("Email icon");

    expect(image).toBeInTheDocument();
  });
  it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts />
      </ThemeProvider>,
    );
    const paragraph = screen.getAllByTestId("Phonenumbers"); 

    expect(paragraph[0]).toBeInTheDocument();
    expect(paragraph[0]).toHaveTextContent("+38 093 802 7214");
    expect(paragraph[1]).toBeInTheDocument();
    expect(paragraph[1]).toHaveTextContent("+38 063 628 6630");
  });
  
});

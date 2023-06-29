import { getNodeText, render, screen } from "@testing-library/react";
import PartnersGallery from "@/components/About";
import "@testing-library/jest-dom";
import { Global, ThemeProvider } from "@emotion/react";

import { theme } from "../../theme";
import Contacts from "@/components/Contacts/Contacts";

describe("contacts", () => {
  it("renders appropriate title", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
        }} />
      </ThemeProvider>,
    );
    const header = screen.getByTestId("ContactHeading");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Контакти");
  });
  it("renders appropriate subtitle", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
        }} />
      </ThemeProvider>,
    );
    const header = screen.getByTestId("ContactSubtitle1");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Телефони");
  });
  it("renders appropriate subtitle", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
        }} />
      </ThemeProvider>,
    );
    const header = screen.getByTestId("ContactSubtitle2");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Електронна пошта");
  });
  it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
        }} />
      </ThemeProvider>,
    );
    const paragraph = screen.getByTestId("ContactInfo");

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent("info@ataka-help.tech");
  });
  it("renders appropriate image", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
        }} />
      </ThemeProvider>,
    );
    const image = screen.getByAltText("Universe");

    expect(image).toBeInTheDocument();
  });
  it("renders appropriate image", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
        }} />
      </ThemeProvider>,
    );
    const image = screen.getAllByAltText("Phone icon");

    expect(image[0]).toBeInTheDocument();
    expect(image[1]).toBeInTheDocument();
  });
  it("renders appropriate image", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
        }} />
      </ThemeProvider>,
    );
    const image = screen.getByAltText("Email icon");

    expect(image).toBeInTheDocument();
  });
  it("renders appropriate phone", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
        }} />
      </ThemeProvider>,
    );
    const phone = screen.getByTestId("Phonenumber1"); 

    expect(phone).toBeInTheDocument();
    expect(phone).toHaveTextContent("+38 093 802 7214");
  });
  it("renders appropriate phone", () => {
    render(
      <ThemeProvider theme={theme}>
        <Contacts contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
        }} />
      </ThemeProvider>,
    );
    const phone = screen.getByTestId("Phonenumber2"); 

    expect(phone).toBeInTheDocument();
    expect(phone).toHaveTextContent("+38 063 628 6630");
  });
  
});

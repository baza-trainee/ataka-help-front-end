import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Global, ThemeProvider } from "@emotion/react";

import { theme } from "../../theme";
import Footer from "@/components/Footer/Footer";


describe("footer", () => {
  it("renders appropriate image", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
            }} report={{
                file: ""
            }} />
      </ThemeProvider>
    );
    const image = screen.getByAltText("logo");

    expect(image).toBeInTheDocument();
 });
 it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
            }} report={{
                file: ""
            }} />
      </ThemeProvider>
    );
    const header = screen.getByTestId("TextBox1");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Інциденти");
 });
 it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
            }} report={{
                file: ""
            }} />
      </ThemeProvider>
    );
    const header = screen.getByTestId("TextBox2");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Про проєкт");
 });
 it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
            }} report={{
                file: ""
            }} />
      </ThemeProvider>
    );
    const header = screen.getByTestId("TextBox3");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Політика конфіденційності");
 });
 it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
            }} report={{
                file: ""
            }} />
      </ThemeProvider>
    );
    const header = screen.getByTestId("TextBox4");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Правила користування сайтом");
 });
 it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
            }} report={{
                file: ""
            }} />
      </ThemeProvider>
    );
    const header = screen.getByTestId("TextBox5");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Розробка BazaTraineeUkraine 2023 \u00a9 Усі права захищені");
 });
 it("renders appropriate image", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
            }} report={{
                file: ""
            }} />
      </ThemeProvider>
    );
    const image = screen.getAllByAltText("phoneIcon");

    expect(image[0]).toBeInTheDocument();
 });
 it("renders appropriate image", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
            }} report={{
                file: ""
            }} />
      </ThemeProvider>
    );
    const image = screen.getAllByAltText("phoneIcon");

    expect(image[1]).toBeInTheDocument();
 });
 it("renders appropriate image", () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer contacts={{
          phone1: "+38 093 802 7214",
          phone2: "+38 063 628 6630",
          email: "info@ataka-help.tech"
            }} report={{
                file: ""
            }} />
      </ThemeProvider>
    );
    const image = screen.getByAltText("emailIcon");

    expect(image).toBeInTheDocument();
 });
});

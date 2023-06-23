import { render, screen } from "@testing-library/react";
import PartnersGallery from "@/components/About";
import "@testing-library/jest-dom";
import { Global, ThemeProvider } from "@emotion/react";

import { theme } from "../../theme";
import About from "@/components/About/About";

describe("aboutProject", () => {
  it("renders appropriate title", () => {
    render(
      <ThemeProvider theme={theme}>
        <About />
      </ThemeProvider>,
    );
    const header = screen.getByRole("heading");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Про проєкт");
  });
  it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <About />
      </ThemeProvider>,
    );
    const paragraph = screen.getByTestId("TextBox1");

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent("Шахрайство в мережі існує стільки ж, скільки сама мережа. При цьому жертвами шахраїв можуть стати як новачки, так і досвідчені користувачі.");
  });
  it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <About />
      </ThemeProvider>,
    );
    const paragraph = screen.getByTestId("TextBox2");

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent("Боротися з дрібним шахрайством дуже важко, оскільки втрати як правило відчутні, але некритичні для жертви. Разом з цим збитки учасників ринку-користувачів платіжних карток в 2022 році склали понад 480 млн.грн.");
  });
  it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <About />
      </ThemeProvider>,
    );
    const paragraph = screen.getByTestId("TextBox3");

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent("Середня сума однієї незаконної операції становила 2200 грн.");
  });
  
});

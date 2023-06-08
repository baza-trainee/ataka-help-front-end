import { render, screen } from "@testing-library/react";
import PartnersGallery from "@/components/PartnersGallery";
import "@testing-library/jest-dom";
import { Global, ThemeProvider } from "@emotion/react";

import { theme } from "../../theme";

describe("partnersGallery", () => {
  it("renders appropriate title", () => {
    render(
      <ThemeProvider theme={theme}>
        <PartnersGallery />
      </ThemeProvider>,
    );
    const header = screen.getByRole("heading");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Наші партнери");
  });
  it("renders logo gallery", () => {
    render(
      <ThemeProvider theme={theme}>
        <PartnersGallery />
      </ThemeProvider>,
    );
    const partnersList = screen.getByRole("list");

    expect(partnersList).toBeInTheDocument();
  });
  it("renders button", () => {
    render(
      <ThemeProvider theme={theme}>
        <PartnersGallery />
      </ThemeProvider>,
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});

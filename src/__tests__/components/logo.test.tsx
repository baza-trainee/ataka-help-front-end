import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Global, ThemeProvider } from "@emotion/react";

import { theme } from "../../theme";
import Logo from "@/components/Logo/Logo";


describe("logo", () => {
  it("renders appropriate image", () => {
    render(
      <ThemeProvider theme={theme}>
        <Logo />
      </ThemeProvider>,
    );
    const image = screen.getByAltText("logo");

    expect(image).toBeInTheDocument();
  });
});

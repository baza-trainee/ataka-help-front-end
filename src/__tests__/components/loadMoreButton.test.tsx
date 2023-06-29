import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Global, ThemeProvider } from "@emotion/react";

import { theme } from "../../theme";
import LoadMoreButton from "@/components/LoadMoreButton/LoadMoreButton";


describe("loadMoreButton", () => {
  it("renders appropriate image", () => {
    render(
      <ThemeProvider theme={theme}>
        <LoadMoreButton />
      </ThemeProvider>,
    );
    const image = screen.getByAltText("down arrow");

    expect(image).toBeInTheDocument();
  });
});

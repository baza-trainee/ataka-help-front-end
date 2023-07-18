import { getNodeText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Global, ThemeProvider } from "@emotion/react";

import { theme } from "../../theme";
import PaymentButton from "@/components/PaymentButton/PaymentButton";


describe("paymentButton", () => {
  it("renders appropriate title", () => {
    render(
      <ThemeProvider theme={theme}>
        <PaymentButton />
      </ThemeProvider>,
    );
    const header = screen.getByTestId("PaymentButton");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Підтримати проєкт");
  });

  
});

import { render, screen } from "@testing-library/react";
import PartnersGallery from "@/components/About";
import "@testing-library/jest-dom";
import { Global, ThemeProvider } from "@emotion/react";

import { theme } from "../../theme";
import FeedbackForm from "@/components/FeedbackForm/FeedbackForm";


describe("feedbackForm", () => {
  it("renders appropriate title", () => {
    render(
      <ThemeProvider theme={theme}>
        <FeedbackForm />
      </ThemeProvider>,
    );
    const header = screen.getByRole("heading");

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Зворотний зв`язок");
  });
  it("renders appropriate subtitle", () => {
    render(
      <ThemeProvider theme={theme}>
        <FeedbackForm />
      </ThemeProvider>,
    );
    const label = screen.getByTestId("NameLabel");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent("Ім`я*");
  });
  it("renders appropriate subtitle", () => {
    render(
      <ThemeProvider theme={theme}>
        <FeedbackForm />
      </ThemeProvider>,
    );
    const label = screen.getByTestId("EmailLabel");
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent("Email*");
  });
  it("renders appropriate input", () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
          <FeedbackForm />
        </ThemeProvider>,
      );
 
    const inputEl = container.querySelector(`input[type="name"]`);
    expect(inputEl).toBeInTheDocument();

  });
  it("renders appropriate input", () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
          <FeedbackForm />
        </ThemeProvider>,
      );
 
    const inputEl = container.querySelector(`input[type="email"]`);
    expect(inputEl).toBeInTheDocument();

  });
  it("renders appropriate subtitle", () => {
    render(
      <ThemeProvider theme={theme}>
        <FeedbackForm />
      </ThemeProvider>,
    );
    const label = screen.getByTestId("MessageLabel");

    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent("Повідомлення*");
  });
  it("renders appropriate input", () => {
    render(
      <ThemeProvider theme={theme}>
        <FeedbackForm />
      </ThemeProvider>,
    );
    const inputEl = screen.getByTestId("MessageInput");
    expect(inputEl).toBeInTheDocument();
  });
  it("renders appropriate button", () => {
    const { container } = render(
        <ThemeProvider theme={theme}>
          <FeedbackForm />
        </ThemeProvider>,
      );
 
    const buttonEl = container.querySelector(`button[type="submit"]`);
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveTextContent("Надіслати");

  });

});

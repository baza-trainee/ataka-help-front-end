import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Global, ThemeProvider } from "@emotion/react";

import { theme } from "../../theme";
import Donate from "@/components/Donate/Donate";


describe("donate", () => {
  it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <Donate />
      </ThemeProvider>,
    );
    const paragraph = screen.getByTestId("TextBox1");

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent("Проєкт Ataka Help створено для інформування про найбільш поширені способи обману населення через інтернет. Ми зібрали для вас інциденти, які найчастіше трапляються з українцями, а також прості поради, як не стати легкою здобиччю аферистів.");
  });
  it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <Donate />
      </ThemeProvider>,
    );
    const paragraph = screen.getByTestId("TextBox2");

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent("Прості дієві способи захисту зроблять вас менш вразливими до атак і допоможуть зберегти своє від нападу.");
  });
});

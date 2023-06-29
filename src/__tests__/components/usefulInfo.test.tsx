import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Global, ThemeProvider } from "@emotion/react";

import { theme } from "../../theme";
import UsefulInformation from "@/components/UsefulInformation";


describe("usefulInfo", () => {
  it("renders appropriate title", () => {
    render(
      <ThemeProvider theme={theme}>
        <UsefulInformation title={""} text1={""} text2={""} />
      </ThemeProvider>,
    );
    const header = screen.getAllByTestId("TextBox1");

    expect(header[0]).toBeInTheDocument();
    expect(header[0]).toHaveTextContent("Це спосіб, який гарантує, що доступ до ваших даних маєте тільки ви, навіть якщо ваш пароль попав до когось іншого.");
  });
  it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <UsefulInformation title={""} text1={""} text2={""} />
      </ThemeProvider>,
    );
    const paragraph = screen.getAllByTestId("TextBox2");

    expect(paragraph[0]).toBeInTheDocument();
    expect(paragraph[0]).toHaveTextContent("Аутентифікація - це підтвердження, що ви -це саме ви. Перший фактор підтвердження - пароль, який ви встановлюєте до електронної пошти. Другий - найчастіше це СМС, що приходить на запит на ваш номер телефона.");
  });
  it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <UsefulInformation title={""} text1={""} text2={""} />
      </ThemeProvider>,
    );
    const paragraph = screen.getAllByTestId("TextBox3");

    expect(paragraph[0]).toBeInTheDocument();
    expect(paragraph[0]).toHaveTextContent("Оскільки два фактори захисту розведені по різних гаджетах, це вас захищає двічі надійніше.");
  });
  it("renders appropriate title", () => {
    render(
      <ThemeProvider theme={theme}>
        <UsefulInformation title={""} text1={""} text2={""} />
      </ThemeProvider>,
    );
    const header = screen.getAllByTestId("TextBox1");

    expect(header[1]).toBeInTheDocument();
    expect(header[1]).toHaveTextContent("Більшість цифрових продуктів - пошти або банківського сервісу пропонують вам встановити двофакторну аутентифікацію, коли ви реєструєтесь в сервісі.");
  });
  it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <UsefulInformation title={""} text1={""} text2={""} />
      </ThemeProvider>,
    );
    const paragraph = screen.getAllByTestId("TextBox2");

    expect(paragraph[1]).toBeInTheDocument();
    expect(paragraph[1]).toHaveTextContent("Не нехтуйте цим способом, особливо коли йдеться про банківські дані - так ви максимально захистите себе від крадіжки коштів.");
  });
  it("renders appropriate text", () => {
    render(
      <ThemeProvider theme={theme}>
        <UsefulInformation title={""} text1={""} text2={""} />
      </ThemeProvider>,
    );
    const paragraph = screen.getAllByTestId("TextBox3");

    expect(paragraph[1]).toBeInTheDocument();
    expect(paragraph[1]).toHaveTextContent("Існує близько шести способів аутентифікації крім названих - також відбиток пальця, кодове слово та інші.");
  });
  it("renders appropriate image", () => {
    render(
      <ThemeProvider theme={theme}>
        <UsefulInformation title={""} text1={""} text2={""} />
      </ThemeProvider>,
    );
    const image = screen.getByAltText("UsefulInformation1");

    expect(image).toBeInTheDocument();
  });
  it("renders appropriate image", () => {
    render(
      <ThemeProvider theme={theme}>
        <UsefulInformation title={""} text1={""} text2={""} />
      </ThemeProvider>,
    );
    const image = screen.getByAltText("UsefulInformation2");

    expect(image).toBeInTheDocument();
  });
});

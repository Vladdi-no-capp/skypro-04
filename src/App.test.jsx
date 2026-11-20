import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import App from "./App";

function renderApp(path = "/") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("authentication flow", () => {
  test("redirects a guest to login and opens the cards after submit", async () => {
    const user = userEvent.setup();

    renderApp("/");

    expect(screen.getByRole("heading", { name: "Вход" })).toBeInTheDocument();

    await user.type(screen.getByLabelText("Email"), "student@example.com");
    await user.type(screen.getByLabelText("Пароль"), "password");
    await user.click(screen.getByRole("button", { name: "Войти" }));

    expect(
      screen.getByRole("heading", { name: "Мои карточки" }),
    ).toBeInTheDocument();
  });

  test("register form returns the user to login", async () => {
    const user = userEvent.setup();

    renderApp("/register");

    await user.type(screen.getByLabelText("Имя"), "Student");
    await user.type(screen.getByLabelText("Email"), "student@example.com");
    await user.type(screen.getByLabelText("Пароль"), "password");
    await user.click(screen.getByRole("button", { name: "Создать аккаунт" }));

    expect(screen.getByRole("heading", { name: "Вход" })).toBeInTheDocument();
  });

  test("cancel keeps the session and confirm signs the user out", async () => {
    const user = userEvent.setup();

    renderApp("/login");
    await user.type(screen.getByLabelText("Email"), "student@example.com");
    await user.type(screen.getByLabelText("Пароль"), "password");
    await user.click(screen.getByRole("button", { name: "Войти" }));

    await user.click(screen.getByRole("link", { name: "Выйти" }));
    expect(
      screen.getByRole("heading", { name: "Выйти из аккаунта?" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("link", { name: "Остаться" }));
    expect(
      screen.getByRole("heading", { name: "Мои карточки" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("link", { name: "Выйти" }));
    await user.click(screen.getByRole("button", { name: "Да, выйти" }));

    expect(screen.getByRole("heading", { name: "Вход" })).toBeInTheDocument();
  });

  test("opens cards 1 and 42 from the catalog and returns back", async () => {
    const user = userEvent.setup();

    renderApp("/login");
    await user.type(screen.getByLabelText("Email"), "student@example.com");
    await user.type(screen.getByLabelText("Пароль"), "password");
    await user.click(screen.getByRole("button", { name: "Войти" }));

    await user.click(screen.getByRole("link", { name: "Открыть карточку hello" }));
    expect(
      screen.getByRole("heading", { name: "Карточка #1" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("link", { name: "Закрыть карточку" }));
    await user.click(
      screen.getByRole("link", { name: "Открыть карточку practice" }),
    );
    expect(
      screen.getByRole("heading", { name: "Карточка #42" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Сохранить" }));
    expect(
      screen.getByRole("heading", { name: "Мои карточки" }),
    ).toBeInTheDocument();
  });

  test("opens and submits the new card form", async () => {
    const user = userEvent.setup();

    renderApp("/login");
    await user.type(screen.getByLabelText("Email"), "student@example.com");
    await user.type(screen.getByLabelText("Пароль"), "password");
    await user.click(screen.getByRole("button", { name: "Войти" }));
    await user.click(screen.getByRole("link", { name: "+ Новая карточка" }));

    expect(
      screen.getByRole("heading", { name: "Новая карточка" }),
    ).toBeInTheDocument();

    await user.type(screen.getByLabelText("Английское слово"), "discover");
    await user.type(screen.getByLabelText("Перевод"), "открывать");
    await user.click(screen.getByRole("button", { name: "Добавить карточку" }));

    expect(
      screen.getByRole("heading", { name: "Мои карточки" }),
    ).toBeInTheDocument();
  });
});

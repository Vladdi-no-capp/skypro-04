import { render, screen } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { describe, expect, test, vi } from "vitest";
import AppRoutes from "./AppRoutes";

function renderRoute(path, isAuth) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes isAuth={isAuth} setIsAuth={vi.fn()} />
      <LocationProbe />
    </MemoryRouter>,
  );
}

function LocationProbe() {
  const location = useLocation();
  return <output data-testid="location">{location.pathname}</output>;
}

describe("application routes", () => {
  test.each(["/", "/new-card", "/card/1", "/exit"])(
    "protects %s from guests",
    (path) => {
      renderRoute(path, false);
      expect(screen.getByRole("heading", { name: "Вход" })).toBeInTheDocument();
      expect(screen.getByTestId("location")).toHaveTextContent("/login");
    },
  );

  test("shows the id and data for card 42", () => {
    renderRoute("/card/42", true);

    expect(screen.getByRole("heading", { name: "Карточка #42" })).toBeInTheDocument();
    expect(screen.getByDisplayValue("practice")).toBeInTheDocument();
    expect(screen.getByDisplayValue("практика")).toBeInTheDocument();
  });

  test("shows the requested id when a card is missing", () => {
    renderRoute("/card/999", true);

    expect(screen.getByRole("heading", { name: "Карточка #999" })).toBeInTheDocument();
    expect(screen.getByText("Карточка не найдена")).toBeInTheDocument();
  });

  test("shows a 404 page for an unknown route", () => {
    renderRoute("/something-else", false);

    expect(
      screen.getByRole("heading", { name: "Страница не найдена" }),
    ).toBeInTheDocument();
  });
});

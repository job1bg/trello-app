import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("renders the Trello header", () => {
  render(<Header />);
  expect(screen.getByText("Trello")).toBeInTheDocument();
});

test("renders the more button", () => {
  render(<Header />);
  const button = screen.getByRole("button", { name: "..." });
  expect(button).toBeInTheDocument();
});

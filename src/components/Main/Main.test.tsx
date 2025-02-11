import { render, screen } from "@testing-library/react";
import { Main } from "./Main";

describe("Main component", () => {
  test("renders the board header", () => {
    render(<Main />);
    expect(screen.getByText("Board")).toBeInTheDocument();
  });
});

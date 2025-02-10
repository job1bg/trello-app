// import { render, screen, fireEvent } from "@testing-library/react";
// import { Sidebar } from "./Sidebar";

// describe("Sidebar component", () => {
// test("renders workspace and boards section", () => {
//   render(<Sidebar />);
//   expect(screen.getByText("Workspace")).toBeInTheDocument();
//   expect(screen.getByText("Boards")).toBeInTheDocument();
// });
// test("renders in expanded state by default", () => {
//   render(<Sidebar />);
//   expect(screen.getByText("Workspace")).toBeInTheDocument();
//   expect(
//     screen.getByRole("button", { name: /chevron-left/i })
//   ).toBeInTheDocument();
// });
// test("collapses when clicking the ChevronLeft button", () => {
//   render(<Sidebar />);
//   const collapseButton = screen.getByRole("button", {
//     name: /chevron-left/i,
//   });
//   fireEvent.click(collapseButton);
//   expect(screen.queryByText("Workspace")).not.toBeInTheDocument();
//   expect(
//     screen.getByRole("button", { name: /chevron-right/i })
//   ).toBeInTheDocument();
// });
// test("expands when clicking the ChevronRight button", () => {
//   render(<Sidebar />);
//   const collapseButton = screen.getByRole("button", {
//     name: /chevron-left/i,
//   });
//   fireEvent.click(collapseButton);
//   const expandButton = screen.getByRole("button", { name: /chevron-right/i });
//   fireEvent.click(expandButton);
//   expect(screen.getByText("Workspace")).toBeInTheDocument();
// });
// });

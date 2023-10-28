import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Router from "../components/Router";

describe("App component", () => {
  it("Renders correctly", () => {
    render(<App />, { wrapper: Router });
    const home = screen.getByText(/I am Home/i);
    expect(home).toBeInTheDocument();
  });

  it("Renders shop when clicked on shop link", async () => {
    render(<App/>, {wrapper: Router});
    const user = userEvent.setup()
    const link = screen.getByRole("link", {name: "Shop"})
    
    await user.click(link);

    expect(screen.getByText(/This is shop/i)).toBeInTheDocument()
  })

  it("Render cart when clicked on cart link", async () => {
    render(<App/>, {wrapper: Router});
    const user = userEvent.setup()
    const link = screen.getByRole("link", {name: "Cart"})

    await user.click(link)

    expect(screen.getByText(/No item in cart yet/i)).toBeInTheDocument()
  })

  it("Render home when clicked on home link from another path", async () => {
    render(<App/>, {wrapper: Router});
    const user = userEvent.setup()
    const linkOne = screen.getByRole("link", {name: "Home"})
    const linkTwo = screen.getByRole("link", {name: "Cart"})


    await user.click(linkTwo)
    await user.click(linkOne)
    expect(screen.getByText(/I am Home/i)).toBeInTheDocument()
  })
});

import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Router from "../components/Router";

describe("App component", () => {
  it.only("Renders correctly", async () => {
    render(<App />, { wrapper: Router });
    const home = await screen.getByText(/I am Home/i).toBeInTheDocument();
    expect(home).toBeInTheDocument();
  });

  it("Renders shop when clicked on shop link", async () => {
    render(<App />, { wrapper: Router });
    const user = userEvent.setup();

    await waitFor(() =>
      expect(screen.getByText(/I am Home/i)).toBeInTheDocument()
    );

    const link = screen.getByRole("link", { name: "Shop" });
    await user.click(link);
    expect(screen.getByText("title1")).toBeInTheDocument();
  });

  it("Render cart when clicked on cart link", async () => {
    render(<App />, { wrapper: Router });
    const user = userEvent.setup();
    const link = screen.getByRole("link", { name: "Cart" });

    await user.click(link);

    expect(screen.getByText(/No item in cart yet/i)).toBeInTheDocument();
  });

  it("Render home when clicked on home link from another path", async () => {
    render(<App />, { wrapper: Router });
    const user = userEvent.setup();
    const linkOne = screen.getByRole("link", { name: "Home" });
    const linkTwo = screen.getByRole("link", { name: "Cart" });

    await user.click(linkTwo);
    await user.click(linkOne);
    expect(screen.getByText(/I am Home/i)).toBeInTheDocument();
  });
});

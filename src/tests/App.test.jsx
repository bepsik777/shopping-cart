import { describe, it, expect, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Router from "../components/Router";
import { server } from "../mocks/server";
import { HttpResponse, http } from "msw";

afterEach(() => {
  server.resetHandlers();
});

describe("App component", () => {
  it("Renders correctly", async () => {
    render(<App />, { wrapper: Router });
    const home = await screen.findByText(/I am Home/i);
    screen.debug();
    expect(home).toBeInTheDocument();
  });

  it("Renders shop when clicked on shop link", async () => {
    render(<App />, { wrapper: Router });
    const user = userEvent.setup();

    const link = screen.getByRole("link", { name: "Shop" });
    await user.click(link);
    const buttons = screen.getAllByRole("button", { name: "Add to cart" });
    expect(buttons[0]).toBeInTheDocument();
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

  it("Render error page when there is an error", async () => {
    server.use(
      http.get("https://fakestoreapi.com/products", () => {
        console.log("captured it");
        const resp = new HttpResponse(null, { status: 400 });
        return resp;
      })
    );
    render(<App />, { wrapper: Router });
    const error = await waitFor(() => screen.getByText(/Oops, there have been an error/i))
    screen.debug();
    expect(error).toBeInTheDocument();
  });
});

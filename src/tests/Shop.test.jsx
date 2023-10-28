import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Shop from "../components/Shop";
import mockData from "./MockData";
import * as rrd from "react-router-dom";

describe("Shop component", () => {
  vi.mock("react-router-dom");
  const mockSetCart = vi.fn();

  it("Renders items carts when they are fetched", () => {
    rrd.useOutletContext.mockReturnValue([mockData, null, mockSetCart]);

    render(<Shop />);
    expect(screen.getByText(/title1/i)).toBeInTheDocument();
  });

  it("calls the setCart function when button clicked", async () => {
    const user = userEvent.setup();
    rrd.useOutletContext.mockReturnValue([mockData, null, mockSetCart]);

    render(<Shop />);
    const allButtons = screen.getAllByText("Add to cart");

    await user.click(allButtons[0]);
    expect(mockSetCart).toHaveBeenCalled();
  });
});

import { describe, it, expect, vi} from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart";
import * as rrd from 'react-router-dom';
import mockData from "./MockData";

vi.mock("react-router-dom")



describe("Cart component", () => {
  it("renders empty message when no items in cart", () => {
    rrd.useOutletContext.mockReturnValue([null, null, null, [], null])
    render(<Cart />);

    expect(screen.getByText(/No item in cart yet/i)).toBeInTheDocument();
    screen.debug();
  });

  it("render checkout button when there are some items in list", () => {
    rrd.useOutletContext.mockReturnValue([null, null, null, mockData, null])

    render(<Cart />);

    expect(screen.getByText(/checkout/i)).toBeInTheDocument();
  });
});

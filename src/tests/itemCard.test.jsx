import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ItemCard from "../components/ItemCard";
import mockData from "./MockData";
import * as rrd from "react-router-dom";

describe("item card component", () => {
  vi.mock("react-router-dom");
  const mockedSetCart = vi.fn();

  it("renders card component", () => {
    rrd.useOutletContext.mockReturnValue([mockData, null, mockedSetCart]);
    rrd.useParams.mockReturnValue({item: 1});
    render(<ItemCard />);
    screen.debug()
    expect(screen.getByText("title1")).toBeInTheDocument();
  });

  it("calls setCart when button clicked", async () => {
    rrd.useOutletContext.mockReturnValue([mockData, null, mockedSetCart]);
    rrd.useLoaderData.mockReturnValue(mockData[0]);
    const user = userEvent.setup()

    render(<ItemCard/>)
    const button = screen.getByText("Add to cart")
    await user.click(button)

    expect(mockedSetCart).toHaveBeenCalled()
  })
});

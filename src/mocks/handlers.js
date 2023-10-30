import { http } from "msw";

export const handlers = [
  http.get("https://fakestoreapi.com/products", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "title1",
          description: "ble ble ble",
          price: 10,
        },
        {
          id: 2,
          title: "title2",
          description: "ble ble ble",
          price: 10,
        },
        {
          id: 3,
          title: "title3",
          description: "ble ble ble",
          price: 10,
        },
        {
          id: 4,
          title: "title4",
          description: "ble ble ble",
          price: 10,
        },
      ])
    );
  }),
];

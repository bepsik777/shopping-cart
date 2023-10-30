import { HttpResponse, http } from "msw";

// export const handlers = [
//   http.get("https://fakestoreapi.com/products", (req, res, ctx) => {
//     console.log('Captured a "GET /posts" request')
//     return res(
//       ctx.status(200),
//       ctx.json([
//         {
//           id: 1,
//           title: "title1",
//           description: "ble ble ble",
//           price: 10,
//         },
//         {
//           id: 2,
//           title: "title2",
//           description: "ble ble ble",
//           price: 10,
//         },
//         {
//           id: 3,
//           title: "title3",
//           description: "ble ble ble",
//           price: 10,
//         },
//         {
//           id: 4,
//           title: "title4",
//           description: "ble ble ble",
//           price: 10,
//         },
//       ])
//     );
//   }),
// ];

export const handlers = [
    http.get("https://fakestoreapi.com/products", () => {
        console.log('Captured a "GET /posts" request')
        return HttpResponse.json([
                    {
                      id: 1,
                      title: "title1",
                      description: "ble ble ble",
                      price: 10,
                      image: 'some/mock/url'
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
    })
]
import { rest } from "msw";

export const handlers = [
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res(
      ctx.json({
        data: [
          {
            name: "Mint Chip",
            imagePath: "https://placekitten.com/600/420"
          },
          {
            name: "Chocolate",
            imagePath: "https://placekitten.com/720/540"
          },
          {
            name: "Vanilla",
            image: "https://placekitten.com/640/480"
          }
        ]
      })
    )
  }),
  rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
    return res(
      ctx.json({
        data: [
          {
            name: "Sprinkles",
            imagePath: "https://placekitten.com/600/420"
          },
          {
            name: "Chocolate Chips",
            imagePath: "https://placekitten.com/720/540"
          },
          {
            name: "Nuts",
            image: "https://placekitten.com/640/480"
          }
        ]
      })
    )
  }),
];



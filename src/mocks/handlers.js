import { rest } from "msw";

export const handlers = [
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res(
      ctx.json({
        data: [
          {
            id: 1,
            title: "Scoop 1",
            description: "This is the first scoop",
            image: "https://placekitten.com/600/420"
          },
          {
            id: 2,
            title: "Scoop 2",
            description: "This is the second scoop",
            image: "https://placekitten.com/720/540"
          },
          {
            id: 3,
            title: "Scoop 3",
            description: "This is the third scoop",
            image: "https://placekitten.com/640/480"
          }
        ]
      })
    )
  })
];



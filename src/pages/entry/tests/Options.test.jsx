import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Options from "../Options";

test('displays image for each scoop option from server', async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(3);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.getAttribute("alt"));
  expect(altText).toEqual(["Mint Chip scoop", "Chocolate scoop", "Vanilla scoop"]);
});

test('displays image for each topping option from server', async () => {
  render(<Options optionType="toppings" />);

  // find images
  const toppingImages = await screen.findAllByRole("img", { name: /topping$/i });
  expect(toppingImages).toHaveLength(3);

  // confirm alt text of images
  const altText = toppingImages.map((element) => element.getAttribute("alt"));
  expect(altText).toEqual(["Sprinkles topping", "Chocolate Chips topping", "Nuts topping"]);
});
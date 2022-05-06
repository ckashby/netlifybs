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


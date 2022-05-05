import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

test('render the options component', () => {
  render(<Options optionType="scoops" />)
})
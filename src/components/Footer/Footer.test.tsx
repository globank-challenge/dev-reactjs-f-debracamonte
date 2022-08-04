import { screen } from "@testing-library/react";
import Footer from ".";
import { render } from "../../utils/testUtils";
describe("when footer renders", () => {
  test("should render the two buttons", () => {
    render(<Footer />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2);
  });
});

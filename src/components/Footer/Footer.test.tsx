import { screen } from "@testing-library/react";
import Footer from ".";
import { render } from "../../utils/testUtils";
describe("<Footer />", () => {
  test("should render the two buttons", () => {
    render(<Footer />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2);
  });
  test("should render the buttons with the correct naming", () => {
    render(<Footer />);
    const previousButton = screen.getByRole("button", { name: /anterior/i });
    const nextButton = screen.getByRole("button", { name: /siguiente/i });
    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
});

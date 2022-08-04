import { screen } from "@testing-library/react";
import Header from ".";
import { render } from "../../utils/testUtils";
describe("when header renders", () => {
  test("should render the title", () => {
    render(<Header />);
    const title = screen.getByText(/listado de pokemon/i);
    expect(title).toBeInTheDocument();
  });
  test("should render the searchBar", () => {
    render(<Header />);
    const searchBar = screen.getByRole("textbox");
    expect(searchBar).toBeInTheDocument();
  });
});

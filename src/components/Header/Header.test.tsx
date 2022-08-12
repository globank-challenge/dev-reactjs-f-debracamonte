import { screen } from "@testing-library/react";
import Header from ".";
import { render } from "../../utils/testUtils";
describe("<Header />", () => {
  test("should render the title", () => {
    render(<Header />);
    const title = screen.getByRole("heading", { name: /listado de pokemon/i });
    expect(title).toBeInTheDocument();
  });
  test("should render the subtitle", () => {
    render(<Header />);
    const title = screen.getByRole("heading", {
      name: /Dale click a tu pokemon favorito y mira su información/i,
    });
    expect(title).toBeInTheDocument();
  });
  test("should render the searchBar", () => {
    render(<Header />);
    const searchBar = screen.getByRole("textbox");
    expect(searchBar).toBeInTheDocument();
  });
});

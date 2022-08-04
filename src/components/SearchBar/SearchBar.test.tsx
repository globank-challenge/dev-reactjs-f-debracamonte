import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../utils/testUtils";
import SearchBar from "./";

describe("When searchBar renders", () => {
  const placeholder = "Buscar";
  test("should render", () => {
    render(<SearchBar placeholder={placeholder} />);
    const searchbar = screen.getByRole("textbox");
    expect(searchbar).toBeInTheDocument();
  });
  test("should shows the text that the user writes", async () => {
    const pokemomName = "Gengar";
    render(<SearchBar placeholder={placeholder} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("");
    await userEvent.type(input, pokemomName);
    expect(input).toHaveValue(pokemomName);
  });
});

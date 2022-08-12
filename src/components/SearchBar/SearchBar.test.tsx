import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "../../utils/testUtils";
import SearchBar from "./";

describe("<SearchBar />", () => {
  const placeholder = "Buscar";
  test("should displays the searchbar", () => {
    const mockFunction = jest.fn();
    render(<SearchBar placeholder={placeholder} onSearch={mockFunction} />);
    const searchbar = screen.getByRole("textbox");
    expect(searchbar).toBeInTheDocument();
  });
  test("should shows the text that the user writes", async () => {
    const pokemomName = "Gengar";
    const mockFunction = jest.fn();
    render(<SearchBar placeholder={placeholder} onSearch={mockFunction} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("");
    userEvent.type(input, pokemomName);
    expect(input).toHaveValue(pokemomName);
  });
  test("should triggers the onSearch function when press enter", async () => {
    const mockFunction = jest.fn();
    render(<SearchBar placeholder={placeholder} onSearch={mockFunction} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
    expect(mockFunction).toHaveBeenCalled();
  });
});

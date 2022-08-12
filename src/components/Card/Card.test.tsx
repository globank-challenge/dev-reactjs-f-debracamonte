import { fireEvent, screen } from "@testing-library/react";
import Card from ".";
import { render } from "../../utils/testUtils";

describe("<Card />>", () => {
  const pokeName = "Boulbasaur";
  const pokeId = "1";
  const pokeImg = "Boulbasaur";
  const pokeType = "Fire";
  test("should display the correct name", () => {
    const mockFunction = jest.fn();
    render(
      <Card
        name={pokeName}
        id={pokeId}
        img={pokeImg}
        type={pokeType}
        onClick={mockFunction}
      />
    );
    const Name = screen.getByText(pokeName);
    expect(Name).toBeInTheDocument();
  });
  test("should display the correct id", () => {
    const mockFunction = jest.fn();
    render(
      <Card
        name={pokeName}
        id={pokeId}
        img={pokeImg}
        type={pokeType}
        onClick={mockFunction}
      />
    );
    const id = screen.getByText("# " + pokeId);
    expect(id).toBeInTheDocument();
  });
  test("should display the correct image", () => {
    const mockFunction = jest.fn();
    render(
      <Card
        name={pokeName}
        id={pokeId}
        img={pokeImg}
        type={pokeType}
        onClick={mockFunction}
      />
    );
    const image = screen.getByAltText(pokeName);
    expect(image).toBeInTheDocument();
  });
  test("should trigger the function when gets clicked", () => {
    const mockFunction = jest.fn();
    render(
      <Card
        name={pokeName}
        id={pokeId}
        img={pokeImg}
        type={pokeType}
        onClick={mockFunction}
      />
    );
    const image = screen.getByAltText(pokeName);
    fireEvent.click(image);
    expect(mockFunction).toHaveBeenCalled();
  });
});

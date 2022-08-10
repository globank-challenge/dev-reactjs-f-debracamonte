import { screen } from "@testing-library/react";
import Card from ".";
import { render } from "../../utils/testUtils";

describe("<Card />>", () => {
  const pokeName = "Boulbasaur";
  const pokeId = "1";
  const pokeImg = "Boulbasaur";
  const pokeType = "Fire";
  test("should render name, id", () => {
    render(<Card name={pokeName} id={pokeId} img={pokeImg} type={pokeType} />);
    const Name = screen.getByText(pokeName);
    const id = screen.getByText("# " + pokeId);
    const image = screen.getByAltText(pokeName);
    expect(Name).toBeInTheDocument();
    expect(id).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});

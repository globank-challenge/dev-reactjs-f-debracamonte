import { screen } from "@testing-library/react";
import PokeList from ".";
import { render } from "../../utils/testUtils";
describe("when screen mounts", () => {
  test("should render 4 images and id's and names", () => {
    render(<PokeList /* pokeData={pokeData} */ />);
    const pokeImg = screen.getAllByRole("img");
    const pokeId = screen.getAllByText(/#/);
    expect(pokeImg.length).toBe(4);
    expect(pokeId.length).toBe(4);
  });
});
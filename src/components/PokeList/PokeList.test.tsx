import { screen } from "@testing-library/react";
import PokeList from ".";
import { setCurrentList } from "../../redux/slices/pokemonList";
import { setupStore } from "../../redux/store";
import { mockNavigationData, mockResultData } from "../../utils/mockData";
import { render } from "../../utils/testUtils";
describe("<PokeList  />", () => {
  const store = setupStore();
  store.dispatch(
    setCurrentList({ results: mockResultData, ...mockNavigationData })
  );
  test("should render 4 images and id's and names", () => {
    render(<PokeList />, { store });
    const pokeImg = screen.getAllByRole("img");
    const pokeId = screen.getAllByText(/#/);
    expect(pokeImg.length).toBe(4);
    expect(pokeId.length).toBe(4);
  });
  test("should render the correct pokemons", () => {
    render(<PokeList />, { store });
    const name1 = screen.getByText(mockResultData[0].name);
    const name2 = screen.getByText(mockResultData[1].name);
    const name3 = screen.getByText(mockResultData[2].name);
    const name4 = screen.getByText(mockResultData[3].name);
    expect(name1).toBeInTheDocument();
    expect(name2).toBeInTheDocument();
    expect(name3).toBeInTheDocument();
    expect(name4).toBeInTheDocument();
  });
});

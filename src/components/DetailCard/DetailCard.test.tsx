import { screen } from "@testing-library/react";
import DetailCard from ".";
import { setCurrentPokemon } from "../../redux/slices/pokemonDetails";
import { setupStore } from "../../redux/store";
import { render } from "../../utils/testUtils";
import { fakePokemonDetailAdapted as mockData } from "../../utils/mockData";
describe("<DetailCard />", () => {
  const store = setupStore();
  store.dispatch(setCurrentPokemon(mockData));
  test("should displays the type label", () => {
    render(<DetailCard />);
    const types = screen.getByText(/types/i);
    expect(types).toBeInTheDocument();
  });
  test("should displays the correct type", () => {
    render(<DetailCard />, { store });
    const types = screen.getByText(mockData.types[0]);
    expect(types).toBeInTheDocument();
  });
  test("should displays the weigth label", () => {
    render(<DetailCard />);
    const weigth = screen.getByText(/peso/i);
    expect(weigth).toBeInTheDocument();
  });
  test("should displays the correct weigth", () => {
    render(<DetailCard />, { store });
    const types = screen.getByText(`${mockData.weight}kg`);
    expect(types).toBeInTheDocument();
  });
  test("should displays the img label", () => {
    render(<DetailCard />);
    const img = screen.getByText(/sprite/i);
    expect(img).toBeInTheDocument();
  });
  test("should displays the correct img", () => {
    render(<DetailCard />, { store });
    const types = screen.getByRole("img", {
      name: `${mockData.name} front sprite`,
    });
    expect(types).toBeInTheDocument();
  });
  test("should displays the movements label", () => {
    render(<DetailCard />);
    const movements = screen.getByText(/movimientos/i);
    expect(movements).toBeInTheDocument();
  });
});

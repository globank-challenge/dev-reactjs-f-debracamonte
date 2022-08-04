import { screen } from "@testing-library/react";
import DetailCard from ".";
import { render } from "../../utils/testUtils";

describe("when detail cards mounts", () => {
  const testData = {
    id: "92",
    name: "Gastly",
    types: ["ghost", "poison"],
    weight: "11kg",
    sprites: {
      front_default: "url",
      back_default: "url",
      front_shiny: "url",
      back_shiny: "url",
      front_female: "url",
    },
    abilities: [
      "fire-punch",
      "ice-punch",
      "thunder-punch",
      "disable",
      "megra-drain",
    ],
  };

  test("should render labels", () => {
    render(<DetailCard />);
    const types = screen.getByText(/types/i);
    const weigth = screen.getByText(/peso/i);
    const img = screen.getByText(/sprite/i);
    const movements = screen.getByText(/movimientos/i);
    expect(types).toBeInTheDocument();
    expect(weigth).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(movements).toBeInTheDocument();
  });
  test("should render the correct data", () => {
    render(<DetailCard />);
    const types = screen.getByText(testData.types.join(", "));
    const weigth = screen.getByText(testData.weight);
    const img = screen.getByAltText(/default front sprite/i);
    const movements = screen.getByText(testData.abilities.join(", "));
    expect(types).toBeInTheDocument();
    expect(weigth).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(movements).toBeInTheDocument();
  });
});

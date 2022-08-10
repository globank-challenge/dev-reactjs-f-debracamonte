import { screen } from "@testing-library/react";
import DetailCard from ".";
import { render } from "../../utils/testUtils";

describe("<DetailCard />", () => {
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
});

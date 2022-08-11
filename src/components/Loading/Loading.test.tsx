import Loading from ".";
import { screen } from "@testing-library/react";
import { render } from "../../utils/testUtils";

describe("<Loading />", () => {
  test("should display the loading component", () => {
    render(<Loading />);
    const loading = screen.getByText(/loading/i);
    expect(loading).toBeInTheDocument();
  });
  test("should display the loading image", () => {
    render(<Loading />);
    const loading = screen.getByRole("img", { name: /loading/i });
    expect(loading).toBeInTheDocument();
  });
});

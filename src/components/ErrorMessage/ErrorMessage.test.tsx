import ErrorMessage from ".";
import { screen } from "@testing-library/react";
import { render } from "../../utils/testUtils";
import { setupStore } from "../../redux/store";
import { setError } from "../../redux/slices/errorHandler";

describe("<ErrorMessage/>", () => {
  const store = setupStore();
  store.dispatch(setError(true));
  test("should display a error message if there is an error", () => {
    const message = "Ese pokemon no existe (aún) intentalo otra vez!";
    render(<ErrorMessage message={message} />, { store });
    const errorMessage = screen.getByText(message);
    expect(errorMessage).toBeInTheDocument();
  });
});

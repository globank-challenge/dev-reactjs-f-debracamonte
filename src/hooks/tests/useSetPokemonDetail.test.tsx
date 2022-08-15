import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupStore } from "../../redux/store";
import { mswServer } from "../../utils/mswServer";
import { pokemonDetailService } from "../../utils/mswServer/handlers";
import { render } from "../../utils/testUtils";

import SetPokemonDetailExample from "./SetPokemonDetailExample";

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

describe("useSetPokemonDetail", () => {
  const store = setupStore();
  test("should change the inputValue when triggers onChangeHandler", () => {
    render(<SetPokemonDetailExample />, { store });
    const textInput = screen.getByRole("textbox") as HTMLInputElement;
    userEvent.type(textInput, "ekans");
    expect(textInput.value).toBe("ekans");
  });
  test("should change store value when triggers the onEnter function", async () => {
    mswServer.use(pokemonDetailService);
    render(<SetPokemonDetailExample />, { store });
    const textInput = screen.getByRole("textbox");
    userEvent.type(textInput, "ekans");
    fireEvent.keyDown(textInput, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });
    await waitFor(() => {
      const name = screen.getByRole("heading", { name: /ekans/i });
      expect(name).toBeInTheDocument();
    });
  });
});

import { screen, fireEvent, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Home from ".";

import { render } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";
import { fakeResponse } from "../../utils/mockData";

const server = setupServer(
  rest.get("/api/v2/pokemon", (req, res, ctx) => {
    return res(ctx.json(fakeResponse), ctx.status(200));
  })
);

beforeAll(() => server.listen());
beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("<Home />", () => {
  test("should show the first four pokemon", () => {
    render(<Home />);
    const first = screen.getByText(fakeResponse.results[0].name);
    const second = screen.getByText(fakeResponse.results[1].name);
    const third = screen.getByText(fakeResponse.results[2].name);
    const fourth = screen.getByText(fakeResponse.results[3].name);
    expect(first).toBeInTheDocument();
    expect(second).toBeInTheDocument();
    expect(third).toBeInTheDocument();
    expect(fourth).toBeInTheDocument();
  });
  test("the button should be disabled until the new data is fetched", async () => {
    render(<Home />);
    const button = screen.getByRole("button", { name: /siguiente/i });
    expect(button).toBeDisabled();
    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });
    fireEvent.click(button);
    await waitFor(() => {
      expect(button).toBeDisabled();
    });
  });
});
describe("when the user change the page", () => {
  test("the prev button should be disabled if we are in the first page", () => {
    render(<Home />);
    const button = screen.getByRole("button", { name: /anterior/i });
    expect(button).toBeDisabled();
  });
});
describe("when the user clicks a pokemon card", () => {
  test("should display a pokemon detail card", async () => {
    render(<Home />);
    const bulbasaurs = screen.getAllByText(/Bulbasaur/i);
    expect(bulbasaurs).toHaveLength(1);
    userEvent.click(bulbasaurs[0]);
    await waitFor(() => {
      const pokeDetailCard = screen.getByRole("img", {
        name: /Bulbasaur front sprite/i,
      });
      expect(pokeDetailCard).toBeInTheDocument();
    });
  });
});
describe("when the user sends a pokemon name", () => {
  test("if the name is valid should display a pokemon detail card", async () => {
    render(<Home />);
    const searchBar = screen.getByRole("textbox");
    userEvent.type(searchBar, "pikachu");
    fireEvent.keyDown(searchBar, { key: "Enter", code: "Enter", charCode: 13 });
    await waitFor(() => {
      const pokemonDetail = screen.getByText(/Pikachu/i);
      expect(pokemonDetail).toBeInTheDocument();
    });
  });
  test("if the name is not valid should display an error message", async () => {
    render(<Home />);
    const searchBar = screen.getByRole("textbox");
    userEvent.type(searchBar, "perro");
    fireEvent.keyDown(searchBar, { key: "Enter", code: "Enter", charCode: 13 });
    await waitFor(() => {
      const errorMessage = screen.getByText(
        "Ese pokemon no existe (aún) intentalo otra vez!"
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });
});

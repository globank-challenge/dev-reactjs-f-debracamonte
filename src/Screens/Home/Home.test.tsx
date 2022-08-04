import { screen, fireEvent, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Home from ".";
import { render } from "../../utils/testUtils";

const fakeResponse = {
  count: 1154,
  next: "https://pokeapi.co/api/v2/pokemon?offset=4&limit=4",
  previous: null,
  results: [
    {
      name: "Bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "Ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "Venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
    {
      name: "Charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
    },
  ],
};
const server = setupServer(
  rest.get("/api/v2/pokemon", (req, res, ctx) => {
    return res(ctx.json(fakeResponse), ctx.status(200));
  })
);

beforeAll(() => server.listen());
beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("when the app loads", () => {
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
    fireEvent.click(button);
    expect(button).toBeDisabled();
    await waitFor(() => {
      expect(button).not.toBeDisabled();
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

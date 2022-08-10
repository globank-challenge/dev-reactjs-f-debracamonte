import { screen, fireEvent, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Home from ".";
import { fakeResponse } from "../../utils";
import { render } from "../../utils/testUtils";

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

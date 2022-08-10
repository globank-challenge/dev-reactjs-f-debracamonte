import { fireEvent, screen } from "@testing-library/react";
import Button from ".";
import { render } from "../../utils/testUtils";

describe("<Button />", () => {
  const mockOnClick = jest.fn();
  test("should render", () => {
    render(<Button onClick={mockOnClick}>Example</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("should call the onClick function when click", () => {
    render(<Button onClick={mockOnClick}>Example</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
  test("should not call the onClick function when click a disabled button", () => {
    render(
      <Button onClick={mockOnClick} disabled>
        Example
      </Button>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });
  test("should shows the correct text", () => {
    const text = "Siguiente";
    render(<Button onClick={mockOnClick}>{text}</Button>);
    const button = screen.getByText(text);
    expect(button).toBeInTheDocument();
  });
  test("should shows the correct icon", () => {
    const text = "Siguiente";
    const mockIcon = <span>P</span>;
    render(
      <Button onClick={mockOnClick}>
        {text}
        {mockIcon}
      </Button>
    );
    const button = screen.getByText("P");
    expect(button).toBeInTheDocument();
  });
});

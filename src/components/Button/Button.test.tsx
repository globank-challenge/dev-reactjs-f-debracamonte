import { fireEvent, screen } from "@testing-library/react";
import Button from ".";
import { render } from "../../utils/testUtils";

describe("<Button />", () => {
  const mockOnClick = jest.fn();
  test("should display the button", () => {
    render(<Button onClick={mockOnClick}>Example</Button>);
    const button = screen.getByRole("button", { name: /example/i });
    expect(button).toBeInTheDocument();
  });
  test("should call the onClick function when click", () => {
    render(<Button onClick={mockOnClick}>Example</Button>);
    const button = screen.getByRole("button", { name: /example/i });
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
  test("should not call the onClick function when click a disabled button", () => {
    render(
      <Button onClick={mockOnClick} disabled>
        Example
      </Button>
    );
    const button = screen.getByRole("button", { name: /example/i });
    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });
  test("should displays the correct text", () => {
    const text = "Siguiente";
    render(<Button onClick={mockOnClick}>{text}</Button>);
    const button = screen.getByRole("button", { name: text });
    expect(button).toBeInTheDocument();
  });
  test("should displays the correct icon", () => {
    const text = "Siguiente";
    const mockIcon = <span>P</span>;
    render(
      <Button onClick={mockOnClick}>
        {text}
        {mockIcon}
      </Button>
    );
    const button = screen.getByRole("button", { name: /siguiente p/i });
    expect(button).toBeInTheDocument();
  });
});

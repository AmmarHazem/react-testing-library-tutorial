import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

describe("test button", () => {
  test("render with correct text", () => {
    render(
      <Button
        count={0}
        setCount={function (): void {
          console.log("Function not implemented.");
        }}
      />
    );
    const buttonElement = screen.getByText(`count is 0`);
    expect(buttonElement).toBeInTheDocument();
  });
});

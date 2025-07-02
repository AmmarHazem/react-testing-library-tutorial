import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/Button";

describe("test button", () => {
  test("render with correct text", async () => {
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
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent(`count is 1`);
  });
});

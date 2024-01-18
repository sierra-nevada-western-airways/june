import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("Container", () => {
  it("Renders correctly", () => {
    render(
      <Container>
        <p>Hello!</p>
      </Container>,
    );

    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});

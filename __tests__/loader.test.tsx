import React from "react";
import { render, screen } from "@testing-library/react";
import { motion } from "motion/react";
import Loader from "@/app/components/loader";

// Mocking motion for animation testing
jest.mock("motion/react", () => ({
  motion: {
    div: jest.fn(({ children, ...props }) => <div {...props}>{children}</div>),
    span: jest.fn(({ children, ...props }) => <span {...props}>{children}</span>),
  },
}));

describe("Loader component", () => {
  it("renders the loader with three dots", () => {
    render(<Loader />);

    // Check that the Loader contains the container div
    const container = screen.getByRole("group");
    expect(container).toBeInTheDocument();

    // Check that three motion spans (dots) are rendered
    const dots = screen.getAllByRole("status");
    expect(dots).toHaveLength(3);
  });

  it("applies the correct styles to the container and dots", () => {
    render(<Loader />);

    const container = screen.getByRole("group");
    expect(container).toHaveStyle({
      width: "10rem",
      height: "5rem",
      display: "flex",
      justifyContent: "space-around",
    });

    const dots = screen.getAllByRole("status");

    expect(dots[0]).toHaveStyle({
      display: "block",
      width: "1rem",
      height: "1rem",
      backgroundColor: "black",
      borderRadius: "50%",
    });

    expect(dots[1]).toHaveStyle({
      display: "block",
      width: "1rem",
      height: "1rem",
      backgroundColor: "white",
      borderRadius: "50%",
    });

    expect(dots[2]).toHaveStyle({
      display: "block",
      width: "1rem",
      height: "1rem",
      backgroundColor: "#D9181D",
      borderRadius: "50%",
    });
  });
});

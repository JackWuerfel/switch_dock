import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/app/components/navbar";


// Mock next/navigation hooks
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
}));

// Mock icons
jest.mock("@untitled-ui/icons-react", () => ({
  Sun: () => <span data-testid="sun-icon">Sun</span>,
  Moon01: () => <span data-testid="moon-icon">Moon</span>,
}));

describe("Navbar component", () => {
  let pushMock: jest.Mock;

  beforeEach(() => {
    pushMock = jest.fn();
    (usePathname as jest.Mock).mockReturnValue("/");
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn((key) => (key === "theme" ? "light" : null)),
      entries: jest.fn(() => new Map().entries()),
    });
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
  });

  it("renders the navbar with links and theme toggle", () => {
    render(<Navbar />);

    // Check logo
    expect(screen.getByAltText(/switch dock white and red logo/i)).toBeInTheDocument();

    // Check navigation links
    const navLinks = screen.getAllByRole("link");
    expect(navLinks).toHaveLength(3); // Benefits, Safety, Policies
    expect(screen.getByText("Benefits")).toBeInTheDocument();
    expect(screen.getByText("Safety")).toBeInTheDocument();
    expect(screen.getByText("Policies")).toBeInTheDocument();

    // Check theme toggle
    expect(screen.getByTestId("sun-icon")).toBeInTheDocument();
  });

  it("toggles the theme when the theme toggle is clicked", () => {
    const mockSetAttribute = jest.fn();
    jest.spyOn(document.documentElement, "setAttribute").mockImplementation(mockSetAttribute);

    render(<Navbar />);

    // Click the theme toggle
    fireEvent.click(screen.getByTestId("sun-icon"));

    // Assert that theme attribute is updated
    expect(mockSetAttribute).toHaveBeenCalledWith("data-theme", "dark");

    // Assert that the router's push method is called with updated query parameters
    expect(pushMock).toHaveBeenCalledWith("/?theme=dark");
  });

  it("renders the dark mode icon when theme is dark", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn((key) => (key === "theme" ? "dark" : null)),
      entries: jest.fn(() => new Map().entries()),
    });

    render(<Navbar />);

    // Check that the Moon icon is displayed
    expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
  });
});
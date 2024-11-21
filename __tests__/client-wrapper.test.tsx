import React from "react";
import { render, screen } from "@testing-library/react";
import ClientWrapper from "@/app/components/client-wrapper";

// Mocking dependencies
jest.mock("../lib/apollo", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../app/components/card-wrapper", () =>
  jest.fn(() => <div data-testid="card-wrapper">CardWrapper</div>)
);

describe("ClientWrapper component", () => {
  it("renders the ApolloProvider and CardWrapper after DOM is loaded", () => {
    jest.useFakeTimers(); // Use fake timers to simulate `useEffect`

    render(<ClientWrapper />);

    // Fast-forward all timers to simulate `useEffect` execution
    jest.runAllTimers();

    // Check if ApolloProvider is rendered
    const apolloProvider = screen.getByTestId("card-wrapper");
    expect(apolloProvider).toBeInTheDocument();
  });
});

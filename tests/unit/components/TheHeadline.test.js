import { render, screen } from "@testing-library/vue";

import TheHeadline from "@/components/TheHeadline.vue";

describe("TheHeadline", () => {
  // Example of how mock works
  // describe("Vitest playground", () => {
  //   it("tracks whether it has been called", () => {
  //     const mockFunction = vi.fn(); //creates a mock function
  //     mockFunction(1, 2); // Calls mock function
  //     expect(mockFunction).toHaveBeenCalledWith(1, 2);
  //   });
  // });

  it("displays introductory action verb", () => {
    vi.useFakeTimers(); // replace all time related functions with mocks
    render(TheHeadline);

    const actionPhrase = screen.getByRole("heading", {
      name: /build for everyone/i,
    });
    expect(actionPhrase).toBeInTheDocument();
    vi.useRealTimers(); // Remove/clean-up all mocks
  });

  it("changes action verb at a consistent interval", () => {
    vi.useFakeTimers(); // replace all time related functions with mocks
    const mock = vi.fn();
    vi.stubGlobal("setInterval", mock);
    render(TheHeadline);

    expect(mock).toHaveBeenCalled();
    vi.useRealTimers(); // Remove/clean-up all mocks
  });
});

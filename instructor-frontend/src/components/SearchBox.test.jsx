import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import SearchBox from "./SearchBox.jsx";

describe("SearchBox", () => {
  it("accepts typing, calls onSearchChange, and clears search", async () => {
    const user = userEvent.setup();
    const mockSearchChange = vi.fn();

    render(
      <SearchBox
        searchTerm=""
        onSearchChange={mockSearchChange}
        resultCount={0}
        totalCount={0}
      />
    );

    const input = screen.getByRole("textbox");

    await user.type(input, "ali");

    expect(mockSearchChange).toHaveBeenCalled();

    const clearButton = screen.getByRole("button", { name: /clear/i });

    await user.click(clearButton);

    expect(mockSearchChange).toHaveBeenCalledWith("");
  });
});
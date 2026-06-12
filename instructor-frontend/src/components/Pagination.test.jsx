import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import Pagination from "./Pagination.jsx";

describe("Pagination", () => {
  it("disables Previous on page 1, changes to next page, and changes page size", async () => {
    const user = userEvent.setup();
    const mockPageChange = vi.fn();
    const mockPageSizeChange = vi.fn();

    render(
      <Pagination
        currentPage={1}
        totalPages={3}
        pageSize={3}
        onPageChange={mockPageChange}
        onPageSizeChange={mockPageSizeChange}
      />
    );

    expect(screen.getByRole("button", { name: /previous/i })).toBeDisabled();

    await user.click(screen.getByRole("button", { name: /next/i }));
    expect(mockPageChange).toHaveBeenCalledWith(2);

    await user.selectOptions(screen.getByRole("combobox"), "5");
    expect(mockPageSizeChange).toHaveBeenCalledWith(5);
  });
});
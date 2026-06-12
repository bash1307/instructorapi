import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import InstructorForm from "./InstructorForm";

describe("InstructorForm", () => {
  it("shows validation errors and does not call onSubmit when submitted empty", async () => {
    const user = userEvent.setup();
    const mockSubmit = vi.fn();

    render(
      <MemoryRouter>
        <InstructorForm onSubmit={mockSubmit} />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/specialization is required/i)).toBeInTheDocument();
    expect(screen.getByText(/years experience is required/i)).toBeInTheDocument();

    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
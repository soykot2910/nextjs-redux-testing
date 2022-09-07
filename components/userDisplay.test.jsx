import { fireEvent, screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "../utils/test-utils";
import UserDisplay from "./UserDisplay";

test("fetches & receives a user after clicking the fetch user button", async () => {
  renderWithProviders(<UserDisplay />);
  fireEvent.click(screen.getByRole("button", { name: /Fetch user/i }));
});

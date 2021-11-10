import { screen } from "@testing-library/react";
import Header from "./index";

describe("Header", () => {

    it("renders a header", () => {
        renderWithReduxAndRouter(<Header />);
        expect(screen.getByRole("heading").textContent).toBe(
            "GitHub Repo Tracker");
  });

});
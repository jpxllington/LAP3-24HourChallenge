import { screen, render } from "@testing-library/react";
import Header from "./index";

describe("Header", () => {

    test("renders a header", () => {
        renderWithReduxAndRouter(<Header />);
        expect(screen.getByRole("heading").textContent).toBe(
        "GitHub Repo Tracker");
  });

});
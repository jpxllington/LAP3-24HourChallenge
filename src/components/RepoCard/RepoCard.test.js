import React from 'react';
import { RepoCard } from ".";
import { screen,render } from "@testing-library/react";
import userEvent from "@testing-library/user-event"

// import axios from "axios";
// jest.mock('axios');

describe("RepoCard", () => {
    const testRepo = {name: '24 Hour Challenge', description:"test description", owner: {login:2} ,forks_count: 5, stargazers_count: 12}
    test("it renders a small card", () => {
        render(<RepoCard repo={testRepo}/>)
        let card = screen.getByRole("repoCardSmall")
        expect(card.childElementCount).toBe(3)

        expect(card.children[0].textContent).toBe("24 Hour Challenge")

    })
    test("it renders a large card", () => {
        render(<RepoCard repo={testRepo}/>)
        let button = screen.getByRole("expand")
        userEvent.click(button)
        let card = screen.getByRole("repoCardLarge")
        expect(card.childElementCount).toBe(6)

        expect(card.children[3].textContent).toBe("Number of forks: 5")

    })
})
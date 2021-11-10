import React from 'react';
import {RepoCard} from ".";

export default {
    title: 'components/RepoCard',
    component: RepoCard,
}

const Template = (args) => <RepoCard {...args} />;

export const Default = Template.bind({});

Default.args = {
    name:"test",
    full_name:"testuser/test",
    description:"some words about the repo should go here",
    owner: {
        login: "testuser",
    },
    html_url: "https://github.com/jpxllington/LAP3-24HourChallenge",
    stargazers_count: 0,
    forks_count: 0
}
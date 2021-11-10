import React from 'react';

import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { searchReducer } from '../reducer';

const TestProviders = ({ initState }) => {
    initState ||= { date: "", result: { sunrise: "", sunset: "" }, loading: false };
    let testReducer = () => searchReducer(initState, { type: '@@INIT' })
    const testStore = createStore(testReducer)

    return ({ children }) => (
        <Provider store={testStore}>
            { children }
        </Provider>
    )
}

const renderWithReduxProvider = (ui, options={}) => {
    let TestWrapper = TestProviders(options)
    render(ui, { wrapper: TestWrapper, ...options })
}

global.renderWithReduxProvider = renderWithReduxProvider
global.React = React;

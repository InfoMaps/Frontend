import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "./index.scss";

const topElement = document.querySelector('#top');

const render = Component => {
    ReactDOM.render(
            <Component />,
        topElement
    );
};

async function init() {
    try {
        render(App);
    } catch (err) {
        console.warn('no chayns environment found');
    }
}

init();
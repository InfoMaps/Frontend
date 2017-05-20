import React from 'react';

import "./Intro.scss"

import { HEADLINE } from '../constants/text';

const Intro = () => (
    <div className="intro">
        <h1 className="intro_headline">
            {HEADLINE}
        </h1>
    </div>
);

export default Intro;
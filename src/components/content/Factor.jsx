import React from "react";
import MUI from 'material-ui/styles/MuiThemeProvider';
import Checkbox from "material-ui/Checkbox";
import { FACTOR_1 } from '../../constants/text';
import { FACTOR_2 } from '../../constants/text';
import { FACTOR_3 } from '../../constants/text';
import { FACTOR_4 } from '../../constants/text';
import { FACTOR_5 } from '../../constants/text';
import { FACTOR_6 } from '../../constants/text';
import { FACTOR_7 } from '../../constants/text';
import { FACTOR_8 } from '../../constants/text';
import { FACTOR_9 } from '../../constants/text';
import { FACTOR_10 } from '../../constants/text';

import "./Factor.scss"

const CHECKBOX_STYLE = {
    padding: "5px"
};

export default class Factor extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <MUI>
                <div className="factor">
                    <Checkbox
                        label={FACTOR_1}
                        style={CHECKBOX_STYLE}
                    />
                    <Checkbox
                        label={FACTOR_2}
                        style={CHECKBOX_STYLE}
                    />
                    <Checkbox
                        label={FACTOR_3}
                        style={CHECKBOX_STYLE}
                    />
                    <Checkbox
                        label={FACTOR_4}
                        style={CHECKBOX_STYLE}
                    />
                    <Checkbox
                        label={FACTOR_5}
                        style={CHECKBOX_STYLE}
                    />
                    <Checkbox
                        label={FACTOR_6}
                        style={CHECKBOX_STYLE}
                    />
                    <Checkbox
                        label={FACTOR_7}
                        style={CHECKBOX_STYLE}
                    />
                    <Checkbox
                        label={FACTOR_8}
                        style={CHECKBOX_STYLE}
                    />
                    <Checkbox
                        label={FACTOR_9}
                        style={CHECKBOX_STYLE}
                    />
                    <Checkbox
                        label={FACTOR_10}
                        style={CHECKBOX_STYLE}
                    />
                </div>
            </MUI>
        )
    }
}
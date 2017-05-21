import React from "react";
import MUI from 'material-ui/styles/MuiThemeProvider';
import Checkbox from "material-ui/Checkbox";
import { FACTOR_1 } from '../../constants/text';
import { FACTOR_2 } from '../../constants/text';
import { FACTOR_3 } from '../../constants/text';
import { FACTOR_5 } from '../../constants/text';
import { FACTOR_11} from '../../constants/text';

import "./Factor.scss"

const CHECKBOX_STYLE = {
    padding: "5px"
};

export default class Factor extends React.Component{
    constructor(){
        super();
        this.state = {
            labourForce: true,
            houseIncome: false,
            personalIncome: false,
            highestSchoolYear: false,
            englishLevel: false
        }
    }

    render(){
        return (
            <div>
                <div className="selected_lga">
                    {this.props.selectedLGA}
                </div>
                <MUI>
                    <div className="factor">
                        <Checkbox
                            checked={this.state.labourForce}
                            label={FACTOR_1}
                            style={CHECKBOX_STYLE}
                        />
                        <Checkbox
                            checked={this.state.houseIncome}
                            label={FACTOR_2}
                            style={CHECKBOX_STYLE}
                        />
                        <Checkbox
                            checked={this.state.personalIncome}
                            label={FACTOR_3}
                            style={CHECKBOX_STYLE}
                        />
                        <Checkbox
                            checked={this.state.englishLevel}
                            label={FACTOR_11}
                            style={CHECKBOX_STYLE}
                        />
                        <Checkbox
                            checked={this.state.highestSchoolYear}
                            label={FACTOR_5}
                            style={CHECKBOX_STYLE}
                        />
                    </div>
                </MUI>
            </div>
        )
    }
}
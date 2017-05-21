import React from "react";
import PropTypes from "prop-types"

import "./WaitCursor.scss"

export default class WaitCursor extends React.Component{

    static propTypes = {
        hidden: PropTypes.bool
    };

    render(){
        return (
            <i
                style={{opacity:this.props.hidden ? 0 : 0.5}}
                className="fa fa-circle-o-notch wait_cursor"
                aria-hidden="true"
            />
        )
    }
}
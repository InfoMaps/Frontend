import React from "react";

import "./WaitCursor.scss"

export default class WaitCursor extends React.Component{

    constructor(){
        super();
        this.state = {
            hidden: true
        }
    }

    render(){
        return (
            <i style={{opacity:this.state.hidden ? 0 : 0.5}} className="fa fa-circle-o-notch wait_cursor" aria-hidden="true"/>
        )
    }
}
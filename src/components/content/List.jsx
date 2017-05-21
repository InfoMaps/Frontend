import React from 'react';
import PropTypes from 'prop-types';

export default class List extends React.Component{

    static propTypes = {
        markedLGA: PropTypes.array
    };

    constructor(){
        super();
    }

    render(){
        return(
            <div>
                {
                    this.props.markedLGA.map( lga => {
                        return (
                            <div key={lga.id}>
                                {lga.name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
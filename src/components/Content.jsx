import React from 'react';

import Map from './content/Map';
import Factor from './content/Factor';

import "./Content.scss"

export default class Content extends React.Component {
    /**Retrieves the store instance that was created.
    static getStores() {
        // this will handle the listening/unlistening for you
        return [UserStore];
    }

    static getPropsFromStores() {
        // this is the data that gets passed down as props
        // each key in the object returned by this function is added to the `this.props`
        return {
            ...UserStore.getState()
        };
    }*/

    render() {
        return (
            <div className="content">
                <div className="content-top">
                    <Map/>
                    <Factor/>
                </div>
            </div>
        );
    }
}
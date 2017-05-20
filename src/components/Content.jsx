import React from 'react';

import UserStore from '../stores/user/UserStore';

import connectToStores from 'alt-utils/lib/connectToStores';

@connectToStores
export default class Content extends React.Component {
    //Retrieves the store instance that was created.
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
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}
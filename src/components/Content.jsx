import React from 'react';

import Map from './content/Map';
import Factor from './content/Factor';
import WaitCursor from './global/WaitCursor';
import List from './content/List';

import {SERVER_URL} from '../constants/server-url';

import 'whatwg-fetch';
import "./Content.scss"

export default class Content extends React.Component {

    constructor(){
        super();
        this.state={
            hideWaitCursor: false,
            selectedLGA: null,
            markedLGA: [],
            lgas: []
        };

        this.setWaitCursor = this.setWaitCursor.bind(this);
        this.setSelectedLGA = this.setSelectedLGA.bind(this);
        this.addMarkedLGA = this.addMarkedLGA.bind(this);
        this.removeMarkedLGA = this.removeMarkedLGA.bind(this);

        this.loadLGAS();
    }

    setWaitCursor(state){
        this.setState({
            hideWaitCursor:state
        })
    }

    setSelectedLGA(name){
        this.setState({
            selectedLGA:name
        })
    }

    addMarkedLGA(lgaObject){
        let temp = this.state.markedLGA;
        temp.push(lgaObject);
        this.setState(temp);
    }

    removeMarkedLGA(lgaObject){
        let temp = this.state.markedLGA;
        for(let i in temp){
            if(temp[i].id === lgaObject.id){
                temp.splice(i,1);
            }
        }
        this.setState(temp)
    }

    loadLGAS(){
        fetch(`${SERVER_URL}/indicators`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                labourForce: this.state.labourForce,
                houseIncome: this.state.houseIncome,
                personalIncome: this.state.personalIncome,
                highestSchoolYear: this.state.highestSchoolYear,
                englishLevel: this.state.englishLevel
            })
        })
            .then(result => {return result.json()})
            .then(data => this.setState({
                lgas: data
            }))
            .catch(err => console.warn("Loading failed: ",err))
    }

    render() {
        return (
            <div className="content">
                <div className="content-top">
                    <Map
                        setWaitCursor={this.setWaitCursor}
                        setSelectedLGA={this.setSelectedLGA}
                        addMarkedLGA={this.addMarkedLGA}
                        removeMarkedLGA={this.removeMarkedLGA}
                        markedLGA={this.state.markedLGA}
                        lgas={this.state.lgas}
                    />
                    <Factor
                        selectedLGA={this.state.selectedLGA}
                    />
                </div>
                <div className="content-bottom">
                    <List
                        markedLGA={this.state.markedLGA}
                    />
                </div>
                <WaitCursor
                    hidden={this.state.hideWaitCursor}
                />
            </div>
        );
    }
}
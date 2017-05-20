import React from "react";

import "./Map.scss"

export default class Map extends React.Component{

    constructor(){
        super();
    }

    componentDidMount(){
        this.initMap();
    }

    initMap() {
        let brisbane = {lat: -27.3818611, lng: 152.7130136};
        let map = new google.maps.Map(this.map, {
            zoom: 5,
            center: brisbane
        });
    }

    render(){
        return <div className="map" ref={map => this.map = map}/>
    }
}
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
            zoom: 7,
            center: brisbane
        });
        map.data.loadGeoJson(
            'https://raw.githubusercontent.com/thomjoy/aus-lga/master/data/aus_lga.json');
        console.log(map.data.b.b);
        let i = 0;
        map.data.addListener('addfeature', function(event) {
            i++;
            if(i===565){
                for(let i in map.data.b.b){
                    console.log(map.data.b.b[i].f.LGA_CODE11)
                }
            }
        });
        map.data.addListener('click', function(event) {
            map.data.overrideStyle(event.feature, {fillColor: 'red'});
        });
    }

    render(){
        return <div className="map" ref={map => this.map = map}/>
    }
}
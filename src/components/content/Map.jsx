import React from "react";
import PropTypes from "prop-types";

import {MAP_STYLE} from "../../constants/styles";

import "./Map.scss"

export default class Map extends React.Component{

    static propTypes = {
        setWaitCursor: PropTypes.func,
        setSelectedLGA: PropTypes.func,
        addMarkedLGA: PropTypes.func,
        removeMarkedLGA: PropTypes.func,
        markedLGA: PropTypes.array,
        lgas: PropTypes.array
    };

    static hslToRgb(h, s, l){
        let r, g, b;

        if(s === 0){
            r = g = b = l; // achromatic
        }else{
            let hue2rgb = function hue2rgb(p, q, t){
                if(t < 0) t += 1;
                if(t > 1) t -= 1;
                if(t < 1/6) return p + (q - p) * 6 * t;
                if(t < 1/2) return q;
                if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            }

            let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            let p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

    static numberToColorHsl(i) {
        // as the function expects a value between 0 and 1, and red = 0° and green = 120°
        // we convert the input to the appropriate hue value
        let hue = i * 1.2 / 360;
        // we convert hsl to rgb (saturation 100%, lightness 50%)
        let rgb = Map.hslToRgb(hue, 1, .5);
        // we format to css value and return
        return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    }

    constructor(){
        super();
    }

    componentDidMount(){
        this.initMap();
    }

    shouldComponentUpdate(nextProps){
        if(this.props.lgas.length != nextProps.lgas.length){
            this.map.data.loadGeoJson(
                'https://raw.githubusercontent.com/thomjoy/aus-lga/master/data/aus_lga.json'
            );
            let i = 0;
            this.map.data.addListener('addfeature', event => {
                i++;
                for(let i in nextProps.lgas){

                    if(nextProps.lgas[i].id == event.feature.f.LGA_CODE11){
                        console.log(nextProps.lgas[i]);
                        let color;
                        if(nextProps.lgas[i].indicator < 40){
                            color = "darkred"
                        }else if(nextProps.lgas[i].indicator < 50){
                            color = "darkred"
                        }else if(nextProps.lgas[i].indicator < 55){
                            color = "red"
                        }else if(nextProps.lgas[i].indicator < 66){
                            color = "red"
                        }else if(nextProps.lgas[i].indicator < 68){
                            color = "orange"
                        }else if(nextProps.lgas[i].indicator < 70){
                            color = "yellow"
                        }else if(nextProps.lgas[i].indicator < 72){
                            color = "lightgreen"
                        }else if(nextProps.lgas[i].indicator < 80){
                            color = "green"
                        }
                        this.map.data.overrideStyle(event.feature, {fillColor: color});
                    }
                }
                if(i===565){
                    this.props.setWaitCursor(true);
                }
            });
        }
        return true;
    }

    initMap(){
        let brisbane = {lat: -18.9778238, lng:136.7406877};
        this.map = new google.maps.Map(this.map_container, {
            zoom: 5,
            center: brisbane,
            styles: MAP_STYLE
        });
        this.map.data.addListener('click', event => {
            let latitude = event.latLng.lat(), longitude = event.latLng.lng();
            console.log( latitude + ', ' + longitude );
            //AIzaSyBK54nX_tvwGA9Q6cvg1RYJIuCxJl_rW9Q
            /**fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAFqJIQgIsrVtW_2_HnSOLDBkSS6t0cUi4&latitude='+event.latLng.lat()+'&longitude='+event.latLng.lng()+'&radius=50000')
                .then(data=>{return data.json()})
                .then(result=>console.log(result));*/
            let request = {
                location: new google.maps.LatLng(latitude, longitude),
                radius: '50000',
                types: ['schools']
            };
            let service = new google.maps.places.PlacesService(this.map);
            service.nearbySearch(request, (results, status)=>{
                console.log(results);
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (let i = 0; i < results.length; i++) {
                        let place = results[i];
                        // If the request succeeds, draw the place location on
                        // the map as a marker, and register an event to handle a
                        // click on the marker.
                        let marker = new google.maps.Marker({
                            map: this.map,
                            position: place.geometry.location
                        });
                    }
                }
            });
            let isMarked = false;
            for(let i in this.props.markedLGA){
                if(this.props.markedLGA[i].id===event.feature.f.LGA_CODE11){
                    isMarked = true;
                    //this.map.data.overrideStyle(event.feature, {fillColor: 'ligthgreen'});
                    this.props.removeMarkedLGA({
                        id: event.feature.f.LGA_CODE11
                    });
                    break;
                }
            }
            if(!isMarked){
                //this.map.data.overrideStyle(event.feature, {fillColor: 'red'});

                for(let i in this.props.lgas){
                    if(this.props.lgas[i].id){

                    }
                }
                this.props.addMarkedLGA({
                    id: event.feature.f.LGA_CODE11,
                    name: event.feature.f.LGA_NAME11,
                    /**unemployment: ,
                    percentUnemployment:,
                    deviation:*/
                })
            }
        });
        this.map.data.addListener('mouseover', event => {
            this.props.setSelectedLGA(event.feature.f.LGA_NAME11)
        });
    }

    render(){
        return <div className="map" ref={map => this.map_container = map}/>
    }
}
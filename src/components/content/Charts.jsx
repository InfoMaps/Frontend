import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsBoost from 'highcharts/modules/boost';

import "./Charts.scss"
HighchartsBoost(Highcharts);


export default class Charts extends React.Component{

    static propTypes = {
        markedLGA: PropTypes.array
    }

    constructor(){
        super()
    }

    componentDidMount(){
        this.renderChart();
    }

    renderChart() {
        let width = this.container.offsetWidth*0.8;
        let markedLGA = this.props.markedLGA.map(lga => {
                return lga.name
            });
        this.chart = new Highcharts.chart('labor_force_status', {
            chart: {
                type: 'bar',// Edit chart spacing
                height: 300,
                width: width
            },
            title: {
                text: 'Labor Force Status'
            },
            xAxis: {
                categories: markedLGA,
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Year 1800',
                data: [107, 31, 635, 203, 2]
            }, {
                name: 'Year 1900',
                data: [133, 156, 947, 408, 6]
            }, {
                name: 'Year 2012',
                data: [1052, 954, 4250, 740, 38]
            }]
        });
    }

    render(){
        if(this.chart){
            this.chart.xAxis[0].categories = this.props.markedLGA.map(lga => {
                return lga.name
            });
            this.chart.redraw()
        }
        return <div className="charts" id="labor_force_status" ref={container=>this.container=container}/>
    }
}
import React, { Component } from 'react';
import axios from 'axios';

class Day extends Component {
    state = {
        forecast: []
    }

    componentDidMount(){
        axios.get(`http://api.apixu.com/v1/forecast.json?key=41772e31127e45e4bf1142704182611&q=edinburgh&days=10`)
        .then(res => {
            const forecast = res.data.forecast.forecastday;
            this.setState({forecast})
            console.log(forecast);
        });
    }

    makeDayName = (date) => {
        let d = new Date(date);
        return d.toLocaleDateString('en-GB', {weekday: 'short'});
    }

    dayClicked = () => {
        console.log(this.props.key);
    }

    render (){
        return (
            <div>
            <h2>5 day forecast</h2>
            {this.state.forecast.map(day =>(
                <div key={day.date_epoch} className='dib br3 pa3 ma2 grow bw2 shadow-5' onClick={this.dayClicked}>
                    <h5>{this.makeDayName(day.date)}</h5>
                    <img src={`https://${day.day.condition.icon}`} alt="forecast icon"></img>
                    <p><small className="maxTemp">{day.day.maxtemp_c}&deg;C </small><small className="minTemp">{day.day.mintemp_c}&deg;C</small></p>
                </div>
                 ))}
            </div>
        );
    }
}

export default Day;
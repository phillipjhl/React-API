import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Card from './Card';

class PeopleFetch extends Component {
    constructor(props) {
        super(props);

        this.state= {};
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(obj => {
                //mapping over recieved array to produce people Card components
                let peopleData = obj.map((val) => {
                    return <Card key={val.id} title={val.name} secondary={val.age} third={val.gender} fourth={val.url}/>;
                });
                console.log(peopleData);
                this.setState({ peopleCards: peopleData });
            });

    }

    render() {
        return (
            <div className="container">
            {this.state.peopleCards}
            </div>
        );
    }
}

export default PeopleFetch;
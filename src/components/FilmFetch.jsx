import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Card from './Card';

class FilmFetch extends Component {
    constructor(props) {
        super(props);

        this.state= {};
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(obj => {
                //mapping over recieved array to produce Film specific Card components
                let filmsData = obj.map((val) => {
                    return <Card key={val.id} title={val.title} secondary={val.description} third={val.director} />;
                });
                console.log(filmsData);
                this.setState({ filmCards: filmsData });
            });

    }

    render() {
        return (
            <div className="container">
            {this.state.filmCards}
            </div>
        );
    }
}

export default FilmFetch;
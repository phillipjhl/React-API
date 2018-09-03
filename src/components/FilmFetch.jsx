import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import FilmCard from './FilmCard';

class FilmFetch extends Component {
    constructor(props) {
        super(props);

        this.state= {};
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(obj => {
                //mapping over recieved array to produce Card components
                let filmsData = obj.map((val) => {
                    return <FilmCard key={val.id} title={val.title} description={val.description} director={val.director} />;
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
//Main application
import React, { Component, Fragment } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import FilmCard from './components/FilmCard';


class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loaded: false
        };

        this.handleLoadFilms = this.handleLoadFilms.bind(this);
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

    handleLoadFilms() {
        this.setState({ loaded: true })
    }

    render() {
        if (this.state.loaded) {
            return (
                <Fragment>
                    {this.state.filmCards}
                </Fragment>
            );
        } else {
        return (
            <div className="jumbotron">
                <img className="mw-100 " alt="Studio Ghibli" src="https://ghibliapi.herokuapp.com/images/logo.svg" ></img>
                <hr className="my-4" />
                <button className="btn btn-dark btn-lg" onClick= {this.handleLoadFilms}>Load Flms</button>
            </div>
            );
        }
    }
}
            
export default App;
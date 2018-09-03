//Main application
import React, { Component, Fragment } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import FilmFetch from './components/FilmFetch';


class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loaded: false
        };

        this.handleLoadFilms = this.handleLoadFilms.bind(this);
    }

    handleLoadFilms() {
        this.setState({ loaded: true })
    }
    
    render() {
        if (this.state.loaded) {
            return (
                <FilmFetch />
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
//Main application
import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import FilmFetch from './components/FilmFetch';
import PeopleFetch from './components/PeopleFetch';


class App extends Component {
    constructor(props) {
        super(props);
        
        //initialize state load booleans as false to only load the load buttons
        this.state = {
            filmLoad: false,
            peopleLoad: false
        };

        //event handler binding
        this.handleLoadFilms = this.handleLoadFilms.bind(this);
        this.handleLoadPeople = this.handleLoadPeople.bind(this);
    }
    
    //load films button event handler
    handleLoadFilms() {
        this.setState({ filmLoad: true })
    }

    //load people button event handler
    handleLoadPeople() {
        this.setState({ peopleLoad: true })
    }
    
    render() {
        //conditionally render based on state to call the FilmFetch component
        if (this.state.filmLoad) {
            return (
                <FilmFetch />
            );
            //conditionally render based on state to call PeopleFetch component
        } else if (this.state.peopleLoad) {
            return(
                <PeopleFetch />
            );
        } else {
        return (
            <div className="jumbotron">
                <img className="mw-100 " alt="Studio Ghibli" src="https://ghibliapi.herokuapp.com/images/logo.svg" ></img>
                <hr className="my-4" />
                <button className="btn btn-dark btn-lg" onClick= {this.handleLoadFilms}>Load Flms</button>
                <button className="btn btn-dark btn-lg" onClick= {this.handleLoadPeople}>Load People</button>
            </div>
            );
        }
    }
}
            
export default App;
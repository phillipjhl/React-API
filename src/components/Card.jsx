import React from 'react';

function Card(props) {
    //if it is a person
    if (props.fourth !== undefined) {
        return (
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-header text-dark">{props.title}</h5>
                    <p className="card-text">{props.secondary}</p>
                    <p className="card-text">{props.third}</p>
                    <a className="btn btn-primary" href={props.fourth} role="button" target="_blank">Link</a>
                </div>
            </div>
        );
    } else { //if it is a film
        return (
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-header text-dark">{props.title}</h5>
                    <p className="card-text">{props.secondary}</p>
                    <p className="card-text">{props.third}</p>
                </div>
            </div>
        );
    }
}

export default Card;
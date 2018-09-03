import React from 'react';

function FilmCard(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-header text-dark">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text">Director: {props.director}</p>
            </div>
        </div>
    );
}

export default FilmCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { state } from "../state";

const Card = ({ id, title, email, button }) => {

    const setCurrentUser = async (id) => {
        state.currentUserId = id;
    }

    return (
        <div className="card text-center shadow-md bg-white">
            <figure className="px-2 pt-2">
                <img alt="Profile" src="https://picsum.photos/id/1005/400/250" className="rounded-xl"/>
            </figure> 
            <div className="card-body">
                <h2 className="card-title">{title}</h2> 
                <p>{email}</p> 
                <div className="justify-center card-actions">
                    <Link to="/user" className="btn btn-outline border-2 btn-primary w-full" onClick={() => setCurrentUser(id)}>{button}</Link>
                </div>
            </div>
        </div> 
    )
}

export default Card;


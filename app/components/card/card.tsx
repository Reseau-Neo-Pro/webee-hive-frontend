'use client';
import { CiMedal } from 'react-icons/Ci';

function Card () {
    return (
        <div className="Card">
            <div className="gratuated">Diplômé depuis <CiMedal/></div>
            <div className="jobs"></div>
            <img className="img-card" src=""/>
            <div className="user-name">Name</div>
            <span className="user-skills">skills</span>
        </div>
    )
}

export default Card;
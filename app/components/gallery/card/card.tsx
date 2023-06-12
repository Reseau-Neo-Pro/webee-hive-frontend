'use client';

import { CiMedal } from 'react-icons/Ci';
import { AiOutlineRightSquare, AiOutlineCodepen, AiOutlineHtml5, AiOutlineGithub } from 'react-icons/Ai';
import { CiPizza, CiBeerMugFull, CiGlobe } from 'react-icons/Ci';
import cardPicture from '../../../../assets/profile.png';


import './card.scss';


function Card () {
    return (
        <div className="card">
            <div className="trade">
                <div className="profile-job">
                    <div className="graduated"><CiMedal size={30}/>1 an</div>
                    <div className="jobs"><AiOutlineRightSquare size={30}/></div>
                </div>
            </div>
            <div className="profile">
                <img className="user-picture" alt="user-picture" src={cardPicture.src}/>
                <div className="user-name">Name</div>
            </div>
            <div className="user-skills">
                <div className="skills"><AiOutlineCodepen size={30}/></div>
                <div className="skills"><CiPizza size={30}/></div>
                <div className="skills"><CiBeerMugFull size={30}/></div>
                <div className="skills"><AiOutlineHtml5 size={30}/></div>
                <div className="skills"><CiGlobe size={30}/></div>
                <div className="skills"><AiOutlineGithub size={30}/></div>
            </div>
        </div>
    )
}

export default Card;
'use client';

import { CiMedal } from 'react-icons/Ci';
import { AiOutlineRightSquare, AiOutlineCodepen, AiOutlineHtml5, AiOutlineGithub } from 'react-icons/Ai';
import { CiPizza, CiBeerMugFull, CiGlobe } from 'react-icons/Ci';
import cardPicture from '../../../assets/profile.png';


import '../card/card.scss';


function Card () {
    return (
        <div className="card">
            <div className="trade">
            <div className="graduated"><CiMedal/>1 an</div>
            <div className="jobs"><AiOutlineRightSquare/></div>
            </div>
            <div className="profile">
            <img className="user-picture" alt="user-picture" src={cardPicture.src}/>
            <div className="user-name">Name</div>
            </div>
            <div className="user-skills">
                <div className="skills"><AiOutlineCodepen/></div>
                <div className="skills"><CiPizza/></div>
                <div className="skills"><CiBeerMugFull/></div>
                <div className="skills"><AiOutlineHtml5/></div>
                <div className="skills"><CiGlobe/></div>
                <div className="skills"><AiOutlineGithub/></div>
            </div>
        </div>
    )
}

export default Card;
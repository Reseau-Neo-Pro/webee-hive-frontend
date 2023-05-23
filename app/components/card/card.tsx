'use client';
import { CiMedal } from 'react-icons/Ci';
import { AiOutlineRightSquare } from 'react-icons/Ai';
import cardPicture from '../../../assets/laurie.jpg';
import codePenLogo from '../../../assets/svg-path.png';
import pizzaLogo from '../../../assets/Pizza.png';
import beerLogo from '../../../assets/beer_mug_full.png';
import htmlLogo from '../../../assets/html5.png';
import globeLogo from '../../../assets/globe.png';
import githubLogo from '../../../assets/globe.png';
import '../card/card.scss';


function Card () {
    return (
        <div className="card">
            <div className="gratuated">Diplômé depuis <CiMedal/></div>
            <div className="jobs">Core de métier <AiOutlineRightSquare/></div>
            <img className="user-picture" alt="user-picture" src={cardPicture.src}/>
            <div className="user-name">Name</div>
            <div className="user-skills">skills
                <img className="skills" alt="logo-skills" src={codePenLogo.src}/>
                <img className="skills" alt="logo-skills" src={pizzaLogo.src}/>
                <img className="skills" alt="logo-skills" src={beerLogo.src}/>
                <img className="skills" alt="logo-skills" src={htmlLogo.src}/>
                <img className="skills" alt="logo-skills" src={globeLogo.src}/>
                <img className="skills" alt="logo-skills" src={githubLogo.src}/>
            </div>
        </div>
    )
}

export default Card;
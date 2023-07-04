'use client';

import { CiMedal } from 'react-icons/ci';
import { AiOutlineRightSquare, AiOutlineCodepen, AiOutlineHtml5, AiOutlineGithub } from 'react-icons/ai';
import { CiPizza, CiBeerMugFull, CiGlobe } from 'react-icons/ci';
import { useState } from 'react';

function  DropdownCard () {
    const [isOpen, setIsOpen] = useState(false);

    let handleClick = () => {
        setIsOpen (!isOpen);
    }

    return (
        <div className={`userCard${isOpen ? "open": ""}`}>
            <div className="flex flex-col max-w-[250px] h-80 rounded-[70px] shadow-md shadow-[#c9c6c6] justify-between mx-[30px] relative">
                <img className="p-0 rounded-[70px] absolute max-w-[288px]" alt="wave" src="/images/wave.svg"/>
                <div className="relative pt-[32px] pl-[15px] pr-[15px]">
                    <div className="flex flex-row justify-between px-[20px]">
                        <div className="flex items-center"><CiMedal size={30}/>1 an</div>
                        <div className="jobs"><AiOutlineRightSquare size={30}/></div>
                    </div>
                </div>
                <div className="flex flex-col self-center">
                    <img className="max-w-[406px] object-contain py-[19px]" alt="user-picture" src="/images/profile.png"/>
                    <div className="flex self-center">Name</div>
                </div>
                <div className="flex flex-row self-center gap-[10px] px-[15px] py-[28px]">
                    <div className="skills"><AiOutlineCodepen size={30}/></div>
                    <div className="skills"><CiPizza size={30}/></div>
                    <div className="skills"><CiBeerMugFull size={30}/></div>
                    <div className="skills"><AiOutlineHtml5 size={30}/></div>
                    <div className="skills"><CiGlobe size={30}/></div>
                    <div className="skills"><AiOutlineGithub size={30}/></div>
                </div>
                <div className="cardToggle" onClick={handleClick}>
                    <span>Je suis une dev qui tue</span>
                </div>
            </div>
        </div>
    )
}
//
// function Card () {
//     return (
//         <div className="flex flex-col max-w-[250px] h-80 rounded-[70px] shadow-md shadow-[#c9c6c6] justify-between mx-[30px] relative">
//             <img className="p-0 rounded-[70px] absolute max-w-[288px]" alt="wave" src="/images/wave.svg"/>
//             <div className="relative pt-[32px] pl-[15px] pr-[15px]">
//                 <div className="flex flex-row justify-between px-[20px]">
//                     <div className="flex items-center"><CiMedal size={30}/>1 an</div>
//                     <div className="jobs"><AiOutlineRightSquare size={30}/></div>
//                 </div>
//             </div>
//             <div className="flex flex-col self-center">
//                 <img className="max-w-[406px] object-contain py-[19px]" alt="user-picture" src="/images/profile.png"/>
//                 <div className="flex self-center">Name</div>
//             </div>
//             <div className="flex flex-row self-center gap-[10px] px-[15px] py-[28px]">
//                 <div className="skills"><AiOutlineCodepen size={30}/></div>
//                 <div className="skills"><CiPizza size={30}/></div>
//                 <div className="skills"><CiBeerMugFull size={30}/></div>
//                 <div className="skills"><AiOutlineHtml5 size={30}/></div>
//                 <div className="skills"><CiGlobe size={30}/></div>
//                 <div className="skills"><AiOutlineGithub size={30}/></div>
//             </div>
//         </div>
//     )
// }

export default DropdownCard;
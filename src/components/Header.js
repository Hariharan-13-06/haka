import React from 'react';
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from '@heroicons/react/outline';

const Header = () => {
    return (
        <div className="p-2 flex flex-col items-center justify-between sm:flex-row">
            <div className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
                <svg width="77" height="104" viewBox="0 0 77 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="38.5" cy="38.5" r="38.5" fill="black"/>
                    <circle cx="38.5" cy="38.5" r="38.5" fill="black"/>
                    <ellipse cx="38.5" cy="39.0923" rx="29.6154" ry="29.6154" fill="#6DDCCF"/>
                    <path d="M29.3192 49.1615L20.3425 34.0577L38.2959 34.0577L29.3192 49.1615Z" fill="black"/>
                    <path d="M47.0885 49.1615L38.1118 34.0577L56.0652 34.0577L47.0885 49.1615Z" fill="black"/>
                    <rect x="20.1384" y="29.0231" width="36.1308" height="2.96154" fill="black"/>
                    <path d="M24.9988 103.023H23.114V96.4508H15.946V103.023H14.071V88.8043H15.946V94.9176H23.114V88.8043H24.9988V103.023ZM36.3562 99.3121H30.3992L29.0613 103.023H27.1277L32.5574 88.8043H34.198L39.6375 103.023H37.7136L36.3562 99.3121ZM30.9656 97.7692H35.7996L33.3777 91.1188L30.9656 97.7692ZM45.1648 96.4118L43.4265 98.2184V103.023H41.5515V88.8043H43.4265V95.8356L49.7449 88.8043H52.0105L46.4148 95.0836L52.45 103.023H50.2039L45.1648 96.4118ZM61.9421 99.3121H55.9851L54.6472 103.023H52.7136L58.1433 88.8043H59.7839L65.2234 103.023H63.2996L61.9421 99.3121ZM56.5515 97.7692H61.3855L58.9636 91.1188L56.5515 97.7692Z" fill="black"/>
                </svg>
            </div>
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20">
                    <HomeIcon className="h-8 mb-1 text-blue-dark animate-bounce"/>
                    <p className="opacity-0 group-hover:text-blue-title group-hover:opacity-100 tracking-widest font-semibold">HOME</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 group">
                    <BadgeCheckIcon className="h-8 mb-1 text-blue-dark animate-bounce" />
                    <p className="opacity-0 group-hover:text-blue-title group-hover:opacity-100 tracking-widest font-semibold">VERIFIED</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 group">
                    <LightningBoltIcon className="h-8 mb-1 text-blue-dark animate-bounce" />
                    <p className="opacity-0 group-hover:text-blue-title group-hover:opacity-100 tracking-widest font-semibold">TRENDING</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 group">
                    <CollectionIcon className="h-8 mb-1 text-blue-dark animate-bounce" />
                    <p className="opacity-0 group-hover:text-blue-title group-hover:opacity-100 tracking-widest font-semibold">COLLECTIONS</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 group">
                    <SearchIcon className="h-8 mb-1 text-blue-dark animate-bounce" />
                    <p className="opacity-0 group-hover:text-blue-title group-hover:opacity-100 tracking-widest font-semibold">SEARCH</p>
                </div>
                <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 group">
                    <UserIcon className="h-8 mb-1 text-blue-dark animate-bounce" />
                    <p className="opacity-0 group-hover:text-blue-title group-hover:opacity-100 tracking-widest font-semibold">USER</p>
                </div>
            </div>
        </div>
    )
}

export default Header;

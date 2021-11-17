import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from '../social/social';


const Footer = () => {
    return (
        <div className="bg-primaryBlack">
            <div className="max-w-5xl mx-auto py-16">
                <div className="flex flex-col-reverse sm:flex-row px-4 sm:px-0 justify-between gap-10">
                    <div className="">
                        <img src={`${process.env.PUBLIC_URL}/assets/logo/logo_w.svg`} alt="" />
                        <p className="text-gray-100 mt-4">10 unique social depictions</p>

                        <p className="text-gray-300 text-xs mt-16">©2021 MekaVerse. All rights reserved.</p>
                    </div>
                    
                    <div>
                        <div className="flex-col gap-2 hidden sm:flex">
                            <Link to="" className="text-white text-sm">Home</Link>
                            <Link to="/terms" className="text-gray-500 text-sm">Terms & Conditions</Link>
                        </div>

                        <div className="mt-10">
                            <SocialIcons />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
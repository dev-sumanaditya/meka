import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialIcons from '../social/social';
import './footer.css';

const Footer = () => {
    return (
        <div className="bg-primagyBG px-4">
            <div className="max-w-5xl mx-auto py-16">
                <div className="flex flex-col-reverse sm:flex-row justify-between gap-10">
                    <div className="">
                        <h1 className="text-3xl">HRMZ.</h1>
                        <p className="text-gray-700 mt-4">10 unique luxury depictions</p>

                        <p className="text-gray-700 text-xs mt-16">©2021 HRMZ. All rights reserved.</p>
                    </div>
                    
                    <div>
                        <div className="flex-col gap-2 hidden sm:flex text-gray-500">
                            <NavLink activeClassName="active" to="/" className="text-sm">Home</NavLink>
                            <NavLink activeClassName="active" to="/terms" className="text-sm">Terms & Conditions</NavLink>
                        </div>

                        <div className="mt-10">
                            <SocialIcons white/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialIcons from '../social/social';
import './footer.css';

const Footer = () => {
    return (
        <div className="bg-primagyBG px-4">
            <div className="max-w-5xl mx-auto py-16">
                <div className="flex flex-col sm:flex-row justify-between gap-10">
                    <div className="">
                        <h1 className="text-3xl">HRMZ.</h1>
                        <p className="text-gray-700 mt-4">20+ unique luxury depictions</p>    
                    </div>
                    
                    <div className="w-56">
                        <div className="flex flex-col gap-2 text-gray-500">
                            <NavLink activeClassName="active" to="/" className="text-sm">Home</NavLink>
                            <NavLink activeClassName="active" to="/terms" className="text-sm">Terms & Conditions</NavLink>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-10 mt-12">
                    <div>
                        <p className="text-gray-700 text-xs">©2021 HRMZ. All rights reserved.</p>
                    </div>
                    <div className="w-56">
                            <SocialIcons/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;
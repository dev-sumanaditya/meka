import React from 'react';
import SocialIcons from '../social/social';

import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const MainNavbar = (props) => {
    return (
        <div className="mt-14">
            <Fade>
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center justify-between mx-2 sm:mx-4">
                        <a href="/" className="flex gap-2">
                            <img src={`${process.env.PUBLIC_URL}/assets/logo/logo${props.white ? '_w':''}.svg`} alt="logo"/>
                        </a>

                        <SocialIcons white/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default MainNavbar;

import React from 'react';
import SocialIcons from '../social/social';

import Fade from 'react-reveal/Fade';

const MainNavbar = (props) => {
    return (
        <div className="pt-6 sm:pt-12 mb-2 px-4">
            <Fade>
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center justify-between">
                        <a href="/" className="flex gap-2">
                            <h1 className="text-3xl">HRMZ.</h1>
                        </a>

                        <SocialIcons white/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default MainNavbar;

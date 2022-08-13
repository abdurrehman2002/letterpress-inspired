
import React from 'react';

function Footer() {
    return (
        <div>

            <div className='FooterBg'>

                <div className='FooterHeadingWrapper'>
                    <div className='FooterHeading'>
                        <h1>TRIDENT</h1>
                        <h3>NEWS</h3>
                    </div>
                    <div className='FooterFollow'>
                        <ul>
                            <i class="fa fa-facebook-square"></i>
                            <i class="fa fa-instagram"></i>
                            <i class="fa fa-twitter-square"></i>
                            <i class="fa fa-youtube-play"></i>
                        </ul>
                    </div>
                </div>


                <div className='FooterlinksWrapper'>
                <div className='Footerlinks'>
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Hot Topic</a>
                </div>
                <div className='Footerlinks2'>
                    <a href='#'>News</a>
                    <a href='#'>Celebrity Spotlight</a>
                    <a href='#'>Join Trident</a>
                </div>
                <div className='Footerlinks3'>
                    <a href='#'>Crowd Funding</a>
                    <a href='#'>Founding Board</a>
                    <a href='#'>Board of Directors</a>
                </div>
                <div className='Footerlinks4'>
                    <a href='#'>Mission Statement</a>
                    <a href='#'>The Team</a>
                    <a href='#'>Contact Us</a>
                </div>
                </div>
                

            </div>

        </div>
    );
}

export default Footer;
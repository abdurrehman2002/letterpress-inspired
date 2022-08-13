import React from 'react';
import BannerImg2 from '../assets/images/BannerImg2.png';
import BannerArow from '../assets/images/BannerArow.png';

function Banner() {
    return (
            <div className='BannerBg'>
        <div className='BannerWrapper'>
            
            <div className='BannerTextImgWrapper'>
                <div className='BannerText'>
                    <img src={BannerImg2} />
                    <h2>It's my break <br /> through.</h2>
                    <p>- Hannah Doe, Rookie Actress</p>
                </div>

                <div className='BannerCard'>
                    <h1>Hannah Doe, Actress</h1>
                    <h2>- - - - - - - - - - - -</h2>
                    <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do
                        <br />eius mod tempor incididunt Utlabore et dolore magna aliqua.
                        <br />Ut enim ad minim venium,quis nostrud exercitation ullamco</p>
                </div>

                <div className='bannerArow'>
                    <img src={BannerArow} />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Banner;
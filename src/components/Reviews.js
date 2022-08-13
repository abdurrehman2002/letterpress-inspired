import React from 'react';
import ReviewsImg from '../assets/images/ReviewsImg.png';
import ReviewsStars from '../assets/images/ReviewsStars.png';
import ReviewsLeftArow from '../assets/images/ReviewsLeftArow.png';
import ReviewsRightArow from '../assets/images/ReviewsRightArow.png';

function Reviews() {
    return (
        <div>
            <div className='ReviewsBg'>
                <div className='ReviewsBgImg'>
                <div className='HeadingWrapper'>
                    <div className='ReviewsLeftArow'>
                        <img src={ReviewsLeftArow} />
                    </div>
                    <div className='ReviewsHeading'>
                        <img src={ReviewsImg} />
                        <h1>Kiara Watson</h1>
                        <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eius mod
                            <br />tempor incididunt Utlabore et dolore magna aliqua.Ut enim ad minim
                            <br /> venium,quis nostrud exercitation ullamco laboris nisi.</p>
                        <div className='ReviewsDateStars'>
                            <h3>Nov.01,2021</h3>
                            <img src={ReviewsStars} />
                        </div>
                    </div>
                    <div className='ReviewsRightArow'>
                        <img src={ReviewsRightArow} />
                    </div>
                </div>


                <div className='row'>
                    <div className='col-6'>
                        <div className='ReviewsText'>
                            <hr />
                            <h1>Millie Strife</h1>
                            <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eius mod
                                <br />tempor incididunt Utlabore et dolore magna aliqua.Ut enim ad minim
                                <br /> venium,quis nostrud exercitation ullamco laboris nisi.</p>
                            <div className='ReviewsDateStars'>
                                <h3>Nov.01,2021</h3>
                                <img src={ReviewsStars} />
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='ReviewsText'>
                            <hr />
                            <h1>Millie Strife</h1>
                            <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eius mod
                                <br />tempor incididunt Utlabore et dolore magna aliqua.Ut enim ad minim
                                <br /> venium,quis nostrud exercitation ullamco laboris nisi.</p>
                            <div className='ReviewsDateStars'>
                                <h3>Nov.01,2021</h3>
                                <img src={ReviewsStars} />
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Reviews;
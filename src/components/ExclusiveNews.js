import React from 'react';
import ExclusiveNewsImg from '../assets/images/ExclusiveNewsImg.png';

function ExclusiveNews() {
    return (
        <div className='ExclusiveNewsBg'>
            <div className='ExclusiveNewsWrapper'>
            <div className='row'>
                <div className='col-6'>
                    <div className='ExclusiveNewsText'>
                        <h1>Exclusive <br/> News Today</h1>
                        <p>Lorem ipsum dolor sit amet,consectetur adipisicing edlit,sed 
                            <br/>do eius mod tempor incididunt ut labore et dolore magna
                            <br/>aliqua. Ut enim ad minim venium,quis nostrud exercitation
                            <br/>ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <button className='btn'>Learn More</button>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='ExclusiveNewsImg'>
                        <img src={ExclusiveNewsImg}/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ExclusiveNews;
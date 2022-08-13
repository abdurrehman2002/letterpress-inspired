import React from 'react';
import CelebrityImg1 from '../assets/images/CelebrityImg1.png';
import CelebrityImg2 from '../assets/images/CelebrityImg2.png';

function Celebrity() {
    return (
        <div className='CelebrityWrapper'>
            <div className='CelebrityHeading'>
                <h1>Celebrity Spotlight</h1>
                <p>Get to know favorite celebrity!</p>
            </div>

            <div className='CelebrityImgWrapper'>
            <div className='Celebrity1'>
                <img src={CelebrityImg1} />
            </div>

            <div className='Celebrity2'>
                <img src={CelebrityImg2} />
            </div>
            </div>



        </div>
    );
}

export default Celebrity;
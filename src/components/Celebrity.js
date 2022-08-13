import React from 'react';
import CelebrityImg1 from '../assets/images/CelebrityImg1.png';
import CelebrityImg2 from '../assets/images/CelebrityImg2.png';

function Celebrity() {
    return (
        <div className='CelebrityBg'>
            <div className='CelebrityWrapper'>
                <div className='row'>
                    <div className='CelebrityHeading'>
                        <h1>Celebrity Spotlight</h1>
                        <p>Get to know favorite celebrity!</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-6 p-0'>
                        <div className='Celebrity1'>
                            <div className='Celebrity1Card'>
                                <h1>Hannah Doe, Actress</h1>
                                <h2>- - - - - - - - - - - -</h2>
                                <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do
                                    <br />eius mod tempor incididunt Utlabore et dolore magna aliqua.
                                    <br />Ut enim ad minim venium,quis nostrud exercitation ullamco</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-6 p-0'>
                        <div className='Celebrity2'>
                            <div className='Celebrity2Card'>
                                <h1>John Green, Singer</h1>
                                <h2>- - - - - - - - - - - -</h2>
                                <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do
                                    <br />eius mod tempor incididunt Utlabore et dolore magna aliqua.
                                    <br />Ut enim ad minim venium,quis nostrud exercitation ullamco</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Celebrity;
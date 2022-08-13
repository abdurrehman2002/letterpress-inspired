import React from 'react';
import NewMusicImg from '../assets/images/NewMusicImg.png';
import NewMusicTextImg from '../assets/images/NewMusicTextImg.png';

function NewMusic() {
    return (
        <div className='NewMusicBg'>
            <div className='row'>
                <div className='col-6'>
                    <div className='NewMusicTextBg'>
                        <div className='NewMusicTextWrapper'>
                            <div className='NewMusicText'>
                                <img src={NewMusicTextImg} />
                                <h1>Bringing new <br />gen music</h1>
                                <p>- John Green, New & Upcoming Singer</p>
                            </div>

                            <div className='NewMusicCard'>
                                <h1>News Title Here</h1>
                                <h2>- - - - - - - - - - - -</h2>
                                <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do
                                    <br />eius mod tempor incididunt Utlabore et dolore magna aliqua.
                                    <br />Ut enim ad minim venium,quis nostrud exercitation ullamco</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='col-6'>
                    <div className='NewMusicImg'>
                        <img src={NewMusicImg} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewMusic;
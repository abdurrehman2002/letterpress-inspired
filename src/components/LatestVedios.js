import React from 'react';
import LatestVedioImg1 from '../assets/images/LatestVedioImg1.png';
import LatestVedioImg2 from '../assets/images/LatestVedioImg2.png';
import LatestVedioLeftArow from '../assets/images/LatestVedioLeftArow.png';
import LatestVedioRightArow from '../assets/images/LatestVedioRightArow.png';

function LatestVedios() {
    return (
        <div className='LatestVediosBg'>
            <div className='LatestVediosWrapper'>
                <div className='LatestVediosHeading'>
                    <h1>Latest Vedios</h1>
                    <p>Watch important news and be up tp date!</p>
                </div>

                <div className='row'>
                    <div className='col-3'>
                        <div className='LatestVedioImg1' >
                            <img src={LatestVedioImg1} />
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='LatestVedioImg2' >
                            <img src={LatestVedioImg2} />
                        </div>
                    </div>

                    <div className='col-4'>
                        <div className='LatestVedioText'>
                            {/* <h2>News Vedio<h2/>
                        <h2>To Watch</h2> */}
                            <h2>News Vedio</h2>
                            <h2>To Watch</h2>
                            <p>Lorem ipsum dolor sit amet,consectetur adipisic-
                                <br />ing elit,seddo eius mod tempor incididunt Ut
                                <br />labore et dolore magnaaliqua. Ut enim ad minim
                                <br />venium,quis nostrud exercitationullamco laboris
                                <br />nisi utaliquip ex ea commodo consequat. Duis
                                <br />aute irure dolor in.
                            </p>
                            <button className='btn'>Learn More</button>
                        </div>
                    </div>
                    <div className='LatestVedioArow'>
                        <div className='LatestVedioLeftArow'><img src={LatestVedioLeftArow} /></div>
                        <div className='LatestVedioRightArow'><img src={LatestVedioRightArow} /></div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LatestVedios;



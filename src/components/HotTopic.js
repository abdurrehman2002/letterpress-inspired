
import React from 'react';
import HotTopicImg1 from '../assets/images/HotTopicImg1.png';
import HotTopicImg2 from '../assets/images/HotTopicImg2.png';
import HotTopicImg3 from '../assets/images/HotTopicImg3.png';
import HotTopicArow from '../assets/images/HotTopicArow.png';


function HotTopic() {
    return (
        <div className='HotTopicBg'>
        <div className='HotTopicWrapper'>
            <div className='row'>
                <div className='col-4'>
                    <div className='HotTopicCard'>
                    <img src={HotTopicImg1} />
                    <h1>Today's <br/>
                        Hot Topic</h1>
                    <p>Lorem ipsum dolor sit amet,consectetur adipisicing
                        <br/> elit,seddo eius mod tempor incididunt ut labore et
                        <br/> dolore magnaaliqua. Ut enim ad minim venium,
                         <br/>quis nostrud exercitationullamco laboris nisi ut
                         <br/>aliquip ex ea commodo consequat.
                        </p>
                        <div className='HotTopicCardText'>
                        <h3>Full Article Here</h3>
                        <img src={HotTopicArow} />
                        </div>
                        </div>
                </div>

                <div className='col-4'>
                    <div className='HotTopicCard'>
                    <img src={HotTopicImg2} />
                    <h1>Today's 
                        <br/> Hot Topic</h1>
                    <p>Lorem ipsum dolor sit amet,consectetur adipisicing
                        <br/> elit,seddo eius mod tempor incididunt ut labore et
                        <br/> dolore magnaaliqua. Ut enim ad minim venium,
                         <br/>quis nostrud exercitationullamco laboris nisi ut
                         <br/>aliquip ex ea commodo consequat.
                        </p>
                        <div className='HotTopicCardText'>
                        <h3>Full Article Here</h3>
                        <img src={HotTopicArow} />
                        </div>
                        </div>
                </div>

                <div className='col-4'>
                    <div className='HotTopicCard'>
                    <img src={HotTopicImg3} />
                    <h1>Today's 
                        <br/> Hot Topic</h1>
                    <p>Lorem ipsum dolor sit amet,consectetur adipisicing
                        <br/> elit,seddo eius mod tempor incididunt ut labore et
                        <br/> dolore magnaaliqua. Ut enim ad minim venium,
                         <br/>quis nostrud exercitationullamco laboris nisi ut
                         <br/>aliquip ex ea commodo consequat.
                        </p>
                        <div className='HotTopicCardText'>
                        <h3>Full Article Here</h3>
                        <img src={HotTopicArow} />
                        </div>
                        </div>
                </div>

            </div>
        </div>
        </div>
    );
}

export default HotTopic;
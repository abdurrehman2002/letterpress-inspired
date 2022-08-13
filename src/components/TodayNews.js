import React from 'react';
import TodayNewsImg from '../assets/images/TodayNewsImg.png';
import TodayNewsArow from '../assets/images/TodayNewsArow.png';

function TodayNews() {
    return (
        <div className='TodayNewsWrapper'>
            <div className='row'>
                <div className='col-4'>
                    <div className='TodayNewsImg'>
                        <img src={TodayNewsImg} />
                        <h1>Hot News</h1>
                        <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do
                            <br />eius mod tempor incididunt Utlabore et dolore magna aliqua.Ut
                            <br />enim ad minim venium,quis nostrud exercitation.</p>
                        <div className='TodayNewsArticle'>
                            <h3>Nov.01,2021</h3>
                            <div className='FullArticleText'>
                                <h3>Full Article Here</h3>
                                <img src={TodayNewsArow} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='col-8'>
                    <div className='TodayNewsText'>
                        <hr />
                        <h1>In Today's News</h1>
                        <p>Lorem ipsum dolor sit amet,consectetur adipisicing
                            elit,seddo eius mod tempor incididunt
                            <br />ut labore etdolore magnaaliqua. Ut enim ad minim
                            venium,quis nostrud exercitation ulla
                            <br />mco laboris nisi utaliquip ex ea commodo consequat.</p>
                        <div className='TodayNewsTextArticle'>
                            <h2>Nov.01,2021</h2>
                            <div className='FullArticleText'>
                                <h3>Full Article Here</h3>
                                <img src={TodayNewsArow} />
                            </div>
                        </div>
                    </div>
                    <div className='TodayNewsText'>
                        <hr />
                        <h1>In Today's News</h1>
                        <p>Lorem ipsum dolor sit amet,consectetur adipisicing
                            elit,seddo eius mod tempor incididunt
                            <br />ut labore etdolore magnaaliqua. Ut enim ad minim
                            venium,quis nostrud exercitation ulla
                            <br />mco laboris nisi utaliquip ex ea commodo consequat.</p>
                        <div className='TodayNewsTextArticle'>
                            <h2>Nov.01,2021</h2>
                            <div className='FullArticleText'>
                                <h3>Full Article Here</h3>
                                <img src={TodayNewsArow} />
                            </div>
                        </div>
                        <hr/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TodayNews;
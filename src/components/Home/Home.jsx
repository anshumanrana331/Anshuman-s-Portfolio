import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import homeAnime from './../../assets/home_anime.gif';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <div className='header-text'>
                    <h1>Hello There!</h1>
                    <p> I am Anshuman Rana, an undergraduate student pursuing my degree in Electronics and Communications 
                        Engineering at VIIT, Pune. I am blessed to live in a world of 
                        technology which aids my effort and gives wider exposure. Consistently pursuing this developed 
                        adaptability in me, self-respect and self-awareness such that I take my time to truly understand 
                        and bring out the best of anything I set my eyes at.
                    </p>
                </div>
                <div className='head-btns'>
                    <Link to='/about' className='btn btn-white'>
                        <p className='btn-text'>Know more about me</p>
                    </Link>
                    <Link to='/contact' className='btn btn-transparent'>
                        <p className='btn-text'>Connect with me</p>
                    </Link>
                </div>
                <div className='splash-image'>
                    <img
                        src={homeAnime}
                        alt='animation'
                        className='home-anime'
                    />
                </div>
            </div>
        );
    }
}

export default Home;
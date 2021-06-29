import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                    heading='About Me.'
                    details='Looking for my next opportunity to make a change.'
                />
            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Student</h3>
                    <p className='about-details'>
                        I am Anshuman Rana, a final year student, at {' '} 
                        <a
                            className='about-link-element'
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.viit.ac.in/'
                        >Vishwakarama Institute of Information Technology</a> 
                        {' '}pursuing Bachelors of Technology in the field of Electronics and Communications Engineering. 
                        I am a keen learner, and an enthusiast of experimenting with different technologies. 
                        I am calm, friendly and I love creating new stuff and sharing it on the internet, 
                        I am a fitness freak and I love playing Basketball.
                    </p>
    
                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Computers Geek</h3>
                    <p className='about-details'>
                    Skilled with languages such as C++ and Java, having great knowledge of Data Structures and Algorithms, 
                    well versed with OOPs concepts, with core knowledge of Operating Systems, 
                    Database Management, and Computer Networks. Having great interest in coding, 
                    I like to solve problems on Leetcode.{' '}
                        <a
                            className='about-link-element'
                            target='_blank'
                            rel='noreferrer'
                            href='https://leetcode.com/anshumanrana331/'
                        >
                            Check out my leetcode profile!
                        </a>
                    </p>
    
    
                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Web Developer</h3>
                    <p className='about-details'>
                        Having keen interest in Web development, I have made numerous projects to showcase my learnings.
                        If you want to collaborate with me on some project, just {' '}
                        <a
                            className='about-link-element'
                            target='_blank'
                            rel='noreferrer'
                            href='mailto:anshumanrana331@gmail.com'
                        >
                            Email me the details!
                        </a>
                    </p>
                </div>
    
                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>
    
            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;



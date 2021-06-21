import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Countries from '../components/Countries';
const About = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <Countries />
            <h1>A propos</h1>

            <p>
                Lorem Ipsum is simply dummy text of the prin
                ting and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    );
};

export default About;
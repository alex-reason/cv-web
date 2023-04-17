import mirror from '../assets/mirror.png';

const Landing = () => {
    return (
        <heading id='home' className='landing'>
            <div className='landing__item landing__description'>
                <h1>Creativity, Curiosity, Consistency. </h1>
                <p>
                    I'm Alexandra Mai!
                    Looking for front-end web development or non-profit work. I welcome the opportunity to use my React and website development skills.
                </p>
                <a className='button' href='#footer'>Reach out</a>
            </div>

            <div className='landing__item landing__image'>
                <img src={mirror} alt='landing-flower' />
                <div className='shadow'></div>
            </div>
        </heading>
    )
};

export default Landing;
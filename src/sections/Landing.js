import mirror from '../assets/mirror.png';

const Landing = () => {
    return (
        <header id='home' className='landing'>
            <div className='landing__item landing__description'>
                <h1>Creativity, Curiosity, Consistency. </h1>
                <p>
                    I'm Alexandra!
                    Looking for front-end web development or non-profit work. I welcome the opportunity to use my React and website development skills.
                </p>
                <a className='button' href='#footer'>Reach out</a>
            </div>

            <div className='landing__item landing__image'>
                <img src={mirror}
                    title='doodle by me'
                    alt='landing-flower' />
                <div className='shadow'></div>
            </div>
        </header>
    )
};

export default Landing;
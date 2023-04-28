import mirror from '../assets/mirror.png';
import { landingData } from '../assets/data';
import LandingItem from '../components/LandingItem';

const Landing = () => {
    return (
        <header id='home' className='landing'>
            <div className='landing__section landing__intro'>
                <img src={mirror}
                    title='doodle by me'
                    alt='landing-flower' 
                    className='landing__image'
                    />
                <div className='landing__intro-info'>
                    <h1>I'm Alexandra!</h1>
                    <p>I like to code, to learn languages, and plants.</p>
                    <a className='button' href='#footer'>Reach out</a>
                </div>
            </div>

            <div className='landing__section landing__items'>
                {
                    landingData && landingData.map(item => {
                        return <LandingItem item={item} />
                    })
                }
            </div>
        </header>
    )
};

export default Landing;
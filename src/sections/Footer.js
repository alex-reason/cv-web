import Social from '../components/Social';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer__top'>
                <div className='footer__left'>
                    <Social />
                </div>
                <div className='footer__right'>
                    <h1>Stay in Touch</h1>
                </div>
            </div>
            <div className='footer__bottom'>
                <p>© Copyright 2023 by Alexandra Mai</p>
            </div>
        </div>
    )
};

export default Footer;
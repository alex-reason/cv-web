import PortfolioShow from '../components/PortfolioShow';
import Title from '../components/Title';
import { portfolioData } from '../assets/data';

const Portfolio = () => {
    return (
        <section id='portfolio' className='section portfolio'>
            <Title  direction='right'>Portfolio</Title>
            <PortfolioShow data={portfolioData} />
        </section>
    )
};

export default Portfolio;
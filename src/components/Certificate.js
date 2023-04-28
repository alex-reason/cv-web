import { certData as data } from '../assets/data';
import person2 from '../assets/person2.png';
const Certificate = () => {
    const renderedCertificates = data && data.map(cert => {
        return (
            <div key={cert.id} className='certificate__item reveal'>
                <a href={cert.url} target='__blank'><p>{cert.detail}</p></a>
                <a href={cert.url} target='__blank'><h1 className='heading-link'>{cert.title}</h1></a>
            </div>
        )
    })
    return (
        <div className='certificate'>
            <img src={person2} alt='from Blush by Elina Cecilia Giglio' title='from Blush by Elina Cecilia Giglio'/>
            {renderedCertificates}
        </div>
    )
};

export default Certificate;

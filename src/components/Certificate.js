import { certData as data } from '../assets/data';

const Certificate = () => {
    const renderedCertificates = data && data.map(cert => {
        return (
            <div key={cert.id} className='certificate__item content reveal'>
                <a href={cert.url} target='__blank'><p>{cert.detail}</p></a>
                <a href={cert.url} target='__blank'><h1 className='heading-link'>{cert.title}</h1></a>
            </div>
        )
    })
    return (
        <div className='certificate'>
            {renderedCertificates}
        </div>
    )
};

export default Certificate;

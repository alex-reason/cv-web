import Title from '../components/Title';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Certificate from '../components/Certificate';

const Competencies = () => {

    return (
        <div id='competencies' className='section competencies'>
            <Title direction='left'>
                Certificates and Competencies
            </Title>
            <Certificate />
            <Skills />
            <Experience />
            <p className='competencies__summary reveal'>
                I regularly work with clients and lawyers, and as a paralegal, I deal with a huge database of information and documents.
                So, communication and attention-to-detail are skills I've greatly honed!
                I know these skills will be very useful in developer work.
            </p>
        </div>
    )
};

export default Competencies;
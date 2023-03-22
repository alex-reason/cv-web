import { skillsData as data} from '../assets/data';

const Skills = () => {
    const renderedSkillContainer = data && data.map(skill => {
        const renderedSkills = skill.details.map(detail => {
            return <li key={`${skill.title}-${(Math.random() * 3)}`}>{detail}</li>
        });

        return (
            <div className='skill__item reveal' key={skill.title}>
                <div className='skill__container skill__container-left'>
                    {skill.logo}{skill.title}
                </div>
                <div className='skill__container skill__container-right'>{renderedSkills}</div>
            </div>
        )
    })
    return (
        <div className='skill'>
            {renderedSkillContainer}
        </div>
    )
};

export default Skills;
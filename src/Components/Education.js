import ISTY from '../Assets/Images/ISTYLogo.png'
import ParisSaclay from '../Assets/Images/ParisSaclayLogo.png'

import { CiLocationOn, CiCalendar } from "react-icons/ci";

function Education() {

    const Educations = [
        {
            major: 'Software Engineering',
            school: 'ISTY - Institut des Sciences et Techniques des Yvelines',
            icon: ISTY,
            location: 'Vélizy-villacoublay, FR',
            date: 'Sep 2021 - Sep 2024',
            description: [
                'Specialization: IATIC – Information and Communication Technology Architecture Engineer',
                'The program covers system and network architecture, software engineering, and IT infrastructure, combining rigorous theoretical foundations with applied technical training.'
            ],
            link: "https://www.isty.uvsq.fr/enseignements" 
        },
        {
            major: 'Cybersecurity',
            school: 'Paris Saclay University',
            icon: ParisSaclay,
            location: 'Versaille, FR',
            date: 'Sep 2023 - Sep 2024',
            description: [
                'Specialization: SeCReTS – Content, Network, telecommunications and Systems Security',
                'The program covers core cybersecurity domains including cryptography, network and system security, and secure application design. It provides hands-on experience in vulnerability analysis, reverse engineering, intrusion detection, incident response, and web and Windows security.'
            ],
            link: "https://www.universite-paris-saclay.fr/en/education/masters-degree/computer-science/m2-securite-des-contenus-des-reseaux-des-telecommunications-et-des-systemes"
        },
        {
            major: 'Engineering Integrated Preparatory Program',
            school: 'ISTY - Institut des Sciences et Techniques des Yvelines',
            icon: ISTY,
            location: 'Mantes-la-Ville, FR',
            date: 'Sep 2019 - Sep 2021',
            description: [
                'Two-year integrated preparatory program for engineering studies with intensive training in mathematics, computer science, physics, and engineering fundamentals.'
            ],
            link: "https://www.isty.uvsq.fr/enseignements-3"
        }
    ]

    return (
        <>
            <div className='min-h-screen shadow-inner pt-4 pb-4' id='Education'>
                <h1 className='text-center text-xl lg:text-5xl p-4 text-blue-600 underline underline-offset-8'><strong>Education</strong></h1>
                <div className='flex flex-col h-full items-center'>
                    {Educations.map((educ) => (
                        <div className='bg-white m-auto w-11/12 lg:w-1/2 rounded-xl p-10 mb-4 border shadow-xl'>
                            <div className='flex'>
                                <div className='w-2/3'>
                                    <h2 className='text-xl lg:text-3xl'><strong>{educ.major}</strong></h2>
                                    <h3 className='text-xs lg:text-xl'>{educ.school}</h3>
                                </div>
                                <div className='w-1/3'>
                                    <img className='m-auto mt-2 mb-2' src={educ.icon} />
                                </div>
                            </div>
                            <div className='flex items-center mt-4'>
                                <CiLocationOn />
                                <p><strong>{educ.location}</strong></p>
                            </div>
                            <div className='flex items-center'>
                                <CiCalendar/>
                                <p><strong>{educ.date}</strong></p>
                            </div>
                            <p className='mt-3 space-y-1 text-xs lg:text-sm'>
                                <ul className="mb-4">
                                    {educ.description.map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                                <p><strong>More details: </strong><a href={educ.link} target="_blank" className='text-blue-500 hover:underline'>Click here</a> </p>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default Education
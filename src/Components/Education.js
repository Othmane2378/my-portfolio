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
                'The program covers system and network architecture, software engineering, and IT infrastructure, combining rigorous theoretical foundations with applied technical training..'
            ]
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
            ]
        },
        {
            major: 'Engineering Integrated Preparatory Program',
            school: 'ISTY - Institut des Sciences et Techniques des Yvelines',
            icon: ISTY,
            location: 'Mantes-la-Ville, FR',
            date: 'Sep 2019 - Sep 2021',
            description: [
                'Two-year integrated preparatory program for engineering studies with intensive training in mathematics, computer science, physics, and engineering fundamentals.'
            ]
        }
    ]

    return (
        <>
            <div className='min-h-screen shadow-inner pt-4 pb-4' id='Education'>
                <h1 className='text-center text-5xl p-4 text-blue-600 underline underline-offset-8'><strong>Education</strong></h1>
                <div className='flex flex-col h-full items-center'>
                    {Educations.map((educ) => (
                        <div className='bg-white m-auto w-1/2 rounded-xl p-10 mb-4 border shadow-xl'>
                            <div className='flex'>
                                <div className='w-2/3'>
                                    <h2 className='text-3xl'><strong>{educ.major}</strong></h2>
                                    <h3>{educ.school}</h3>
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
                            <p className='mt-3'>
                                <ul className="mb-4 space-y-1">
                                    {educ.description.map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default Education
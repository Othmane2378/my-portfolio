import Gatewatcher from '../Assets/Images/GatewatcherLogo.png'
import SpectrumGroupe from '../Assets/Images/SpectrumGroupLogo.png'

import { CiLocationOn, CiCalendar } from "react-icons/ci";

function Experiences() {

    const Experiences = [
        {
            role: 'Python Backend Developer',
            type: 'Permanent',
            company: 'Gatewatcher',
            icon: Gatewatcher,
            location: 'Puteaux, FR',
            date: 'Oct 2024 - Dec 2025',
            description: [
                'GenAI & Cyber Threat Intelligence backend developer',
                'Development of features on the CTI and GenAI solutions (FastAPI)',
                'Development of new CTI collectors to collect datas (leaks, malwares, CVEs, …)',
                'Development of new AI Agents for CTI and GenAI solutions',
                'MCO on production collectors to fix them as soon as possible or improve them',
                'Participation in technical feature designs (search, implementation, infrastructure, testing, presentation)',
                'Improvement of unitary tests'
            ]
        },
        {
            role: 'Cybersecurity Engineer',
            type: 'Intern',
            company: 'Gatewatcher',
            icon: Gatewatcher,
            location: 'Puteaux, FR',
            date: 'Apr 2024 - Oct 2024',
            description: [
                'Development of an SDK in Golang. CLI enabling verifications during Python package development',
                'Development of a Python library to interact with the solution',
                'Development of Python packages to interact with cybersecurity tools such as Fortigate, HarfangLab, SentinelOne, Microsoft Entra-ID, and AIONIQ',
                'Deployment of Docker containers for test pipelines on GitLab',
                'Documentation'
            ]
        },
        {
            role: 'Jira Consultant',
            type: 'Intern',
            company: 'Spectrum Group',
            icon: SpectrumGroupe,
            location: 'Antony, FR',
            date: 'May 2023 - July 2023',
            description: [
                'Jira Administration: workspace configuration, workflow and status design, role and permission management, implementation of automations to streamline team processes',
                'Handling of client tickets with written technical reports summarizing analyses and findings (research, diagnostics, recommendations)'
            ]
        },
        {
            role: 'Jalios Developer',
            type: 'Intern',
            company: 'Spectrum Group',
            icon: SpectrumGroupe,
            location: 'Antony, FR',
            date: 'May 2022 - Jun 2022',
            description: [
                'HTML & CSS',
                'Developpement of templates for websites using Jalios solutions.',
            ]
        }
    ]

    return (
        <>
            <div className='min-h-screen bg-slate-50 shadow-inner pt-4 pb-4' id='Experiences'>
                <h1 className='text-center text-5xl p-4 text-blue-600 underline underline-offset-8'><strong>Experiences</strong></h1>
                <div className='flex flex-col h-full items-center'>
                    {Experiences.map((exp) => (
                        <div className='bg-white m-auto w-1/2 rounded-xl p-10 mb-4 border shadow-xl'>
                            <h2 className='text-3xl'><strong>{exp.role}</strong></h2>
                            <h3>{exp.company} - {exp.type}</h3>
                            <img className='size-1/3 m-auto mt-2 mb-2' src={exp.icon} />
                            <div className='flex items-center'>
                                <CiLocationOn />
                                <p><strong>{exp.location}</strong></p>
                            </div>
                            <div className='flex items-center'>
                                <CiCalendar/>
                                <p><strong>{exp.date}</strong></p>
                            </div>
                            <p className='mt-3'>
                                <ul className="list-disc list-inside mb-4 space-y-1">
                                    {exp.description.map((item) => (
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

export default Experiences
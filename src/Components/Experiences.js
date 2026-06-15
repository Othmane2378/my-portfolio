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
                'Development of RESTful APIs in Python for CTI and GenAI projects: design and implementaUon of new features, debugging, improvements, unit testing, and development of data collectors (data leaks, malwares, CVEs…), optimization of a combo list parsing algorithm: +300% increase in supported formats',
                'Integration and deployment of AI agents (reporting, web search, company industry analyze, ...)',
                'End-to-end feature ownership: requirements analysis, technical decision-making, implementation, testing and stakeholder presentations',
                'Production deployment maintenance: hotfixes, continuous improvements and operational monitoring',
                'Collaboration within an international team following Agile methodologies: CI/CD, code reviews, mentoring and onboarding of interns and apprentices',
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
                'Development of a Golang CLI SDK to automate product compliance checks and repetitive tasks from the design phase (shift-left approach)',
                'Development of a Python library for integration with the Reflex SOAR and packages (connectors) for cybersecurity tools: Fortigate, HarfangLab, SentinelOne, Entra-ID, AIONIQ',
                'Creation of Docker containers for Gitlab CI/CD pipelines: unit test execution and package quality checks',
                'Technical documentation writing, unit testing implementation (Pytest) and knowledge transfer to the team',
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
                <h1 className='text-center text-xl lg:text-5xl p-4 text-blue-600 underline underline-offset-8'><strong>Experiences</strong></h1>
                <div className='flex flex-col h-full items-center'>
                    {Experiences.map((exp) => (
                        <div className='bg-white w-11/12 lg:w-1/2 rounded-xl p-10 mb-4 border shadow-xl'>
                            <h2 className='text-xl lg:text-3xl'><strong>{exp.role}</strong></h2>
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
                                <ul className="list-disc list-inside mb-4 space-y-1 text-xs lg:text-sm">
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
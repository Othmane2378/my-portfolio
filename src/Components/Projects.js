import hacking from '../Assets/Images/glitching-hacker-hacking.gif'
import iadog from '../Assets/Images/iadog.jpeg'
import gif_2048 from '../Assets/Images/2048.gif'
import triominos from '../Assets/Images/triominos.jpg'
import the_island from '../Assets/Images/the_island.jpeg'
import robot from '../Assets/Images/robot.jpg'
import mangas from '../Assets/Images/mangas.jpg'

function Projects() {

    const projects = [
        {
            name: 'Capture the Flag (CTF)',
            type: 'School Cybersecurity Project',
            image: hacking,
            description: [
                'Completion of several cybersecurity challenges:',
                'Cryptography: Signature verification, Decryption using vulnerabilities in RSA and Vernam encryption.',
                'Networking : XSS and transversal path vulnerabilities exploitation, analysis and extraction of information from a Wireshark network capture.',
                'System : Exploiting buffer overflow, cracking a weak password on a Linux user.',
                'Reverse engineering : finding a password stored in plain text, analyzing assembly code to determine the logic behind a password validation code.',
                'Writing vulnerability reports detailing how to exploit vulnerabilities in the challenges.',
            ],
            skills: ['Wireshark', 'KaliLunx', 'C', 'Python', 'Crypthography','John the ripper', 'IDA']
        },
        {
            name: 'IADOG (AI Dog for Visually Impaired people)',
            type: 'School Interfiliaire Project',
            image: iadog,
            description: [
                'Idea born out of a genuine desire to help others.',
                'Participation as the robot s movement supervisor.',
                'Programming, assembly, and coordination of the various components to make the robot autonomous.'
            ],
            skills: ['R.0.S', 'Python', 'Arduino', 'Electronics']
        },
        {
            name: 'The Island',
            type: 'School Programming Project',
            image: the_island,
            description: [
                'Development of a game in Java language.',
                'Project worked on in a group of five.',
                'Participation in this project as "Project Manager" and "Designer"'
            ],
            skills: ['Java', 'Photoshop']
        },
        {
            name: 'Programming DOMINO/TRIOMINO',
            type: 'School Programming Project',
            image: triominos,
            description: [
                'Development of a game in C language by using SDL library.',
                'Project worked on in a group of sever.',
            ],
            skills: ['C', 'SDL']
        },
        {
            name: '2048',
            type: 'School Programming project',
            image: gif_2048,
            description: [
                'Project worked on in a group of two.',
                'Development of a game in C language using the SDL graphics library.'
            ],
            skills: ['C', 'SDL']
        },
        {
            name: 'Autonomous Vehicule - Emergency Braking System',
            type: 'School Mechatronics Project',
            image: robot,
            description: [
                'Development of an emergency braking system for a car.',
                'Design of the car chassis.',
                'Installation of an infrared sensor to detect obstacles.',
                'Car capable of reacting to obstacles (turning, stopping, reversing, slowing down).'
            ],
            skills: ['Arduino', 'C', 'Electronics']
        },
        {
            name: 'Manga/Anime website',
            type: 'School Web Programming Project',
            image: mangas,
            description: [
                'Creation of a website using HTML language combined with CSS overlay to design the site.',
                'UI/UX, implementation of a simple and streamlined design to create an ergonomic interface.'
            ],
            skills: ['HTML', 'CSS']
        }
    ]

    return (
        <>
            <div className='min-h-screen bg-slate-50 shadow-inner pt-4 pb-4' id='Projects'>
                <h1 className='text-center text-5xl p-4 text-blue-600 underline underline-offset-8'><strong>Projects</strong></h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-8'>
                    {projects.map((project) => (
                        <div className='bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow'>
                            <div className='h-48 overflow-hidden'>
                                <img src={project.image} className='w-full h-full object-cover transition-transform hover:scale-105'/>
                            </div>
                            <div className='p-6'>
                                <h2 className='text-xl font-bold text-brown-600 mb-2'><strong>{project.name}</strong></h2>
                                <h3 className='text-gray-600 mb-4'><strong>{project.type}</strong></h3>
                                <ul className="mb-4 space-y-1 px-1 text-xs">
                                    {project.description.map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                                <div className='flex flex-wrap'>
                                    {project.skills.map((item) => (
                                        <span className='m-1 bg-blue-700 text-white text-xs px-4 rounded-full'>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default Projects
import { SiPython, SiC, SiGo, SiJavascript, SiReact, SiNodedotjs, SiHtml5, SiCss, SiGit, SiFastapi, SiDocker, SiCplusplus, SiPydantic, SiKubernetes, SiLangchain, SiLanggraph, SiOpenai, SiOllama, SiGithubcopilot,SiNextdotjs } from 'react-icons/si';

function Skills() {

    const WebSkills = [
        { name: 'HTML', icon: <SiHtml5 className="text-orange-800" size={100} /> },
        { name: 'CSS', icon: <SiCss className="text-blue-800" size={100} /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-700" size={100} /> },
        { name: 'React.js', icon: <SiReact className="text-blue-800" size={100} /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-800" size={100} /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black" size={100} /> },
    ];

    const ProgrammingSkills = [
        { name: 'Python', icon: <SiPython size={100} /> },
        { name: 'Golang', icon: <SiGo className="text-cyan-500" size={100} /> },
        { name: 'C', icon: <SiC className="text-blue-800" size={100} /> },
        { name: 'C++', icon: <SiCplusplus className="text-blue-800" size={100} /> },
        { name: 'Git', icon: <SiGit className="text-red-800" size={100} /> },
        { name: 'Docker', icon: <SiDocker className="text-blue-800" size={100} /> },
        { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-800" size={100} /> },
    ]

    const APISkills = [
        { name: 'FastAPI', icon: <SiFastapi className="text-green-800" size={100} /> },
        { name: 'Pydantic', icon: <SiPydantic className="text-pink-600" size={100} /> },
    ]

    const IASkills = [
        { name: 'OpenAI API', icon: <SiOpenai size={100} /> },
        { name: 'Ollama', icon: <SiOllama size={100} /> },
        { name: 'Langgraph', icon: <SiLangchain size={100} /> },
        { name: 'Langchain', icon: <SiLanggraph size={100} /> },
        { name: 'Copilote', icon: <SiGithubcopilot className="text-blue-600" size={100} />}
    ]

    return (
        <>
            <div className='Skills-page min-h-screen shadow-inner ' id='Skills'>
                <h1 className='text-center text-5xl p-4 text-blue-600 underline underline-offset-8'><strong>Skills</strong></h1>
                <div className='flex flex-wrap'>
                    {/* Programming Skills */}
                    <div className='basis-1/2 mx-auto p-4 m-3'>
                        <h2 className='text-2xl text-center pb-4 text-blue-500 underline underline-offset-8'><strong>Programming Development</strong></h2>
                        <div className='flex flex-wrap'>
                            {ProgrammingSkills.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center basis-1/3">
                                    {skill.icon}
                                    <span className="mt-2 font-medium p-1">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Web developement Skills */}
                    <div className='basis-1/2 mx-auto p-4 m-3'>
                        <h2 className='text-2xl text-center pb-4 text-blue-500 underline underline-offset-8'><strong>Web Development</strong></h2>
                        <div className='flex flex-wrap'>
                            {WebSkills.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center basis-1/3">
                                    {skill.icon}
                                    <span className="mt-2 font-medium p-1">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* API Skills */}
                    <div className='basis-1/2 mx-auto p-4 m-3'>
                        <h2 className='text-2xl text-center pb-4 text-blue-500 underline underline-offset-8'><strong>API</strong></h2>
                        <div className='flex flex-wrap'>
                            {APISkills.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center basis-1/3">
                                    {skill.icon}
                                    <span className="mt-2 font-medium p-1">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className='basis-1/2 mx-auto p-4 m-3'>
                        {/* IA developement Skills */}
                        <h2 className='text-2xl text-center pb-4 text-blue-500 underline underline-offset-8'><strong>IA</strong></h2>
                        <div className='flex flex-wrap'>
                            {IASkills.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center basis-1/3">
                                    {skill.icon}
                                    <span className="mt-2 font-medium p-1">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )

}

export default Skills
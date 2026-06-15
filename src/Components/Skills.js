import { SiPython, SiC, SiGo, SiJavascript, SiReact, SiNodedotjs, SiHtml5, SiCss, SiGit, SiFastapi, SiDocker, SiCplusplus, SiPydantic, SiKubernetes, SiLangchain, SiLanggraph, SiOpenai, SiOllama, SiGithubcopilot,SiNextdotjs } from 'react-icons/si';
import { BsFiletypeSql } from "react-icons/bs";

function Skills() {

    const WebSkills = [
        { name: 'HTML', icon: <SiHtml5 className="text-orange-800 md:text-4xl lg:text-8xl" /> },
        { name: 'CSS', icon: <SiCss className="text-blue-800 md:text-4xl lg:text-8xl"  /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-700 md:text-4xl lg:text-8xl"  /> },
        { name: 'React.js', icon: <SiReact className="text-blue-800 md:text-4xl lg:text-8xl"  /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-800 md:text-4xl lg:text-8xl"  /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black md:text-4xl lg:text-8xl"  /> },
    ];

    const ProgrammingSkills = [
        { name: 'Python', icon: <SiPython className='md:text-4xl lg:text-8xl' /> },
        { name: 'Golang', icon: <SiGo className="text-cyan-500 md:text-4xl lg:text-8xl" /> },
        { name: 'C', icon: <SiC className="text-blue-800 md:text-4xl lg:text-8xl" /> },
        { name: 'C++', icon: <SiCplusplus className="text-blue-800 md:text-4xl lg:text-8xl" /> },
        { name: 'Git', icon: <SiGit className="text-red-800 md:text-4xl lg:text-8xl" /> },
        { name: 'Docker', icon: <SiDocker className="text-blue-800 md:text-4xl lg:text-8xl" /> },
        { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-800 md:text-4xl lg:text-8xl" /> },
        { name: 'SQL', icon: <BsFiletypeSql className="md:text-4xl lg:text-8xl" /> },
    ]

    const APISkills = [
        { name: 'FastAPI', icon: <SiFastapi className="text-green-800 md:text-4xl lg:text-8xl" /> },
        { name: 'Pydantic', icon: <SiPydantic className="text-pink-600 md:text-4xl lg:text-8xl" /> },
    ]

    const IASkills = [
        { name: 'OpenAI API', icon: <SiOpenai className='md:text-4xl lg:text-8xl' /> },
        { name: 'Ollama', icon: <SiOllama className='md:text-4xl lg:text-8xl' /> },
        { name: 'Langgraph', icon: <SiLangchain className='md:text-4xl lg:text-8xl' /> },
        { name: 'Langchain', icon: <SiLanggraph className='md:text-4xl lg:text-8xl' /> },
        { name: 'Copilote', icon: <SiGithubcopilot className="text-blue-600 md:text-4xl lg:text-8xl"  />}
    ]

    return (
        <>
            <div className='Skills-page min-h-screen shadow-inner ' id='Skills'>
                <h1 className='text-center text-xl lg:text-5xl p-4 text-blue-600 underline underline-offset-8'><strong>Skills</strong></h1>
                <div className='flex flex-wrap'>
                    {/* Programming Skills */}
                    <div className='basis-1/2 mx-auto p-4 m-3'>
                        <h2 className='text-sm lg:text-2xl text-center pb-4 text-blue-500 underline underline-offset-8'><strong>Programming</strong></h2>
                        <div className='flex flex-wrap'>
                            {ProgrammingSkills.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center basis-1/3 m-auto">
                                    {skill.icon}
                                    <span className="text-base  mt-2 font-medium p-1">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Web developement Skills */}
                    <div className='basis-1/2 mx-auto p-4 m-3'>
                        <h2 className='text-sm lg:text-2xl text-center pb-4 text-blue-500 underline underline-offset-8'><strong>Web</strong></h2>
                        <div className='flex flex-wrap'>
                            {WebSkills.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center basis-1/3 m-auto">
                                    {skill.icon}
                                    <span className="mt-2 lg:font-medium p-1">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* API Skills */}
                    <div className='basis-1/2 mx-auto p-4 m-3'>
                        <h2 className='text-sm lg:text-2xl text-center pb-4 text-blue-500 underline underline-offset-8'><strong>API</strong></h2>
                        <div className='flex flex-wrap'>
                            {APISkills.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center basis-1/3 m-auto">
                                    {skill.icon}
                                    <span className="mt-2 lg:font-medium p-1">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className='basis-1/2 mx-auto p-4 m-3'>
                        {/* IA developement Skills */}
                        <h2 className='text-sm lg:text-2xl text-center pb-4 text-blue-500 underline underline-offset-8'><strong>IA</strong></h2>
                        <div className='flex flex-wrap'>
                            {IASkills.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center basis-1/3 m-auto">
                                    {skill.icon}
                                    <span className="mt-2 lg:font-medium p-1">{skill.name}</span>
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
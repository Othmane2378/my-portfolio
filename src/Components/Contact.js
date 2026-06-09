import { CiPhone, CiMail, CiLocationOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiRootme } from "react-icons/si";

function Contact() {

    const icon_size = 60

    return (
        <>
            <div className='min-h-screen shadow-inner pt-4 pb-4' id='Contact'>
                <h1 className='text-center text-5xl p-4 text-blue-600 underline underline-offset-8'><strong>Let's meet us !</strong></h1>
                <p className='text-center my-10'>Thanks for the reading ! Feel free to contact me if you have any opportunities</p>
                <div className='flex mt-3'>
                    {/* Contact info */}
                    <div className='w-1/2 m-auto rounded-lg shadow-2xl border p-5 mt-4'>
                        <div className="w-1/2 m-auto">
                            <h2 className="text-2xl mb-4 text-center"><strong>Contact information</strong></h2>
                            <div className="m-auto">
                                <div className="flex">
                                    <CiMail size={icon_size}/>
                                    <p className="mx-10">
                                        <strong className="text-blue-500 text-lg">Email</strong><br />
                                        <p>abdimi.othmane@gmail.com</p>
                                    </p>
                                </div>
                                {/* <div className="flex">
                                    <CiPhone size={icon_size}/>
                                    <p className="mx-10">
                                        <strong className="text-blue-500 text-lg">Phone</strong><br />
                                        <p>(+33) 7 XX XX XX XX</p>
                                    </p>
                                </div> */}
                                <div className="flex">
                                    <CiLocationOn size={icon_size}/>
                                    <p className="mx-10">
                                        <strong className="text-blue-500 text-lg">Location</strong><br />
                                        <p>Paris, FR</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 m-auto">
                            <h2 className="text-2xl mb-4 text-center"><strong>Follow me</strong></h2>
                            <div className="flex">
                                <a href="https://github.com/Othmane2378" target="_blank" className="m-auto">
                                    <button className="bg-blue-600 mx-3 p-4 rounded-full">
                                        <FiGithub size={icon_size} className="text-white"/>
                                    </button>
                                </a>
                                <a href="https://www.linkedin.com/in/othmane-abd/" target="_blank" className="m-auto">
                                    <button className="bg-blue-600 mx-3 p-4 rounded-full">
                                        <FaLinkedinIn size={icon_size} className="text-white"/>
                                    </button>
                                </a>
                                <a href="https://www.root-me.org/InTheGame?lang=fr" target="_blank" className="m-auto">
                                    <button className="bg-blue-600 mx-3 p-4 rounded-full">
                                        <SiRootme size={icon_size} className="text-white"/>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
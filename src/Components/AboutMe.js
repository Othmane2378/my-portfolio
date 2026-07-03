import pp from '../Assets/Images/3D5B588B-3EC0-4657-91A8-2F31B24B1999_1_201_a.jpeg'

import { MdOutlineSportsBasketball, MdMonochromePhotos } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { CiBasketball } from 'react-icons/ci';

function AboutMe() {
    const icon_size = 50

    return (
        <>
            <div className='min-h-screen' id="AboutMe">
                <h1 className='text-center text-xl lg:text-5xl p-4 text-blue-600 underline underline-offset-8'><strong>Who am I ?</strong></h1>
                <div className='flex flex-col lg:flex-row item-center m-4'>
                    <div className='basis-1/2 content-center'>
                        <img src={pp} className='w-1/2 rounded-full border shadow-xl m-auto'></img>
                    </div>
                    <div className='basis-2/3 content-center'>
                        <div className='w-11/12 m-auto rounded-xl p-10 border shadow-2xl'>
                            <div className='pb-5'>
                                <h2 className='text-xl md:text-3xl text-blue-500 pb-2'><strong>Presentation</strong></h2>
                                <p className='text-xs md:text-lg'>
                                    <strong>Software Engineer</strong> with hands-on experience in <strong>Python backend development</strong> across <strong>CTI and Generative AI</strong>.<br /> 
                                    Dual academic background in <strong>Computer Science Engineering (ISTY)</strong> and a <strong>Master’s degree in Cybersecurity (Paris-Saclay Univ.)</strong>.<br />
                                    Known for <strong>strong autonomy and rigorous development practices</strong> throughout the full software lifecycle, as well as the <strong>ability to share knowledge eﬀectively (mentoring of interns and apprentices)</strong>.<br />
                                    <strong>Open to relocation.</strong>
                                </p>
                            </div>
                            <div className='pb-5'>
                                <h2 className='text-xl md:text-3xl text-blue-500 pb-2'><strong>Languages</strong></h2>
                                <div className='text-xs md:text-lg'>
                                    <p><strong>French(Native)</strong></p>
                                    <p><strong>English(B2)</strong>: Work proficiency, TOEIC 785/990</p>
                                    <p><strong>Deutsch(A1/A2)</strong>: School notions</p>
                                    <p><strong>Korean(A1)</strong>: Beginner, self learning</p>
                                </div>
                            </div>
                            <div className='pb-5'>
                                <h2 className='text-xl md:text-3xl text-blue-500 pb-2'><strong>Hobbies & Interests</strong></h2>
                                <div className='flex flex-wrap'>
                                    <div className='flex items-center m-auto'>
                                        <CiBasketball className='md:text-xl lg:text-4xl'/>
                                        <p><strong>Sport</strong>: Basketball, Football</p>
                                    </div>
                                    <div className='flex items-center m-auto'>
                                        <GrTechnology className='md:text-xl lg:text-4xl' />
                                        <p><strong>Technologies</strong>: IA, cybersecurity</p>
                                    </div>
                                    <div className='flex items-center m-auto'>
                                        <MdMonochromePhotos className='md:text-xl lg:text-4xl' />
                                        <p><strong>Photography</strong>: beginner, self-taught</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default AboutMe
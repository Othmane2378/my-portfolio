import pp from '../Assets/Images/profile_picture.jpg'

import { MdOutlineSportsBasketball, MdMonochromePhotos } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { CiBasketball } from 'react-icons/ci';

function AboutMe() {
    return (
        <>
            <div className='min-h-screen' id="AboutMe">
                <h1 className='text-center text-5xl p-4 text-blue-600 underline underline-offset-8'><strong>Who am I ?</strong></h1>
                <div className='flex flex-wrap item-center mt-4'>
                    <div className='basis-1/3 content-center'>
                        <img src={pp} className='w-1/2 rounded-full border shadow-xl m-auto'></img>
                    </div>
                    <div className='basis-2/3 content-center'>
                        <div className='w-4/5 m-auto rounded-xl p-10 border shadow-2xl'>
                            <div className='pb-5'>
                                <h2 className='text-3xl text-blue-500 pb-2'><strong>Quick presentation</strong></h2>
                                <p>
                                    <strong>Software Engineer</strong> with hands-on experience in <strong>Python backend development</strong> across <strong>CTI and Generative AI</strong>.<br /> 
                                    Dual academic background in <strong>Computer Science Engineering (ISTY)</strong> and a <strong>Master’s degree in Cybersecurity (Paris-Saclay Univ.)</strong>.<br />
                                    Known for <strong>strong autonomy and rigorous development practices</strong> throughout the full software lifecycle, as well as the <strong>ability to share knowledge eﬀectively (mentoring of interns and apprentices</strong>.
                                </p>
                            </div>
                            <div className='pb-5'>
                                <h2 className='text-3xl text-blue-500 pb-2'><strong>Languages</strong></h2>
                                <div className='flex'>
                                    <div className='m-auto'>
                                        <p><strong>French(Native)</strong></p>
                                    </div>
                                    <div className='m-auto'>
                                        <p><strong>English(B2)</strong>: TOEIC 785</p>
                                    </div>
                                    <div className='m-auto'>
                                        <p><strong>Deutsch(A1/A2)</strong>: School notions</p>
                                    </div>
                                    <div className='m-auto'>
                                        <p><strong>Korean(A1)</strong>: self learning</p>
                                    </div>
                                </div>
                            </div>
                            <div className='pb-5'>
                                <h2 className='text-3xl text-blue-500 pb-2'><strong>Hobbies & Interests</strong></h2>
                                <div className='flex flex-wrap'>
                                    <div className='flex items-center m-auto'>
                                        <CiBasketball size={50} />
                                        <p><strong>Sport</strong>: Basketball, Football</p>
                                    </div>
                                    <div className='flex items-center m-auto'>
                                        <GrTechnology size={50}/>
                                        <p><strong>Technologies</strong>: IA, cybersecurity</p>
                                    </div>
                                    <div className='flex items-center m-auto'>
                                        <MdMonochromePhotos size={50}/>
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
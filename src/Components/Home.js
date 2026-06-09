import CV from '../Assets/CV/CV_Othmane_Abdimi_ENG.pdf'
import { TypeAnimation } from 'react-type-animation';
import coding from '../Assets/Images/coding-boy.gif'

function Home() {
    return (
        <>
            <div className='flex flex-row h-screen bg-slate-50' id='Home'>
                <div className='basis-2/3 flex flex-col m-auto ml-4'>
                    <h1 className='text-left xl:text-9xl md:text-7xl xs:text-2xl'>HI <strong className='text-blue-600'>THERE !</strong></h1>
                    <h1 className='text-left xl:text-2xl md:text-xl xs:text-l '>
                        <TypeAnimation
                            sequence={[
                            "SOFTWARE",
                            2000,
                            "CYBERSECURITY",
                            2000
                            ]}
                            speed={25}
                            repeat={Infinity}
                            style={{ fontSize: '2em', color: '00BFFF'}}
                        />ENGINEER
                    </h1>
                    <div className='text-left xl:text-2xl md:text-xl xs:text-l'>
                        <p className='text-shadow-2xl'>
                            Holder of <strong className='text-blue-600'>a degree in Software Engineering</strong> and <strong className='text-blue-600'>a master’s degree in Cybersecurity</strong>.<br />
                            Creative, curious and thoughtful, I am always eager to find solutions to problems.<br />
                            <strong className='text-blue-600'>Looking for new opportunities.</strong><br />
                        </p>
                    </div>
                    <div className='flex flex-row text-center mt-4'>
                        <div className='bg-slate-500 rounded-md p-4 hover:text-white hover:bg-blue-600'>
                            <a href='#Contact'>Contact Me</a>
                        </div>
                        <div className='bg-slate-500 rounded-md p-4 ml-6 hover:text-white hover:bg-blue-600'>
                            <a className='m-auto' href={CV} download='CV_Othmane_Abdimi_ENG.pdf'>Download my CV</a>
                        </div>
                    </div>
                </div>
                <div className='basis-1/3 m-auto'>
                    <img className="mx-auto" src={coding} alt="My profil picture"></img>
                </div>
            </div>
        </>
    )
}

export default Home
function NavBar() {
    return (
        <>
            <header className='sticky top-0 z-50 w-full'>
                <div className='flex sticky top-0 shadow-xl'>
                    <div className='text-right ml-auto text-xl'>
                        <nav className='flex items-center space-x-4 mr-3'>
                            <ul className='ml-auto m-2'><a href='#AboutMe'><strong className='text-blue-600 hover:underline underline-offset-8'>About Me</strong></a></ul>
                            <ul className='ml-auto m-2'><a href='#Experiences'><strong className='text-blue-600 hover:underline underline-offset-8'>Experiences</strong></a></ul>
                            <ul className='ml-auto m-2'><a href='#Education'><strong className='text-blue-600 hover:underline underline-offset-8'>Education</strong></a></ul>
                            <ul className='ml-auto m-2'><a href='#Projects'><strong className='text-blue-600 hover:underline underline-offset-8'>Projects</strong></a></ul>
                            <ul className='ml-auto m-2'><a href='#Skills'><strong className='text-blue-600 hover:underline underline-offset-8'>Skills</strong></a></ul>
                            <ul className='ml-auto m-2'><a href='#Contact'><strong className='text-blue-600 hover:underline underline-offset-8'>Contact</strong></a></ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar
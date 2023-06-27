import React, { useState } from 'react'
import navLinks from '../data/navLinks'
import { HashLink as Link } from 'react-router-hash-link'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Intro() {

    const [ active, setActive ] = useState('')
    const [text] = useTypewriter({
        words: ['adrian fernandez'],
        typeSpeed: 100,
    })

    return (
        <div className='flex flex-col items-start justify-center pt-4 px-4 lg:fixed lg:z-10 lg:mt-10 mb-10'>
            {/* Personal info */}
            <Link
                to='/'
                onClick={() => {
                    setActive('')
                    window.scrollTo(0, 0)
                }}
            >
                <h1 className='text-4xl md:text-5xl mb-1 md:mb-2 font-bold dark:text-dp-text-primary text-lp-text-primary font-russo'>
                    <span>{text}</span>
                    <span><Cursor/></span>
                </h1>
            </Link>
            <p className='text-base md:text-xl mb-3 font-medium italic dark:text-dp-text-secondary text-lp-text-secondary'>
                Full Stack Developer
            </p>
            <p className='text-sm max-w-lg dark:text-dp-text-secondary text-lp-text-secondary'>
                Based in Spain, using my skills to create digital products.
            </p>

            {/* Menu */}
            <nav className='nav block'>
                <ul className='mt-8 w-max'>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                        >
                            <Link to={`#${link.id}`} onClick={() => setActive(link.title)} className='group flex items-center py-2 active'>
                                <span className={`${ active === link.title ? 'dark:bg-dp-text-primary bg-lp-text-primary w-16' : 'dark:bg-dp-text-disabled bg-lp-text-disabled' } mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-lp-text-primary dark:group-hover:bg-dp-text-primary group-focus-visible:w-16 motion-reduce:transition-none`}></span>
                                <span className={`${ active === link.title ? 'dark:text-dp-text-primary text-lp-text-primary' : 'dark:text-dp-text-disabled text-lp-text-disabled' } text-xs font-bold uppercase tracking-widest group-hover:text-lp-text-primary dark:group-hover:text-dp-text-primary`}>{link.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* About */}
            <p className='text-sm max-w-lg dark:text-dp-text-secondary text-lp-text-secondary mt-8'>
            I am a highly creative person with an affinity for exploring diverse fields in both personally 
            and in my career.<br/><br/> Initially, I found it challenging to define what my ideal profession would be. 
            However, as a technology enthusiast and diversity advocate, I found that acquiring the knowledge 
            and skills to develop unique and innovative applications was right up my alley!
            </p>

            {/* Social media small devices */}
            {/* <div className='flex flex-row items-start justify-start w-full mt-8 hidden'>
                <a href='https://www.linkedin.com/in/adrianfernandezalv/' className='mr-8 dark:block hidden hover:scale-125 transition-all'>
                    <img 
                        src='/assets/icons/dp-github.svg/' 
                        alt='Github Icon'
                        className='w-8'
                    />
                </a>
                <a href='https://github.com/adrianfernandezalv' className='mr-8 dark:block hidden hover:scale-125 transition-all'>
                    <img 
                        src='/assets/icons/dp-linkedin.svg/' 
                        alt='Github Icon'
                        className='w-8' 
                    />
                </a>
                <a href='https://www.linkedin.com/in/adrianfernandezalv/' className='mr-8 dark:hidden hover:scale-125 transition-all'>
                    <img 
                        src='/assets/icons/lp-github.svg/' 
                        alt='Github Icon'
                        className='w-8'
                    />
                </a>
                <a href='https://github.com/adrianfernandezalv' className='mr-8 dark:hidden hover:scale-125 transition-all'>
                    <img 
                        src='/assets/icons/lp-linkedin.svg/' 
                        alt='Github Icon'
                        className='w-8' 
                    />
                </a>
            </div> */}
            
            {/* Social media large decives */}
            <div className = 'group items-start justify-start w-fit hover:w-full h-16 pt-10 cursor-pointer flex lg:mt-64'>
                <div className = 'flex items-center justify-center rounded-full z-50 absolute'>
                    <img 
                        src='/assets/icons/dp-social.png/' 
                        alt='Social Icon'
                        className='w-8 h-8 hover:scale-125 transition-all hidden dark:block'
                    />
                    <img 
                        src='/assets/icons/lp-social.png/' 
                        alt='Social Icon'
                        className='w-8 h-8 hover:scale-125 transition-all block dark:hidden'
                    />
                </div>
    
                <div className='absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:translate-x-16 flex hover:p-1 text-white'> {/* bg-green-300 scale-100 hover:bg-green-400 */} 
                    <a href='https://www.linkedin.com/in/adrianfernandezalv/' className='w-8 h-8 group-hover:rotate-0 transition-all duration-[0.6s] hidden dark:block'>
                        <img 
                            src='/assets/icons/dp-linkedin.svg/' 
                            alt='Linkedin Icon'
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/adrianfernandezalv/' className='w-8 h-8 group-hover:rotate-0 transition-all duration-[0.6s] block dark:hidden'>
                        <img 
                            src='/assets/icons/lp-linkedin.svg/' 
                            alt='Linkedin Icon'
                        />
                    </a>
                </div>
    
                <div className='absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:translate-x-32 flex hover:p-1 text-white'> {/* bg-blue-300 hover:bg-blue-400 */} 
                    <a href='https://github.com/adrianfernandezalv' className='w-8 h-8 group-hover:rotate-0 transition-all duration-[0.6s] hidden dark:block'>
                        <img 
                            src='/assets/icons/dp-github.svg/' 
                            alt='Github Icon'
                        />
                    </a>
                    <a href='https://github.com/adrianfernandezalv' className='w-8 h-8 group-hover:rotate-0 transition-all duration-[0.6s] block dark:hidden'>
                        <img 
                            src='/assets/icons/lp-github.svg/' 
                            alt='Github Icon'
                        />
                    </a>
                </div>

                <div className='absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:translate-x-48 flex hover:p-1 text-white'> {/* bg-blue-300 hover:bg-blue-400 */} 
                    <a href='/assets/resume.pdf' className='w-8 h-8 group-hover:rotate-0 transition-all duration-[0.6s] hidden dark:block'>
                        <img 
                            src='/assets/icons/dp-download.png/' 
                            alt='Download Icon'
                        />
                    </a>
                    <a href='/assets/resume.pdf' className='w-8 h-8 group-hover:rotate-0 transition-all duration-[0.6s] block dark:hidden'>
                        <img 
                            src='/assets/icons/lp-download.png/' 
                            alt='Download Icon'
                        />
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Intro

import React from 'react'

function Intro() {
    return (
        <div className="flex items-center justify-center flex-row text-center pt-20 pb-6">
            <div className=''>
                <h1 className="text-4xl md:text-5xl mb-1 md:mb-2 font-bold dark:text-white">
                Adrián Fernández
                </h1>
                <p className="text-base md:text-xl mb-3 font-medium">
                Full Stack Developer
                </p>
                <p className="text-sm max-w-xl mb-6 font-bold">
                I am a highly creative person with an affinity for exploring diverse
                fields in both personally and in my career. Initially, I found it
                challenging to define what my ideal profession would be. However, as a
                technology enthusiast and diversity advocate, I found that acquiring the
                knowledge and skills to develop unique and innovative applications was
                right up my alley!
                </p>
            </div>
            <img 
                src= '/public/assets/ReadyPlayerMe-Avatar.png' 
                alt="Avatar from myself"
                className='h-64 w-64'
            />
        </div>
    )
}

export default Intro

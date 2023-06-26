import React from 'react'
import PropTypes from 'prop-types'

function ProjectItem ({ title, imgUrl, stack, link }) {

    ProjectItem.propTypes = {
        title: PropTypes.array.isRequired,
        imgUrl: PropTypes.array.isRequired,
        stack: PropTypes.array.isRequired,
        link: PropTypes.array.isRequired,
    }

    return (
        <a 
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden'
        >
            <img 
                src={imgUrl} 
                alt="Project image"
                className='w-full h-36 md:h-48 object-cover cursor-pointer'    
            />
            <div className='w-full p-4'>
                <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white'>{title}</h3>
                <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white'>
                    {stack.map(item => (
                        <span key={item.id} className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md'>
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    )
}

export default ProjectItem
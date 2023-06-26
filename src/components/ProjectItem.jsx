import React from 'react'
import PropTypes from 'prop-types'

function ProjectItem ({ title, imgUrl, info, stack, link }) {

    ProjectItem.propTypes = {
        title: PropTypes.array.isRequired,
        imgUrl: PropTypes.array.isRequired,
        info: PropTypes.array.isRequired,
        stack: PropTypes.array.isRequired,
        link: PropTypes.array.isRequired,
    }

    return (
        <a 
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-row py-3 cursor-pointer'
        >
            <img 
                src={imgUrl} 
                alt="Project image"
                className='h-24 object-cover rounded-md border-2'
            />
            <div className='w-full pl-4'>
                <h3 className='text-sm mb-2 font-semibold text-lp-text-primary dark:text-dp-text-primary'>{title}</h3>
                <p className='text-xs mb-4 text-lp-text-secondary dark:text-dp-text-secondary'>{info}</p>
                <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs dark:text-dp-text-primary'>
                    {stack.map(item => (
                        <span key={item.id} className='inline-block px-1 py-0.5 font-semibold bg-[#22543d] bg-opacity-90 text-[#9ae6b4] dark:bg-[#22543d] dark:bg-opacity-25 dark:text-[#9ae6b4] rounded-lg'>
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    )
}

export default ProjectItem
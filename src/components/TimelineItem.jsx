import React from 'react'
import PropTypes from 'prop-types'


function TimelineItem ({ year, title, company, details, stack }) {

    // Props validations
    TimelineItem.propTypes = {
        year: PropTypes.array.isRequired,
        title: PropTypes.array.isRequired,
        company: PropTypes.array.isRequired,
        details: PropTypes.array.isRequired,
        stack: PropTypes.array.isRequired,
    }

    return (
        <ol className='flex flex-col md:flex-row relative border-l border-lp-divider dark:border-dp-divider py-2'>
            <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-lp-divider rounded-full mt-1.5 -left-1.5 border border-lp-divider dark:border-dp-divider dark:bg-dp-divider'/>
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                    <span className='inline-block px-2 py-1 font-semibold text-dp-text-primary dark:text-lp-text-primary bg-dp-background-default dark:bg-lp-background-default rounded-md'>{year}</span>
                    <h3 className='text-lg font-semibold text-lp-text-primary dark:text-dp-text-primary'>{title} · {company}</h3>
                    <p className='my-2 text-sm font-normal text-lp-text-secondary dark:text-dp-text-secondary'>{details}</p>
                </p>
                <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm text-lp-text-primary dark:text-dp-text-primary mt-2'>
                    <span className='bg-[#22543d] text-[#9ae6b4] text-xs font-bold p-0.5 rounded-sm'>STACK</span>
                    {stack.map(item => (
                        <span className='text-xs font-bold' key={item.id}>
                            {item}
                        </span>
                    ))}
                </p>
            </li>
        </ol>
    )
}

export default TimelineItem
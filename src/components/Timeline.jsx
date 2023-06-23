import React from 'react'
import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'
import Title from './Title'

function Timeline () {
    return (
        <div className='flex flex-col md:flex-row justify-center my-20'>
            <div className='w-full md:w-7/12'>
                <Title>EXPERIENCE</Title>
                {timeline.map(item => (
                    // eslint-disable-next-line react/jsx-key
                    <TimelineItem
                        year={item.year}
                        title={item.title}
                        company={item.company}
                        details={item.details}
                        stack={item.stack}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline
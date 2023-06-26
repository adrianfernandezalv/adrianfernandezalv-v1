import React from 'react'
import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'
import Title from './Title'

function Timeline () {
    return (
        <div className='flex flex-col md:flex-row justify-center lg:pl-8 lg:mt-16 mb-10'>
            <div className='w-full px-4 lg:px-0 lg:pr-4'>
                <Title>EXPERIENCE</Title>
                {timeline.map(item => (
                    <TimelineItem
                        key={item.id}
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
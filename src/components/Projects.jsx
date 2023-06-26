import React from 'react'
import project from '../data/project'
import ProjectItem from './ProjectItem'
import Title from './Title'

function Projects () {
    return (
        <div className='flex flex-col items-center justify-center'>
            <Title>PROJECTS</Title>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4'>
                {project.map(project => (
                    <ProjectItem
                        key={project.id}
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects
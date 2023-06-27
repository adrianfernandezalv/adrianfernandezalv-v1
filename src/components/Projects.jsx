import React from 'react'
import project from '../data/project'
import ProjectItem from './ProjectItem'
import Title from './Title'

function Projects () {
    return (
        <div className='flex flex-col justify-center lg:pl-8 px-4 mb-10' id='projects'>
            <Title>PROJECTS</Title>
            {project.map(project => (
                <ProjectItem
                    key={project.id}
                    imgUrl={project.imgUrl}
                    title={project.title}
                    stack={project.stack}
                    link={project.link}
                    info={project.info}
                />
            ))}
        </div>
    )
}

export default Projects
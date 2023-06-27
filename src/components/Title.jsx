import React from 'react'
import PropTypes from 'prop-types'

function Title ({ children, id }) {

    Title.propTypes = {
        children: PropTypes.array.isRequired,
        id: PropTypes.array.isRequired
    }

    return (
        <h1 id={id && id} className='text-xl font-russo font-bold mb-5 text-lp-text-primary dark:text-dp-text-primary'>
            {children}
        </h1>
    )
}

export default Title
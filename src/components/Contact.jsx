import React from 'react'
import Title from './Title'

function Contact () {
    return (
        <div className='flex flex-col justify-center lg:pl-8 px-4 mb-10'>
            <Title>CONTACT</Title>
            <div className='flex justify-center items-center py-4'>
                <form 
                    action="https://getform.io/f/fee328e9-682a-4da3-893b-06c487191f7c"
                    method='POST'
                    className='flex flex-col w-full'
                >
                    <input 
                        type="text" 
                        name='name'
                        placeholder='Name'
                        className='p-2 text-xs bg-transparent shadow-a-form rounded-md focus:outline-none'
                    />
                    <input 
                        type="text" 
                        name='email'
                        placeholder='Email'
                        className='my-2 p-2 text-xs bg-transparent shadow-a-form rounded-md focus:outline-none'
                    />
                    <textarea 
                        name="message" 
                        placeholder='Message'
                        rows="8"
                        className='p-2 mb-4 text-xs bg-transparent shadow-a-form rounded-md focus:outline-none resize-none'
                    />
                    <button 
                        type='submit'
                        className='text-center inline-block px-4 py-2 w-max text-xs font-bold rounded-md shadow-a-form text-lp-text-primary dark:text-dp-text-primary hover:scale-110 transition-all'
                    >
                        Contact me
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
import React from 'react'

const Note = ({title, description, id}) => {
  return (
    <div className='note-card  border border-grey-stroke bg-white-card shadow-md min-w-[8rem] w-max max-w-[20rem] rounded-lg p-[1.5rem] cursor-pointer '>
        <div className='w-full h-full relative '>
        <ul className='absolute right-0'>
          <li>I</li>
          <li>I</li>
        </ul>
        <h1 className='title font-bold text-xl w-10/12 mb-[.5rem]'>Lorem Ipsum</h1>
        <p className='description w-10/12 text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, enim!</p>
        </div>
        
    </div>
  )
}

export default Note
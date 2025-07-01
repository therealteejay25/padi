import { Notepad } from 'phosphor-react'
import React from 'react'

const Note = () => {
  return (
    <div className="bg-white/5 cursor-pointer border border-white/5 transition duration-100 hover:border-[#6B7280] flex space-x-5 items-center rounded-lg p-4 max-w-[50rem] w-full mx-4 mt-6">
        <div className='p-3 bg-white/5 rounded-full'><Notepad size={20} className='text-white/75' /></div>
        <div>
            <h2 className="text-lg font-semibold text-gray-200">Note Title</h2>
            <p className="text-gray-400">This is a sample note content. You can edit this note to add your own content.</p>
        </div>
    </div>
  )
}

export default Note
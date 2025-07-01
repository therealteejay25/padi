import { Plus } from 'phosphor-react'
import React from 'react'

const PlusButton = () => {
  return (
    <div className='h-11 fixed bottom-8 right-96 w-11 rounded-full justify-center items-center flex bg-[#6B7280] cursor-pointer'>
        <Plus size={24} className="text-[#252628]" />
    </div>
  )
}

export default PlusButton
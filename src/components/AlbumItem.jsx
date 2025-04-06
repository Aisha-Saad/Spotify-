import React from 'react'

const AlbumItem = ({image, name, desc,id}) => {
  return (
    <div className='min-[180px] p-2 px-3 rounde cursor-pointer hover:bg-[#ffffff26]'>
        <img className=' rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1 '>{name}</p>
        <p className='text-slate-100 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumItem
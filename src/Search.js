import React from 'react'
import SearchList from './SearchList'

function Search() {
  return (
    <div className='flex w[100] justify-center items-center gap-5'>
        <input placeholder='Pincode' className=' w-30 rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"'/>
        <input placeholder='City,State' className=' w-30 rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"'/>
        <SearchList/>
    </div>
  )
}

export default Search
import React from 'react'
import Selection from "react-select";
import { useDataContext } from '../context/DataContext';
import cities from '../data/cities.json'
function FilterCity() {
  const { handleChangeCity } = useDataContext()
  return (
   <div className='flex flex-col col-span-1 space-y-6 sm:space-y-3 md:border-r-2 pr-1'>
    <span className='font-semibold'>Şehir Seçimi</span>
    <div className="">
      <Selection className='w-full lg:w-4/6 capitalize' options={cities} placeholder="Şehir" onChange={handleChangeCity}></Selection>
    </div>
    <hr className='border-dotted sm:hidden'/>
   </div>
  )
}

export default FilterCity
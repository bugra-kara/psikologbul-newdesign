import React from 'react'
import Selection from "react-select";
const lang = [
 {value: 0, label: "Türkçe"},
 {value: 1, label: "English"},
 {value: 2, label: "Arabic"}
]
function FilterLang() {
  return (
   <div className='flex flex-col col-span-1 space-y-6 sm:space-y-3 md:border-r-2 pr-1'>
     <span className='font-semibold'>Dil Seçimi</span>
     <div className="">
       <Selection className='w-full lg:w-4/6 capitalize' options={lang} placeholder="Dil"></Selection>
     </div>
     <hr className='border-dotted sm:hidden'/>
   </div>
  )
}

export default FilterLang
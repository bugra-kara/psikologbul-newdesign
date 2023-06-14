import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDataContext } from '../context/DataContext';
function FilterStatus() {
 const { handleChangeCheckbox, state } = useDataContext()
  return (
   <div className='flex flex-col col-span-2 space-y-6 sm:space-y-3 md:border-r-2 pr-1'>
     <span className='font-semibold text-filterHead'>Görüşme Tercihi</span>
     <div className='flex flex-row sm:flex-col lg:flex-row sm:space-y-2 lg:space-y-0 justify-between w-full'>
       <span className='flex place-items-center space-x-1 w-full'>
        <span className=''>
          <FormControlLabel control={<Checkbox checked={state.yuzyuze} onChange={handleChangeCheckbox} name="yuzyuze" color='success'/>} label="Yüz Yüze" className='flex flex-nowrap w-full'/>
        </span>
       </span>
       <span className='flex place-items-center space-x-1 w-full'>
        <span className=''>
          <FormControlLabel control={<Checkbox checked={state.cevrimici} onChange={handleChangeCheckbox} name="cevrimici" color='success'/>} label="Çevrim içi" className='flex flex-nowrap w-full' />
        </span>
       </span>
     </div>
     <hr className='border-dotted sm:hidden'/>
   </div>
  )
}

export default FilterStatus
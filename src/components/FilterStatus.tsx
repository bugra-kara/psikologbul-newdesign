import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from 'react-switch'
function FilterStatus() {
 const [sButton, setSButton] = React.useState(false)
  return (
   <div className='flex flex-col col-span-1 space-y-6 sm:space-y-3 md:border-r-2 pr-1'>
     <span className='font-semibold text-filterHead'>Görüşme Tercihi</span>
     <div className='flex flex-row sm:flex-col lg:flex-row sm:space-y-2 lg:space-y-0 justify-between w-full'>
       <span className='flex place-items-center space-x-1 w-full'>
         <span className='lg:hidden flex place-items-center'>
           <Switch 
             onChange={()=>{setSButton(!sButton)}}
             checked={sButton}
             uncheckedIcon={<div></div>}
             onColor="#0A2ECC"
             offColor='#e5e5e5'
             height={20}
             width={40}
             title="Yüz Yüze"
             name='yuzyuze'
             handleDiameter={18}
           />
         </span>
         <span className='hidden lg:block'>
           <FormControlLabel control={<Checkbox defaultChecked color='success'/>} label="Yüz Yüze" className='flex flex-nowrap w-full'/>
         </span>
         <span className='text-head lg:hidden'>Yüz Yüze</span>
       </span>
       <span className='flex place-items-center space-x-1 w-full'>
       <span className='lg:hidden flex place-items-center'>
           <Switch 
             onChange={()=>{setSButton(!sButton)}}
             checked={sButton}
             uncheckedIcon={<div></div>}
             onColor="#0A2ECC"
             offColor='#e5e5e5'
             height={20}
             width={40}
             title="Çevrim içi"
             name='cevrimici'
             handleDiameter={18}
           />
         </span>
         <span className='hidden lg:block'>
         <FormControlLabel control={<Checkbox defaultChecked color='success'/>} label="Çevrim içi" className='flex flex-nowrap w-full' />
         </span>
         <span className='text-head lg:hidden'>Çevrim içi</span>
       </span>
     </div>
     <hr className='border-dotted sm:hidden'/>
   </div>
  )
}

export default FilterStatus
import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { BsTwitter, BsReddit, BsFacebook } from 'react-icons/bs'
import { RiWhatsappLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import {SelectLang} from './'

function Navbar() {
  const [menu, setMenu] = React.useState(false)
  return (
    <nav className='w-full bg-gradient-to-r from-from to-to'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-5 sm:flex sm:grid-cols-none gap-5 sm:gap-0 text-white'>
          <button onClick={()=>{setMenu(!menu)}} className='col-span-1 flex sm:hidden place-items-center justify-center bg-white bg-opacity-16 py-6'>
            <RxHamburgerMenu className=''/>
          </button>
          <div className='col-span-2 flex place-items-center py-3'>
            <Link to="/"><img src={"/logo.svg"} alt="psikologbul.io logo" className='h-12'/></Link>
          </div>
          <div className='col-span-2 justify-center sm:justify-end sm:w-full sm:space-x-5 flex place-items-center py-3'>
            <div className='hidden sm:flex flex-row justify-center place-items-center space-x-5'>
              <BsTwitter className='h-5 w-5'/>
              <RiWhatsappLine className='h-5 w-5'/>
              <BsFacebook className='h-5 w-5'/>
              <BsReddit className='h-5 w-5'/>
            </div>
            <div className='hidden'>
              <SelectLang />
            </div>
            <Link to="/iletisim" className='bg-contact px-3 text-head py-2 rounded-md font-bl'>Başvuru Yap</Link>
          </div>
        </div>
        {
          menu 
          ?
          <div className='flex flex-col space-y-5 w-full sm:hidden py-3'>
            <div className='hidden justify-center w-full'>
                <SelectLang />
            </div>
            <div className='flex flex-row justify-center place-items-center space-x-7 text-white'>
              <BsTwitter className='h-6 w-6'/>
              <RiWhatsappLine className='h-6 w-6'/>
              <BsFacebook className='h-6 w-6'/>
              <BsReddit className='h-6 w-6'/>
            </div>
          </div>
          :
          "" 
        }
      </div>
    </nav>
  )
}

export default Navbar
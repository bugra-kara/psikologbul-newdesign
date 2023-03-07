import React from 'react'
import Switch from 'react-switch'
import hbg from '../assets/images/web-head-bg.png'
import cities from '../data/cities.json'
import Selection from "react-select";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
function Filter() {
  const [sButton, setSButton] = React.useState(false)
  return (
    <>
    <div className='flex flex-col px-4 sm:px-0 relative'>
    <div style={{backgroundImage: `url(${hbg})`}} className='hidden sm:flex place-items-center justify-center bg-no-repeat bg-cover bg-center w-full h-72'>
      <div className='container mx-auto w-full flex flex-col'>
        <span className='text-center px-2 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-52 py-6 text-most sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
        Depremzedelere yönelik, ücretsiz psikososyal destek veren <strong>kişi ve kurumların yer aldığı gönüllü bir platformdur.</strong>
        </span>
      </div>
    </div>
    <div className='container mx-auto w-full flex sm:hidden flex-col'>
      <span className='text-center px-2 sm:px-52 py-6 text-most sm:text-3xl'>
      Depremzedelere yönelik, ücretsiz psikososyal destek veren <strong>kişi ve kurumların yer aldığı gönüllü bir platformdur.</strong>
      </span>
    </div>
    </div>
      <div className='flex flex-col px-4 relative'>
        <div className='container mx-auto w-full flex flex-col sm:relative sm:pb-44 md:pb-20'>
          <div className='bg-white rounded-md shadow-md px-6 py-6 sm:absolute sm:-top-16 w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-4 w-full'>
              <div className='flex flex-col col-span-1 space-y-6 sm:space-y-3 md:border-r-2'>
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
              <div className='flex flex-col col-span-1 space-y-6 sm:space-y-3 md:border-r-2'>
                <span className='font-semibold'>Şehir Seçimi</span>
                <div className="">
                  <Selection className='w-full sm:w-5/6 capitalize' options={cities} placeholder="Şehir"></Selection>
                </div>
                <hr className='border-dotted sm:hidden'/>
              </div>
              <div className='flex flex-col col-span-1 space-y-6 sm:space-y-3 md:border-r-2'>
                <span className='font-semibold'>Dil Seçimi</span>
                <div className="">
                  <Selection className='w-full sm:w-5/6 capitalize' options={cities} placeholder="Şehir"></Selection>
                </div>
                <hr className='border-dotted sm:hidden'/>
              </div>
              <div className='flex flex-col col-span-1 space-y-6 sm:space-y-3'>
                <span className='font-semibold'>Kime Uygun?</span>
                <div className="">
                  <Selection className='w-full sm:w-5/6 capitalize' options={cities} placeholder="Şehir"></Selection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter
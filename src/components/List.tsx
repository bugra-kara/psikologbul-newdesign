import React from 'react'
import {CgDanger} from 'react-icons/cg'
import {AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineVideoCamera, AiOutlineIdcard, AiOutlineCompass, AiOutlineInstagram, AiOutlineLink} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {HiOutlineUsers} from 'react-icons/hi'
import {IoMdPaperPlane} from 'react-icons/io'
import {BsPhone} from 'react-icons/bs'
import { useDataContext } from '../context/DataContext'
function List(): JSX.Element {
  const {state} = useDataContext()
  if(state.selectedData.length === 0){
   return (
    <div className='px-4 pt-8 sm:pt-24 md:pt-12 lg:pt-8 xl:pt-4 pb-8'>
      <div className='container mx-auto w-full flex flex-col'>
        <span>Loading...</span>
      </div>
    </div>
    )
  }
  return (
    <div className='px-4 pt-8 sm:pt-24 md:pt-18 lg:pt-8 xl:pt-4 pb-8'>
      <div className='container mx-auto w-full flex flex-col'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 h-fit'>
        {
          state.selectedData.map((item,index)=>{ 
            return (
            <div key={index} className='bg-white rounded-md shadow-md h-fit'>
              <div className='w-full px-2 pt-2'>
                <div className={`${item.doluluk < 4 ? 'bg-lowVol': item?.doluluk > 3 && item?.doluluk < 7 ? 'bg-middleVol': 'bg-highVol'} w-full flex flex-row place-items-center space-x-2 rounded-sm`}>
                  <div className={`${item.doluluk < 4 ? 'bg-clear text-white': item?.doluluk > 3 && item?.doluluk < 7 ? 'bg-warning': 'bg-danger'} h-full flex place-items-center justify-center p-2 rounded-sm`}>
                  {item.doluluk < 4 ? <AiOutlineCheckCircle/>: item?.doluluk > 3 && item?.doluluk < 7 ? <CgDanger/> : <AiOutlineCloseCircle/>}
                  </div>
                  <div className='text-head'>
                    {item.doluluk < 4 ? "Az Yoğunluk": item?.doluluk > 3 && item?.doluluk < 7 ? "Orta Yoğunluk": "Yüksek Yoğunluk"}
                  </div>
                </div>
              </div>
              <div className='px-8 py-6 flex flex-col space-y-6 w-full'>
                <div className='flex flex-row space-x-4'>
                  <div className='flex justify-center place-items-center p-3 bg-user rounded-full'>
                    <FiUser className='h-10 w-10'/>
                  </div>
                  <div className='flex flex-col w-full justify-center'>
                    <span className='text-head'>
                      {item?.name}
                    </span>
                    <span className='text-subtitle'>
                      {item?.unvan}
                    </span>
                  </div>
                </div>
                <div className='flex flex-row space-x-2'>
                  {
                  item?.yuzyuze ? <div className='flex flex-row space-x-1 bg-yuzyuze justify-center place-items-center px-3 py-1 rounded-sm'>
                  <span>
                    <HiOutlineUsers />
                  </span>
                  <span>
                    Yüzyüze
                  </span>
                </div> : ""
                  }
                  {
                  item?.cevrimici ? <div className='flex flex-row space-x-1 bg-cevrimici justify-center place-items-center px-3 py-1 rounded-sm'>
                  <span>
                    <AiOutlineVideoCamera/>
                  </span>
                  <span>
                    Çevrimiçi
                  </span>
                </div> : ""
                  }
                </div>
              </div>
              <hr />
              <div className='px-8 py-6 flex flex-col space-y-6'>
                <div className='flex flex-col space-y-4'>
                  <span className='text-head font-semibold'>
                    Kime Uygun?
                  </span>
                  <div className='flex flex-row space-x-1'>
                    {/* son index ise nokta koydurtma */}
                    {
                    item.title !== null ? item.title!.map((e,index)=>{ return index < (item.title?.length! - 1) ? <span key={index}>{e} •</span> : <span key={index}>{e}</span>}) : ""
                    }
                  </div>
                </div>
                <hr className='border-dotted'/>
                {
                item.bilgi !== null && item.bilgi !== undefined && item.bilgi !== ""
                ? <><div className='flex flex-col space-y-4'>
                  <span className='text-head font-semibold'>
                    Bilgi
                  </span>
                  <div>
                    <p className=' text-head'>{item?.bilgi}</p>
                  </div>
                </div>
                <hr className='border-dotted'/></>
                : ""
                }
                <div className='flex flex-col'>
                  <span className='text-head font-semibold'>
                    İletişim Bilgileri
                  </span>
                  <div className='flex flex-col space-y-3 pt-4 text-day'>
                    {
                    item.name !== null && item.name !== undefined && item.name !== ""
                    ? <div className='flex flex-row space-x-2 place-items-center'>
                        <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                          <AiOutlineIdcard className='h-5 w-5' />
                        </span>
                        <span>
                          {item?.name}
                        </span>
                      </div>
                    : ""
                    }
                    {
                    item.location !== null && item.location !== undefined && item.location !== ""
                    ? <div className='flex flex-row space-x-2 place-items-center'>
                        <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                          <AiOutlineCompass className='h-5 w-5' />
                        </span>
                        <a href={`http://maps.google.com/?q=${item?.location}`} target="_blank" rel='noreferrer'>
                          {item?.location}
                        </a>
                      </div>
                    : ""
                    }
                    {
                    item.email !== null && item.email !== undefined && item.email !== ""
                    ? <div className='flex flex-row space-x-2 place-items-center'>
                        <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                          <IoMdPaperPlane className='h-5 w-5' />
                        </span>
                        <a href={`mailto:${item?.email}`}>
                          {item?.email}
                        </a>
                      </div>
                    : ""
                    }
                    {
                    item.telefon !== null && item.telefon !== undefined && item.telefon !== "" && item.telefon !== "+90"
                    ? <div className='flex flex-row space-x-2 place-items-center'>
                        <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                          <BsPhone className='h-5 w-5' />
                        </span>
                        <a href={`tel:${item?.telefon}}`}>
                          {item?.telefon}
                        </a>
                      </div>
                    : ""
                    }
                    {
                    item.instagram !== null && item.instagram !== undefined && item.instagram !== ""
                    ? <div className='flex flex-row space-x-2 place-items-center'>
                        <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                          <AiOutlineInstagram className='h-5 w-5' />
                        </span>
                        <a href={`${item?.instagram}}`} target="_blank" rel='noreferrer'>
                          {item?.instagram}
                        </a>
                      </div>
                    : ""
                    }
                    {
                    item.website !== null && item.website !== undefined && item.website !== ""
                    ? <div className='flex flex-row space-x-2 place-items-center'>
                      <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                        <AiOutlineLink className='h-5 w-5' />
                      </span>
                      <a href={`${item.website}`} target="_blank" rel='nofollow'>
                        {item?.website}
                      </a>
                    </div>
                    : ""
                    }
                  </div>
                </div>
              </div>
            </div>
            )
          })
          }
        </div>
      </div>
    </div>
  )
}

export default List
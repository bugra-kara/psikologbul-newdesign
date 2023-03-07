import React from 'react'
import {CgDanger} from 'react-icons/cg'
import {AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineVideoCamera, AiOutlineIdcard, AiOutlineCompass, AiOutlineInstagram, AiOutlineLink} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {HiOutlineUsers} from 'react-icons/hi'
import {IoMdPaperPlane} from 'react-icons/io'
import {BsPhone} from 'react-icons/bs'
function List() {
  return (
    <div className='px-4 pt-8 sm:pt-24 md:pt-12 lg:pt-8 xl:pt-4 pb-8'>
      <div className='container mx-auto w-full flex flex-col'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          <div className='bg-white rounded-md shadow-md'>
            <div className='w-full px-2 pt-2'>
              <div className='bg-middleVol w-full flex flex-row place-items-center space-x-2 rounded-sm'>
                <div className='bg-warning h-full flex place-items-center justify-center p-2 rounded-sm'>
                  <CgDanger />
                </div>
                <div className='text-head'>
                  Orta Yoğunluk
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
                    Hiss. Psikolojik Danışmanlık ve Eğitim
                  </span>
                  <span className='text-subtitle'>
                    Danışmanlık Merkezi
                  </span>
                </div>
              </div>
              <div className='flex flex-row space-x-2'>
                <div className='flex flex-row space-x-1 bg-yuzyuze justify-center place-items-center px-3 py-1 rounded-sm'>
                  <span>
                    <HiOutlineUsers />
                  </span>
                  <span>
                    Yüzyüze
                  </span>
                </div>
                <div className='flex flex-row space-x-1 bg-cevrimici justify-center place-items-center px-3 py-1 rounded-sm'>
                  <span>
                    <AiOutlineVideoCamera/>
                  </span>
                  <span>
                    Çevrimiçi
                  </span>
                </div>
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
                  <span>
                    Çocuk • 
                  </span>
                  <span>
                    Ergen • 
                  </span>
                  <span>
                    Yetişkin • 
                  </span>
                  <span>
                    Yaşlı
                  </span>
                </div>
              </div>
              <hr className='border-dotted'/>
              <div className='flex flex-col space-y-4'>
                <span className='text-head font-semibold'>
                  Bilgi
                </span>
                <div>
                  <p className=' text-head'>Instagram hesabı veya mail üzerinden iletişime geçebilirsiniz.</p>
                </div>
              </div>
              <hr className='border-dotted'/>
              <div className='flex flex-col'>
                <span className='text-head font-semibold'>
                  İletişim Bilgileri
                </span>
                <div className='flex flex-col space-y-3 pt-4 text-day'>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <AiOutlineIdcard className='h-5 w-5' />
                    </span>
                    <span>
                      Dr. Ozzy Ozborne
                    </span>
                  </div>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <AiOutlineCompass className='h-5 w-5' />
                    </span>
                    <a href={`http://maps.google.com/?q=Cumhuriyet Mah. Aziz Nesin Sk. No: 30 Çorlu / Tekirdağ`} target="_blank" rel='noreferrer'>
                      Cumhuriyet Mah. Aziz Nesin Sk. No: 30 Çorlu / Tekirdağ
                    </a>
                  </div>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <IoMdPaperPlane className='h-5 w-5' />
                    </span>
                    <a href={`mailto:ps.danisman@gmail.com`}>
                      ps.danisman@gmail.com
                    </a>
                  </div>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <BsPhone className='h-5 w-5' />
                    </span>
                    <a href={`tel:+905053907304`}>
                      +905053907304
                    </a>
                  </div>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <AiOutlineInstagram className='h-5 w-5' />
                    </span>
                    <a href={`https://instagram.com/psikoden`} target="_blank" rel='noreferrer'>
                      psikoden
                    </a>
                  </div>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <AiOutlineLink className='h-5 w-5' />
                    </span>
                    <a href='https://psikoden.com' target="_blank" rel='nofollow'>
                      psikoden.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md'>
            <div className='w-full px-2 pt-2'>
              <div className='bg-lowVol w-full flex flex-row place-items-center space-x-2 rounded-sm'>
                <div className='bg-clear h-full flex place-items-center justify-center p-2 rounded-sm text-white'>
                  <AiOutlineCheckCircle />
                </div>
                <div className='text-head'>
                  Düşük Yoğunluk
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
                    Hiss. Psikolojik Danışmanlık ve Eğitim
                  </span>
                  <span className='text-subtitle'>
                    Danışmanlık Merkezi
                  </span>
                </div>
              </div>
              <div className='flex flex-row space-x-2'>
                <div className='flex flex-row space-x-1 bg-yuzyuze justify-center place-items-center px-3 py-1 rounded-sm'>
                  <span>
                    <HiOutlineUsers />
                  </span>
                  <span>
                    Yüzyüze
                  </span>
                </div>
                <div className='flex flex-row space-x-1 bg-cevrimici justify-center place-items-center px-3 py-1 rounded-sm'>
                  <span>
                    <AiOutlineVideoCamera/>
                  </span>
                  <span>
                    Çevrimiçi
                  </span>
                </div>
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
                  <span>
                    Çocuk • 
                  </span>
                  <span>
                    Ergen • 
                  </span>
                  <span>
                    Yetişkin • 
                  </span>
                  <span>
                    Yaşlı
                  </span>
                </div>
              </div>
              <hr className='border-dotted'/>
              <div className='flex flex-col space-y-4'>
                <span className='text-head font-semibold'>
                  Bilgi
                </span>
                <div>
                  <p className=' text-head'>Instagram hesabı veya mail üzerinden iletişime geçebilirsiniz.</p>
                </div>
              </div>
              <hr className='border-dotted'/>
              <div className='flex flex-col'>
                <span className='text-head font-semibold'>
                  İletişim Bilgileri
                </span>
                <div className='flex flex-col space-y-3 pt-4 text-day'>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <AiOutlineIdcard className='h-5 w-5' />
                    </span>
                    <span>
                      Dr. Ozzy Ozborne
                    </span>
                  </div>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <AiOutlineCompass className='h-5 w-5' />
                    </span>
                    <a href={`http://maps.google.com/?q=Cumhuriyet Mah. Aziz Nesin Sk. No: 30 Çorlu / Tekirdağ`} target="_blank" rel='noreferrer'>
                      Cumhuriyet Mah. Aziz Nesin Sk. No: 30 Çorlu / Tekirdağ
                    </a>
                  </div>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <IoMdPaperPlane className='h-5 w-5' />
                    </span>
                    <a href={`mailto:ps.danisman@gmail.com`}>
                      ps.danisman@gmail.com
                    </a>
                  </div>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <BsPhone className='h-5 w-5' />
                    </span>
                    <a href={`tel:+905053907304`}>
                      +905053907304
                    </a>
                  </div>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <AiOutlineInstagram className='h-5 w-5' />
                    </span>
                    <a href={`https://instagram.com/psikoden`} target="_blank" rel='noreferrer'>
                      psikoden
                    </a>
                  </div>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <AiOutlineLink className='h-5 w-5' />
                    </span>
                    <a href='https://psikoden.com' target="_blank" rel='nofollow'>
                      psikoden.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-md'>
            <div className='w-full px-2 pt-2'>
              <div className='bg-highVol w-full flex flex-row place-items-center space-x-2 rounded-sm'>
                <div className='bg-danger h-full flex place-items-center justify-center p-2 rounded-sm text-white'>
                  <AiOutlineCloseCircle />
                </div>
                <div className='text-head'>
                  Yüksek Yoğunluk
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
                    Hiss. Psikolojik Danışmanlık ve Eğitim
                  </span>
                  <span className='text-subtitle'>
                    Danışmanlık Merkezi
                  </span>
                </div>
              </div>
              <div className='flex flex-row space-x-2'>
                <div className='flex flex-row space-x-1 bg-yuzyuze justify-center place-items-center px-3 py-1 rounded-sm'>
                  <span>
                    <HiOutlineUsers />
                  </span>
                  <span>
                    Yüzyüze
                  </span>
                </div>
                <div className='flex flex-row space-x-1 bg-cevrimici justify-center place-items-center px-3 py-1 rounded-sm'>
                  <span>
                    <AiOutlineVideoCamera/>
                  </span>
                  <span>
                    Çevrimiçi
                  </span>
                </div>
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
                  <span>
                    Çocuk • 
                  </span>
                  <span>
                    Ergen • 
                  </span>
                  <span>
                    Yetişkin • 
                  </span>
                  <span>
                    Yaşlı
                  </span>
                </div>
              </div>
              <hr className='border-dotted'/>
              <div className='flex flex-col space-y-4'>
                <span className='text-head font-semibold'>
                  Bilgi
                </span>
                <div>
                  <p className=' text-head'>Instagram hesabı veya mail üzerinden iletişime geçebilirsiniz.</p>
                </div>
              </div>
              <hr className='border-dotted'/>
              <div className='flex flex-col'>
                <span className='text-head font-semibold'>
                  İletişim Bilgileri
                </span>
                <div className='flex flex-col space-y-3 pt-4 text-day'>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <AiOutlineIdcard className='h-5 w-5' />
                    </span>
                    <span>
                      Dr. Ozzy Ozborne
                    </span>
                  </div>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <AiOutlineCompass className='h-5 w-5' />
                    </span>
                    <a href={`http://maps.google.com/?q=Cumhuriyet Mah. Aziz Nesin Sk. No: 30 Çorlu / Tekirdağ`} target="_blank" rel='noreferrer'>
                      Cumhuriyet Mah. Aziz Nesin Sk. No: 30 Çorlu / Tekirdağ
                    </a>
                  </div>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <IoMdPaperPlane className='h-5 w-5' />
                    </span>
                    <a href={`mailto:ps.danisman@gmail.com`}>
                      ps.danisman@gmail.com
                    </a>
                  </div>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <BsPhone className='h-5 w-5' />
                    </span>
                    <a href={`tel:+905053907304`}>
                      +905053907304
                    </a>
                  </div>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <AiOutlineInstagram className='h-5 w-5' />
                    </span>
                    <a href={`https://instagram.com/psikoden`} target="_blank" rel='noreferrer'>
                      psikoden
                    </a>
                  </div>
                  <div className='flex flex-row space-x-2 place-items-center'>
                    <span className='flex justify-center place-items-center p-1.5 rounded-md bg-icon'>
                      <AiOutlineLink className='h-5 w-5' />
                    </span>
                    <a href='https://psikoden.com' target="_blank" rel='nofollow'>
                      psikoden.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
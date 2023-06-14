import React from 'react'
import { BsTwitter, BsReddit, BsFacebook } from 'react-icons/bs'
import { RiWhatsappLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className='w-full bg-footer-bg py-6 sm:py-10 border-t border-t-footer-bg-border'>
      <div className='container mx-auto w-full flex flex-col space-y-6'>
        <div className='flex flex-col sm:flex-row justify-center sm:justify-between w-full'>
        <span className='flex justify-center sm:block cursor-pointer'><Link to="/"><img src={"/main-logo.svg"} alt="psikologbul.io logo" className='h-12 w-40'/></Link></span>
        <div className='flex flex-row justify-center place-items-center space-x-5'>
          <BsTwitter className='h-5 w-5'/>
          <RiWhatsappLine className='h-5 w-5'/>
          <BsFacebook className='h-5 w-5'/>
          <BsReddit className='h-5 w-5'/>
          <Link to="/iletisim" className='bg-contact px-3 text-head py-2 rounded-md text-white'>Başvuru Yap</Link>
        </div>
        </div>
        <div>
          <p className='text-head text-footer-text text-center px-4'>
          Bu platform, 6 Şubat 2023 tarihinde Kahramanmaraş/Türkiye’de meydana gelen iki büyük deprem sonucu oluşan psikolojik destek ihtiyacına ulaşımı kolaylaştırmak amacıyla gönüllü oluşturulmuştur.
          </p>
        </div>
        <span className='text-center px-4'>
          <Link to="/kvvk" className='underline'>KVVK Aydınlatma ve Açık Rıza Metni</Link> • © 2023 | Made by <a href="https://www.linkedin.com/in/ahmet-bugra-kara/" target="_blank" rel="noreferrer" className='font-medium'>bugra</a> for Canım Ülkem
        </span>
      </div>
    </footer>
  )
}

export default Footer
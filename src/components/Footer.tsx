import React from 'react'
import Logo from '../assets/images/main-logo.svg'
import { BsTwitter, BsReddit, BsFacebook } from 'react-icons/bs'
import { RiWhatsappLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className='w-full bg-footer-bg py-10 border border-footer-bg-border'>
      <div className='container mx-auto w-full flex flex-col space-y-6'>
        <div className='flex flex-row justify-between'>
        <Link to="/"><img src={Logo} alt="psikologbul.io logo" className='h-12'/></Link>
        <div className='hidden sm:flex flex-row justify-center place-items-center space-x-5'>
          <BsTwitter className='h-5 w-5'/>
          <RiWhatsappLine className='h-5 w-5'/>
          <BsFacebook className='h-5 w-5'/>
          <BsReddit className='h-5 w-5'/>
          <Link to="/iletisim" className='bg-contact px-3 text-head py-2 rounded-md text-white'>Başvuru Yap</Link>
        </div>
        </div>
        <div>
          <p className='text-head text-footer-text text-center'>
          Bu platform, 6 Şubat 2023 tarihinde Kahramanmaraş/Türkiye’de meydana gelen iki büyük deprem sonucu oluşan psikolojik destek ihtiyacına ulaşımı kolaylaştırmak amacıyla gönüllü oluşturulmuştur.
          </p>
        </div>
        <div className='flex flex-row justify-center space-x-3'>
          <span>
            <Link to="/kvvk" className='underline'>KVVK Aydınlatma ve Açık Rıza Metni</Link>
          </span>
          <span className='flex place-items-center'>
          •
          </span>
          <span>
            © 2023 | Made by <a href="https://www.linkedin.com/in/ahmet-bugra-kara/" target="_blank" rel="noreferrer" className='font-medium'>bugra</a> for Canım Ülkem
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
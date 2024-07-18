import Image from 'next/image'
import Link from 'next/link'
import ButtonGradient from '../ui/ButtonGradient'
import './Footer.css'

const Footer = () => {
  return (
    <section className='bg-primary-blue'>
      <div className='w-[80%] mx-auto py-20 md:flex justify-between items-center'> 
        <div className='flex flex-col items-center mx-auto gap-8 md:grid md:grid-cols-3 w-2/3'>
          <div className='flex flex-col justify-between w-max h-full gap-8 md:gap-0'>
            <Image src='/images/logo.svg' width={150} height={150} alt='logo' className='relative z-10 bg-white'/>
            <div className='flex gap-2 justify-between'>
              <Link href='https://facebook.com' target="_blank">
                <Image className='footer__social-media-logos' src='/images/icon-facebook.svg' width={20} height={20} alt='facebook logo' />
              </Link>
              <Link href='https://youtube.com' target="_blank">
                <Image className='footer__social-media-logos' src='/images/icon-youtube.svg' width={20} height={20} alt='youtube logo' />
              </Link>
              <Link href='https://twitter.com' target="_blank">
                <Image className='footer__social-media-logos' src='/images/icon-twitter.svg' width={20} height={20} alt='twitter logo' />
              </Link>
              <Link href='https://pinterest.com' target="_blank">
                <Image className='footer__social-media-logos' src='/images/icon-pinterest.svg' width={20} height={20} alt='pinterest logo' />
              </Link>
              <Link href='https://instagram.com' target="_blank">
                <Image className='footer__social-media-logos' src='/images/icon-instagram.svg' width={20} height={20} alt='instagram logo' />
              </Link>
            </div>
          </div>
          <div className='flex flex-col items-center md:hidden gap-2'>
            <Link href='/' className='footer__link'>About Us</Link>
            <Link href='/' className='footer__link'>Contact</Link>
            <Link href='/' className='footer__link'>Blog</Link>
            <Link href='/' className='footer__link'>Careers</Link>
            <Link href='/' className='footer__link'>Support</Link>
            <Link href='/' className='footer__link'>Privacy Policy</Link>
          </div>
          <div className='hidden md:flex flex-col gap-2'>
            <Link href='/' className='footer__link'>About Us</Link>
            <Link href='/' className='footer__link'>Contact</Link>
            <Link href='/' className='footer__link'>Blog</Link>
          </div>
          <div className='hidden md:flex flex-col gap-2'>
            <Link href='/' className='footer__link'>Careers</Link>
            <Link href='/' className='footer__link'>Support</Link>
            <Link href='/' className='footer__link'>Privacy Policy</Link>
          </div>
        </div>
        <div className='flex flex-col items-center md:items-end gap-4 mt-10 md:mt-0'>
          <ButtonGradient name='Request Invite' link='/' />
          <p className='text-neutral-grayishBlue text-sm'>@Easybank. All Rights Reserved</p>
        </div>

      </div>
      
      
    </section>
  )
}

export default Footer

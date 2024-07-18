import React from 'react'
import ButtonGradient from '../ui/ButtonGradient'
import Link from 'next/link'
import Image from 'next/image'
import './Main.css'

const Main = () => {
  return (
    <div>
      {/* DESKTOP DESIGN SECTION 1 */}
      <section className='hidden md:grid grid-cols-2 relative -z-10 pb-8 bg-neutral-lightGray px-[10%] main min-h-[40vh]'>
        <div className='w-full mt-12'>
          <h1 className='text-5xl text-primary-blue'>Next Generation <br></br>digital banking</h1>
          <p className='text-neutral-grayishBlue my-8'>Take your financial life online. Your Easybank account will be a one-stop for spending, saving, budgeting, investing, and much more.</p>
          <ButtonGradient name='Request Invite' link='/'/>
        </div>
        <Image className='w-1/3 min-w-[24rem] max-w-[450px] absolute right-0 top-[-5rem]' src='/images/image-mockups.png' width={800} height={800} alt='images of app in cellphone'/>
      </section>
      {/* MOBILE DESIGN SECTION 1 */}
      <section className='md:hidden relative -z-10 bg-neutral-lightGray px-[10%] main_mobile'>
        <div className='w-full mt-12 flex flex-col items-center translate-y-[-10rem]'>
          <Image src='/images/image-mockups.png' width={800} height={800} alt='images of app in cellphone'/>
          <h1 className='text-center text-4xl text-primary-blue'>Next Generation <br></br>digital banking</h1>
          <p className='text-center text-neutral-grayishBlue my-8'>Take your financial life online. Your Easybank account will be a one-stop for spending, saving, budgeting, investing, and much more.</p>
          <ButtonGradient name='Request Invite' link='/'/>
        </div>
      </section>
      <section className='bg-neutral-lightGrayishBlue relative -z-20 px-[10%] py-24'>
        <div>
          <h2 className='text-center md:text-left text-3xl'>Why choose Easybank?</h2>
          <p className='text-center md:text-left text-neutral-grayishBlue mt-4 md:mt-8'>We leverage Open Banking to turn your bank account into your financial hub. <br></br>Control your finances like never before</p>
          <div className='flex flex-col md:grid md:grid-cols-4 gap-8 mt-12'>
            <div className='flex flex-col items-center md:block'>
              <Image src='/images/icon-online.svg' width={50} height={50} alt='online banking icon' />
              <h3 className='text-primary-blue mt-8'>Online Banking</h3>
              <p className='text-neutral-grayishBlue mt-4 text-center md:text-left'>Our modern web and mobile application allow you to keep track of your finances wherever you are in the world.</p>
            </div>
            <div className='flex flex-col items-center md:block'>
              <Image src='/images/icon-budgeting.svg' width={50} height={50} alt='simple budgeting icon' />
              <h3 className='text-primary-blue mt-8'>Simple Budgeting</h3>
              <p className='text-neutral-grayishBlue mt-4 text-center md:text-left'>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
            </div>
            <div className='flex flex-col items-center md:block'>
              <Image src='/images/icon-onboarding.svg' width={50} height={50} alt='fast onboarding icon' />
              <h3 className='text-primary-blue mt-8'>Fast Onboarding</h3>
              <p className='text-neutral-grayishBlue mt-4 text-center md:text-left'>We don't do branches. Open your account in minutes online and start taking control of your finances right away</p>
            </div>
            <div className='flex flex-col items-center md:block'>
              <Image src='/images/icon-api.svg' width={50} height={50} alt='open api icon' />
              <h3 className='text-primary-blue mt-8'>Open API</h3>
              <p className='text-neutral-grayishBlue mt-4 text-center md:text-left'>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-neutral-lightGray px-[10%] py-24'>
        <div>
          <h2 className='text-3xl text-center md:text-left'>Latest Articles</h2>
          <div className='md:grid md:grid-cols-4 gap-8 mt-12'>
            <Link href='/' className='bg-neutral-white h-min duration-300 hover:opacity-80'>
              <Image className='w-full h-[12rem] object-cover h-auto' src='/images/image-currency.jpg' width={200} height={200} alt='image of money in different currencies' />
              <div className='p-8 bg-neutral-white'>
                <p className='text-xs text-neutral-grayishBlue'>By Claire Robinson</p>
                <h4 className='text-primary-blue mt-2'>Receive money in any currency with no fees</h4>
                <p className='text-sm text-neutral-grayishBlue mt-2'>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single....</p>
              </div>
            </Link>
            <Link href='/' className='bg-neutral-white h-min duration-300 hover:opacity-80'>
              <Image className='w-full h-[12rem] object-cover h-auto' src='/images/image-restaurant.jpg' width={200} height={200} alt='image of a food plate in a fine restaurant' />
              <div className='p-8 overflow-hidden bg-neutral-white'>
                <p className='text-xs text-neutral-grayishBlue'>By Wilson Hutton</p>
                <h4 className='text-primary-blue mt-2'>Treat yourself without worrying about money</h4>
                <p className='text-sm text-neutral-grayishBlue mt-2'>Our simple budgeting feature allowe you to separate out your spending and set realistic limits each month. That means you... </p>
              </div>
            </Link>
            <Link href='/' className='bg-neutral-white h-min duration-300 hover:opacity-80'>
              <Image className='w-full h-[12rem] object-cover h-auto' src='/images/image-plane.jpg' width={200} height={200} alt='image of the wing of an airplane flying' />
              <div className='p-8 overflow-hidden bg-neutral-white'>
                <p className='text-xs text-neutral-grayishBlue'>By Wilson Hutton</p>
                <h4 className='text-primary-blue mt-2'>Take your Easybanking card wherever you go</h4>
                <p className='text-sm text-neutral-grayishBlue mt-2'>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...</p>
              </div>
            </Link>
            <Link href='/' className='bg-neutral-white h-min duration-300 hover:opacity-80'>
              <Image className='w-full h-[12rem] object-cover h-auto' src='/images/image-confetti.jpg' width={200} height={200} alt='image of confetti' />
              <div className='p-8 overflow-hidden bg-neutral-white'>
                <p className='text-xs text-neutral-grayishBlue'>By Claire Robinson</p>
                <h4 className='text-primary-blue mt-2'>Our invite-only Beta accounts are now live!</h4>
                <p className='text-sm text-neutral-grayishBlue mt-2 '>After a lot of hard work by the whote team, we're excited to launch our closed beta. It's easy to request an invite through the site...</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main

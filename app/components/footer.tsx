import Image from 'next/image'
import React from 'react'
import logo from '../Group.png'
import payment from '../payment.png'

const Footer = () => {
  return (
    <>
    <section className='bg-black'>
      <div className=' w-4/5 m-auto flex justify-between pt-16 pb-16 flex-wrap'>
        <div className='flex flex-col gap-12  '>
          <div className='flex items-center gap-4'>
            <Image
              src={logo}
              alt='logo'
            />
            <h1 className='text-white font-[700] text-[40px]'>Timbu</h1>
          </div>
          <p className='text-white text-[14px]'>
            The customer is at the heart of our <br />
            unique business model, which includes <br />
            design.
          </p>
          <Image
              src={payment}
              alt='logo'
            />
        </div>

        <div className='flex flex-col gap-6 '>
          <div className='flex items-center'>
            <h1 className='text-white font-bold text-[16px]'>Shopping</h1>
          </div>
          <p className='text-white text-[14px]'>
            Shoes
          </p>
          <p className='text-white text-[14px]'>
            Trending Shoes
          </p>
          <p className='text-white text-[14px]'>
            Branded Shoes
          </p>
          <p className='text-white text-[14px]'>
            Heels
          </p>
        </div>

        <div className=' flex flex-col gap-6'>
          <div className='flex items-center'>
            <h1 className='text-white font-bold text-[16px]'>About us</h1>
          </div>
          <p className='text-white text-[14px]'>
            Services
          </p>
          <p className='text-white text-[14px]'>
            Blog
          </p>
          <p className='text-white text-[14px]'>
            Contact Us
          </p>
        </div>

        <div className=' flex flex-col gap-6'>
          <div className='flex items-center'>
            <h1 className='text-white font-bold text-[16px]'>Newsletter</h1>
          </div>
          <p className='text-white text-[14px]'>
            Be the first to know about <br />
            the last arrivals 
          </p>
          <input type="text" placeholder='Your email here' className='border-b-2 pb-6 text-[14px] text-white outline-none border-white bg-black pb'/>
        </div>
      </div>
      <hr className='h-[2px] bg-white w-4/5 m-auto'/>
      <p className='text-center text-white pb-16 pt-8 text-[16px] font-bold'>Copyright © 20242018 All rights reserved </p>
    </section>
    </>
  )
}

export default Footer
"use client"
import Image from 'next/image'
import React from 'react'
import shoe from '../shoe.png'
// import master from '../master.png'
import master from '../mmm.png'
import Link from "next/link";



    
export function SingleItem() {
  return(
      <>
        <div className='flex justify-between items-center mt-10 mb-1 max-[580px]:shadow-xl' >
            <div className='flex justify-between items-center w-4/5 '>
              <Image src={shoe} alt='shoe'/>
              <div>
                <h2>Nike High Tops</h2>
                <div className='inline-flex items-center gap-1'>
                  <p>XL/ </p>
                  <div className=' [&>*]:rounded-full border [&>*]:py-2 [&>*]:px-2'>
                    <p className='bg-[#4F4949]'></p>
                  </div>
                </div>
              </div>

              <p>$1,500</p>
              <div className='bg-[#666666] inline-flex gap-1 rounded-[5px] items-center text-white py-1 px-6'>
                <p>1</p>{" "}
              </div>
            </div>
        </div>
        <hr className='h-[2px] bg-black mb-16  max-[580px]:hidden'/>

      </>

  )
}


const Checkout = () => {
  return (
    <>
    <section className='w-4/5 m-auto'>
      <p className='pb-3 pt-40  max-[580px]:hidden'>Contact Information</p>
      <hr className='h-[2px] bg-black mb-4  max-[580px]:hidden'/>

      <div className='flex flex-col gap-4  max-[580px]:hidden'>
        <h3>HNG INTERN</h3>
        <h3>8, Kolawole street ijesha
          <span className='flex flex-col leading-3'> Lagos State</span>
        </h3>
        <h3>Nigeria</h3>
        <h3>Hng11@gmail.com</h3>
      </div>

      <p className='pt-6 pb-3  max-[580px]:hidden'>Payment Details</p>
      <hr className='h-[2px] bg-black mb-4  max-[580px]:hidden'/>
      <form action="#">
        <div className="flex justify-between gap-4 w-full max-sm:flex-col pt-10  max-[580px]:hidden">
          <label className="w-full">
            <span>Name on card</span>
            <input
              required
              type="text"
              name="Name"
              placeholder="Hng 11"
              className="border-[1px] border-black rounded placeholder:text-black p-2 outline-none w-full text-[32px] font-normal"
            />
          </label>
          <label className="w-full">
            <span>Card Number</span>
              <input
                type="text"
                name="search"
                placeholder="12345678900856"
                className="border-[1px] border-black rounded placeholder:text-black p-2 outline-none w-full text-[32px] font-normal"
              />
              <p  className=' flex justify-end relative top-[-3.5rem] right-3'>
              <Image
                src={master}
                alt='logo'
               
              />
              </p>
              
          </label>
        </div>
        <div className="flex justify-between gap-4 w-full max-sm:flex-col pt-10  max-[580px]:hidden">
          <label className="w-2/4">
            <span>Expiraton date</span>
            <input
              required
              type="text"
              name="text"
              placeholder="03/2027"
              className="border-[1px] border-black rounded placeholder:text-black p-2 outline-none w-full  text-[32px] font-normal"
            />
          </label>
          <label className="w-2/4">
            <span>CVC</span>
            <input
              required
              type="text"
              name="text"
              placeholder="123"
              className="border-[1px] border-black rounded placeholder:text-black p-2 outline-none w-full text-[32px] font-normal"
            />
          </label>
        </div>
      </form>


      <p className='pb-3 pt-20  max-[580px]:hidden'>Your Order</p>
      <hr className='h-[2px] bg-black mb-16  max-[580px]:hidden'/>

      <SingleItem/>
      <SingleItem/>
      <SingleItem/>

      <div className='flex justify-between mt-10 mb-10 w-4/5'>
        <div className='flex gap-4 flex-col'>
          <p>Sub Total</p>
          <p>Shipping</p>
          <p>Total</p>
          
        </div>

        <div className='flex gap-4 flex-col'>
          <p>$10,000</p>
          <p>$0</p>
          <p>$10,000</p>
        </div>
      </div>
      <hr className='h-[2px] bg-black mb-16  max-[580px]:hidden'/>
      <div className='pb-10 flex justify-center'>
        <Link href={"/checkout"}>
          <button className=' bg-[#FF5714] text-white px-6 py-4 rounded-[50px] text-[12px] font-bold'>
              PURCHASE
          </button>
        </Link>
      </div>
    </section>
   
    </>
  )
}

export default Checkout
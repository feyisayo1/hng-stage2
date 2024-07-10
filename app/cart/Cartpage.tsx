"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from "next/link";
import shoe from '../shoe.png'



export function SingleItem() {
  const [number, SetNumber] = useState(1)
  const Add = () => {
    SetNumber(number +1)
  }
  const Remove = () => {
    SetNumber(number -1)
  }

  return(
      <>
        <div className='flex justify-between items-center  mt-5 mb-5 max-[580px]:shadow-xl px-4 py-4 relative'>
            <div className='flex justify-between items-center w-[40%] max-md:w-[45%]'>
              <Image src={shoe} alt='shoe' className='max-[580px]:w-[50%]'/>
              <div className='max-md:flex max-md:flex-col max-md:gap-3'>
                <h2 className='max-md:hidden'>Nike High Tops</h2>
                <h2 className='md:hidden max-sm:block'>Air force 1</h2>
                <div className='inline-flex items-center gap-1'>
                  <p>XL/ </p>
                  <div className=' [&>*]:rounded-full [&>*]:py-2 [&>*]:px-2'>
                    <p className='bg-[#4F4949]'></p>
                  </div>

                </div>
                <p className=''>$1500</p>
              </div>
              
            </div>

              <div className='flex justify-between items-center w-2/5 max-md:w-[45%] max-md:justify-end pr-4'>
                <p className='max-[580px]:hidden'>$1,500</p>
                <div className='bg-[#666666] inline-flex gap-1 rounded-[5px] items-center text-white py-1 px-6 max-md:px-4 max-md:bg-[#D9D9D9]'>
                  <button onClick={Add}>+</button>{" "}
                    <p>{number}</p>{" "}
                  <button onClick={Remove}>-</button>
                </div>
                <button><span className='pr-2 max-[580px]:hidden'>$1,500</span> <span className='border-2 border-black rounded-[50%] py-[0.1rem] px-[0.2rem] text-[0.6rem] max-[580px]:hidden'>&#10006;</span></button>
                {/* <p></p> */}
              </div>

        <span className='absolute top-[-5px] right-[-4px] bg-[#FF5714] px-1 font-light text-[10px] rounded-[50%] min-[580px]:hidden'> &#10006; </span>
        
        </div>

        <hr className='h-[2px] bg-black mb-16 max-[580px]:hidden'/>

      </>

  )
}


const cartpage = () => {
  return (
    <>
      <section>
        <div className='flex justify-between items-center pt-40 max-[580px]:hidden'>
          <p>ITEMS</p>
          <div className='flex justify-between items-center w-2/5 max-md:w-[48%] pb-2'>
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p className='pr-10'>TOTAL</p>
          </div>
        </div>
        <hr className='h-[2px] bg-black max-[580px]:hidden'/>

        <SingleItem/>
        <SingleItem/>
        <SingleItem/>
       
        <p  className='text-end'>Total Price : 10,000</p>

       <div className='flex justify-center gap-32 items-center pb-40 max-[800px]:gap-12 max-[515px]:gap-6 '>
          <div className='inline-flex gap-8 bg-[#E6E6E6] rounded-3xl py-4 px-8 max-[800px]:py-2 max-[800px]:px-4 max-[800px]:gap-4 max-[580px]:hidden'>
            <p>Promo Code</p>
            <p className='text-green-500 font-semibold'>&#10003;</p>
          </div>
          <div className='max-[580px]:hidden'>
            <p>TOTAL</p>
            <p>$10,000</p>
          </div>
          <div className='max-[580px]:pt-4'>
            <Link href={"/checkout"}>
              <button className='bg-[#FF5714] text-white px-6 py-4 rounded-[50px] text-[12px] font-bold  max-[800px]:py-2  max-[800px]:px-4 max-[580px]:w-fit max-[580px]:pr-[11rem] max-[580px]:pl-[11rem] max-[580px]:rounded max-[580px]:pt-2 max-[580px]:pb-2'>
                  CHECK OUT
              </button>
            </Link>
          </div>
       </div>
      </section>
    </>
  )
}

export default cartpage
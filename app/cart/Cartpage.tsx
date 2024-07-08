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
        <div className='flex justify-between items-center mt-10 mb-10'>
            <div className='flex justify-between items-center w-[40%]'>
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
              
            </div>

            <div className='flex justify-between items-center w-2/5'>
              <p>$1,500</p>
              <div className='bg-[#666666] inline-flex gap-1 rounded-[5px] items-center text-white py-1 px-6'>
                <button onClick={Add}>+</button>{" "}
                <p>{number}</p>{" "}
                <button onClick={Remove}>-</button>
              </div>
              <p><span className='pr-4'>$1,500</span> <span className='border-2 border-black rounded-[50%] py-[0.1rem] px-[0.2rem] text-[0.6rem] '>&#10006;</span></p>
              {/* <p></p> */}
            </div>
        </div>
        <hr className='h-[2px] bg-black mb-16'/>

      </>

  )
}


const cartpage = () => {
  return (
    <>
      <section >
        <div className='flex justify-between items-center pt-40'>
          <p>ITEMS</p>
          <div className='flex justify-between items-center w-2/5  pb-2'>
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p className='pr-10'>TOTAL</p>
          </div>
        </div>
        <hr className='h-[2px] bg-black'/>

        <SingleItem/>
        <SingleItem/>
        <SingleItem/>
       

       <div className='flex justify-center gap-32 items-center pb-40 '>
          <div className='inline-flex gap-8 bg-[#E6E6E6] rounded-3xl py-4 px-8'>
            <p>Promo Code</p>
            <p className='text-green-500 font-semibold'>&#10003;</p>
          </div>
          <div>
            <p>TOTAL</p>
            <p>$10,000</p>
          </div>
          <div>
            <Link href={"/checkout"}>
              <button className='bg-[#FF5714] text-white px-4 py-2 rounded-[50px] text-[12px] font-bold'>
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
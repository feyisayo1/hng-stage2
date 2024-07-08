import { ArrowDown2 } from 'iconsax-react'
import React from 'react'
import Item from './Item'

const Items = () => {
  return (
    // <>
    <section className='w-[100%]'>
        <div className='flex justify-between'>
            <p className='text-[16px] font-normal'>Showing 1-12 of 150 Results</p>
            <p className='text-[16px] font-normal'>
                Sort by Price: <span className='font-semibold'>Low to High</span>
                <span> <ArrowDown2 className='inline-flex align-middle' size="20" color='#000'/></span>
            </p>
        </div>
        
        <div className='flex justify-between '>
            <Item/>
            <Item/>
        </div>
        <div className='flex justify-between '>
            <Item/>
            <Item/>
        </div>
        <div className='flex justify-between '>
            <Item/>
            <Item/>
        </div>

      <div className='flex justify-center gap-4 pt-16 pb-16 items-center'>
        <p className='border-[#000] border-[2px] py-[0.3rem] px-[0.7rem] rounded-[50%] '>1</p>
        <p>2{" "}</p>
        <p>3....150</p>
      </div>
      
    </section>
        
    // </>
  )
}

export default Items
import React from 'react'
import SingleItem from '../Item.png'
import Rating from '../Rating.png'
import smallcircle from '../smallcircle.png'
import Image from 'next/image'
import { ShoppingCart } from 'iconsax-react'

const Item = () => {
  return (
    <section className=''>
        <div className='pt-8 flex flex-col gap-4'>
                <Image 
                    src={SingleItem} 
                    alt='logo' 
                    className=' w-[323px] h-[258px]'
                />
                <p>Flat Palms Noir</p>
                <div className='flex justify-between items-center'>
                    <Image 
                        src={Rating} 
                        alt='logo' 
                    />
                    <Image 
                        src={smallcircle} 
                        alt='logo' 
                    />

                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-[20px] font-normal'>$140.32</p>
                    <button className='bg-[#FF7943] text-white px-4 py-2 rounded-[50px] text-[12px] font-bold'>
                        Add to Cart 
                        <span className='inline-flex align-middle pl-2'>
                            <ShoppingCart size="20" color="#000"/>
                        </span>
                    </button>
                </div>
        </div>
    </section>

  )
}

export default Item
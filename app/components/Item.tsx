import React from 'react'
import SingleItem from '../Item.png'
import Rating from '../Rating.png'
import smallcircle from '../smallcircle.png'
import Image from 'next/image'
import { ShoppingCart } from 'iconsax-react'
import Link from 'next/link'

const Item = () => {
  return (
    <section className=''>
        <div className='pt-8 flex flex-col gap-4 max-2xl:w-[] max-2xl:h-auto'>
                <Image 
                    src={SingleItem} 
                    alt='logo' 
                    className=' w-[323px] h-[258px] max-[1350px]:w-[250px] max-[1350px]:h-[250px] max-[575px]:w-[170px] max-[575px]:h-auto'
                    // className=' w-[323px] h-[258px] max-[1391px]:w-[100%] max-[1391px]:h-[100%]'
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
                    <p className='text-[20px] font-normal max-sm:text-[15px]'>$140.32</p>
                    <Link href={"./cart"}>
                        <button className='bg-[#FF7943] text-white px-4 py-2 rounded-[50px] text-[12px] font-bold max-[575px]:text-[10px] max-[575px]:px-2 max-[575px]:py-1'>
                            Add to Cart 
                            <span className='inline-flex align-middle pl-2'>
                                <ShoppingCart size="18" color="#000"/>
                            </span>
                        </button>
                    </Link>
                 
                </div>
        </div>
    </section>

  )
}

export default Item

// 311 250
"use client"
import React from 'react'
import Link from "next/link";
import logo from '../Group.png'
import Image from "next/image";
import { usePathname } from "next/navigation";

import { SearchNormal1, ShoppingCart, Heart, ArrowRight2} from 'iconsax-react';



const NavBar = () => {
  const pathname = usePathname();
  return (
    <>
        <nav className='flex justify-between items-center py-4 w-4/5 m-auto'>
            <div>
                <Image 
                    src={logo} 
                    alt='logo' 
                    width={65.89}
                    height={56.01}
                />
                
            </div>

            <div className='flex justify-between w-[35%]'>
                <Link href={"/"}>Home</Link>
                <Link href={"/"} className="border-b-4 w-fit border-[#FF7943]">Shop</Link>
                <Link href={"/"}>Pages</Link>
                <Link href={"/"}>Blog</Link>
                <Link href={"/"}>Contacts</Link>
            </div>

            <div className='flex justify-between  w-[15%]'>
                <Link href={""}> 
                    <SearchNormal1 size="20" color="#000000"/>
                </Link>
                <Link href={""}>
                    <Heart size="20" color="#000000"/>
                </Link>

                {pathname === "/cart" ? 
                     <Link href={"./cart"} className='relative'>
                        <ShoppingCart size="20" color="#000000"/>
                        <span className='absolute top-[-5px] right-[-4px] bg-[#FF5714] py-[0.1rem] px-1 font-light text-[10px] rounded-[50%]'> 3 </span>
                    </Link>
                    : (pathname === "/checkout" ? 
                        <Link href={"./cart"} className='relative'>
                            <ShoppingCart size="20" color="#000000"/>
                            <span className='absolute top-[-5px] right-[-4px] bg-[#FF5714] py-[0.1rem] px-1 font-light text-[10px] rounded-[50%]'> 3 </span>
                        </Link>
                        :
                        <Link href={"./cart"} className='relative'>
                            <ShoppingCart size="20" color="#000000"/>
                        </Link>
                    )
                   
                }
              
            </div>
     
        </nav>

        <div className='bg-[#FF5714]'>
            <div className='w-4/5 m-auto  py-8'>
               
                {pathname === "/cart" ? 
                    <div>
                        <h1 className='font-[800] text-[40px]'>Cart</h1>
                        <p>
                            Home 
                            <span className='inline-flex align-middle'>
                                <ArrowRight2 size="15" color="#000"/>
                            </span>  
                            Cart
                        </p>
                    </div>  
                   
                : (pathname === "/checkout" ? 
                    <div>
                        <h1 className='font-[800] text-[40px]'>Checkout</h1>
                        <p>
                            Home 
                            <span className='inline-flex align-middle'>
                                <ArrowRight2 size="15" color="#000"/>
                            </span>  
                            Checkout
                        </p>
                    </div>  
                    :
                    <div>
                        <h1 className='font-[800] text-[40px]'>Shop</h1>
                        <p>
                            Home 
                            <span className='inline-flex align-middle'>
                                <ArrowRight2 size="15" color="#000"/>
                            </span>  
                            Shop
                        </p>
                    </div>  
                )
                   
                }  

            </div>
        </div>
    </>
  )
}

export default NavBar
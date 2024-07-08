import React from 'react'
import { SearchNormal1,  ArrowDown2 } from "iconsax-react";


const SideBar = () => {
  return (
    <>
      <section className=''>
        <form className="h-[34px] w-[260px] px-3 gap-2 flex relative items-center border-[2px] rounded max-lg:hidden">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="w-full h-full outline-none text-[14px]"
          />
          <button className="w-fit">
            <SearchNormal1 size="20" color="#B3B3B3"/>
          </button>
        </form>

        <div>
          <div className='flex flex-col gap-2'>
            <h1 className='pb-4 pt-8 font-bold'>
              CATEGORIES <span className='inline-flex align-middle'><ArrowDown2 size="15" color="#000000"/></span>
            </h1>
            <p>Men (15)</p>
            <p>Women (15)</p>
            <p className='pb-12'>Children (15)</p>
          </div>
          <hr className='h-[2px] bg-black'/>
        </div>

        <div>
          <div className='flex flex-col gap-2'>
            <h1 className='pb-4 pt-8 font-bold'>
              Filter Price <span className='inline-flex align-middle'><ArrowDown2 size="15" color="#000000"/></span>
            </h1>
            <p>1000 - 5000</p>
            <p>6000 - 10,000</p>
            <p className='pb-12'>11,000 - 20,000</p>
          </div>
          <hr className='h-[2px] bg-black'/>
        </div>

        <div>
          <div className='flex flex-col gap-2'>
            <h1 className='pb-4 pt-8 font-bold'>
              Brands <span className='inline-flex align-middle'><ArrowDown2 size="15" color="#000000"/></span>
            </h1>
            <p>Nike (15)</p>
            <p>Adidas (15)</p>
            <p className='pb-12'>Gucci (15)</p>
          </div>
          <hr className='h-[2px] bg-black'/>
        </div>

        <div>
          <div className='flex flex-col gap-2 py-8 '>
            <h1 className='pb-4 pt-8 font-bold'>
              Size <span className='inline-flex align-middle'><ArrowDown2 size="15" color="#000000"/></span>
            </h1>
            <div className='[&>*]:px-4 [&>*]:py-4 inline-flex [&>*]:border-2 [&>*]:border-black gap-2'>
              <p>Xs</p>
              <p>S</p>
              <p>M</p>
            </div>
            <div className='[&>*]:px-4 [&>*]:py-4 inline-flex [&>*]:border-2 [&>*]:border-black gap-2'>
              <p>Xl</p>
              <p>2XL</p>
            </div>
            <div className='[&>*]:px-4 [&>*]:py-4 inline-flex [&>*]:border-2 [&>*]:border-black gap-2'>
              <p>XXL</p>
              <p>3XL</p>
              <p>4XL</p>
            </div>
          </div>
          <hr className='h-[2px] bg-black'/>
        </div>
        
        <div>
          <div className='flex flex-col gap-2 py-8 '>
            <h1 className='pb-4 pt-8 font-bold'>
              Size <span className='inline-flex align-middle'><ArrowDown2 size="15" color="#000000"/></span>
            </h1>
            <div className=' inline-flex gap-2 [&>*]:rounded-full [&>*]:py-4 [&>*]:px-4'>
              <p className='bg-[#D9D9D9]'></p>
              <p className='bg-[#0038FF]'></p>
              <p className='bg-[#000]'></p>
            </div>
            <div className=' inline-flex gap-2 [&>*]:rounded-full  [&>*]:py-4 [&>*]:px-4'>
              <p className='bg-[#4F4949]'></p>
              <p className='bg-[#054E53]'></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SideBar



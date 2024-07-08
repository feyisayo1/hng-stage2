import React from 'react'
import SideBar from './components/SideBar'
import Items from './components/items'

const Home = () => {
  return (
    <>
    <main className='flex w-4/5 m-auto pt-16 gap-36 max-xl:gap-12 max-lg:gap-8'>
      <SideBar/>
      <Items/>
    </main>
    </>
  )
}

export default Home
import React from 'react'
import { Filter, List } from '../components'
import hbg from '../assets/images/hbg.png'

function Home() {
  return (
    <>
    <main>
      <div className='w-full'>
        <div style={{backgroundImage: `url(${hbg})`}} className='bg-center bg-cover absolute sm:hidden w-full top-30 h-72'></div>
          <Filter />
          <List/>
        </div>
    </main>
    </>
  )
}

export default Home
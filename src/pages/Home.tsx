import React from 'react'
import { Filter, List } from '../components'
import hbg from '../assets/images/hbg.png'
import { useLoaderData } from 'react-router-dom'
import { useDataContext } from '../context/DataContext'

function Home() {
  const data = useLoaderData()
  const { handleData } = useDataContext()

  React.useEffect(()=>{
    handleData(data)
  },[])
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
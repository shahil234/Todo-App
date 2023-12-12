import React from 'react'
import Header from './Header'
import Content from './Content'
function MainApp() {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#F8F8FF] px-2 py-1 md:px-10 md:py-5 flex flex-col justify-start items-center gap-y-8'>
        <div className=''>
            <h1 className='text-[#646681] font-bold text-5xl text-center'>TODO LIST</h1>
        </div>
        <main className='w-full md:w-[70%] max-w-3xl flex flex-col gap-y-10 justify-start items-center'>
            <Header />
            <Content />
        </main>
    </div>
  )
}

export default MainApp

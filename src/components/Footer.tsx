import React from 'react'

function Footer() {
  return (
    <div className='pt-20 bg-neutral-900'>

        <div className="border w-1/2 mx-auto mt-20"></div> 

        <div className='flex flex-col items-center mt-20 p-10'>
            <div>
                <p className='text-5xl text-center text-green-500'>
                    &copy; 2024 CMS
                </p>
                <p className='text-white text-center mt-10'>
                    Adam 
                    <br />
                    Atharva 
                    <br />
                    Anuron 
                    <br />
                    Neel 
                </p>
            </div>
            <div className='h-48'></div>
        </div>
    </div>
  )
}

export default Footer
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='bg-orange-400 flex flex-row text-white h-40 justify-between px-5 py-5 '>
        <div className=''>
            <Image src={"/RAVELING_BAND.png"} alt='delhincrmap' width="170" height='100'></Image>
        </div>
        <div className=' '>
            <ul>
                <li>Services</li>
                <li>Clients</li>
                <li>Case Studies</li>
                <li>Partners</li>
            </ul>
        </div>

        <div className='flex flex-col '>
            <div>Contact us </div>
                <div>Email: ByteTechnology@gmail.com</div>
                <div>Phone: +91123456789</div>
                <div className='flex flex-row'>
                    <div>G</div>
                    <div>L</div>
                </div>
        </div>

        <div >
            <input placeholder='Enter you mail' className='bg-slate-400 text-black placeholder-white px-2 border-black shadow-md h-8'>
            </input>
            <p>Subscribe to our<br/> newsLetter</p>
        </div>

      </div>



      <div className='bg-gray-600 font-semibold text-white flex flex-row justify-between px-8'>
        <div className=''>
            Created by Ayush Singh 
        </div>
        <div className=''>
            All rights reservered
        </div>
      </div>
    </footer>
  )
}

export default Footer

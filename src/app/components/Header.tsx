import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-between bg-lime-100 shadow-lg text-black border-blue-200 px-3 py-2'>
        <Link href={"/"}>
            <div className='font-bold shadow-lg'>
                ByteTechnology
            </div>
        </Link>

        <div className='flex flex-row space-x-3'>
            <Link href={"/"}><div className='font-semibold hover:text-cyan-600'>Home</div></Link>
            <Link href={"/services"}><div>Services</div></Link>
            <Link href={"/clients"}><div>Clients</div></Link>
            <Link href={"/partners"}><div>Partners</div></Link>
            <Link href={"/casestudies"}><div>Case Studies</div></Link>
        </div>
    </div>
  )
}

export default Header

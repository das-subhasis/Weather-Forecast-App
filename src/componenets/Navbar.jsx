import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";


const Navbar = ({ setQuery, weather }) => {

    const [input, setInput] = useState('')

    const locations = [
        {
            id: 1,
            loc: 'New Delhi'
        },
        {
            id: 2,
            loc: 'Kolkata'
        },
        {
            id: 3,
            loc: 'Mumbai'
        },
        {
            id: 4,
            loc: 'Bengaluru'
        }
    ]
    return (
        <div className='w-full h-fit mt-3 flex flex-col justify-center items-center gap-7  rounded-xl'>
            <div className="locations w-fullfont-semibold  flex justify-center items-center gap-10 px-3`">
                {
                    locations.map(locs => {
                        return <span key={locs.id} className='text-white hover:text-opacity-85 transition-colors duration-300 ease-in-out cursor-pointer' onClick={() => setQuery({ q: locs.loc, units: 'metric' })}>{locs.loc}</span>
                    })
                }
            </div>
            <div className='flex relative items-center shadow-2xl'>
                <IoSearch size={20} className='absolute right-4 top-[10px] cursor-pointer text-white' onClick={() =>
                    setQuery({ q: input, units: 'metric' })} />
                <input type="text" placeholder='Enter Your Location' className='text-white font-medium text-base bg-white bg-opacity-15 focus-within:placeholder:text-opacity-75 placeholder:text-white placeholder:text-base outline-none w-52 px-4 py-2 rounded-md' onChange={e => setInput(e.target.value)} />
            </div>
            {weather && (
                <div className='flex items-center justify-center gap-2 text-white font-medium'>
                    <p>{weather.localdate}</p>
                    <span>|</span>
                    <p>Local Time : {weather.localTime}</p>
                </div>
            )}
        </div>
    )
}

export default Navbar
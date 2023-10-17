import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Button } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';


const handleChangeTheme=()=>{
    console.log("Change Theme");
}
const Right = () => {
  return (
    <div className='py-5 sticky top-0'>
      <div className='relative flex items-center'>
        <input type="text" className='py-3 rounded-full text-gray-500 w-full pl-12' placeholder='Search Tweet'/>
        <div className='absolute top-0 left-0 pl-3 pt-3'>
            <SearchIcon className='text-gray-500'/>

        </div>
        <Brightness4Icon className='ml-3 cursor-pointer' onClick={handleChangeTheme}/>
      </div>

    <section className='my-5'>
        <h1 className='font-bold my-2'>Get Verified</h1>
        <h5 className='font-bold my-2'>Subscribe to unlock new feature</h5>   
        <Button variant='contained' sx={{padding:"10px",paddingX:"20px", borderRadius:"25px" }}
        >Get Verified</Button>
    </section>

    <section className='mt-7 space y-5'>
        <h1 className='font-bold text-x1 py-1'>What's Happening</h1>
        <div className='mt-2 justify-between'>
            <div className='mb-3'>
                <p className='font-bold'>#Sports</p>
                <p className="text-sm">ICC WC 2023</p>
                <p className="text-sm">Asian Games </p>
            </div>
            <div className='mb-3'>
                <p className='font-bold'>#World</p>
                <p className="text-sm">Israel Hamas war</p>
            </div>
            <div className='mb-3'>
                <p className='font-bold'>#Entertainment</p>
                <p className="text-sm">Hollywood</p>
                <p className="text-sm">Bollywood</p>
            </div>
            <div className='mb-3'>
                <p className='font-bold'>#Trending</p>
                <p className="text-sm">Israel Hamas conflict</p>
                <p className="text-sm">ICC WC 2023</p>
            </div>
             
            <MoreHoriz/>
           
            
            

        </div>
    </section>

    </div>
  )
}

export default Right

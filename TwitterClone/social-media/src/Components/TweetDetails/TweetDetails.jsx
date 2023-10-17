import { KeyboardBackspace } from '@mui/icons-material'
import React from 'react'
import TweetCard from '../HomeSection/TweetCard';
import { Divider } from '@mui/material';
import {useNavigate } from 'react-router';

const TweetDetails = () => {

    const navigate = useNavigate();
    const handleBack=()=>navigate(-1);

    return (
    <React.Fragment>
        {/* <section className={`z-50 flex items-ceter sticky top-0 bgopacity-9`}> */}
        <section className='z-50 flex items-ceter sticky top-0 bgopacity-95'>
            <KeyboardBackspace className='cursor-pointer' onClick={handleBack}
            />
        <h1 className=' py-5 text-x1 font-bold opacity-90 ml-5'>
            Tweet
        </h1>
        </section>

        <section>
            <TweetCard/>
            <Divider sx={{margin:"2rem 0rem"}}/>
        </section>

        <section>
            {[3,2,1].map((item)=><TweetCard/>)}
        </section>

    </React.Fragment>
  )
}

export default TweetDetails

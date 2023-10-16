import { Grid } from '@mui/material';
import React from 'react';
import Navigation from '../../Navigation/Navigation';
import Home from '../HomeSection/Home';
import Right from '../RightPart/Right';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from '../Profile/ProfilePage';
import TweetDetails from '../TweetDetails/TweetDetails';

const HomePage = () => {
  return (
    <Grid container className='px-5 lg:px-36 justify-between'>
      
      <Grid item xs={0} lg={2.5} className='px-5 lg:px-9 hidden lg:block w-full relative'>
        <Navigation/>
      </Grid>

      <Grid item xs={12} lg={6} className='px-5 lg:px-9 hidden lg:block w-full relative'>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/profile/:id" element={<ProfilePage/>}></Route>
          <Route path="/tweet/:id" element={<TweetDetails/>}></Route>
        </Routes>
         
      </Grid>
      
      <Grid item xs={0} lg={3} className='px-5 lg:px-9 hidden lg:block w-full relative'>
        <Right/>
      </Grid>
    </Grid>
  );
}

export default HomePage;

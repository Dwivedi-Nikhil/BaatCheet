import React, { useState } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Tab } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Business, CalendarViewMonth, LocationOn } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { typography } from '@mui/system';
import TweetCard from '../HomeSection/TweetCard';
import ProfileModel from './ProfileModel';

const ProfilePage = () => {
    const navigate = useNavigate();
    const handleBack=()=>navigate(-1);
    const handleOpenProfile = ()=>{
        console.log("Open Profile");
    } 
    const handleFollowUser = ()=>{
        console.log("handle Follow user");
    } 
    const handleTabChange=(event, newValue)=>{ 
        setTabValue(newValue)  
        if(newValue===4){
            console.log("likes tweet");
        }
        else if(newValue===1){
            console.log("users tweet");
        }
    }

    const [tabValue,setTabValue]= useState("1");
    
  return (
    <div>
        {/* <section className="z-50 flex items-center sticky top-0 bg-opacity-95"></section> */}
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-x1 font-bold opacity-90 ml-5">Dummy Todo </h1>
      </section>

      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?cs=srgb&dl=pexels-hristo-fidanov-1252890.jpg&fm=jpg"
          alt=""
        />
      </section>

      <section>
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RiSd2p256bROWyeqIOqebopStY3uU49A5Utl73sEevoED-ZirA-32OY3hI4txpXUbf8&usqp=CAU"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />

          {true ? (
            <Button
              onClick={handleOpenProfile}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Dummy Todo</h1>
            {true && <VerifiedIcon />}
          </div>
          <h1 className="text-gray-500">dummy@static</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>I Am Vengeance..! </p>

          <div className=" flex space-x-5">
            <div className="flex items-center text-gray-500">
              <Business />
              <p>ByPeople Technologies</p>
            </div>
            <div className="flex items-center text-gray-500">
              <LocationOn />
              <p>India, Ahmedabad</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarViewMonth />
              <p>Joined on Aug 2023</p>
            </div>
          </div>
          <div className="flex items-center px-1 space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>120</span>
              <span className="text-gray-500">Followers</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <span>1200</span>
              <span className="text-gray-500">Following</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Box sx={{ width:"100%", typography:'body1' }}>
            <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
                </TabList>
            </Box>
            <TabPanel value="1">{[1,1,1,2].map((item)=><TweetCard/>)}</TabPanel> 
            <TabPanel value="2">users replies</TabPanel>
            <TabPanel value="3">users media</TabPanel>
            <TabPanel value="4">users likes</TabPanel>
            </TabContext>
        </Box>
      </section>

      <section>
        <ProfileModel></ProfileModel>
        </section>      

    </div>
  );
}

export default ProfilePage

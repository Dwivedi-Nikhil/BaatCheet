import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import { MoreHoriz } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const TweetCard = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate=useNavigate();

    const handleDeleteTweet=()=>{
        console.log("delete tweet");
        handleClose();
    }
    const handleOpenReply=()=>{
        console.log("Open Model");
    } 
    const handleCreateRetweet=()=>{
        console.log("retweet");
    }
    const handleLikeTweet=()=>{
        console.log("handle likes");
    }
    const handleUpload=()=>{
        console.log("handle Upload");
    }

  return (
    <div className="">
      
      {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
      <RepeatIcon/>
      </div> */}
    <div className='flex space-x-5'>
        <Avatar onClick={()=>navigate(`/profile/${5}`)} className='cursor-pointer' 
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAzFBMVEX////hHiIOb7bfAADgEhcAa7ThGR0AZrLjOTvgAAkAZbIAaLMAbLUAYrHpaWr86+zvp6YAYLAAXa7mW13q8vflPj7ul5fgDRPqenvxs7P10NHodXXum5zz+PqzzOLp8Pf64OH0xcX78fHlUlP56OfrhYbjRkjiKy3lT1Dzvbzuo6P++fltn8wAWq/a5/Izfr1XkMbI2uqLstWkwd2AqdHrgYHura3gIyjjMTTzw8PobG711teGrtSqyOBHiMG90+Rkmco4gsCautoAUqyEq7LhAAAK9UlEQVR4nO2deVvqOhCHadPFbh4RpICyyCpQu1BEj6xyv/93ukm60ApFPNd7Spu8fyjU1mf4PZPpTBI6hQKFQibztA3IEpXHtC3IEKO3tC3IEAtQT9uE7NAGL2mbkB3a4CptE7LDAoC0TcgOIwB+pW1DZqhIoJe2DZmhy4FJ2jZkhQ5g9LRtyAxjiSulbUNm0AXpIW0bssKDxIB22kZkhF+AEQZpG5EVuhwDRmkbkRH60LFosXMec8AwgE5nnUUNaqVfp21FNkBaCRLN3s/hBmpFB+F59LFWNB89hxLWqvr5MB2Uh/TedKiV9Dm41+lKzyEjSUBaxQvoRV96oY51QB8grUBMq/kduGunZM8FM3lC4YoB9/tDv/oAALoyfUhb4LBWlfBIrwokcN1J0aZLZYSHoABqwYFJH+icVDt1DalU8BDkhEVwoKZLjDSgyztHqGKtpEEw5jpdVEr3U7XpUrn2QnuYXj1KXHREUiK8S0wsbR/jSppuCznGizcGw5ShgrVqp2jR5TLHWund4P0YV4eLU5cQSxtrJQyD949YKzr/fpQnLxcNPGnCwHxLvz95CbHUvYAVZgkVFOwluiPkKC86jlhBgjVB2tF1+wSGqMrRww2RaP6doev2CXjpaJhT3ePJv5s0LbpgvLwhnNy7wo5WOXUFwbwK0byhgG+NwlOKBl0yaNwJd+FblDgwdP9MAiNU2+y/S9HFrkXzrASQOlz4ro8zCYZ+ueI4DyBaCXo5atTXKBFQfSPtb3+vOGgxEv0qylFg1Io40thzLQb8TtGkC+Zdj8wyTLz7IfQtuqxzjMlQiGzzG/muRTdoHacNGDAO33mTzDTZSuI3VCtc9ZoM/RhPi57jzAG3L3F63kCkEzVJPIDIQHz0Vly7J84nmwqIxKh3nNbTCJ9IBezL6QWeAhyfOJt0KpENNCjG0++xnuJhXyJ2BVrwfME8nAQcCAKTpiVZoObv8pvowtGUtNFqlf+mPRdGOf7p/XH4GxyZ0HIM9va5KLOG81csuyham6mtWkunceRvgyNbHVbLjWk2bY1XtDVZ7rVBXvLhJnzo8VvyjINp8Swvmv+TXZeHY8iyxk4T3aN+esefpbKqcswf80fDtTSeFXfJZ0zap/9DWWRZ3vhRoy6UnSqqLCuuzr+ibLqzaSt6ZMazrEyAa800FqHarS9PbZiOO91avPjP+lOEcmQoVvN/svCCWBZ5Ty2NNXZNxyxHHKRRNk3H2ax2U2P7wWqaJoswtonW5vM/aUGxRPdvmp0Sjs3LCg9HIssrSAsoiaxARPQSvpZFEb3lFUXWFMveHcssTOieyjcGcoZpODvsODJShY8DJYICFlVrDf3OTApLTTQMScpMYURqutOlYWy3Nma7NYzZdNfcOIkiBWzhUFb/ipXZpwxHoThN24qMsOZZlUDH+qMSz4URSyOn3PExt39y+98grQhIsmKUbe3jDy6DWqnyQeaVc0yRV62vTmptPg9UV1NF6+vsP2fY8PavWKuEz91oOe5srWgaG0+nDI0n8T44k1HRo2gKu7aN5c5teqxcWOusWRmmrDjNVzVjr6dpabJB1ryfD3QSr0pUUeIuBqCkXlVZH17URNu/8zVmz+KMuBHoYxqarISyfEblRbmobt0wR3CLH6TdA+M40zUroiKRR+6kek6G6muF/TB2TmTElQ2XgAmsLymbsEacwQJxvV7DChGWh6uvq0MKhUJJg/KUpDm8/0TDKK7TtiErNFiFVXYJGXnZcaf0nrhnhSoeRbS2S7TO08ILPY2y6TR3szWryKLIn1iJJQ3z1s/VFbxOESJ6qz8QMdHxyKMpKknVjl/zKLcscXOiSZQNRUysDnlFs2ZUqggN15b92ZhoEY1WWO0d8Uq1mkvbYu3oerLjGh9KUZPRerSmaUUNhvwm8UIVHEN5vrXdo0LgjQ6Oaba+ShhMEvLY8pTVitbqvydPWu7VasxkReV/Yvqu9Zz39MtRYJbwI0tYDq/mPLPfFHEy8J/3NpZX1vM651qhPbNYLdnY/PFHNZsz6/l2nfuAVZhpfibFy/J6lrzz6hiNltOcbj/EYvGWXYY30nKOV6VXlgZLPj/llDWRXW+X7mpj+vVzjEaj3GrBenrlLg37g+Vx/lWMJ6mOmOvBWG7ObLaIJMPLgqh8FlEe6ktoefgJPPoL3i8JX4py0TJ2sdHn2P+QsEvS3Lgz24LlDNbCW/86BG+YFKGwirWdfk7mG65VvCVh+21Aw3Q27m5m2GvLcyUkH9IPu5n1YRt4Rexwfqbl2rAussgthmCMKsMo1WrBX41Gciwym4YFx61G+Mr0VzTM5nTNon3xGkvcrI25g5HonDnQlonnmEUZ7RmRtfWUNKUwpmsrz7JlG7MpzCA2eL4BA19tmu5uOduuLbnofY8AphrqerYiUqiAsrmaQklU+fY54NaniJEVFOtnu6ZJ6k6jQ2AOCm+OzaYL2e126NcKfXeg1ToR7SkUCoVCoeSbXhuRthUZoQQgr2lbkRGuOYb20T4XKtY3oGJ9AyrWN6BifQMq1jegYn2DA7Haj/PxTa1+dofoXr12M54/EtEYKyZWvXKHclRJgj+6fvPxKjoCIlq8ovfeI4N7N9fh+UP8rNf70fVNfh+vHxFrPAS6/4R89FRg8I6P4u4V0V5OYSOsehdIXHi+AIbtQqHWe6nmt8V7RKwSarWjQzeRPM18tUC8PRF+djdAguDH6XM6dCvvfE7oFCaFySS/Pd4jYt3AwXRVrcxr8/6rtG8cc4+8B4SPRvSaQqJHBneABPTr/s2oVukCItryRMRalEahJLh/tPd8buxA+xa/qNGh4FXepXE7OFr3Wkfm16kwSalDCX16Ab2a7HVDoMecc4cuNApHZ45JEus3CDuhYN24wGlw77754QVcwvE8kSRWOwxNhbkUcZpfIKHnB2rql/cGiGeIhe9/wcjDHgeO/KM7gsXq7cUqDFCvQ//R5qjD2pGQRahYncd55aVaxe0qfLEepH0DOjTa9rdGyKRee+hXqy9DAvqQxsXqoXpH0iFeKuCJhYekjp+s3Ik4HKJWkvwLGNLE6gMJ5eICB4mIVXgLe47iHpGD4OLRK+Ci5xMkVucON9YG+uD6/b0kRMTCrSDxLbCqRzok94GAakjwVrp+v38lS6wBqg25sTfBEA3wfjGNmqSgNodB4oC7+IF7v/cAWQH+Bo2wYTAX044FJzw4r7zGO8Gg7cTLILLEwve5sJ9hXKygmEaFYdBYDd0jI33DiBLLc5Swko6LFVR+V5FR2BVi9Q1RYuG4tG9JHhcLT2rpFRTIwubSw5gnEijWfvr4k1iomBZKD3pEEBTrI33DiKoN27Gmae0rISYWLqZfr6IjFbnSvod5VScldcAfGefgOp5c6OAMKioWnmxAPWy59+DQC5bH65gyeiMig8fjC6fk+MMzYNDvd4HEcFK8rhn4Sxn7lk5eH27p9aXyLkBtP69r5JEnIViO6HjLDgKuC0H3RoqJ9eC1r43W3CVpf74uIe3yLha6p/lzxgtB8txHkGBFswACFxGrDThBgEdGkWtLwHc3HVx3CgzHgZz3idxPKEDfqgzxiupVBQbxzlOp1I30fbwuYWIX157w+cI9aiHWh+fXCnkGNw4F+9TyV/2x/p0W5JNFvd7L+ZpOSDWcT6B8BU6u9vNTlBN0XgUCVvt+hvYbXuzL+6L7jzDGmYJEG46fwWSIJ6lov/Gz6KDsM+cL7j/HQuh/J6eiUEjhX9e+69gtBlrCAAAAAElFTkSuQmCC'/>
       
        <div className='w-full'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center space-x-2'>
                <span className='font-semibody'>Dummy</span>
                <span className='text-gray-600'>Dummy@Todo</span>
                <VerifiedIcon />
                </div>

                <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} >
                    <MoreHoriz></MoreHoriz>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}>
                    <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                    <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
                </Menu>

                </div>

            </div>
            <div className='mt-2'>
                <div onClick={()=> navigate(`/tweet/${5}`)} className='cursor-pointer mt-2'>
                    <p className='mb-2 p-0'>Will India win CWC 2023? </p>
                    <img className='w-[28rem] border border-gray-400 p-5 rounded-md' src="https://resources.pulse.icc-cricket.com/ICC/photo/2023/06/27/58598b3c-97a1-4e39-a830-ed4352609cc7/CWC23-Fixtures-announcement-16x9-v2.jpeg"/>
                </div>
            </div>

            <div className='mb-4 py-5 flex flex-wrap justify-between items-center'>
                <div className='space-x-3 flex items-center text-gray-600'>
                    <ChatIcon className='cursor-pointer' onClick={handleOpenReply}/>
                    <p>43</p>
                </div>
                <div className={`${true ? "text-pink-600":"text-gray-600"} space-x-3
                items-center`}>
                    <RepeatIcon onClick={handleCreateRetweet} className='
                    cursor-pointer'></RepeatIcon>
                    <p>2</p>
                </div>

                <div className={`${true ? "text-pink-600":"text-gray-600"} space-x-3
                items-center`}>
                    {true? <FavoriteBorderOutlinedIcon 
                    onClick={handleLikeTweet} className='
                    cursor-pointer'/>:<FavoriteOutlinedIcon
                    onClick={handleLikeTweet} className='cursor-pointer'/>
                    }   
                    <p>2</p>
                </div>
                <div className='space-x-3 flex items-center text-gray-600'>
                    <InsertChartOutlinedOutlinedIcon className='cursor-pointer' onClick={handleOpenReply}/>
                    <p>43</p>
                </div>

                <div className='space-x-3 flex items-center text-gray-600'>
                    <FileUploadOutlinedIcon className='cursor-pointer'
                     onClick={handleUpload}/>
                </div>

            </div>

        </div>

    </div>

    </div>
  )
}

export default TweetCard

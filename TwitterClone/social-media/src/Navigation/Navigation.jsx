import React from 'react'
import { navigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';

const Navigation = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate= useNavigate();

    const handleNavigation = (item) => {
        if (item.title === 'Profile') {
          navigate(`/profile/${5}`);
        } else {
          navigate(item.path);
        }
      };

  return (
    <div className='h-screen sticky top-0'>
        <div className='py-5'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Nick_logo_2009.svg/2285px-Nick_logo_2009.svg.png" width="60" height="60" className="profpic img" alt="Baat Cheet Cafe, profile picture"/>
        </div>

        <div className='space-y-6'>
            {navigationMenu.map((item)=><div className='cursor-pointer flex
            space-x-3 items-center' onClick={() => handleNavigation(item)}
            //  key={item.title} 
             >
                {item.icon} 
                <p className='text-x1'>{item.title}</p>        
                </div>)}
        </div>
        <div className='py-10'>
            <Button variant="contained" type='submit'
            style={{ backgroundColor: '#ff6600' }}
            sx={{width:"50%", borderRadius:"30px", py:"7px"}}>
                Tweet
            </Button>
           
        </div>

        <div className='flex items-center justify-between' >
            <div className='flex items-center space-x-4'>
                <Avatar src="/broken-image.jpg" />
                <div>
                    <span>Dummy Todo</span>
                    <br/>
                    <span className="opacity-70">dummy@static</span>
                </div>
                
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
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>

            </div> 

        </div>

    </div>
  )
}

export default Navigation

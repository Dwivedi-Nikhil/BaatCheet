import HomeIcon from "@mui/icons-material/Home"
import ExploreIcon from "@mui/icons-material/Explore"
import NotificationIcon from "@mui/icons-material/Notifications"
import MessageIcon from "@mui/icons-material/Message"
import ListIcon from '@mui/icons-material/List';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/Verified';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PendingIcon from '@mui/icons-material/Pending';

export const navigationMenu=[
    {
        title:"Home",
        icon:<HomeIcon className="text-[#ff6600]" />,
        path:"/home"
    },
    {
        title:"Explore",
        icon:<ExploreIcon className="text-[#ff6600]" />,
        path:"/explore"
    },
    {
        title:"Notification",
        icon:<NotificationIcon className="text-[#ff6600]" />,
        path:"/notification"
    },
    {
        title:"Message",
        icon:<MessageIcon className="text-[#ff6600]" />,
        path:"/message"
    },
    {
        title:"List",
        icon:<ListIcon className="text-[#ff6600]" />,
        path:"/list"
    },
    {
        title:"GroupIcon",
        icon:<GroupIcon className="text-[#ff6600]" />,
        path:"/group"
    },
    {
        title:"Verified",
        icon:<VerifiedIcon className="text-[#ff6600]" />,
        path:"/verified"
    },
    {
        title:"Profile",
        icon:<AccountCircleIcon className="text-[#ff6600]" />,
        path:"/profile"
    },
    {
        title:"Pending",
        icon:<PendingIcon className="text-[#ff6600]" />,
        path:"/pending"
    }

]
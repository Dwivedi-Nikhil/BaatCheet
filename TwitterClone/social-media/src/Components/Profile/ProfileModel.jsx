import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { Avatar, IconButton, TextField } from '@mui/material';
import { Close } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ProfileModel({open, handleClose}) {
  // const [open, setOpen] = React.useState(false);
  const [uploading,setUploading ]= React.useState(false);


  // const handleOpen = () => setOpen(false);    in profile page form where we are calling profilemoda;
  // const handleClose = () => setOpen(true);

  const handleSubmit=()=>{
    console.log("handle Submit");
  }
  const formik = useFormik({
    initialValues:{
        fullName:"",
        website:"",
        location:"",
        bio:"",
        backgroundImage:"",
        image:"",
    },
    onSubmit:handleSubmit
  })

  const handleImageChange=(event)=>{
    setUploading(true);
    const {name}=event.target
    const file=event.target.files[0];
    formik.setFieldValue(name,file);
    setUploading(false);

  }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal 
        open={open}
        onClose={handleClose}   
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <IconButton onClick={handleClose} aria-label='delete'>
                        <Close/>
                    </IconButton>
                    <p className='text-sm'> Edit Profile</p>
                </div> 
                <Button type="submit">Save</Button>
            </div>
            <div className='overflow-y-scroll overflow-x-hidden h-[50vh]'>
                <React.Fragment>
                    <div className='wfull'>
                        <div className='relative'>
                            <img className="w-full h-[12rem] object-cover object-center" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7NY-l6xoGaHYC_7aarlFpuisla76fvj9i9cqX_jMyw&s"/>
                            <input type="file" className='absolute top-0
                            left-0 cursor-pointer w-full h-full' onChange={handleImageChange}/>
                        </div>
                    </div>
                    <div className='w-full transform -translate-y-20 ml-4 h-[6rem]'>
                      <div className='relative'>
                        <Avatar sx={{width:"8rem",height:"8rem", border:"4px solid white"}}
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RiSd2p256bROWyeqIOqebopStY3uU49A5Utl73sEevoED-ZirA-32OY3hI4txpXUbf8&usqp=CAU'/>
                        
                        <input className='absolute top-0 left-0 w-[10rem]
                        h-full opacity-0 cursor-pointer'
                         onChange={handleImageChange} name='image' type='file'/>
                        

                      </div>
                    </div>
                </React.Fragment>

                <div className='space-y-3'>
                    <TextField fullWidth id="fullName" name="fullName" label="Full Name" 
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.fullName)}
                    helperText={formik.touched.name && formik.errors.fullName}/>

                    <TextField fullWidth multiline id="bio" name="bio" 
                    label="Bio" 
                    value={formik.values.bio}
                    onChange={formik.handleChange}
                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                    helperText={formik.touched.bio && formik.errors.bio}/> 

                    <TextField fullWidth id="website" name="website" label="Website" 
                    value={formik.values.website}
                    onChange={formik.handleChange}
                    error={formik.touched.website && Boolean(formik.errors.website)}
                    helperText={formik.touched.website && formik.errors.website}/>

                    <TextField fullWidth id="location" name="location" label="Location" 
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    error={formik.touched.location && Boolean(formik.errors.location)}
                    helperText={formik.touched.location && formik.errors.location}/>

                    <div className='my-3'>
                        <p className='text-lg'>Birth date . Edit</p>
                        <p className='texr-2xl'>Jan 14 </p>
                    </div>
                    <p className='py-3'>Edit Professional Profile</p>

                </div>

            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
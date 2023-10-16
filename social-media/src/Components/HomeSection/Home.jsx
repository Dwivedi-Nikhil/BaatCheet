import ImageIcon from '@mui/icons-material/Image';
import { Avatar, Button, colors } from '@mui/material'
import { Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TagFacesOutlinedIcon from '@mui/icons-material/TagFacesOutlined';
import { orange } from '@mui/material/colors';
import TweetCard from './TweetCard';

const validationSchema = Yup.object().shape({
  content:Yup.string().required("Text is required")
})

const Home = () => {
  const[uploadImage, setUploadImage] = useState(false);
  const[selectImage,setSelectedImage]= useState("");

  const handleSubmit=(values)=>{
    console.log("values",values)
  }
  const formik=useFormik({
    initialValues:{
      content:"",
      image:""
    },
    onSubmit:handleSubmit
  })

  const handleSelectImage=(event)=>{
    setUploadImage(true); 
    const imageUrl=event.target.files[0]
    formik.setFieldValue("image",imageUrl); 
    setSelectedImage(imageUrl);
    setUploadImage(false);

  }

  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-x1 font-bold opacity-90">Home</h1>
      </section>
      <section className={`pb-10`}>
        <div className="flex space-x-3">
          <Avatar src="/broken-image.jpg" />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="Whats in your mind ?"
                  className={`border-none outline-none text-x1 bg-tranparent`}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content}</span>
                )}
              </div>

              {/* <div>
                <img src="" alt=""/>
              </div> */}
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center rounded-md cursor-pointer">
                    <ImageIcon className="text-[#ff6600]" />
                    <input
                      type="file"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                  <LocationOnOutlinedIcon className="text-[#ff6600]" />

                  <TagFacesOutlinedIcon className="text-[#ff6600]"></TagFacesOutlinedIcon>
                </div>

                <div className="py-10">
                  <Button style={{ backgroundColor: '#ff6600' }} variant="contained"  type='submit'
                    sx={{ width: "100%", borderRadius: "15px", py: "5px" }}
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section>
      {[1,1,1,1].map((item)=><TweetCard/>)}
      </section>       

    </div>
  );
}

export default Home

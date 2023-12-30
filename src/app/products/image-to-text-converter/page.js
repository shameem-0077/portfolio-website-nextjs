"use client"

import { createWorker } from 'tesseract.js';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import React, {useState, useRef} from 'react'
import Header from '../../components/header'
import Box from '@mui/material/Box';
import Image from 'next/image';
import UploadImage from '../../../assets/icons/image-upload.png'
import Fab from '@mui/material/Fab';
import { FileUploader } from "react-drag-drop-files";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const fileTypes = ["JPG", "PNG", "GIF"];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const dropContent = (files) => {
  return (
    <>
      <div className='flex justify-center items-center p-5'>
        <Image height={100} width={files ? 500 : 200} alt='upload image' src={files ? files : UploadImage}  />
      </div>
      <div className='p-5'>
        <h5 className='text-[23px]'>Drag & Drop</h5>
      </div>
      <div className='p-2'>
        <Fab variant="extended" size="small">
          Browse
        </Fab>
      </div>

    </>
  )
}
const page = () => {
  const [output, setOutput] = useState("");
  const [files, setFiles] = useState();
  const [copy, setCopy] = useState(false)
  const [loader, setLoader] = useState(false)
  const handleChange = (file) => {
    const image_url = URL.createObjectURL(file)
    
    setFiles(image_url);
  };

  const convertToText = () => {
    if (files && output) {
      setFiles()
      setOutput("")
    } else {
      (async () => {
        setLoader(true)
        const config = {
          tessedit_char_whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
        };
        const worker = await createWorker('eng', config);
        const { data } = await worker.recognize(files);
        setOutput(data.text)
        await worker.terminate();
        setLoader(false)
      })();
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setCopy(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
    setCopy(true)
  }
  return (
    <section className='font-sans h-screen'>
      <Header />
      <div className='p-8 bg-white h-full overflow-y-scroll'>
        <div className="text-black text-center">
          <h1 className="text-5xl font-bold mb-4">Image to text</h1>
          <p>Image to text by Prepostseo helps you extract text from image, document, and low-resolution photo accurately in one click with advanced OCR technology.</p>
          <Box className="flex flex-col items-center">
            <FileUploader children={dropContent(files)} handleChange={handleChange} name="file" types={fileTypes} />
            
          </Box>
          
          <Box className=' flex justify-center'>
            <Box className="w-2/4 py-5 px-3 max-sm:w-full">
              <p>{output}</p>
            </Box>
          </Box>
          <Box className='mt-7'>
            <Fab onClick={convertToText} variant="extended">
              {
                files && output ? 'Clear' : 'Submit'
              }
            </Fab>
            {
              files && output && (
                <Fab onClick={() => handleCopy()} variant="extended">Copy</Fab>
              )
            }
            <Snackbar open={copy} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Copied to clipboard
              </Alert>
            </Snackbar>
          </Box>
        </div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loader}
          onClick={() => setLoader(false)}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </section>
  )
}

export default page
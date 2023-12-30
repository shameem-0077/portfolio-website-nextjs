"use client";
import Button from '@mui/material/Button';
import React, {useState} from "react";
import ChatModal from '../../components/chatModal'
import ChatPage from '../../components/chatPage'

const page = () => {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("")
    const [isChatScreenOpen, setIsChatScreenOpen] = useState(false)
    
    const handleOpen = (type) => {
        setType(type)
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    
    return (
        <>
            <ChatModal open={open} handleClose={handleClose} type={type} setChatScreenOpen={setIsChatScreenOpen} />
            <section className={`w-screen h-screen ${ isChatScreenOpen ? 'hidden' : 'flex' } justify-center items-center`}>
            <div className='flex flex-col items-center p-9'>
                <div className='m-5'>
                    <Button onClick={() => handleOpen("public")} variant="outlined">Public Room</Button>
                </div>
                <div className='m-5'>
                    <Button onClick={() => handleOpen("private")} variant="outlined">Private Room</Button>
                </div>
            </div>
        </section>
        </>
    )
}

export default page
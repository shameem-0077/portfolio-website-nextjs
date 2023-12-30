import React, {useState, useContext, createContext, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import socketio, { io } from "socket.io-client";
import ChatPage from './chatPage';


const style = {
    position: 'absolute',
    color: 'black',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
export const SocketContext = createContext();


export default function ChatModal({open, handleClose, type, setChatScreenOpen}) {
    const [showChatScreen, setShowChatScreen] = React.useState(false)
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")
    var socket = socketio.connect('http://localhost:3001');
    const handleJoin = () => {
        if (type === 'private') {
            if (name !== "" && room !== "") {
                socket.emit("join_room", room);
                setShowChatScreen(true)
                setChatScreenOpen(true)
              
            } else {
                alert("Please fill in Username and Room Id");
            }

        } else {
            if (name !== "") {
                
                setShowChatScreen(true)
                setChatScreenOpen(true)
              
            } else {
                alert("Please fill Username");
            }
        }
    };
    
    return showChatScreen ? (
        <ChatPage socket={socket} username={name} roomId={room} />
        
    ) : (
        <div>
            {
                type == 'public' ? (
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} className="flex justify-center flex-col gap-5">
                            <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center'>
                                Join public room
                            </Typography>
                            <TextField onChange={(e) => setName(e.target.value)} value={name} id="outlined-basic" label="Name" variant="outlined" />
                            <Button onClick={handleJoin} variant="outlined">Join Room</Button>
                        </Box>
                    </Modal>
                ) : (
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} className="flex justify-center flex-col gap-5">
                            <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center'>
                                Join private room
                            </Typography>
                            <TextField onChange={(e) => setName(e.target.value)} value={name} id="outlined-basic" label="Name" variant="outlined" />
                            <TextField onChange={(e) => setRoom(e.target.value)} value={room} id="outlined-basic" label="room id" variant="outlined" />
                            <Button onClick={handleJoin} variant="outlined">Join Room</Button>
                        </Box>
                    </Modal>
                )
            }
        </div>
    )
}
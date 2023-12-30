"use client"

import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/header';
import OpenAI from "openai";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Skeleton from '@mui/material/Skeleton';

const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true
});

const page = () => {

    const chatScreen = useRef(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [chat, setChat] = useState([
        {
            id: 1,
            chat: "hello",
            side: 'user'
        },
        {
            id: 2,
            chat: "hii",
            side: 'bot'
        },
    ])
    const [input, setInput] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();
        if (input) {
            setError(false)
            setLoading(true)
            chatScreen.current.scrollIntoView({
                block: "end",
                inline: "end",
                behavior: "smooth",
            });
            setInput("")
            const addUserChat = {
                id: chat.length + 1,
                chat: input,
                side: 'user'
            }
            setChat(prev => [...prev, addUserChat])
            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: input }],
                model: "gpt-3.5-turbo",
            });
            const newChat = {
                id: chat.length + 1,
                chat: completion.choices[0]["message"]["content"],
                side: 'bot'
            }
            setChat(prev => [...prev, newChat])
            chatScreen.current.scrollIntoView({
                block: "end",
                inline: "end",
                behavior: "smooth",
            });
            setLoading(false)
        } else {
            setError(true)
        }
    }

    
  return (
    <section className='h-screen w-screen'>
      <video src={require('../../../assets/bg-videos/ai-bg-video.mp4')} autoPlay muted loop className='absolute -z-10 w-full h-full object-cover' />

        <Header />
        <div className='flex justify-center items-center h-[80%] max-sm:h-full'> 
            <Box className="bg-transparent rounded-xl p-5 text-black w-[800px] h-full flex justify-between flex-col max-sm:w-[500px] max-sm:bg-transparent">
                <Box className='rounded-md border-2 border-black'>
                    <ul ref={chatScreen} className='max-h-[600px] min-h-[600px] overflow-y-scroll mb-8 no-scrollbar p-9 rounded-md max-sm:max-h-[350px] max-sm:min-h-[350px] max-sm:p-5'>
                        {
                            chat.map((item, index) => (
                                
                                <li className={`flex ${item.side == 'user' ? 'flex-row-reverse' : 'flex-row'} w-full mb-5`}>
                                    <p className='bg-black text-white px-3 py-1 rounded-lg break-words max-w-sm text-[20px] max-sm:max-w-52 max-sm:text-[16px]'>
                                        {item.chat}
                                    </p>
                                </li>
                                
                            ))
                            
                        }
                        {
                            loading && (
                                <li className="flex flex-row w-full">
                                    <p className='rounded-lg break-words max-w-sm text-[20px] max-sm:max-w-52 max-sm:text-[16px]'>
                                        <Skeleton className='w-[200px] h-12' animation="wave" />                                       
                                    </p>
                                </li>
                            )
                        }
                    </ul>
                </Box>
                <Box className="flex justify-between">
                    
                    <input className={`border-2 ${error ? 'border-2 border-rose-500' : 'border-black'} rounded-lg py-2 px-4 w-full mx-2`} placeholder={error ? 'please type somthing here....' : 'please enter anything...'} onChange={(e) => setInput(e.target.value)} value={input} type="text" />
                    <Button className='bg-white text-black hover:bg-black hover:text-white' onClick={(e) => handleSubmit(e)} variant="contained">Send</Button>
                </Box>
               
            </Box>
        </div>
    </section>
  )
}

export default page
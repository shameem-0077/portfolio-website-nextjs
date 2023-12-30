import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ProductDemo from '../../assets/icons/mobile-app.png'
import Button from "@mui/material/Button";
import Header from '../components/header';


const page = () => {
  const productData = [
    {
      id: 1,
      title: 'Image to Text converter',
      image: ProductDemo,
      description: "Product description demo",
      product_url: '/products/image-to-text-converter',
      button_disabled: false
    },
    {
      id: 2,
      title: 'Youtube video downloader',
      image: ProductDemo,
      description: "Product description demo",
      product_url: '/products/youtube-video-downloader',
      button_disabled: true
    },
    {
      id: 3,
      title: 'Chat bot',
      image: ProductDemo,
      description: "Product description demo",
      product_url: '/products/chat-bot',
      button_disabled: false
    },
    {
      id: 4,
      title: 'Chat room',
      image: ProductDemo,
      description: "Product description demo",
      product_url: '/products/chat-room',
      button_disabled: true
    },
    
  ]
  return (
    <section className='font-sans'>
      <Header />
      <div className='p-8'>
        <ul className='flex flex-wrap gap-4 justify-center'>
          {
            productData.map((product) => (
              <Box key={product.id} className='p-3 w-96 bg-slate-200 text-black rounded-lg flex flex-col justify-between'>
                <div className='flex justify-center p-3'>
                  <Image width={250} height={200} className='object-cover rounded-md' src={product.image}  />
                </div>
                <div>
                  <h4 className='font-bold text-[20px] p-5 text-center'>{product.title}</h4>
                  <p>{product.description}</p>
                </div>
                <Button disabled={product.button_disabled} href={product.product_url} variant="outlined">
                    Visit
                </Button>
              </Box>
            ))
          }
        </ul>
      </div>

    </section>
  )
}

export default page
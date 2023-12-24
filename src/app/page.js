'use client'

import Image from "next/image";


import SpotlightImage from "../assets/images/background-bg-photo.svg";
import AboutMeImage from "../assets/images/about-me.jpeg";

import Box from '@mui/material/Box';
import ArticleIcon from '@mui/icons-material/Article';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import Skeleton from '@mui/material/Skeleton';
import Fab from '@mui/material/Fab';
import Button from "@mui/material/Button";
import DownloadIcon from '@mui/icons-material/Download';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect, useState } from "react";

export default function Home() {
  const [whatIDo, setWhatIDo] = useState([])
  const [featuredProjects, setFeaturedProjects] = useState([])
  const [aboutMe, setaboutMe] = useState({})


      useEffect(() => {
        fetch('/api/what-i-do')
          .then((res) => res.json())
          .then((data) => {
            setWhatIDo(data["data"])
        })

        fetch('/api/featured-projects')
          .then((res) => res.json())
          .then((data) => {
            setFeaturedProjects(data["data"])
        })

        fetch('/api/about-me')
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setaboutMe(data["data"][0])
        })
      }, [])
  
  return (
    <section
      id="main-container"
      className="bg-[url('../assets/images/bg-2.jpg')] bg-cover font-sans text-white"
    >
      <section className="h-screen overflow-y-scroll">
        <section id="header" className="max-sm:hidden">
          <div className="wrapper py-5">
            <header className="flex justify-between">
              <div className="flex items-center">
                <div className="logo-container">
                  <a href="/">shameem.zido-seed.tech</a>
                </div>
              </div>
              <div className="flex">
                <ul className="flex items-center gap-3">
                  <li>
                    <a href="#about-me">About</a>
                  </li>
                  <li>
                    <a href="#what-i-do">What I Do</a>
                  </li>
                  <li>
                    <a href="#featured-projects">My Work</a>
                  </li>
                  <li>
                    <a href="#">Resume</a>
                  </li>
                  <li>
                    <Button
                      size="large"
                      className="bg-[#0a46d2] hover:bg-white hover:text-[#0a46d2] font-bold"
                      variant="contained"
                    >
                      Contact me
                    </Button>
                  </li>
                </ul>
              </div>
            </header>
          </div>
        </section>
        <section id="spotlight" className="bg-[url('../assets/images/personal-bg.png')] bg-cover bg-center h-screen flex justify-end">
          <div className="wrapper py-12 max-lg:no-wrapper h-full">
            <div className="max-xl:text-center flex flex-col justify-between h-full">
              <div>
                <p className="text-[20px]">
                  Hello world, my name is Muhammed shameem
                </p>
                <h1 className="text-[80px] mb-2 max-2xl:text-[50px] font-bold max-xl:text-[60px] max-sm:text-[35px]">Iam a Full-stack developer</h1>
              </div>
              <div>
                <p className="m-[0 0 10px 0] w-[85%] text-[22px] max-xl:w-full max-sm:text-[16px]">
                  I'm a skilled full-stack developer experienced in both front-end
                  and back-end technologies. I'm passionate about creating
                  efficient, user-friendly web applications that bridge design and
                  functionality.
                </p>
                <Button
                  size="large"
                  className="bg-[#0a46d2] hover:bg-white hover:text-[#0a46d2] font-bold mt-5"
                  variant="contained"
                >
                  Contact me
                </Button>

              </div>
            </div>
          </div>
        </section>
        <section id="what-i-do" className="mt-[50px] max-xl:mt-[20px]">
          <div className="wrapper max-lg:no-wrapper">
            <div className="text-center mt-5 mb-12">
              <h2 className="text-[40px]">What i do</h2>
            </div>
            <div className="what-i-do-bottom">
              <ul className="flex justify-center flex-wrap">
                {
                whatIDo.length > 0 ? whatIDo.map((data) => (
                      <li key={data._id} className="what-i-do-card min-w-80 max-md:w-full">
                        <div className="top">
                          <div className="w-[100px] mb-[20px]">
                            <Image
                              width={100}
                              height={100}
                              src={data.image}
                              alt="what-i-do-image-web-development"
                            />
                          </div>
                          <h3 className="text-[25px] mb-5">{data.title}</h3>
                          <p className="leading-7 mt-5">{data.description}</p>
                        </div>
                        <div className="mt-[10px]">
                        <Fab variant="extended" size="medium" className="hover:text-white hover:bg-black bg-white">
                          Get in touch
                        </Fab>
                        </div>
                      </li>
                  )) :
                  (
                    Array.from(new Array(3)).map((item, index) => (
                      <li key={index} className="what-i-do-card min-w-80 max-md:w-full">
                        <Skeleton variant="rectangular" width={400} height={300} sx={{ marginRight: '10px' }} />
                          <Typography>
                            <Skeleton  animation="wave" width='100px' />
                            <Skeleton  animation="wave" width="60% " />
                          </Typography>
                      </li>
                    ))
                  )
                }
              </ul>
            </div>
          </div>
        </section>
        <section id="featured-projects" className="mt-[100px]">
          <div className="wrapper max-sm:no-wrapper">
            <div className="text-center">
              <h3 className="text-[40px]">Featured projects</h3>
            </div>
            <div className="mt-[80px]">
              <Stack className="flex flex-row flex-wrap justify-evenly">
                  {
                      featuredProjects.length > 0 ? featuredProjects.map((project) => (
                          <Box key={project._id} className="bg-transparent w-[600px] mb-[50px] text-white text-left featured-project-card items-center font-sans">
                              <div className="aspect-video w-full bg-gray-100 relative rounded-md">
                                  <Image
                                      fill
                                      className="rounded-md object-cover"
                                      src={project.image}
                                      alt="project-feature-image"
                                  />
                              </div>
                              <div className="p-5 max-md:w-full max-md:text-center max-md:p-5">
                                <div className="mb-[10px]">
                                    <ul className="flex max-md:justify-center">
                                        {
                                            project.tags.map((tag, index) => (
                                                <li key={index}>
                                                    <div className="tag">
                                                    <p>{tag}</p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="mb-4">
                                    <h4 className="text-[30px] font-bold mb-12 max-md:mb-1">{project.title}</h4>
                                    <p>
                                        {project.description}
                                    </p>
                                </div>
                                <Button href={project.site_url} sx={{ color: 'white' }} variant="outlined" endIcon={<ArticleIcon />} >
                                    See full case study
                                </Button>
                            </div>
                        </Box>
                      )): (
                        Array.from(new Array(3)).map((item, index) => (
                          <ul className="flex justify-center flex-wrap">
                            <li key={index} className="what-i-do-card min-w-80 max-md:w-full">
                              <Skeleton variant="rectangular" width={400} height={300} sx={{ marginRight: '10px' }} />
                                <Typography>
                                  <Skeleton  animation="wave" width='100px' />
                                  <Skeleton  animation="wave" width="60% " />
                                </Typography>
                            </li>
                          </ul>
                        ))
                      )
                  }
              </Stack>
            </div>
          </div>
        </section>
        <section id="about-me" className="mt-[100px] mb-[50px]">
          <div className="wrapper max-md:no-wrapper">
            <div className="text-center mb-5">
              <h3 className="text-[40px]">About me</h3>
            </div>
            
            <Box className="flex gap-40 featured-project-card max-sm:no-featured-project-card">
              {
                aboutMe ? (
                  <>
                  <Box width={400} className="relative">
                      <Image
                        fill
                        className="object-top object-cover h-96 rounded-md"
                        src={aboutMe.image}
                        alt="about-me-image"
                      />
                  </Box>
                  <Box width={600} className="p-5">
                    <div>
                      <p className='text-xl'>
                        {aboutMe.description}
                      </p>
                    </div>
                    <Stack justifyContent='center' direction="row" spacing={2} className='mt-8'>
                      {
                        aboutMe.completed?.map((item, index) => (
                          <Box key={index} width={110} className="text-center">
                            <h1 className='text-6xl'>{item.value}+</h1>
                            <p>{ item.title }</p>
                          </Box>

                        ))
                      }
                    </Stack>
                    <div className="flex justify-center mt-8">
                      <Button href={aboutMe.resume_url} className="glow-shadow" variant="contained" endIcon={<DownloadIcon />}>
                        Download CV
                      </Button>
                    </div>
                  </Box>
                  </>
                ) : (
                  <h1>no data</h1>
                )
              }
            </Box>
          </div>
        </section>
        <hr className="hr-line" />
        <section id="footer" className="mt-[50px] pb-4">
          <div className="wrapper flex justify-between items-center">
            <div className="left">
              <div className="personal-info">
                <h1>Muhammed shameem abdulkareem</h1>
                <p>Fullstack developer</p>
              </div>
            </div>
            <div className="right">
              <div className="top">
                <p>2023-2024 shameeem.zido-seed.tech</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

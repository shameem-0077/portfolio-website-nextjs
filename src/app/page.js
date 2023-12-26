'use client'

import Image from "next/image";
import useSWR from 'swr'
import Header from '../app/components/header'
import Box from '@mui/material/Box';
import ArticleIcon from '@mui/icons-material/Article';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';

import Skeleton from '@mui/material/Skeleton';
import Fab from '@mui/material/Fab';
import Button from "@mui/material/Button";
import NavigationIcon from '@mui/icons-material/Navigation';
import DownloadIcon from '@mui/icons-material/Download';
import Typography from '@mui/material/Typography';
import { useState } from "react";

import {fetchWhatiDo, fetchFeaturedProjects, fetchaboutMe} from '../hooks/apiHooks'


export default function Home() {
  const [snuckBar, setSnuckBar] = useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = snuckBar


  const handleClose = () => {
    setSnuckBar({ ...snuckBar, open: false });
  };

  const whatIDO = fetchWhatiDo()
  const featuredProjects = fetchFeaturedProjects()
  const aboutMe = fetchaboutMe()

  return (
    <section
      id="main-container"
      className="bg-[url('../assets/images/bg-2.jpg')] bg-cover font-sans text-white"
    >
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="This site is under work. "
        key={vertical + horizontal}
      />
      <section className="h-screen overflow-y-scroll no-scrollbar">
        <Header />
        <section id="spotlight" className="bg-[url('../assets/images/personal-bg.png')] bg-cover bg-center h-screen flex justify-end pt-24 max-md:pt-0">
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
                  whatIDO.isLoading ? (
                    Array.from(new Array(3)).map((item, index) => (
                      <li key={index} className="what-i-do-card min-w-80 max-md:w-full">
                        <Skeleton variant="rectangular" width='100%' height={300} sx={{ marginRight: '10px' }} />
                          <Typography>
                            <Skeleton  animation="wave" width='100%' />
                            <Skeleton  animation="wave" width="60% " />
                          </Typography>
                      </li>
                    ))
                  ) : whatIDO.error ? (
                    
                    <div>Error got</div>
                  ) : (
                    whatIDO.data.data?.map((data) => (
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
                      ))
                  )
                }
              </ul>
            </div>
          </div>
        </section>
        <section id="featured-projects" className="mt-[50px]">
          <div className="wrapper max-sm:no-wrapper">
            <div className="text-center">
              <h3 className="text-[40px]">Featured projects</h3>
            </div>
            <div className="mt-[80px]">
              <Stack className="flex flex-row flex-wrap justify-evenly">
                  {
                    featuredProjects.isLoading ? (
                      <ul className="flex justify-center flex-wrap">
                        {
                          Array.from(new Array(3)).map((item, index) => (
                              <li key={index} className="what-i-do-card min-w-80 max-md:w-full">
                                <Skeleton variant="rectangular" width={300} height={300} sx={{ marginRight: '10px' }} />
                                  <Typography>
                                    <Skeleton  animation="wave" width='100px' />
                                    <Skeleton  animation="wave" width="60% " />
                                  </Typography>
                              </li>
                          ))
                        }
                        </ul>
                    ) : featuredProjects.error ? (
                      <div>Error got</div>
                    ) : (
                      featuredProjects.data.response_data.data?.map((project) => (
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
                      ))
                    )
                  }
              </Stack>
              <div className="flex justify-end">
                <Fab href="/my-works" variant="extended" size="small" className="bg-white text-black hover:bg-black hover:text-white">
                  <NavigationIcon sx={{ mr: 1 }} />
                  Show more
                </Fab>
              </div>
            </div>
          </div>
        </section>
        <section id="about-me" className="mt-[50px] mb-[50px]">
          <div className="wrapper max-md:no-wrapper">
            <div className="text-center mb-5">
              <h3 className="text-[40px]">About me</h3>
            </div>
            
            <Box className="flex max-sm:justify-center max-sm:gap-10 gap-40 featured-project-card max-sm:no-featured-project-card max-sm:flex-wrap max-sm:text-center">
              {
                aboutMe.isLoading ? (
                  <h1>Loading</h1>
                ) : aboutMe.error ? (
                  <h1>Error got</h1>
                ) : (
                  aboutMe.data.data?.map((aboutme) => (
                    <>
                    <Box key={aboutme._id} width={400} height={400} className="relative">
                        <Image
                          fill
                          className="object-top object-cover h-96 rounded-md"
                          src={aboutme.image}
                          alt="about-me-image"
                        />
                    </Box>
                    <Box width={600} className="p-5">
                      <div>
                        <p className='text-xl'>
                          {aboutme.description}
                        </p>
                      </div>
                      <Stack justifyContent='center' direction="row" spacing={2} className='mt-8'>
                        {
                          aboutme.completed?.map((item, index) => (
                            <Box key={index} width={110} className="text-center">
                              <h1 className='text-6xl'>{item.value}+</h1>
                              <p>{ item.title }</p>
                            </Box>

                          ))
                        }
                      </Stack>
                      <div className="flex justify-center mt-8">
                        <Button href={aboutme.resume_url} className="glow-shadow" variant="contained" endIcon={<DownloadIcon />}>
                          Download CV
                        </Button>
                      </div>
                    </Box>
                    </>
                  ))
                )
              }
            </Box>
          </div>
        </section>
        <hr className="hr-line" />
      </section>
    </section>
  );
}

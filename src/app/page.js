'use client'

import Image from "next/image";


import SpotlightImage from "@/assets/images/background-bg-photo.svg";
import WhatiDoImageWebDevelopment from "@/assets/icons/app-development.png";
import WhatiDoImageCoaching from "@/assets/icons/coaching.png";
import WhatiDoImageMobile from "@/assets/icons/mobile-app.png";
import ProjectFeatureImageOne from "@/assets/images/featured-image-1.jpeg";
import AboutMeImage from "@/assets/images/about-me.jpeg";

import Box from '@mui/material/Box';
import ArticleIcon from '@mui/icons-material/Article';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import Fab from '@mui/material/Fab';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Home() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      const FeaturedProjects = [
        {
            'id': 1,
            'image': ProjectFeatureImageOne,
            'tags': ['mobile', 'app', 'application'],
            'title': 'My Mobile App',
            'description': "In the world of web development, my passion comes to life. Crafting the digital landscapes we navigate daily, I am a web developer who revels in the art of building websites and web applications. From designing captivating user interfaces to ensuring seamless functionality in the background, I bring both creativity and precision to the virtual realm."
        },
        {
            'id': 2,
            'image': ProjectFeatureImageOne,
            'tags': ['mobile', 'app'],
            'title': 'My Mobile App',
            'description': "In the world of web development, my passion comes to life. Crafting\ the digital landscapes we navigate daily, I am a web developer who revels in the art of building websites and web applications. From designing captivating user interfaces to ensuring seamless functionality in the background, I bring both creativity and precision to the virtual realm."
        }
      ]

      const WhatiDo = [
        {
          id: 1,
          image: WhatiDoImageWebDevelopment,
          title: "Web Development",
          description: "In the world of web development, my passion comes to life. Crafting the digital landscapes we navigate daily, \
                        I am a web developer who revels in the art of building websites and web applications. From designing captivating\
                        ",

        },
        {
          id: 2,
          image: WhatiDoImageCoaching,
          title: "1:1 Coaching",
          description: "In the world of web development, my passion comes to life. Crafting the digital landscapes we navigate daily, \
                        I am a web developer who revels in the art of building websites and web applications. From designing captivating\
                        ",

        },
        {
          id: 3,
          image: WhatiDoImageMobile,
          title: "Mobile App development",
          description: "In the world of web development, my passion comes to life. Crafting the digital landscapes we navigate daily, \
                        I am a web developer who revels in the art of building websites and web applications. From designing captivating\
                        ",

        }
      ]
  
  return (
    <section
      id="main-container"
      className="bg-[url('../assets/images/galaxy-night-view.jpg')] bg-repeat-y bg-contain font-sans"
    >
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
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">What I Do</a>
                </li>
                <li>
                  <a href="#">My Work</a>
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
      <section id="spotlight">
        <div className="wrapper flex justify-between py-12 max-xl:flex-col-reverse max-lg:no-wrapper">
          <div className="my-auto mx-0 max-xl:text-center">
            <p className="text-[20px]">
              Hello world, my name is Muhammed shameem
            </p>
            <h1 className="text-[80px] mb-2 max-2xl:text-[50px] font-bold max-xl:text-[60px]">Iam a Full-stack developer</h1>
            <p className="m-[0 0 10px 0] w-[85%] text-[22px] max-xl:w-full">
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
          <div className="flex justify-center items-center">
            <Image src={SpotlightImage} className='w-[1200px] max-xl:w-[500px] max-xl:mb-5' alt="spotlight-image" />
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
                WhatiDo.map((data) => (
                  <li key={data.id} className="what-i-do-card min-w-80 max-md:w-full">
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
            <Stack spacing={10}>
                {
                    FeaturedProjects.map((project) => (
                        <Item key={project.id} className="flex bg-transparent text-white text-left featured-project-card items-center font-sans max-md:flex-col">
                            <div className="w-1/4 max-md:w-full">
                                <Image
                                    className="rounded-md"
                                    src={project.image}
                                    alt="project-feature-image"
                                />
                            </div>
                            <div className="p-12 w-[60%] max-md:w-full max-md:text-center max-md:p-5">
                              <div className="mb-[20px]">
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
                              <Button sx={{ color: 'white' }} variant="outlined" endIcon={<ArticleIcon />} >
                                  See full case study
                              </Button>
                          </div>
                      </Item>
                    ))
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
          <Box sx={{ display: 'flex', justifyContent: 'center' }} className="featured-project-card max-sm:no-featured-project-card">
            <Card  className='max-w-lg featured-project-card bg-transparent text-white max-sm:no-featured-project-card'>
              <CardActionArea>
                <Image
                  className="object-top object-cover h-96 rounded-md"
                  src={AboutMeImage}
                  alt="about-me-image"
                />
                
                <CardContent>
                  <Typography variant="body2" className="font-sans">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis a
                  ea mollitia fugit doloribus blanditiis enim incidunt ut quos porro
                  consequatur recusandae atque perferendis, sed nostrum culpa
                  ratione perspiciatis. Beatae! Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Omnis a ea mollitia fugit doloribus
                  blanditiis enim incidunt ut quos porro consequatur recusandae
                  atque perferendis, sed nostrum culpa ratione perspiciatis. Beatae!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
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
  );
}

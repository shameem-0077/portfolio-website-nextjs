"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Button from "@mui/material/Button";
import ArticleIcon from "@mui/icons-material/Article";
import Pagination from "@mui/material/Pagination";

export default function MyWork() {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    fetch(`/api/featured-projects?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeaturedProjects(data["response_data"]["data"]);
        setPageCount(data["response_data"]["pagination"]["pageCount"]);
      });
  }, [page]);

  function handleChange(event, value) {
    setPage(value);
    console.log(page);
  }

  return (
    <section
      id="main-container"
      className="bg-[url('../assets/images/bg-2.jpg')] bg-cover font-sans text-white"
    >
      <section className="h-screen overflow-y-scroll no-scrollbar">
        <section id="featured-projects" className="mt-[100px]">
          <div className="wrapper max-sm:no-wrapper">
            <div className="text-center">
              <h3 className="text-[40px]">Featured projects</h3>
            </div>
            <div className="mt-[80px]">
              <Stack className="flex flex-row flex-wrap justify-evenly">
                {featuredProjects.length > 0
                  ? featuredProjects.map((project) => (
                      <Box
                        key={project._id}
                        className="bg-transparent w-[600px] mb-[50px] text-white text-left featured-project-card items-center font-sans"
                      >
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
                              {project.tags.map((tag, index) => (
                                <li key={index}>
                                  <div className="tag">
                                    <p>{tag}</p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mb-4">
                            <h4 className="text-[30px] font-bold mb-12 max-md:mb-1">
                              {project.title}
                            </h4>
                            <p>{project.description}</p>
                          </div>
                          <Button
                            href={project.site_url}
                            sx={{ color: "white" }}
                            variant="outlined"
                            endIcon={<ArticleIcon />}
                          >
                            See full case study
                          </Button>
                        </div>
                      </Box>
                    ))
                  : Array.from(new Array(3)).map((item, index) => (
                      <ul className="flex justify-center flex-wrap">
                        <li
                          key={index}
                          className="what-i-do-card min-w-80 max-md:w-full"
                        >
                          <Skeleton
                            variant="rectangular"
                            width='100%'
                            height={300}
                            sx={{ marginRight: "10px" }}
                          />
                          <Typography>
                            <Skeleton animation="wave" width="100px" />
                            <Skeleton animation="wave" width="60% " />
                          </Typography>
                        </li>
                      </ul>
                    ))}
              </Stack>
            </div>
          </div>
        </section>
      </section>
        <section className="fixed bottom-0 w-full bg-black">
          {
              pageCount > 1 ? (
                  <Stack justifyContent="center" direction="row" spacing={2}>
                      <Pagination
                          onChange={handleChange}
                          page={page}
                          count={pageCount}
                          className="text-white bg-white py-2 w-screen"
                          color="primary"
                      />
                  </Stack>

              ) : (
                  null
              )
          }
        </section>
    </section>
  );
}

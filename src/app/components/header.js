import React from 'react'
import Button from "@mui/material/Button";


const Header = () => {
  return (
    <section id="header" className="max-sm:hidden fixed w-full h-24 z-10">
        <div className="wrapper py-5">
          <header className="flex justify-between">
            <div className="flex items-center">
              <div className="logo-container header-hover">
                <a href="/">shameem.zido-seed.tech</a>
              </div>
            </div>
            <div className="flex">
              <ul className="flex items-center gap-3">
                <li className='header-hover'>
                  <a href="#about-me">About</a>
                </li>
                <li className='header-hover'>
                  <a href="#what-i-do">What I Do</a>
                </li>
                <li className='header-hover'>
                  <a href="#featured-projects">My Work</a>
                </li>
                <li className='header-hover'>
                  <a href="/resume">Resume</a>
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
  )
}

export default Header
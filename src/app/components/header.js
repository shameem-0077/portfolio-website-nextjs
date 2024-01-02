import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CategoryIcon from '@mui/icons-material/Category';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FeedIcon from '@mui/icons-material/Feed';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';


const Header = () => {

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ul className="flex flex-col gap-3 p-3 font-bold">
        <li className='header-hover'>
          <div className='flex items-center gap-2'>
            <InfoIcon />
            <a href="/#about-me">About</a>
          </div>
        </li>
        <Divider />
        <li className='header-hover'>
          <div className='flex items-center gap-2'>
            <WorkIcon />
            <a href="/#what-i-do">What I Do</a>
          </div>
        </li>
        <Divider />
        <li className='header-hover'>
          <div className='flex items-center gap-2'>
            <AccountTreeIcon />
            <a href="#featured-projects">My Works</a>
          </div>
        </li>
        <Divider />
        <li className='header-hover'>
          <div className='flex items-center gap-2'>
            <CategoryIcon />
            <a href="/products">My Products</a>
          </div>
        </li>
        <Divider />
        <li className='header-hover'>
          <div className='flex items-center gap-2'>
            <RssFeedIcon />
            <a href="/blog">Blog</a>
          </div>
        </li>
        <Divider />
        <li className='header-hover'>
          <div className='flex items-center gap-2'>
            <FeedIcon />
            <a href="/resume">Resume</a>
          </div>
        </li>
        <Divider />
        <li className='flex justify-center'>
          <Button
            size="large"
            className="bg-[#0a46d2] hover:bg-white hover:text-[#0a46d2] font-bold"
            variant="contained"
          >
            Contact me
          </Button>
        </li>
      </ul>
    </Box>
  );
  return (
    <section id="header" className="">
        <div className="wrapper py-5 max-sm:hidden">
          <header className="flex justify-between">
            <div className="flex items-center">
              <div className="logo-container header-hover">
                <a href="/">shameem.zido-seed.tech</a>
              </div>
            </div>
            <div className="flex">
              <ul className="flex items-center gap-3">
                <li className='header-hover'>
                  <a href="/#about-me">About</a>
                </li>
                <li className='header-hover'>
                  <a href="/#what-i-do">What I Do</a>
                </li>
                <li className='header-hover'>
                  <a href="#featured-projects">My Work</a>
                </li>
                <li className='header-hover'>
                  <a href="/products">My Products</a>
                </li>
                <li className='header-hover'>
                  <a href="/blog">Blog</a>
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
        <div className='hidden max-sm:flex max-sm:justify-end'>
          <React.Fragment>
            <IconButton onClick={toggleDrawer('right', true)}  size="large">
              <MenuIcon className='text-white' fontSize="inherit" />
            </IconButton>
            <Drawer
              anchor={'right'}
              open={state['right']}
              onClose={toggleDrawer('right', false)}
            >
              {list('right')}
            </Drawer>
          </React.Fragment>
        </div>
      </section>
  )
}

export default Header
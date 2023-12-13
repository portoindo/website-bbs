import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Image from 'next/image';
import styles from './navbar.module.css';
import Link from 'next/link';

const drawerWidth = 240;
const navItems = ['home', 'portofolio', 'service', 'our-clients', 'contact-us' ];

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <div  className={styles['drawer-logo']}>
            <Image
                src="/images/logo-gradient.webp" // Route of the image file
                height={45} // Desired size with correct aspect ratio
                width={65} // Desired size with correct aspect ratio
                alt="Your Name"
            />
          </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{justifyContent:"center"}}>
            {/* <div className={styles["drawer-btn"]}> */}
              <Link href={`/#${item}`} className={styles["drawer-link"]}>
                <p className={styles["nav-txt"]}>{item.replace("-", " ")}</p>
              </Link>
            {/* </div> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', height:"80px"}}>
      <CssBaseline />
      <AppBar component="nav" sx={{height:'fit-content', justifyContent:'center'}}>
        <div className={styles.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { sm: 'none' } , width:"100%", justifyContent:"start"}}
          >
            <MenuIcon />
            {/* <div className={styles['drawer-img-container']}> */}
              <Image
                  src="/images/logo-bbs.webp" // Route of the image file
                  height={70} // Desired size with correct aspect ratio
                  width={110} // Desired size with correct aspect ratio
                  alt="Your Name"
                  className={styles["drawer-img"]}
              />
            {/* </div> */}
          </IconButton>
          <div className={styles['nav-logo']}>
            <Image
                src="/images/logo-bbs.webp" // Route of the image file
                height={68} // Desired size with correct aspect ratio
                width={100} // Desired size with correct aspect ratio
                alt="Your Name"
                className={styles["nav-img"]}
            />
          </div>
          {/* <div className={styles.parallelogram}> */}
            <Box sx={{ display: { xs: 'none', sm: 'flex'},width:"100%",paddingRight:2, justifyContent:"space-evenly", heigth:"100%", alignItems:"center", flexWrap:"wrap"}}>
              {navItems.map((item) => (
                <Button key={item} sx={{ marginLeft:2, height:"50px"}}>
                  <Link href={`/#${item}`}>
                    <h3 className={styles["nav-txt"]}>{item.replace("-", " ")}</h3>
                  </Link>
                </Button>
              ))} 
            </Box>
          {/* </div> */}
        </div>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </nav>

    </Box>
  );
}
// Navbar.js
import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import um6pLogoImage from './UM6P_logo.png';
import ministereEducationImage from './ministere-education.png';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <AppBar position="" className=''>
            <Toolbar>
                <div className="logoContainer">
                    <img src={um6pLogoImage} alt="UM6P Logo" className="logoImage" />
                    <img src={ministereEducationImage} alt="Ministere Education" className="logoImage" />
                </div>
                <div className="navButtons">
                    <Button component={Link} to="/dews" color="inherit">Home</Button>
                    <Button component={Link} to="/dashboard" color="inherit">Data Analysis</Button>
                    <Button component={Link} to="/studentlist" color="inherit">Student List</Button>
                    <Button component={Link} to="/ChooseModel" color="inherit">Customize Model</Button>
                    <div className='loginbutton'>
                    <Button component={Link} to="/" color="inherit">Login</Button>
                    </div>
                </div>
                <div className="menuButtonWrapper">
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        className="menuButton"
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
            </Toolbar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    {['dews','DataAnalysis', 'StudentList', 'Atrisk'].map((text, index) => (
                        <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;

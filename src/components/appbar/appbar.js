import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

class Bar extends React.Component {
    render() {
        return (
            <AppBar position="static" style={{ background: '#5B0A6D' }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Dashboard
                    </Typography>
                </Toolbar>
          </AppBar>
        );
    }
}

export default Bar;
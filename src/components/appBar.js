import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const AppBarComponent = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                Abigail Thelin
            </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default AppBarComponent;
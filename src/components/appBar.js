import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import { IconButton } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const AppBarComponent = ({team}) => {
    const [drawer, toggleDrawer] = useState(false);

    const handleDelete = (e,i) => {
      console.info('You clicked the delete icon.', e,i);
    //   let index = team.indexOf(i)
    };
  
    return (
        <AppBar position="sticky" color='primary'>
            <Toolbar>
            <IconButton onClick={() => toggleDrawer(true)}>
                <MenuRoundedIcon/>
            </IconButton>
            <Button onClick={() => toggleDrawer(true)}>{team.length} team members</Button>
                
                <Drawer anchor="right" open={drawer} onClose={() => toggleDrawer(false)}>
                    <div style={{width: '50vw', padding: '50px'}}>
                    <Typography variant="h2">
                        Your team
                    </Typography>

                    <Divider />

                    <div style={{display: 'flex', flexWrap:'wrap', }}>
                        {
                            team.map(i => {
                                return(
                                    <div style={{padding: '5px', margin: '10px'}}>
                                        <Chip
                                            avatar={<Avatar src={i.sprites.front_default}/>}
                                            label="Primary clickable"
                                            clickable
                                            color="primary"
                                            onDelete={(e) => handleDelete(e,i)}
                                            deleteIcon={<DoneIcon />}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    </div>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}

export default AppBarComponent;
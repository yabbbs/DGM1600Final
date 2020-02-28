import React from 'react';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
            DGM 1600
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Thank you for visiting my Final site for DGM 1600 with Professor Thor Anderson
            </Typography>
        </footer>
    );
}

export default Footer;
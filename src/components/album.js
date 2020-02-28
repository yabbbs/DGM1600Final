import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Popover from '@material-ui/core/Popover';

import { useStyles } from './styles';
import Footer from './footer';
import CardComponent from './card';
import AppBarComponent from './appBar';

export default function Album() {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonTeam, setPokemonTeam] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const classes = useStyles();


    const getPokemon = async () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=60')
            .then(  response => response.json())
            .then(allpokemon => {
                setPokemon(allpokemon.results)
            })
    }

    useEffect(() => {

    }, [pokemon, pokemonTeam]);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    console.log('set', pokemonTeam)
    return (
        <React.Fragment>
            <AppBarComponent/>
            <main style={{display: 'flex', flexDirection:'column', height: '100%'}}>

                {/* Header content */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            DGM 1600
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Click to get pokemon cards and to see their stats!
                        </Typography>
                        <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                            <Button variant="contained" color="primary" onClick={() => getPokemon()}>
                                get pokemon
                            </Button>
                            </Grid>
                            <Grid item>
                            <Button variant="outlined" color="primary" onClick={handleClick}>
                                Team Players
                            </Button>


{/* 
                            <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
                            <br />
                            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                            Open simple dialog
                            </Button>
                            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} /> */}



                            </Grid>
                        </Grid>
                        </div>
                    </Container>
                </div>

                {/* Body Content */}
                <body style={{padding: '30px'}}>
                    {
                        pokemon.length === 0 
                        ?
                        <div style={{height: '100%='}}>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                add pokemon now!
                            </Typography>
                        </div>
                        : 
                        <Grid container spacing={4}>
                            {
                                pokemon.map(i => {
                                return (
                                    <Grid item key={i.url} xs={12} sm={6} md={4}>
                                        <CardComponent info={i} setPokemonTeam={(data) => setPokemonTeam([data, ...pokemonTeam])}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    }
                </body>
            </main>

            <Footer />
        </React.Fragment>
    );
}
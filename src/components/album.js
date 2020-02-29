import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { useStyles } from './styles';
import CardComponent from './card';
import AppBarComponent from './appBar';

export default function Album() {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonTeam, setPokemonTeam] = useState([]);
    const classes = useStyles();


    const getPokemon = async () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=60')
            .then(  response => response.json())
            .then(allpokemon => {
                setPokemon(allpokemon.results)
            })
    }

    useEffect(() => {
    }, [pokemon, pokemonTeam, setPokemonTeam]);

    return (
        <React.Fragment>
            <AppBarComponent team={pokemonTeam} setPokemonTeam={(data) => setPokemonTeam(data)}/>
            <main style={{display: 'flex', flexDirection:'column', height: '100%'}}>

                {/* Header content */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Add to your Pokemon dream team!
                        </Typography>
                        <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                {
                                    pokemon.length === 0 
                                    ? 
                                    <Button variant="contained" color="primary" onClick={() => getPokemon()}>
                                        get pokemon
                                    </Button>
                                    :
                                    null
                                }
                            </Grid>
                            <Grid item>
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
                            null
                        : 
                        <Grid container spacing={4}>
                            {
                                pokemon.map(i => {
                                return (
                                    <Grid item key={i.url} xs={12} sm={6} md={4}>
                                        <CardComponent 
                                            poke={pokemon} 
                                            info={i} 
                                            setPokemonTeam={(data) => setPokemonTeam([data, ...pokemonTeam])}
                                        />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    }
                </body>
            </main>

        </React.Fragment>
    );
}
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import { useStyles } from './styles';

const CardComponent = ({info, setPokemonTeam}) => {
    const [pokemonInfo, setPokemonInfo] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        fetch(info.url)
        .then(response => response.json())
        .then(singlePoke => {
            setPokemonInfo(singlePoke)
        })
    }, []);

    console.log('help', pokemonInfo)
    return (
        <Paper className={classes.card} elevation={3}>
            <CardContent className={classes.cardContent}>
                <Avatar alt="Cindy Baker" src={pokemonInfo && pokemonInfo.sprites.front_default} />
                <Typography gutterBottom variant="h5" component="h2">
                    {info.name}
                </Typography>
                {/* <Typography>
                    Abilities:&nbsp;
                    {
                        pokemonInfo && pokemonInfo.abilities.map(i => {
                            return (
                                <>
                                    {i.ability.name}&nbsp;
                                </> 
                            );
                        })
                    }
                </Typography> */}
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => setPokemonTeam(pokemonInfo)}>
                    ADD TO TEAM
                </Button>
            </CardActions>
        </Paper>
    );
}

export default CardComponent
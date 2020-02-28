import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={pokemonInfo && pokemonInfo.sprites && pokemonInfo.sprites.back_default}
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {info.name}
                </Typography>
                <Typography>
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
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => setPokemonTeam(pokemonInfo)}>
                    ADD TO FIGHT
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardComponent
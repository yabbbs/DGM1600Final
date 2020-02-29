import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

import { useStyles } from './styles';

const CardComponent = ({info, setPokemonTeam, poke}) => {
    const [pokemonInfo, setPokemonInfo] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        fetch(info.url)
        .then(response => response.json())
        .then(singlePoke => {
            setPokemonInfo(singlePoke)
        })
    }, [info]);

    const addToTeamAndUpdate = () => {
        setPokemonTeam(pokemonInfo);
        let index = poke.indexOf(info)
        poke.splice(index, 1);
    }

    return (
        <Paper className={classes.card} elevation={3}>
            <CardContent className={classes.cardContent}>
                <div style={{display:'flex'}}>
                    <Avatar alt="Cindy Baker" src={pokemonInfo && pokemonInfo.sprites.front_default} />
                    <Typography gutterBottom variant="h5" component="h2">
                        {info.name}
                    </Typography>
                </div>

                <Divider />

                <div style={{ display: 'flex', margin:'10px', alignItems:'center'}}>
                    <Typography variant="caption" color="inherit" noWrap>
                        abilities:
                    </Typography>
                    {
                        pokemonInfo && pokemonInfo.abilities.map(i => {
                            return (
                                <div style={{margin: '8px'}}>
                                    <Chip label={i.ability.name} color='secondary'/>
                                </div> 
                            );
                        })
                    }
                </div>

                <Divider />

                <div style={{ display: 'flex', margin:'10px', alignItems:'center'}}>
                    <Typography variant="caption" color="inherit" noWrap>
                        type:
                    </Typography>
                    {
                        pokemonInfo && pokemonInfo.types.map(i => {
                            return (
                                <div style={{margin: '8px'}}>
                                    <Chip label={i.type.name} color='primary'/>
                                </div> 
                            );
                        })
                    }
                </div>

            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => addToTeamAndUpdate()}>
                    ADD TO TEAM
                </Button>
            </CardActions>
        </Paper>
    );
}

export default CardComponent
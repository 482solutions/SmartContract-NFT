import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import useClasses from './classes';

const StartPage = (props) => {
    const classes = useClasses();
    return (
        <Container className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} key='login'>
                    <Paper
                        elevation={0}
                        className='paper'>
                        <Typography className="title">First you need to log in</Typography>
                        <Typography className="description">Please connect to metamask</Typography>
                        <div className='btn'>
                            <Button onClick={props.ethLogin}>
                                Connect metamask
                            </Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
};

export default StartPage;
import React, {useEffect, useState} from 'react'
import Web3 from 'web3'

import Header from "../header/header";
import contractFunc from '../controller'
import useClasses from './classes'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Form from "../form/form";
import Tokens from "../tokens/tokens";

const App = () => {
    const classes = useClasses();
    const [eth, setEth] = useState();
    const [tokens, setTokens] = useState();
    const [transaction, setTransaction] = useState();
    const [id, setId] = useState();

    const [open, setOpen] = React.useState(false);

    const styles = {
        createButton: {
            position: 'fixed',
            padding: '10px 15px',
            right: '3%',
            bottom: '3%',
            backgroundColor: '#ff2975bb',
            color: '#fff',
            borderRadius: 50,
            minHeight: 45,
            minWidth: 120,
            fontSize: 12,
            '&:hover': {
                transition: 'margin-left 2s ease',
                backgroundColor: '#ff295fdd',
            },

        },
        refreshButton: {
            position: 'fixed',
            padding: '10px 15px',
            right: '2%',
            bottom: '10%',
            backgroundColor: '#4051b5',
            color: '#fff',
            borderRadius: 50,
            minHeight: 45,
            minWidth: 120,
            fontSize: 12,
            '&:hover': {
                transition: 'margin-left 2s ease',
                backgroundColor: '#ff295fdd',
            },

        },
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ethLogin = async () => {
        await window.web3.currentProvider.enable();
        const newWeb = new Web3(Web3.givenProvider);
        setEth(newWeb.eth);
        await showTokens(newWeb.eth);

    };

    const showTokens = async (localEth) => {
        try {
            const resp = await contractFunc(localEth, {type:"getAllTokens"});
            console.log("resp", resp);
            setTokens(resp);

        } catch(e) {
            console.log(e)
        }
    };

    const refreshTokens = async (localEth) => {
        try {
            const resp = await contractFunc(localEth, {type:"getAllTokens"});
            console.log("eth", eth);
            setTokens(resp);

        } catch(e) {
            console.log(e)
        }
    };

    return (

        <Container className={classes.body}>
            <Header open={open} close={() => setOpen(false)} eth={eth}/>

            <Form open={open} close={() => setOpen(false)} eth={eth}/>

            {eth ?
                <div className="buttons">
                    {transaction ? 
                        <div>
                            <button onClick={()=> window.open(`https://goerli.etherscan.io/tx/${transaction}`, "_blank")}>Show transaction</button>
                        </div>:
                        <></>
                    }
                    <Button  onClick={handleClickOpen} style={styles.createButton}>
                        Create NFT
                    </Button>
                    <div>
                        <Button onClick={()=>{refreshTokens(eth)}} style={styles.refreshButton}>Refresh tokens</Button>
                    </div>
                    <Tokens tokens={tokens} eth={eth}/>
                </div>:
                <Container className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} key='login'>
                            <Paper
                                elevation={0}
                                className='paper'>
                                <Typography className="title">First you need to log in</Typography>
                                <Typography className="description">Please connect to metamask</Typography>
                                <div className='btn'>
                                    <Button onClick={ethLogin}>
                                        Connect metamask
                                    </Button>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            }
        </Container>
    )
};

export default App
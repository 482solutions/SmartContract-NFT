import React, {useState} from 'react'
import Web3 from 'web3'

import Header from "../header/header";
import contractFunc from '../controller'
import useClasses from './classes'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CachedIcon from '@material-ui/icons/Cached';
import AddIcon from '@material-ui/icons/Add';
import Buttons from "../buttons/buttons";
import Modal from '../modal/modal';
import StartPage from '../startPage/startPage';


import Form from "../form/form";
import Tokens from "../tokens/tokens";

const App = () => {
    const classes = useClasses();
    const [eth, setEth] = useState();
    const [tokens, setTokens] = useState();
    const [loginStatus, setLoginStatus] = useState(true);
    const [open, setOpen] = React.useState(false);

    const styles = {
        createButton: {
            position: 'fixed',
            right: '5%',
            bottom: '2%',
            backgroundColor: '#ff2975bb',
            color: '#fff',
            borderRadius: 50,
            minHeight: 50,
            minWidth: 50,
            '&:hover': {
                transition: 'margin-left 2s ease',
                backgroundColor: '#ff295fdd',
            },

        },
        refreshButton: {
            position: 'fixed',
            padding: '10px 15px',
            right: '5%',
            bottom: '10%',
            backgroundColor: '#4051b5',
            color: '#fff',
            borderRadius: 50,
            minHeight: 50,
            minWidth: 50,
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
    const ethLogin = async () => {
                try {
                    await window.web3.currentProvider.enable();
                    const newWeb = new Web3(Web3.givenProvider);
                    setEth(newWeb.eth);
                    await showTokens(newWeb.eth);}
                catch (e) {
                   setLoginStatus(false);
        }
    };
    const showTokens = async (localEth) => {
        try {
            const resp = await contractFunc(localEth, {type:"getAllTokens"});
            setTokens(resp);

        } catch(e) {
            console.log(e)
        }
    };
    const refreshTokens = async (localEth) => {
        try {
            const resp = await contractFunc(localEth, {type:"getAllTokens"});
            setTokens(resp);
            console.log(resp)

        } catch(e) {
            console.log(e)
        }
    };

    return (

        <Container className={classes.body}>
            <Header open={open} close={() => setOpen(false)} eth={eth}/>
            <Form open={open} close={() => setOpen(false)} eth={eth}/>
            {eth ?
                // <div className="buttons">
                //     <Button  onClick={handleClickOpen} style={styles.createButton}><AddIcon/></Button>
                //     <div>
                //
                //         <Button onClick={()=>{refreshTokens(eth)}} style={styles.refreshButton}><CachedIcon /></Button>
                //     </div>
                //     <Tokens tokens={tokens} eth={eth}/>
                // </div>:
                <div className="buttons">
                    <Buttons handleClickOpen={handleClickOpen} refreshTokens={refreshTokens} eth={eth} />
                    <Tokens tokens={tokens} eth={eth}/>
                </div>


                 :
                 loginStatus ? <StartPage ethLogin={ethLogin}/> : <Modal login={setLoginStatus}/>
            }
        </Container>
    )
};

export default App
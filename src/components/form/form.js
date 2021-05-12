import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import contractFunc from "../controller";
import UploadFunc from '../upload/uploadFunc';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    dialog: {
        backgroundColor: "#2d2f3e",
        color: '#fff'
    },
    textField:{
        borderBottom: "1px solid white",
        color: '#fff'
    }
}));

export default function FormDialog({open, close, eth}) {
    const classes = useStyles();
    const [file, setFile] = useState();
    const [name, setName] = useState();
    const [symbol, setSymbol] = useState();
    const [setTransaction] = useState();
    const [hash, setHash] = useState();
    const [loader, setLoader] = React.useState(false);

    const handleClose = () => {
        setLoader(false);
    };
    const send = async () => {
        const link = 'https://ipfs.io/ipfs/' + hash;
        setLoader(true);
        const localHash = hash;
        if(name && symbol && file){
            const resp = await contractFunc(eth, {type: 'createToken', name, symbol, link, hash:localHash});
            setTransaction(resp.transactionHash);
           console.log(resp)

        }
        console.log({
            file,
            name,
            symbol
        });
        setLoader(false);
        close()
    };

    return (

        <Dialog open={open} onClose={close} aria-labelledby="form-dialog-title" >
            <DialogTitle id="form-dialog-title" className={classes.dialog}>Create Token</DialogTitle>
            <DialogContent className={classes.dialog}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    className={classes.textField}
                    onChange={e => setName(e.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="symbol"
                    label="Symbol"
                    type="text"
                    fullWidth
                    onChange={e => setSymbol(e.target.value)}
                />

                <UploadFunc hash={setHash} setFile={setFile}/>

            </DialogContent>
            <DialogActions className={classes.dialog}>
                <Button onClick={close} color="primary">
                    Cancel
                </Button>
                <Button onClick={send}  color="primary">
                    Send
                </Button>
            </DialogActions>
            <Backdrop className={classes.backdrop} open={loader} onClick={handleClose}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Dialog>
    );
}
import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import CachedIcon from "@material-ui/icons/Cached";

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

const Buttons = (props) => {
    return (
        <>
            <Button  onClick={props.handleClickOpen} style={styles.createButton}><AddIcon/></Button>
            <div>

                <Button onClick={() => {props.refreshTokens(props.eth)}} style={styles.refreshButton}><CachedIcon /></Button>
            </div>
        </>
    )
}

export default Buttons;
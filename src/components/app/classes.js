import { makeStyles } from '@material-ui/core/styles';

const useClasses = makeStyles((theme) => ({
    body: {
        padding: 80, 
        '& .buttons *': {

        },
        '& .inputs': {
            margin: '10px 0',
            display: 'block'
        },


    },
    root: {
        margin: 'auto',
        maxWidth: '90vw',
        width: 640,
        paddingBottom: 50,
        paddingTop: 50,
        '& .paper': {
            backgroundColor: '#fff',
            border: '1px solid #dadce0',
            borderRadius: 8,
            padding: 24,
            pageBreakInside: 'avoid',
            wordWrap: 'break-word',
            WebkitTransition: 'background-color 200ms cubic-bezier(0.0,0.0,0.2,1)',
            '& .title': {
                textAlign: 'center',
                fontSize: 30,
                justifyContent: 'space-between',
                marginBottom: 6,
            },
            '& .description': {
                fontSize: 16,
                color: '#2e2e2e',
                textAlign: 'center',
            },
            '& .btn': {
                textAlign: 'center',
                margin: '15px 25px -10px',
                '& button': {
                    colot: '#575757',
                    backgroundColor: '#dc004e30',
                    borderRadius: 7,
                    padding: '6px 15px',
                    '&:hover': {
                        backgroundColor: '#dc004e50'
                    }
                }
            },
        },
    },
    dragNdrop:{
        minHeight: 150,
        marginTop: 10
    },
    dragNdropPreview: {
        minWidth: 120,
        maxWidth: 220
    },
    createButton: {
        position: 'fixed',
        padding: '10px 15px',
        right: '3%',
        bottom: '3%',
        backgroundColor: '#ff2975bb',
        color: '#fff',
        borderRadius: 20,
        minHeight: 45,
        minWidth: 120,
        fontSize: 16,
        '&:hover': {
            transition: 'margin-left 2s ease',
            backgroundColor: '#ff295fdd',
        },

    },

}))

export default useClasses
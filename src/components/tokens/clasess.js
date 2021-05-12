import { makeStyles } from '@material-ui/core/styles'

const useClasses = makeStyles(theme => ({
    card: {
        //boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        backgroundColor: "#2d2f3e",
        color: "#efeeee",
        '&:hover': {
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        }
    },
    btn: {
        color: "#ff2975bb"
    },
    title: {
        fontSize: 18,
        fontWeight: 500,
        justifyContent: 'space-between',
        marginBottom: 6,
        marginLeft: 25,
    },
    description: {
        fontSize: 16,
        color: '#2e2e2e',
    },
    img: {
        width: 'auto',
        maxWidth: '200px',
        height: '150px',
        borderRadius: '5px 0 0 5px'

    },
    caption: {
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        padding: 10,
        margin: 0
    },
    root: {
        flexGrow: 1,

        '& .paper': {
            backgroundColor: '#2d2f3e',
            color: '#fff',
            borderRadius: 8,
            padding: 24,
            pageBreakInside: 'avoid',
            wordWrap: 'break-word',
            WebkitTransition: 'background-color 200ms cubic-bezier(0.0,0.0,0.2,1)',
            '& .btn-group': {
                textAlign: 'right',
                marginBottom: -10,
                marginTop: 15,
            },
            '& .results': {
                marginTop: 12
            }
        },

        '& .paper.header': {
            boxSizing: 'border-box',
            borderTop: '4px solid #3f51b5cc',
            fontSize: 34,
            '& .description': {
                marginTop: 15,
                fontSize: 20,
                color: '#000',
                '& svg': {
                    margin: '2px 0 0 2px',
                    maxWidth: 17,
                }
            }
        }
    },
    disabledButton: {
        color: '#fff',
        '&:hover': {
            backgroundColor: "#fff"
        },
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

    }

}))

export default useClasses
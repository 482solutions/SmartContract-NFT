import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useClasses from './clasess';
import contractFunc from "../controller";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';



const getInfo = async (eth, id) => {
    try {
        const resp = await contractFunc(eth, {type: 'tokenByID', id});
        console.log("respGet", resp)
        window.open(`https://goerli.etherscan.io/token/${resp}`, "_blank")
    } catch (e){
        console.log(e)
    }
};

const Tokens = ({tokens, eth}) => {
  const classes = useClasses();
  return <Container className={classes.root}>
        <Grid container spacing={3} key='content'>
          <Grid item xs={12} key='header'>
            <Paper
                elevation={0}
                className='paper header'>
                List of NFT
            </Paper>
          </Grid>
          { tokens && tokens.length ?
              tokens.map(item =>  {
                return <Grid item xs={4} key={item[0]}>
                  {/*<Paper*/}
                  {/*    elevation={3}*/}
                  {/*    className={classes.paper}*/}
                  {/*>*/}
                  {/*  <a href={item.IPFSLink} target="_blank"><img className={classes.img} src={item.IPFSLink} /></a>*/}
                  {/*  <div className={classes.caption}>*/}

                  {/*    <Typography className={classes.title}>Contract: {item.name}</Typography>*/}
                  {/*    <Typography className={classes.title} onClick={() => {getInfo(eth, item.tokenId)}}>Token: <a href="#">Link</a></Typography>*/}
                  {/*  </div>*/}

                  {/*</Paper>*/}
                    <Card className={classes.card} >
                        <CardActionArea >
                            <CardMedia
                                className={classes.media}
                                component="img"
                                image={item.IPFSLink}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" className={classes.btn} target='_blank' onClick={() => {getInfo(eth, item.tokenId)}}>
                                More
                            </Button>
                            <Button size="small" className={classes.btn}  target='_blank' href={item.IPFSLink}>
                                Ipfs
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
              }) :
              <Grid item xs={12} key='noPaper'>
                <Paper
                    elevation={0}
                    className='paper'>
                  <div className="caption">
                        <Typography className="title">You haven't made NFT Token</Typography>
                        <Typography className="description">You can create a new NFT</Typography>
                  </div>
                </Paper>
              </Grid>
          }
        </Grid>
      </Container>

}

export default Tokens;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPastafarianism, faShip, faUserPlus, faShuttleVan, faDollarSign, faMobile} from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: 150
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 30,
    paddingLeft: 20
  },
  fonts: {
    paddingTop: 45,
    marginRight: 40
  },
  links: {
    textDecoration: 'none'
  },
  color: {
    color: '#005561'
  },
  content: {
    flex: '1 0 auto',
  },
}));

export default function AdminPages() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={6}>
                <Link to="/dashboard-category" variant="body2" className={classes.links}>
                    <Card className={classes.root}>
                        <div className={classes.details} style={{flexGrow: '1'}}>
                            <CardContent className={classes.content}>
                            <Typography component="h3" variant="h3" className={classes.color}>
                                Operations
                            </Typography>
                            </CardContent>
                        </div>
                        <div className={classes.fonts}>
                            <FontAwesomeIcon icon={faPastafarianism} size='4x' color='#005561' />
                        </div>
                    </Card>
                </Link>
                </Grid>
                        <Grid item xs={6} sm={6}>
                        <Link to="/dashboard-category" variant="body2" className={classes.links}>
                           <Card className={classes.root}>
                               <div className={classes.details} style={{flexGrow: '1'}}>
                                   <CardContent className={classes.content}>
                                   <Typography component="h3" variant="h3" className={classes.color}>
                                       Admin
                                   </Typography>
                                   </CardContent>
                               </div>
                               <div className={classes.fonts}>
                                    <FontAwesomeIcon icon={faUserPlus} size='4x'  color='#005561'/>
                               </div>
                           </Card>
                       </Link>
                   </Grid>
                   
                <Grid item xs={6} sm={6}>
                     <Link to="/dashboard-category" variant="body2" className={classes.links}>
                        <Card className={classes.root}>
                            <div className={classes.details} style={{flexGrow: '1'}}>
                                <CardContent className={classes.content}>
                                <Typography component="h3" variant="h3" className={classes.color}>
                                    Transport
                                </Typography>
                                </CardContent>
                            </div>
                            <div className={classes.fonts}>
                                <FontAwesomeIcon icon={faShuttleVan} size='4x' color='#005561'/>
                            </div>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Link to="/dashboard-category" variant="body2" className={classes.links} >
                        <Card className={classes.root}>
                            <div className={classes.details} style={{flexGrow: '1'}}>
                                <CardContent className={classes.content}>
                                <Typography component="h3" variant="h3" className={classes.color}>
                                    Marine
                                </Typography>
                                </CardContent>
                            </div>
                            <div className={classes.fonts}>
                                <FontAwesomeIcon icon={faShip} size='4x' color='#005561'/>
                            </div>
                        </Card>
                    </Link>
                </Grid> 
                <Grid item xs={6} sm={6}>
                     <Link to="/dashboard-category" variant="body2" className={classes.links}>
                        <Card className={classes.root}>
                            <div className={classes.details} style={{flexGrow: '1'}}>
                                <CardContent className={classes.content}>
                                <Typography component="h3" variant="h3" className={classes.color}>
                                    Mobile App
                                </Typography>
                                </CardContent>
                            </div>
                            <div className={classes.fonts}>
                                 <FontAwesomeIcon icon={faMobile} size='4x' color='#005561'/>
                            </div>
                        </Card>
                    </Link>
                </Grid> 
                <Grid item xs={6} sm={6}>
                    <Link to="/dashboard-category" variant="body2" className={classes.links}>
                        <Card className={classes.root}>
                            <div className={classes.details} style={{flexGrow: '1'}}>
                                <CardContent className={classes.content} >
                                <Typography component="h3" variant="h3" className={classes.color}>
                                   Finance Request
                                </Typography>
                                </CardContent>
                            </div>
                            <div className={classes.fonts}>
                             <FontAwesomeIcon icon={faDollarSign} size="4x" color='#005561'/>
                            </div>
                        </Card>
                    </Link>
                </Grid>
            </Grid>
    </div>
  );
}

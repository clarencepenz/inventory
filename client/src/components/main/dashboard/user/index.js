import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faClone, faDolly, faTruckLoading, faFileExport} from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
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
    paddingTop: 30
  },
  fonts: {
    paddingTop: 35,
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
    backgroundColor: '#fff',
    fontWeight: 'bolder'
  },
}));

export default function UserPage() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <Grid item xs={6} sm={6}>
                    <Link to="/dashboard-import-custom-clearance" variant="body2" className={classes.links}>
                    <Card className={classes.root}>
                        <div className={classes.details} style={{flexGrow: '1'}}>
                            <CardContent className={classes.content}>
                            <Typography component="h4" variant="h4" className={classes.color}>
                                Import Custom Clearance
                            </Typography>
                            </CardContent>
                        </div>
                        <div className={classes.fonts}>
                          <FontAwesomeIcon icon={faClone}  size="4x"  color='#005561'/>
                        </div>
                    </Card>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Link to="#" variant="body2" className={classes.links}>
                    <Card className={classes.root}>
                        <div className={classes.details} style={{flexGrow: '1'}}>
                            <CardContent className={classes.content}>
                            <Typography component="h4" variant="h4" className={classes.color}>
                                Personal Effects
                            </Typography>
                            </CardContent>
                        </div>
                        <div className={classes.fonts}>
                         <FontAwesomeIcon icon={faDolly}  size="4x" color='#005561'/>
                        </div>
                    </Card>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Link to="#" variant="body2" className={classes.links}>
                    <Card className={classes.root} >
                        <div className={classes.details} style={{flexGrow: '1'}}>
                            <CardContent className={classes.content}>
                            <Typography component="h4" variant="h4" className={classes.color}>
                                Haulage
                            </Typography>
                            </CardContent>
                        </div>
                        <div className={classes.fonts}>
                         <FontAwesomeIcon icon={faTruckLoading} size="4x"  color='#005561'/>
                        </div>
                    </Card>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Link to="#" variant="body2" className={classes.links}>
                    <Card className={classes.root}>
                        <div className={classes.details} style={{flexGrow: '1'}}>
                            <CardContent className={classes.content}>
                            <Typography component="h4" variant="h4" className={classes.color}>
                                Export Clearance
                            </Typography>
                            </CardContent>
                        </div>
                        <div className={classes.fonts}>
                         <FontAwesomeIcon icon={faFileExport}  size="4x" color='#005561'/>
                        </div>
                    </Card>
                    </Link>
                </Grid>
            </Grid>
      </Container>
    </div>
  );
}

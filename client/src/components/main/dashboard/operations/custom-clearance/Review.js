import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DescriptionIcon from '@material-ui/icons/Description';


const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review
      </Typography>
      <List >
          <ListItem className={classes.listItem}>
            <ListItemText primary='Category' />
            <Typography variant="body2">{props.values.category}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='SCAC' />
            <Typography variant="body2">{props.values.scac}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Airline' />
            <Typography variant="body2">{props.values.airline}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='B/L' />
            <Typography variant="body2">{props.values.bl}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='W/B' />
            <Typography variant="body2">{props.values.wb}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Client' />
            <Typography variant="body2">{props.values.client}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Type of Freight' />
            <Typography variant="body2">{props.values.freight}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Pre-Alert Date' />
            <Typography variant="body2">{props.values.preAlertDate}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Chipper' />
            <Typography variant="body2">{props.values.Chipper}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='consignee' />
            <Typography variant="body2">{props.values.consignee}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Form Number' />
            <Typography variant="body2">{props.values.formNo}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Cargo Description' />
            <Typography variant="body2">{props.values.cargoDescription}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Estimated Time Of Arrival' />
            <Typography variant="body2">{props.values.eoa}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Cargo Destination' />
            <Typography variant="body2">{props.values.cargoDestination}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Cargo Type' />
            <Typography variant="body2">{props.values.cargoType}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Cargo Number' />
            <Typography variant="body2">{props.values.cargoNo}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Cargo Amount' />
            <Typography variant="body2">{props.values.cargoAmount}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='If Others' />
            <Typography variant="body2">{props.values.bulkOthers}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Container Number' />
            <Typography variant="body2">{props.values.containerNo}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Bill of  Laden' />
            <Typography variant="body2"><a href={props.values.bol} target='_blank' rel="noopener noreferrer">{props.values.bol ? <DescriptionIcon/> : ''}</a></Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Commercial Invoice' />
            <Typography variant="body2"><a href={props.values.ci} target='_blank' rel="noopener noreferrer">{props.values.ci ? <DescriptionIcon/> : ''}</a></Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Contract' />
            <Typography variant="body2"><a href={props.values.uc} target='_blank' rel="noopener noreferrer">{props.values.uc ? <DescriptionIcon/> : ''}</a></Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Group' />
            <Typography variant="body2">{props.values.group}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Agent Phone Number' />
            <Typography variant="body2">{props.values.agentPhoneNo}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Assigned Date' />
            <Typography variant="body2">{props.values.assignedDate}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Terminal Arrival Date' />
            <Typography variant="body2">{props.values.tad}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Examination Date' />
            <Typography variant="body2">{props.values.examinationDate}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Pre-Release Date' />
            <Typography variant="body2">{props.values.preReleaseDate}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Invoice Date' />
            <Typography variant="body2">{props.values.invoiceDate}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Loaded on Truck Date' />
            <Typography variant="body2">{props.values.lotDate}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Invoice Value' />
            <Typography variant="body2">{props.values.invoiceValue}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Delivery Date' />
            <Typography variant="body2">{props.values.deliveryDate}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Date Container Returned to the Port' />
            <Typography variant="body2">{props.values.dateCRTTP}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Date Interchange Received' />
            <Typography variant="body2">{props.values.dIR}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Final Release Date' />
            <Typography variant="body2">{props.values.fRD}</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Interchange' />
            <Typography variant="body2"><a href={props.values.interChange} target='_blank' rel="noopener noreferrer">{props.values.interChange ? <DescriptionIcon/> : ''}</a></Typography>
          </ListItem>
      </List>
    </React.Fragment>
  );
}

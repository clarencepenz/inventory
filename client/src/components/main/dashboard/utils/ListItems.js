import React from 'react';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ReceiptIcon from '@material-ui/icons/Receipt';

export const mainListItems = (
  <div>
     <div style={{backgroundColor: '#005561', height: '70px', marginTop: '30px'}}>
     <Link to='/' style={{textDecoration: 'none', color: '#fff'}}>
      <ListItem button >
          <ListItemIcon>
            <HomeIcon style={{fontSize: 40, color: '#fff'}} />
            </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        </Link>
    </div>
    <div style={{backgroundColor: '#fdb900', height: '70px', marginTop: '30px'}}>
    <ListItem button>
      <ListItemIcon>
        <LocationOnIcon style={{fontSize: 40, color: '#fff'}}/>
      </ListItemIcon>
      <ListItemText  primary="Tracking" />
    </ListItem> 
    </div>
    <div style={{backgroundColor: '#fdb900', height: '70px', marginTop: '30px'}}>
    <ListItem button>
      <ListItemIcon>
        <ReceiptIcon style={{fontSize: 40, color: '#fff'}} />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    </div>
  </div>
);




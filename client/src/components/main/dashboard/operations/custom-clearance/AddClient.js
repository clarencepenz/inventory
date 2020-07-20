import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddClient() {
  const [open, setOpen] = React.useState(false);

  const [state , setState] = React.useState({
    companyCode: '',
    clientName: '',
  })

  const  { 
    companyCode,
    clientName,
  } = state;
  

  const sendDetailsToServer = () => {
    const token = localStorage.token
        const payload={
          'companyCode': companyCode,
          'clientName': clientName
        }
        axios.post('https://cipher-inventory.herokuapp.com/api/clients', payload, { 
           
          headers: {
              'Content-Type' : 'application/json',
             'Authorization' : `Bearer ${token}`
         }
         }).then(res => {
          if (res.status === 201) {
            alert('Client added successfully')
            window.location.reload();
          } 
         })
              .catch(err => {
                console.error(err);
                alert('Error ');
              });
  }

  const handleChange = (e) => {
    const {id ,  value} = e.target  
    setState(prevState => ({
      ...prevState,
        [id] : value
    
    }))
    }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        +
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Client</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="companyCode"
            label="company Code"
            type="text"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="clientName"
            label="client"
            type="text"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={sendDetailsToServer} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
import React from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { StyledAgentForm } from '../../../style/StyledImportClearance';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 180,
      paddingTop: 40
    },
  }));

export default function AgentForm(props) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);

    const uploadDocument = e =>{
        const file = e.target.files[0];
        const data = new FormData();
        data.append("upload_preset", "cipher");
        data.append("file", file);
        setLoading(true);

        axios.post('https://api.cloudinary.com/v1_1/dos6ec8wr/image/upload', data)
        .then(res => {
            localStorage.setItem('interChange', res.data.secure_url);
            if (res.status === 200 ){
                alert('File Uploaded Successfully')
                }
        })
        .then(setLoading(false))
        .catch(err => console.log(err));

    }

  return (
      <StyledAgentForm>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Please Specify the agent in the below form
      </Typography>
      <Grid container spacing={3}>
        <form>
            <Grid item xs={12} >
                <label>Select Group</label>
                <select  value={props.state.group} name="group" id="group" onChange={props.handleChange}>
                    <option selected>Group</option>
                    <option>NLNG</option>
                    <option>NAOC</option>
              </select>
            </Grid>
            <Grid item xs={12} >
                <label>Agent Phone Number</label>
                <input
                  type='text'
                  id="agentPhoneNo"
                  placeholder=' Enter Agent Phone Number'
                  value={props.values.agentPhoneNo}
                  onChange={props.handleChange} 
                />
            </Grid>
            <Grid item xs={12} >
                <label>Assigned Date</label>
                <TextField
                    id="assignedDate"
                    type="date"
                    
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={props.values.assignedDate}
                    onChange={props.handleChange}
                />
            </Grid>
            <Grid item xs={12} >
                <label>Terminal Arrival Date</label>
                <TextField
                    id="tad"
                    type="date"
                    
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={props.values.tad}
                    onChange={props.handleChange}
                />
            </Grid>
            <Grid item xs={12} >
                <label>Examination Date</label>
                <TextField
                    id="examinationDate"
                    type="date"
                    
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={props.values.examinationDate}
                    onChange={props.handleChange}
                />
            </Grid>
            <Grid item xs={12} >
                <label>pre-Release Date</label>
                <TextField
                    id="preReleaseDate"
                    type="date"
                    
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={props.values.preReleaseDate}
                    onChange={props.handleChange}
                />
            </Grid>
            <Grid item xs={12} >
                <label>Invoice Date</label>
                <TextField
                    id="invoiceDate"
                    type="date"
                    
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={props.values.invoiceDate}
                    onChange={props.handleChange}
                />
            </Grid>
            <Grid item xs={12} >
                <label>Loaded on Truck Date</label>
                <TextField
                    id="lotDate"
                    type="date"
                    
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={props.values.lotDate}
                    onChange={props.handleChange}
                />
            </Grid>
            <Grid item xs={12} >
                <label>Invoice Number</label>
                <input
                  type='text'
                  id="invoiceNo"
                  placeholder=' Enter Invoice Number'
                  value={props.values.invoiceNo}
                  onChange={props.handleChange} 
                />
            </Grid>
            <Grid item xs={12} >
                <label>Invoice Value</label>
                <NumberFormat 
                    thousandSeparator={true} 
                    prefix={'$'}
                    value={props.values.invoiceValue}
                    onChange={props.handleChange}
                    id="invoiceValue"
                    placeholder=' Enter Invoice Value'
                     />
            </Grid>
            <Grid item xs={12} >
                <label>Delivery Date</label>
                <TextField
                    id="deliveryDate"
                    type="date"
                    
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={props.values.deliveryDate}
                    onChange={props.handleChange}
                />
            </Grid>
            <Grid item xs={12} >
                <label>Date Container Returned to the Port</label>
                <TextField
                    id="dateCRTTP"
                    type="date"
                    
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={props.values.dateCRTTP}
                    onChange={props.handleChange}
                />
            </Grid>
            <Grid item xs={12} >
                <label>Date InterChange Received</label>
                <TextField
                    id="dIR"
                    type="date"
                    
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={props.values.dIR}
                    onChange={props.handleChange}
                />
            </Grid>
            <Grid item xs={12} >
                <label>Final Release Date</label>
                <TextField
                    id="fRD"
                    type="date"
                    
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    value={props.values.fRD}
                    onChange={props.handleChange}
                />
            
                <label className='FileUpload'>Upload Interchange</label>
                <input type='file'
                    id='interChange'
                    name='file'
                    onChange={uploadDocument} 
                 />
                 <label htmlFor="interChange"  id='interChange' onChange={props.handleChange} className='Browse'>Browse</label>
            </Grid>
        </form>
      </Grid>
    </React.Fragment>
    </StyledAgentForm>
  );
}

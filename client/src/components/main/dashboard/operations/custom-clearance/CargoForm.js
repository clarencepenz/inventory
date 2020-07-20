import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { StyledCargoForm } from '../../../style/StyledImportClearance';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));


export default function CargoForm(props) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);

    const BillOfLaden = e =>{
        const file = e.target.files[0];
        const data = new FormData();
        data.append("upload_preset", "cipher");
        data.append("file", file);
        setLoading(true);

        axios.post('https://api.cloudinary.com/v1_1/dos6ec8wr/image/upload', data)
        .then(res => {
              if (res.status === 200 ){
              localStorage.setItem('billOfLaden', res.data.secure_url);
              alert('File Uploaded Successfully')
              }   
        })
        .then(setLoading(false))
        .catch(err => console.log(err));

    }

    const CommercialInvoice = e =>{
      const file = e.target.files[0];
      const data = new FormData();
      data.append("upload_preset", "cipher");
      data.append("file", file);
      setLoading(true);

      axios.post('https://api.cloudinary.com/v1_1/dos6ec8wr/image/upload', data)
      .then(res => {
          if (res.status === 200 ){
            localStorage.setItem('CommercialInvoice', res.data.secure_url);
            alert('File Uploaded Successfully')
            }
      })
      .then(setLoading(false))
      .catch(err => console.log(err));

  }

  const Contract = e =>{
    const file = e.target.files[0];
    const data = new FormData();
    data.append("upload_preset", "cipher");
    data.append("file", file);
    setLoading(true);

    axios.post('https://api.cloudinary.com/v1_1/dos6ec8wr/image/upload', data)
    .then(res => {
        if (res.status === 200 ){
          localStorage.setItem('contract', res.data.secure_url);
          alert('File Uploaded Successfully')
          }
    })
    .then(setLoading(false))
    .catch(err => console.log(err));

}

  return (
    <StyledCargoForm>
      <React.Fragment>
        <Grid>
          <Grid item xs={12}  >
              <label>Pre-Alert Date</label>
              <TextField
                  id="preAlertDate"
                  label="Available from"
                  type="date"
                  
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  value={props.values.preAlertDate}
                  onChange={props.handleChange} 
                  
                  style={{paddingLeft: '10px'}}
              />
              </Grid>
              <br/>
              <Grid item xs={12} >
                  <label>Chipper</label>
                  <input
                    type='text'
                    id="chipper"
                    placeholder=' Enter Name of Chipper'
                    value={props.values.chipper}
                    onChange={props.handleChange} 
                  />
              </Grid>
              <br/>
              <Grid item xs={12} >
                  <label>Consignee</label>
                  <input
                    type='text'
                    id="consignee"
                    placeholder=' Enter Name of Consignee'
                    value={props.values.consignee}
                    onChange={props.handleChange} 
                    
                  />
              </Grid>
              <br/>
              <Grid item xs={12} >
                  <label>Form M. Number</label>
                  <input
                    type='number'
                    id="formNo"
                    placeholder=' Enter Form M. Number'
                    value={props.values.formNo}
                    onChange={props.handleChange} 
                  />
              </Grid>
              <br/>
              <Grid item xs={12} >
                  <label>Cargo Description</label>
                  <input 
                      type='text'
                      id="cargoDescription"
                      value={props.values.cargoDescription}
                      onChange={props.handleChange} 
                      placeholder=' Enter Cargo Description'
                  />
              </Grid>
              <br/>
              <Grid item xs={12} >
                  <label>Estimated Time of Arrival</label>
                  <TextField
                      id="eoa"
                      label="Available from"
                      type="date"
                      className={classes.textField}
                      InputLabelProps={{
                      shrink: true,
                      }}
                    value={props.values.eoa}
                    onChange={props.handleChange} 
                    
                  />
              </Grid>
              <br/>
              <Grid item xs={12} >
                  <label>Cargo Destination</label>
                  <input
                    type='text'
                    id="cargoDestination"
                    value={props.values.cargoDestination}
                    onChange={props.handleChange} 
                    placeholder=' Enter Cargo Destination'
                  />
              </Grid>
              <br/>
              <Grid item xs={12} >
                  <label>Cargo Type</label>
                  <label className='Type-label-container'>Container</label>
                  <input
                      type='radio'
                      id="cargoType"
                      value={props.values.container}
                      onChange={props.handleChange} 
                      checked={props.state.cargoType === 'container'}
                      className="Radio"
                  />
                    <label className='Type-label-bulk'>Bulk</label>
                    <input
                      type='radio'
                      id="cargoType"
                      className="Radio"
                      value={props.values.bulk}
                      onChange={props.handleChange} 
                      checked={props.state.cargoType === 'bulk'}
                  />
              </Grid>
              <br/>
              <Grid item xs={12} >
                  <label className='Cargo-label'>Cargo</label>
                  <label  className='Cargo-label'>20ft</label>
                  <input
                      type='radio'
                      id="cargoNo"
                      value={props.values.twenty}
                      onChange={props.handleChange} 
                      checked={props.state.cargoNo === 'twenty'}
                      className="Radio"
                  />
                  <br/>
                  <div className='Cargo-container'>
                  <div className='Cargo-size'>
                    <label  className='Cargo-label'>40ft</label>
                    <input
                      type='radio'
                      id="cargoNo"
                      value={props.values.forty}
                      onChange={props.handleChange} 
                      className="Radio"
                      checked={props.state.cargoNo === 'forty'}
                  />
                    <br/>
                    <label  className='Cargo-label'>45ft</label>
                    <input
                      type='radio'
                      id="cargoNo"
                      value={props.values.fortyFive}
                      onChange={props.handleChange} 
                      checked={props.state.cargoNo === 'fortyFive'}
                      className="Radio"
                  />
                    <br/>
                    <label  className='Cargo-label'>others</label>
                    <input
                      type='radio'
                      id="cargoNo"
                      className="Radio"
                      value={props.values.others}
                      onChange={props.handleChange} 
                      checked={props.state.cargoNo === 'others'}
                  /> 
                  </div>
                  <div>
                  <select value={props.state.cargoAmount}   name="cargoAmount" id="cargoAmount" onChange={props.handleChange} >
                    <option  selected>Number of Container</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                 </select>
                  </div>
                  <div style={{display: 'grid', width: '400px'}}>
                  { props.state.cargoAmount === "1" ?
                    <>
                        <input
                          type='text'
                          id="one"
                          value={props.values.one}
                          onChange={props.handleChange} 
                          className='Cargo-numbers'
                          placeholder=' Enter Cargo Number'
                          /> 
                          </>
                          : props.state.cargoAmount === "2"  ?
                          <>
                          <input
                              type='text'
                              id="one"
                              value={props.values.one}
                              onChange={props.handleChange} 
                              className='Cargo-numbers'
                              placeholder=' Enter Cargo Number'
                          /> 
                          <input
                              type='text'
                              id="two"
                              value={props.values.two}
                              onChange={props.handleChange} 
                              className='Cargo-numbers'
                              placeholder=' Enter Cargo Number'
                          /> 
                          </>

                        : props.state.cargoAmount === "3" ?

                        <>
                        <input
                              type='text'
                              id="one"
                              value={props.values.one}
                              onChange={props.handleChange} 
                               className='Cargo-numbers'
                               placeholder=' Enter Cargo Number'
                          /> 
                          <input
                              type='text'
                              id="two"
                              value={props.values.two}
                              onChange={props.handleChange} 
                              className='Cargo-numbers'
                              placeholder=' Enter Cargo Number'
                          /> 

                        <input
                              type='text'
                              id="three"
                              value={props.values.three}
                              onChange={props.handleChange} 
                              className='Cargo-numbers'
                              placeholder=' Enter Cargo Number'
                          /> 
                        </> 
                        
                        : props.state.cargoAmount === "4" ?

                        <>
                        <input
                              type='text'
                              id="one"
                              value={props.values.one}
                              onChange={props.handleChange} 
                              className='Cargo-numbers'
                              placeholder=' Enter Cargo Number'
                          /> 
                          <input
                              type='text'
                              id="two"
                              value={props.values.two}
                              onChange={props.handleChange} 
                              className='Cargo-numbers'
                              placeholder=' Enter Cargo Number'
                          /> 

                        <input
                              type='text'
                              id="three"
                              value={props.values.three}
                              onChange={props.handleChange} 
                              className='Cargo-numbers'
                              placeholder=' Enter Cargo Number'
                          /> 

                        <input
                              type='text'
                              id="four"
                              value={props.values.four}
                              onChange={props.handleChange} 
                              className='Cargo-numbers'
                              placeholder=' Enter Cargo Number'
                          /> 
                        </> : ''
                          

                    }
                    </div>
                  </div>
                  <Grid item xs={12}>
                    <div className='Cargo-others'>
                      <label>If Others</label>
                      <input
                      type='text'
                      id="bulkOthers"
                      value={props.values.bulkOthers}
                      onChange={props.handleChange} 
                      className='OtherInput'
                      placeholder=' Enter Cargo ID'
                  /> 
                    <label>Container Number</label>
                      <input
                      type='text'
                      id="containerNo"
                      value={props.values.containerNo}
                      onChange={props.handleChange} 
                      className='OtherInput'
                      placeholder=' Enter Cargo Number'
                      />
                      </div>
                  </Grid>
                  <Grid item xs={12} >
                      <label className='FileUpload'>Upload Bill Of Laden</label>
                       <input type='file'
                            id='bol'
                            name='file'
                            onChange={BillOfLaden}                          
                        />
                        <label  for="bol" className='Browse'>Browse</label>
                      <label className='FileUpload'>Upload Commercial Invoice</label>
                      <input type='file'
                          id='ci'
                          name='file'
                          onChange={CommercialInvoice} 
                      />
                      <label id='ci' onChange={props.handleChange} htmlFor="ci" className='Browse'>Browse</label>
                      <label className='FileContract'>Upload Contract</label>
                      <input type='file'
                          id='contract'
                          name='file'
                          onChange={Contract} 
                      />
                      <label  htmlFor="contract" className='Browse'>Browse</label>

                      <input
                        type='file'
                          id='contract'
                          name='file'
                          onChange={Contract} 
                      />
                  </Grid>
              </Grid>
        </Grid>
        <br/>
        <br/>
        <br/>
        <br/>
      </React.Fragment>
    </StyledCargoForm>
  );
}



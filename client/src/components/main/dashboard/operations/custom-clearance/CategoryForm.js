import React  from 'react';
import AddClient from './AddClient'
import Grid from '@material-ui/core/Grid';
import { StyledCategoryForm } from '../../../style/StyledImportClearance';
import axios from 'axios';


 
export default function CategoryForm(props) {
  const [ clients, setClients] = React.useState([]);
  const token = localStorage.token
  
  React.useEffect(() =>{
   axios.get('https://cipher-inventory.herokuapp.com/api/clients', { 
           
    headers: {
        'Content-Type' : 'application/json',
       'Authorization' : `Bearer ${token}`
   }
   })
   .then(res => {
     setClients( res.data )
   })
   .catch(err => console.log(err))
   
 }, [])

 
  return (
    <StyledCategoryForm>
    <React.Fragment>
      <form>
      <Grid container spacing={3}>
          <Grid item xs={12} className='Category-container'>
            <div>
              <label>Sea</label>
              <input
                  type='radio'
                  id="category"
                  name='category'
                  value={props.values.sea}
                  onChange={props.handleChange} 
                  className='Radio'
                  checked={props.state.category === 'sea'}
              />
              <br/>
              <br/>
              <label>SCAC</label>
              <input
                  type='text'
                  id="scac"
                  value={props.values.scac}
                  onChange={props.handleChange} 
                  className='Input'
                  placeholder=' Enter SCAC'
                  disabled={props.state.category === 'air' ? "disable": '' }
              />
              <br/>
              <br/>
              <label>B/L</label>
              <input
                  type='number'
                  id="bl"
                  value={props.values.bl}
                  onChange={props.handleChange} 
                  className='InputNumber'
                  placeholder=' Enter B/L'
                  disabled={props.state.category === 'air' ? "disable": '' }
              />

            </div>
            <div>
              <label>Air</label>
              <input
                  type='radio'
                  id="category"
                  name='category'
                  className='Radio'
                  value={props.values.air}
                  onChange={props.handleChange} 
                  checked={props.state.category === 'air'}
              />  
              <br/>
              <br/>
              <label>Airline</label>
              <input
                  type='text'
                  id="airline"
                  value={props.values.airline}
                  onChange={props.handleChange} 
                  className='Input'
                  placeholder=' Enter Airline'
                  disabled={props.state.category === 'sea' ? "disable": '' }
              />
              <br/>
              <br/>
              <label>W/B</label>
              <input
                  type='number'
                  id="wb"
                  value={props.values.wb}
                  onChange={props.handleChange} 
                  className='InputNumber'
                  placeholder=' Enter W/B'
                  disabled={props.state.category === 'sea' ? "disable": '' }
              />
            </div>
          </Grid>
          <Grid item xs={12} className='Client-container' >
            <div>
              <label className='Client-container-title'>Client</label>
              <select  value={props.state.client} name="client" id="client" onChange={props.handleChange}>
                    <option selected>Client</option>
                    
                    {clients.map(client => (
                      <option key={client._id}>{client.clientName} {props.values.client === props.state.client ? localStorage.setItem('code', client.companyCode) : ''}</option>
                      
                    ))}
              </select>
              </div>
              <div style={{display: 'flex'}}>
                  <label className='Client-container-title-client'>Add Client</label>
                  <AddClient/>
              </div>
            </Grid>
          <Grid item xs={12} >
              <label className='Section-two'>Type of Freight</label>
              <label className='Section-two-input'>Direct</label>
              <input
                  type='radio'
                  id="freight"
                  name='freight'
                  value={props.values.direct}
                  onChange={props.handleChange} 
                  checked={props.state.freight === 'direct'}
                  className='Radio'
              />
              <label className='Section-two-input'>Transfer</label>
              <input
                  type='radio'
                  id="freight"
                  name='freight'
                  value={props.values.transfer}
                  onChange={props.handleChange} 
                  checked={props.state.freight === 'transfer'}
                  className='Radio'
              />
          </Grid>
          <br/>
          <br/>
          <br/>
          <br/>
      </Grid>
      </form>
    </React.Fragment>
    </StyledCategoryForm>
  );
}

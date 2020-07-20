import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AgentForm from './AgentForm';
import CargoForm from './CargoForm';
import Review from './Review';
import CategoryForm from './CategoryForm';



const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 2000,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1500
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Category', 'Cargo details', 'Agent details', 'Review your order'];

export default function Checkout(props) {

  
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [loading, setLoading] = React.useState(true)
 
  const [state , setState] = React.useState({
    category: '',
    sea: 'sea',
    air: 'air',
    scac: '',
    airline: '',
    bl: '',
    wb: '',
    client: '',
    freight: '',
    direct: 'direct',
    transfer: 'transfer',
    preAlertDate: '',
    chipper: '',
    consignee: '',
    formNo:  '',
    cargoDescription:  '',
    eoa:  '',
    cargoDestination: '',
    cargoType: '',
    container: 'container',
    bulk: 'bulk',
    cargoNo: '',
    twenty: 'twenty',
    forty: 'forty',
    fortyFive: 'fortyFive',
    others: 'others',
    cargoAmount:  '',
    one: '',
    two: '',
    three: '',
    four: '',
    bulkOthers:  '',
    containerNo: '',
    bol:  '',
    ci: '',
    uc: '',
    group: '',
    agentPhoneNo: '',
    assignedDate: '',
    tad: '',
    examinationDate: '',
    preReleaseDate: '',
    invoiceDate: '',
    lotDate: '',
    invoiceNo: '',
    invoiceValue: '',
    deliveryDate: '',
    dateCRTTP: '',
    dIR: '',
    fRD: '',
    interChange: ''
  })

  
const  { 
  category,
  sea,
  air,
  scac ,
  airline ,
  bl ,
  wb ,
  client ,
  freight,
  direct ,
  transfer ,
  preAlertDate ,
  chipper ,
  consignee ,
  formNo  ,
  cargoDescription  ,
  eoa ,
  cargoDestination ,
  cargoType,
  container ,
  bulk ,
  cargoNo,
  twenty ,
  forty ,
  fortyFive ,
  others ,
  cargoAmount,
  one ,
  two ,
  three ,
  four ,
  bulkOthers  ,
  containerNo ,
  bol  ,
  ci, 
  uc,
  group,
  agentPhoneNo,
  assignedDate,
  tad,
  examinationDate,
  preReleaseDate,
  invoiceDate,
  lotDate,
  invoiceNo,
  invoiceValue,
  deliveryDate,
  dateCRTTP,
  dIR,
  fRD,
  interChange

} = state;

  const values = { category,
    sea,
    air,
    scac ,
    airline ,
    bl ,
    wb ,
    client ,
    freight,
    direct ,
    transfer ,
    preAlertDate ,
    chipper ,
    consignee ,
    formNo  ,
    cargoDescription  ,
    eoa ,
    cargoDestination ,
    cargoType,
    container ,
    bulk ,
    cargoNo,
    twenty ,
    forty ,
    fortyFive ,
    others ,
    cargoAmount,
    one ,
    two ,
    three ,
    four ,
    bulkOthers  ,
    containerNo ,
    bol  ,
    ci, 
    uc,
    group,
    agentPhoneNo,
    assignedDate,
    tad,
    examinationDate,
    preReleaseDate,
    invoiceDate,
    lotDate,
    invoiceNo,
    invoiceValue,
    deliveryDate,
    dateCRTTP,
    dIR,
    fRD,
    interChange
  
  }


  
  const sendDetailsToServer = () => {
    const token = localStorage.token
        const payload={
          'category': category,
          'scac': scac,
          'airline': airline,
          'bl': bl,
          'wb': wb,
          'client': client,
          'freight': freight,
          'preAlertDate': preAlertDate,
          'chipper': chipper,
          'consignee': consignee,
          'formNo': formNo,
          'cargoDescription':  cargoDescription,
          'eoa': eoa,
          'cargoDestination': cargoDestination,
          'cargoType': cargoType,
          'cargoNo': cargoNo,
          'cargoAmount': cargoAmount,
          'bulkOthers':  bulkOthers,
          'containerNo': containerNo,
          'bol': bol,
          'ci': ci, 
          'uc': uc,
          'group': group,
          'agentPhoneNo': agentPhoneNo,
          'assignedDate': assignedDate,
          'tad': tad,
          'examinationDate': examinationDate,
          'preReleaseDate': preReleaseDate,
          'invoiceDate': invoiceDate,
          'lotDate': lotDate,
          'invoiceNo': invoiceNo,
          'invoiceValue': invoiceValue,
          'deliveryDate': deliveryDate,
          'dateCRTTP': dateCRTTP,
          'dIR': dIR,
          'fRD': fRD,
          'interChange': interChange
        
        }
        axios.post('https://cipher-inventory.herokuapp.com/api/clearance', payload, { 
           
          headers: {
              'Content-Type' : 'application/json',
             'Authorization' : `Bearer ${token}`
         }
         }).then(res => {
                    if (res.status === 201){
                       setLoading(false)
                      localStorage.removeItem('interChange')
                      localStorage.removeItem('CommercialInvoice')
                      localStorage.removeItem('contract')
                      localStorage.removeItem('billOfLaden')
                    }     
              })
              .catch(err => {
                console.error(err);
                alert('Error ');
              });
  }

const handleChange = (e) => {
const {id , value} = e.target  

setState(prevState => ({
  ...prevState,
    [id] : value,
    bol: localStorage.billOfLaden,
    ci: localStorage.CommercialInvoice,
    uc: localStorage.contract,
    interChange: localStorage.interChange

}))
}



const getStepContent =(step) => {
  switch (step) {
    case 0:
      return  <CategoryForm 
                handleChange={handleChange}
                values={values}
                state={state}
            />;
    case 1:
      return <CargoForm 
                handleChange={handleChange}
                values={values}
                state={state}
            />;
    case 2:
      return <AgentForm
                handleChange={handleChange}
                values={values}  
                state={state}
             />;
    case 3:
      return <Review
               handleChange={handleChange}
                values={values}
              />;
    default:
      throw new Error('Unknown step');
  } 
}
 
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    
   
    if( activeStep === steps.length - 1){
      sendDetailsToServer()
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  File was successfully saved
                </Typography>
                <Typography variant="subtitle1">
                  GENERATED ID NG/LTD/2001539. 
                </Typography>
                utton
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    style={{backgroundColor: '#005561', color: '#fff'}}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}

import React, {useState} from 'react';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Typography variant="body2" color="textSecondary" align="center">
         Term of use. Privacy policy
      </Typography>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register(props) {
  const classes = useStyles();

  const [state , setState] = useState({
    firstname : "",
    lastname: "",
    department: "",
    email : "",
    password : ""
  })
  const handleChange = (e) => {
      const {id , value} = e.target   
      setState(prevState => ({
          ...prevState,
          [id] : value
      }))
  }

  const sendDetailsToServer = () => {
    const token = localStorage.token
        const payload={
            "firstname": state.firstname,
            "lastname": state.lastname,
            "department": state.department,
            "email":state.email,
            "password":state.password,
        }
        axios.post('https://cipher-inventory.herokuapp.com/api/auth/signup', payload, { 
           
          headers: {
              'Content-Type' : 'application/json',
             'Authorization' : `Bearer ${token}`
         }
         })
            .then(res => {
                if (res.status === 201) {
                  alert('Account registered successfully')
                  props.history.push('/login');
                 
                } else {
                  const error = new Error(res.error);
                  throw error;
                }
              })
              .catch(err => {
                console.error(err);
                alert('Error signing up please try again');
              });
  }
 
  
  const handleSubmitClick = (e) => {
      e.preventDefault();
      sendDetailsToServer()    
    
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            CIPHER INC.
          </Typography>
          <Typography component="p" variant="p">
            Please complete to create your account.
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmitClick}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="firstname"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstname"
                        label="First Name"
                        autoFocus
                        value={state.firstname}
                        onChange={handleChange} 
                        required
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastname"
                        label="Last Name"
                        name="lastname"
                        autoComplete="lname"
                        value={state.lastname}
                        onChange={handleChange} 
                        required
                    />
                    </Grid>
                    <Grid item xs={12}>
                      <select 
                               value={state.department} 
                               name="department" id="department" 
                               onChange={handleChange}
                               style={{fontSize: '15px', width: '100%', height: '60px', padding: '10px', borderColor: '#aaa'}}>

                        <option selected>--select department--</option>
                        <option>admin</option>
                        <option>marine</option>
                        <option>operations</option>
                        <option>transport</option>
                      </select>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={state.email}
                        onChange={handleChange} 
                        required
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={state.password}
                        onChange={handleChange} 
                        required
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I agree with terms and conditions."
                    />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={!state.firstname && !state.password && !state.email && !state.password && !state.department}
                >
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                    <Link href="/login" variant="body2">
                        Already have an account? Sign in
                    </Link>
                    </Grid>
                </Grid>
          </form>
          
        </div>
        <Box mt={5}>
        <Copyright />
      </Box>
      </Grid>
    </Grid>
  );
}
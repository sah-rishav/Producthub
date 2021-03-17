import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link, BrowserRouter} from 'react-router-dom';
import Bttn from '@material-ui/core/Button';
import Login from './Login.js';
import Signup from './Signup.js';
import logo from "./logo.png";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="fixed" style = {{backgroundColor: "#12517A"}}> 
        <Toolbar>
        <div class = "NavButtons">
              <Bttn disableElevation style = {{outline: 'none'}}>
                <BrowserRouter forceRefresh={true}>
                  <Link to="/">
                    <img src={logo} style={{ width: "160px" }} alt = "logo" noWrap/>
                  </Link>
                </BrowserRouter>
              </Bttn>
              </div>
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <div style={{marginRight:"10px"}}>
          <Button color="inherit">Knowledge Hub</Button>
          <Button color="inherit">Marketplace</Button>
          <Button color="inherit">About</Button></div>
          <div class = "EndButtons" style = {{display: "flex"}}>
                <Login />
                <Signup />
            </div>
            
        </Toolbar>
      </AppBar>
    </div>
  );
}

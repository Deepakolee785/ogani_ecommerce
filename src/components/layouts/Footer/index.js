import React from 'react'
import { Container, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Facebook, Twitter, Instagram, YouTube } from '@material-ui/icons'
import logo from '../../../assets/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '3rem',
    marginTop: '3.5rem',
    backgroundColor: '#F3F6FA',
  },
  rootInner: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  searchContainer: {
    border: '1.5px solid #ccc',
    height: '2rem',
    display: 'flex',
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem',
    },
  },

  searchField: {
    paddingLeft: '2rem',
    // paddingTop: '0.5rem',
    width: '15rem',
    flex: 1,
  },
  input: {
    '&::placeholder': {
      color: 'rgba(0,0,0,0.5)',
      fontSize: '0.85rem',
    },
  },
  searchButton: {
    fontSize: '0.85rem',
    backgroundColor: '#7FAD39',
    fontWeight: 700,
    borderRadius: 0,
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: '#709e2b',
    },
  },
  icon: {
    fontSize: '1.15rem',
    marginRight: '0.8rem',
    cursor: 'pointer',
  },
  usefulLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '-1rem',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      marginTop: '0',
    },
  },
  links2: {
    fontSize: '0.9rem',
    color: '#1c1c1c',
    paddingLeft: '1rem',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0',
    },
  },
}))

const Footer = () => {
  // styles
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container className={classes.rootInner}>
        <div>
          <img src={logo} alt="logo" />
          <p>Address: 60-49 Road 11378 New York</p>
          <p>Phone: +65 11.188.888</p>
          <p>Email: hello@oganic.com</p>
        </div>
        <div>
          <h3>Useful Links</h3>
          <div className={classes.usefulLinks}>
            <div style={{ fontSize: '0.9rem', color: '#1c1c1c' }}>
              <p>About Us</p>
              <p>About Our Shop</p>
              <p>Secure Shopping</p>
              <p>Delivery infomation</p>
              <p>Privacy Policy</p>
              <p>Our Sitemap</p>
            </div>
            <div className={classes.links2}>
              <p>Who We Are</p>
              <p>Our Services</p>
              <p>Projects</p>
              <p>Contact</p>
              <p>Innovation</p>
              <p>Testimonials</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Join Our Newsletter Now</h3>
          <p style={{ margin: '2rem auto' }}>
            Get E-mail updates about our latest shop and special offers.
          </p>
          <div className={classes.searchContainer}>
            <TextField
              placeholder="What do you need?"
              className={classes.searchField}
              InputProps={{
                disableUnderline: true,
                classes: { input: classes.input },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              disableElevation={true}
              className={classes.searchButton}
            >
              Search
            </Button>
          </div>
          <div>
            <Facebook className={classes.icon} />
            <Twitter className={classes.icon} />
            <Instagram className={classes.icon} />
            <YouTube className={classes.icon} />
          </div>
        </div>
      </Container>
      <p
        style={{
          fontSize: '1rem',
          margin: '1rem auto',
          textAlign: 'center',
          color: 'grey',
        }}
      >
        Copyright ©2020 All rights reserved | Oganic.com
      </p>
    </div>
  )
}

export default Footer

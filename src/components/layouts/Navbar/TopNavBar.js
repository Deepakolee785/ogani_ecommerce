import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Divider, Hidden, Button } from '@material-ui/core'
import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  ExpandMore,
  Person,
} from '@material-ui/icons'

// assets
import usaFlagIcon from '../../../assets/icons/flag.svg'
import './TopNavBar.css'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#F5F5F5',
    fontWeight: 400,
    fontSize: '90%',
    color: '#252525',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  email: {
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: '#DCDCDC',
    width: '1.8px',
    height: '1.5rem',
  },
  icon: {
    fontSize: '1.15rem',
    marginRight: '0.8rem',
    cursor: 'pointer',
  },
  flagIcon: {
    width: '1.5rem',
    marginRight: '0.8rem',
  },
  expandMoreIcon: {
    fontSize: '0.8rem',
    marginLeft: '5px',
  },
  languageSelect: {
    position: 'relative',
    cursor: 'pointer',
  },
  languageMenu: {
    position: 'absolute',
    top: '1.6rem',
    left: 0,
    backgroundColor: '#000',
    color: '#fff',
    listStyleType: 'none',
    paddingRight: '1.8rem',
    zIndex: 999,
    display: 'none',
  },
  loginBtn: {
    height: '2.2rem',
    textTransform: 'capitalize',
    fontSize: '90%',
    color: '#252525',
  },
}))

const TopNavBar = () => {
  // styles
  const classes = useStyles()

  return (
    <Hidden smDown>
      <Box component="div" className={classes.root}>
        <Container className={classes.container}>
          <div className={classes.email}>
            <Mail className={classes.icon} />
            <p>hello@ogani.com</p>
          </div>
          <Divider
            orientation="vertical"
            variant="middle"
            className={classes.divider}
          />
          <p>Free Shipping for all Order of $99</p>
          <span style={{ flex: 1 }}></span>
          <div>
            <Facebook className={classes.icon} />
            <Twitter className={classes.icon} />
            <Instagram className={classes.icon} />
            <YouTube className={classes.icon} />
          </div>
          <Divider
            orientation="vertical"
            variant="middle"
            className={classes.divider}
          />
          <div
            className={`${classes.container} ${classes.languageSelect} languageSelectDiv`}
            style={{ position: 'relative' }}
          >
            <img src={usaFlagIcon} alt="Eng" className={classes.flagIcon} />
            <p>English</p>
            <ExpandMore className={classes.expandMoreIcon} />
            <ul className={`${classes.languageMenu} languageMenuDiv`}>
              <li>English</li>
              <li>Nepali</li>
            </ul>
          </div>

          <Divider
            orientation="vertical"
            variant="middle"
            className={classes.divider}
          />
          <Link to="/auth">
            <Button className={classes.loginBtn}>
              <Person className={classes.icon} />
              <p>Login / Register</p>
            </Button>
          </Link>
        </Container>
      </Box>
    </Hidden>
  )
}

export default TopNavBar

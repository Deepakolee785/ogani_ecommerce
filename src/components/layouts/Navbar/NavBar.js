import React from 'react'
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Badge,
  Typography,
  Hidden,
  IconButton,
  Drawer,
  Button,
  Divider,
} from '@material-ui/core'
import {
  Favorite,
  ShoppingBasket,
  Menu,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  ExpandMore,
  Person,
  Cancel,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink, Link } from 'react-router-dom'

//assets
import logo from '../../../assets/logo.png'
import usaFlagIcon from '../../../assets/icons/flag.svg'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      width: '5rem',
    },
  },
  navLink: {
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#000',
    fontWeight: 700,
    textTransform: 'uppercase',
    padding: '0.5rem 1rem',
    transition: 'all 0.2s ease-in',
    '&:hover': {
      color: '#7fad39',
    },
  },
  activeNavLink: {
    color: '#7fad39',
  },
  customBadge: {
    backgroundColor: '#7fad39',
    color: '#fff',
    marginTop: '0.5rem',
  },
  badge: {
    margin: 'auto 0.5rem',
  },
  icon: {
    fontSize: '1.5rem',
    marginRight: '0.4rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
    },
  },
  priceLabel: {
    fontSize: '0.9rem',
    fontWeight: '400',
    color: '#6f6f6f',
    marginLeft: '1rem',
  },
  priceAmount: {
    fontWeight: '700',
    color: '#000',
    [theme.breakpoints.down('xs')]: {
      fontWeigh: '600',
    },
  },
  menuIcon: {
    marginLeft: '1.5rem',
  },
  drawer: {
    width: '25rem',
  },
  drawerLogo: {
    margin: '2rem auto 1rem 0',
  },
  expandMoreIcon: {
    fontSize: '0.8rem',
    marginLeft: '5px',
  },
  languageSelect: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.8rem',
  },
  flagIcon: {
    width: '1.5rem',
    marginRight: '0.8rem',
  },
  languageAndLogin: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    height: '2rem',
    textTransform: 'capitalize',
    color: '#252525',
    fontSize: '0.8rem',
  },
  divider: {
    backgroundColor: '#DCDCDC',
    width: '1.5px',
    height: '1.5rem',
  },
  drawerNav: {
    marginTop: '1rem',
  },
  drawerNavDivider: {
    color: 'rgba(0,0,0,0.2)',
  },
  drawerNavItem: {
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#1c1c1c',
    fontWeight: '600',
    transition: 'all 0.2s ease-in',
    '&:hover': {
      color: '#7fad39',
    },
  },
  email: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.8rem',
  },
}))

const cartContainer = (classes) => (
  <Box component="div" style={{ display: 'flex' }}>
    <Link to="/wishlist" style={{ color: 'initial' }}>
      <Badge
        badgeContent={4}
        className={classes.badge}
        classes={{ badge: classes.customBadge }}
      >
        <Favorite className={classes.icon} />
      </Badge>
    </Link>
    <Link to="/cart" style={{ color: 'initial' }}>
      <Badge
        badgeContent={2}
        className={classes.badge}
        classes={{ badge: classes.customBadge }}
      >
        <ShoppingBasket className={classes.icon} />
      </Badge>
    </Link>
    <Typography className={classes.priceLabel}>
      item:<span className={classes.priceAmount}> $150.00</span>
    </Typography>
  </Box>
)

const NavBar = () => {
  const classes = useStyles()

  const [drawerState, setDrawerState] = React.useState(false)

  const toggleDrawer = () => setDrawerState((state) => !state)

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container>
        <Toolbar disableGutters={true} className={classes.toolbar}>
          <Link to="/">
            <img src={logo} alt="OGANI" className={classes.logo} />
          </Link>
          <Hidden smDown>
            <Box component="div">
              <NavLink
                to="/"
                exact
                className={classes.navLink}
                activeClassName={classes.activeNavLink}
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={classes.navLink}
                activeClassName={classes.activeNavLink}
              >
                Shop
              </NavLink>
              <NavLink
                to="/blog"
                className={classes.navLink}
                activeClassName={classes.activeNavLink}
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact-us"
                className={classes.navLink}
                activeClassName={classes.activeNavLink}
              >
                Contact
              </NavLink>
              <NavLink
                to="/about-us"
                className={classes.navLink}
                activeClassName={classes.activeNavLink}
              >
                About
              </NavLink>
            </Box>
            {cartContainer(classes)}
          </Hidden>
          <Hidden mdUp>
            <span style={{ flex: 1 }}></span>
            {cartContainer(classes)}
            <IconButton className={classes.menuIcon} onClick={toggleDrawer}>
              <Menu />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerState}
              onClose={toggleDrawer}
              className={classes.drawer}
            >
              <IconButton
                onClick={toggleDrawer}
                style={{ position: 'absolute', right: 0 }}
              >
                <Cancel style={{ color: 'red' }} />
              </IconButton>
              <Container>
                <Link to="/">
                  <img src={logo} alt="OGANI" className={classes.drawerLogo} />
                </Link>
                {cartContainer(classes)}
                <div className={classes.languageAndLogin}>
                  <div
                    className={`${classes.container} ${classes.languageSelect}`}
                  >
                    <img
                      src={usaFlagIcon}
                      alt="Eng"
                      className={classes.flagIcon}
                    />
                    <p>English</p>
                    <ExpandMore className={classes.expandMoreIcon} />
                  </div>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    className={classes.divider}
                  />
                  <Button className={classes.loginBtn}>
                    <Person className={classes.icon} />
                    <p>Login / Register</p>
                  </Button>
                </div>
                <Box component="div" className={classes.drawerNav}>
                  <NavLink
                    to="/"
                    className={classes.drawerNavItem}
                    activeClassName={classes.activeNavLink}
                    onClick={toggleDrawer}
                  >
                    Home
                  </NavLink>
                  <hr className={classes.drawerNavDivider} />
                  <NavLink
                    to="/shop"
                    className={classes.drawerNavItem}
                    activeClassName={classes.activeNavLink}
                    onClick={toggleDrawer}
                  >
                    Shop
                  </NavLink>
                  <hr className={classes.drawerNavDivider} />
                  <NavLink
                    to="/blog"
                    className={classes.drawerNavItem}
                    activeClassName={classes.activeNavLink}
                    onClick={toggleDrawer}
                  >
                    Blog
                  </NavLink>
                  <hr className={classes.drawerNavDivider} />
                  <NavLink
                    to="/contact-us"
                    className={classes.drawerNavItem}
                    activeClassName={classes.activeNavLink}
                    onClick={toggleDrawer}
                  >
                    Contact
                  </NavLink>
                  <hr className={classes.drawerNavDivider} />
                  <NavLink
                    to="/about-us"
                    className={classes.drawerNavItem}
                    activeClassName={classes.activeNavLink}
                    onClick={toggleDrawer}
                  >
                    About
                  </NavLink>
                  <hr className={classes.drawerNavDivider} />
                </Box>
                <Box style={{ marginTop: '1rem' }}>
                  <Facebook className={classes.icon} />
                  <Twitter className={classes.icon} />
                  <Instagram className={classes.icon} />
                  <YouTube className={classes.icon} />
                </Box>
                <Box className={classes.email}>
                  <Mail className={classes.icon} />
                  <p>hello@ogani.com</p>
                </Box>
                <Typography variant="caption">
                  Free Shipping for all Order of $99
                </Typography>
              </Container>
            </Drawer>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar

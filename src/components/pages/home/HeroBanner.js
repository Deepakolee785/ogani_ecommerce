import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Typography, Button } from '@material-ui/core'

import hero_banner from '../../../assets/hero/banner.jpg'

const useStyles = makeStyles((theme) => ({
  banner: {
    height: '33rem',
    width: 'auto',
    backgroundImage: `url(${hero_banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '3.5rem',
    marginTop: '1rem',
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '4px',
    color: '#7fad39',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '800',
    lineHeight: '3.25rem',
    margin: '0.8rem 0',
    color: '#252525',
  },
  subHeading: {
    fontSize: '1rem',
    fontWeight: 400,
    color: '#6f6f6f',
    letterSpacing: '-0.5px',
  },
  button: {
    fontSize: '0.9rem',
    backgroundColor: '#7FAD39',
    fontWeight: 700,
    borderRadius: 0,
    textTransform: 'initial',
    color: 'white',
    width: '12rem',
    marginTop: '1rem',
    '&:hover': {
      backgroundColor: '#709e2b',
    },
  },
}))

const HeroBanner = () => {
  const classes = useStyles()

  return (
    //style={{ position: 'absolute', top: '12rem' }}
    <div>
      <Grid container>
        <Grid item style={{ flex: 1 }}>
          <Box component="div" className={classes.banner}>
            <Typography variant="h6" className={classes.label}>
              FRUIT FRESH
            </Typography>
            <Typography variant="h2" className={classes.heading}>
              Vegetable <br /> 100% Organic
            </Typography>
            <Typography variant="subtitle1" className={classes.subHeading}>
              Free Pickup and Delivery Available
            </Typography>
            <Button
              variant="contained"
              className={classes.button}
              disableElevation={true}
            >
              SHOP NOW
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default HeroBanner

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import {
  Card,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from '@material-ui/core'
import { Favorite, AddShoppingCartSharp } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '17rem',
    position: 'relative',
    textAlign: 'center',

    [theme.breakpoints.down('md')]: {
      width: '16rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '14rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '20rem',
      marginRight: '2rem',
    },
  },
  media: {
    height: '0',
    paddingTop: '85%',
  },
  heading: {
    fontSize: '1.1rem',
    // fontWeight: '600',
  },
  price: {
    fontWeight: 'bold',
  },
  label: {
    color: 'grey',
    fontSize: '0.8rem',
  },
  discountPercentage: {
    position: 'absolute',
    top: '0',
    height: '3rem',
    width: '3rem',
    backgroundColor: '#DD2222',
    color: '#fff',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  iconBtn: {},
  icon: {
    color: 'grey',
    '&:hover': {
      color: '#7FAD39',
    },
  },
}))

const DiscountItem = ({
  image,
  label,
  heading,
  discountedPrice,
  initialPrice,
}) => {
  const classes = useStyles()

  return (
    <>
      <Card className={classes.root} elevation={1}>
        <div className={classes.discountPercentage}>
          <p>-20%</p>
        </div>
        <CardMedia className={classes.media} image={image} title="productImg" />
        <CardContent>
          <Typography variant="body2" className={classes.label}>
            {label}
          </Typography>
          <Typography variant="h6" className={classes.heading}>
            {heading}
          </Typography>
          <Typography variant="body1" className={classes.price}>
            {discountedPrice}
            {'  '}
            <span
              style={{
                textDecoration: 'line-through',
                color: 'grey',
              }}
            >
              {initialPrice}
            </span>
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing={true}
          style={{ marginTop: '-2rem', marginBottom: '-0.4rem' }}
        >
          <span style={{ flex: 1 }}></span>
          <IconButton>
            <Favorite className={classes.icon} />
          </IconButton>
          <IconButton>
            <AddShoppingCartSharp className={classes.icon} />
          </IconButton>
        </CardActions>
      </Card>
      <br />
    </>
  )
}

DiscountItem.prototype = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  discountedPrice: PropTypes.string.isRequired,
  initialPrice: PropTypes.string.isRequired,
}

export default DiscountItem

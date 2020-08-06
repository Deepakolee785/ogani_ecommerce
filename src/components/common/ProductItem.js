import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

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
    width: '12rem',
    position: 'relative',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      width: '16rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '14rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '18rem',
    },
  },
  media: {
    height: '0',
    paddingTop: '85%',
  },
  heading: {
    fontSize: '0.9rem',
  },
  price: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },

  icon: {
    color: 'grey',
    '&:hover': {
      color: '#7FAD39',
    },
  },
}))

const ProductItem = ({ image, heading, price }) => {
  const classes = useStyles()

  return (
    <>
      <Card className={classes.root} elevation={1}>
        <CardMedia className={classes.media} image={image} title="productImg" />
        <CardContent>
          <Typography variant="h6" className={classes.heading}>
            {heading}
          </Typography>
          <Typography variant="body1" className={classes.price}>
            {price}
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

ProductItem.prototype = {
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
}

export default ProductItem

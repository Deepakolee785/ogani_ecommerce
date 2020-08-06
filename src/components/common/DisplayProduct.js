import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '0.2rem',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '8rem',
    height: '6.875rem',
  },
}))

const DisplayProduct = ({ image, heading, price }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={0}>
      <CardMedia className={classes.cover} image={image} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <p>{heading}</p>
          <strong>{price}</strong>
        </CardContent>
      </div>
    </Card>
  )
}
export default DisplayProduct

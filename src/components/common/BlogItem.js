import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { CalendarToday, Comment, ArrowRightAlt } from '@material-ui/icons'

import img from '../../assets/blog/blog-1.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 365,
    margin: '0.5rem',
  },
  media: {
    height: 250,
  },
  icon: {
    fontSize: '0.8rem',
    marginRight: '5px',
  },
  button: {
    borderRadius: 35,
    padding: '0 2rem',
    height: '3rem',
    letterSpacing: '2px',
    color: '#1c1c1c',
  },
})

export default function BlogItem() {
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <CalendarToday className={classes.icon} />
            <span style={{ marginRight: '1rem' }}>May 4,2020</span>
            <Comment className={classes.icon} />5
          </Typography>
          <h3>Cooking tips make cooking simple</h3>
          <Typography variant="body2" color="textSecondary" component="p">
            Sed quia non numquam modi tempora indunt ut labore et dolore magnam
            aliquam quaerat
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="outlined"
          className={classes.button}
          endIcon={<ArrowRightAlt />}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  )
}

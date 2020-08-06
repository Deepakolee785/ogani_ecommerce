import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BlogItem from '../../common/BlogItem'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '2rem 0',
  },
  sectionHeading: {
    position: 'relative',
    '&::after': {
      content: '""',
      display: 'block',
      background: '#7fad39',
      height: '4px',
      width: '80px',
      position: 'absolute',
      left: 0,
      //   bottom: '-15px',
      right: 0,
      margin: '0 auto',
    },
  },
  blogContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const BlogSample = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h1 className={classes.sectionHeading}>From The Blog</h1>
      <div className={classes.blogContainer}>
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  )
}

export default BlogSample

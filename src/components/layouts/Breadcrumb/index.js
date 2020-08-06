import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import breadcrumbBg from '../../../assets/breadcrumb.jpg'

const useStyles = makeStyles((theme) => ({
  breadcrumb: {
    color: '#fff',
    backgroundImage: `url(${breadcrumbBg})`,
    height: '9.1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.2rem',
  },
  heading: {
    fontSize: '2.87rem',
    fontWeight: '800',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  subHeading: {
    fontSize: '1rem',
    fontWeight: '400',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    fontWeight: '800',
  },
}))

const Breadcrumb = ({ pageTitle }) => {
  const classes = useStyles()
  return (
    <div className={classes.breadcrumb}>
      <Typography variant="h1" className={classes.heading}>
        {pageTitle}
      </Typography>
      <Typography variant="body1" className={classes.subHeading}>
        <Link to="/" className={classes.link}>
          Home
        </Link>
        - {pageTitle}
      </Typography>
    </div>
  )
}

Breadcrumb.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default Breadcrumb

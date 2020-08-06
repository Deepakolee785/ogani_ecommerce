import React, { useState } from 'react'
import {
  Container,
  Button,
  Box,
  TextField,
  Hidden,
  Typography,
} from '@material-ui/core'
import { Menu as MenuIcon, ExpandMore, Phone } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import SlideToggle from 'react-slide-toggle'
import Select from 'react-select'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '0.7rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  allButton: {
    fontSize: '1rem',
    backgroundColor: '#7FAD39',
    fontWeight: 700,
    borderRadius: 0,
    textTransform: 'initial',
    position: 'relative',
    '&:hover': {
      backgroundColor: '#709e2b',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  icon: {
    fontSize: '1.2rem',
    margin: '0 0.5rem',
  },
  departmentList: {
    width: '14.4rem',
    border: '1px solid #ccc',
    marginTop: '-2px',
    paddingLeft: '0',
    background: '#fff',
    position: 'absolute',
    zIndex: '999',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  depeartmentListItem: {
    listStyle: 'none',
    paddingLeft: '1.5rem',
    '&:hover': {
      backgroundColor: '#F5F5F5',
    },
  },
  depeartmentListItemLink: {
    fontSize: '16px',
    color: '#000',
    // lineHeight: '39px',
    display: 'block',
    textDecoration: 'none',
  },
  searchContainer: {
    border: '1.5px solid #ccc',
    height: '2.675rem',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem',
    },
  },
  select: {
    width: '10rem',
    [theme.breakpoints.down('sm')]: {
      width: '11rem',
    },
  },
  searchField: {
    paddingLeft: '2rem',
    paddingTop: '0.5rem',
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
  contactContainer: {
    display: 'flex',
  },
  phoneIcon: {
    fontSize: '1.5rem',
    color: '#7FAD39',
    backgroundColor: '#F5F5F5',
    padding: '0.5rem',
    borderRadius: '50%',
    marginRight: '1rem',
  },
  phoneNumber: {
    fontSize: '0.9rem',
    fontWeight: 800,
  },
  phoneNumberSubtitle: {
    fontWeight: 400,
    fontSize: '0.75rem',
    color: 'rgba(0,0,0,0.6)',
  },
}))

const BottomNavBar = () => {
  // styles
  const classes = useStyles()

  const [selectedOption, setSelectedOption] = useState(null)
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  }

  const options = [
    { value: 'all', label: 'All Categories' },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  return (
    <Container className={classes.root}>
      <SlideToggle
        duration={450}
        collapsed={true}
        render={({ toggle, setCollapsibleElement }) => (
          <div>
            <Button
              variant="contained"
              color="primary"
              disableElevation={true}
              onClick={toggle}
              className={classes.allButton}
            >
              <MenuIcon className={classes.icon} />
              All Departments
              <ExpandMore className={classes.icon} />
            </Button>

            <ul ref={setCollapsibleElement} className={classes.departmentList}>
              <li className={classes.depeartmentListItem}>
                <p className={classes.depeartmentListItemLink}>Fresh Meat</p>
              </li>
              <li className={classes.depeartmentListItem}>
                <p className={classes.depeartmentListItemLink}>Vegetables</p>
              </li>
              <li className={classes.depeartmentListItem}>
                <p className={classes.depeartmentListItemLink}>
                  Fruit & Nut Gifts
                </p>
              </li>
              <li className={classes.depeartmentListItem}>
                <p className={classes.depeartmentListItemLink}>Fresh Berries</p>
              </li>
              <li className={classes.depeartmentListItem}>
                <p className={classes.depeartmentListItemLink}>Ocean Foods</p>
              </li>
              <li className={classes.depeartmentListItem}>
                <p className={classes.depeartmentListItemLink}>Butter & Eggs</p>
              </li>
              <li className={classes.depeartmentListItem}>
                <p className={classes.depeartmentListItemLink}>Fastfood</p>
              </li>
              <li className={classes.depeartmentListItem}>
                <p className={classes.depeartmentListItemLink}>Fresh Onion</p>
              </li>
              <li className={classes.depeartmentListItem}>
                <p className={classes.depeartmentListItemLink}>
                  Papayaya & Crisps
                </p>
              </li>
              <li className={classes.depeartmentListItem}>
                <p className={classes.depeartmentListItemLink}>Oatmeal</p>
              </li>
              <li className={classes.depeartmentListItem}>
                <p className={classes.depeartmentListItemLink}>Fresh Bananas</p>
              </li>
              <li className={classes.depeartmentListItem}>
                <p className={classes.depeartmentListItemLink}>Ocean Foods</p>
              </li>
            </ul>
          </div>
        )}
      />

      <Box component="div" className={classes.searchContainer}>
        <Hidden xsDown>
          <Select
            className={classes.select}
            autoFocus={false}
            value={selectedOption}
            onChange={handleChange}
            options={options}
            placeholder="All Categories "
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              fontSize: '1rem',
              colors: {
                ...theme.colors,
                primary25: '#F5F5F5',
                primary: '#ccc',
              },
            })}
          />
        </Hidden>
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
      </Box>
      <Hidden smDown>
        <Box component="div" className={classes.contactContainer}>
          <Phone className={classes.phoneIcon} />
          <Box component="div">
            <Typography variant="h4" className={classes.phoneNumber}>
              +01-123456789
            </Typography>
            <Typography variant="body1" className={classes.phoneNumberSubtitle}>
              support 24/7 time{' '}
            </Typography>
          </Box>
        </Box>
      </Hidden>
    </Container>
  )
}

export default BottomNavBar

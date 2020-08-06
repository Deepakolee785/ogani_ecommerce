import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import {
  Container,
  Grid,
  Slider as MuiSlider,
  Divider,
  IconButton,
} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles'
import Slider from 'react-slick'
import Select from 'react-select'
import { Apps, ChevronLeft, ChevronRight } from '@material-ui/icons'

import Breadcrumb from '../../layouts/Breadcrumb'
import ProductItem from '../../common/ProductItem'
import DiscountItem from '../../common/DiscountItem'

import pd1 from '../../../assets/product/discount/pd-1.jpg'
import pd2 from '../../../assets/product/discount/pd-2.jpg'
import pd3 from '../../../assets/product/discount/pd-3.jpg'
import pd4 from '../../../assets/product/discount/pd-4.jpg'
import pd5 from '../../../assets/product/discount/pd-5.jpg'
import pd6 from '../../../assets/product/discount/pd-6.jpg'

import p1 from '../../../assets/product/product-1.jpg'
import p2 from '../../../assets/product/product-2.jpg'
import p3 from '../../../assets/product/product-3.jpg'
import p4 from '../../../assets/product/product-4.jpg'
import p5 from '../../../assets/product/product-5.jpg'
import p6 from '../../../assets/product/product-6.jpg'
import p7 from '../../../assets/product/product-7.jpg'
import p8 from '../../../assets/product/product-8.jpg'
import p9 from '../../../assets/product/product-9.jpg'
import p10 from '../../../assets/product/product-10.jpg'
import p11 from '../../../assets/product/product-11.jpg'
import p12 from '../../../assets/product/product-12.jpg'

import lp1 from '../../../assets/latest-product/lp-1.jpg'
import lp2 from '../../../assets/latest-product/lp-2.jpg'
import lp3 from '../../../assets/latest-product/lp-3.jpg'
import DisplayProduct from '../../common/DisplayProduct'

const products = [
  { image: p1, heading: 'Crab Pool Security', price: '$30' },
  { image: p2, heading: 'Crab Pool Security', price: '$30' },
  { image: p3, heading: 'Crab Pool Security', price: '$30' },
  { image: p4, heading: 'Crab Pool Security', price: '$30' },
  { image: p5, heading: 'Crab Pool Security', price: '$30' },
  { image: p6, heading: 'Crab Pool Security', price: '$30' },
  { image: p7, heading: 'Crab Pool Security', price: '$30' },
  { image: p8, heading: 'Crab Pool Security', price: '$30' },
  { image: p9, heading: 'Crab Pool Security', price: '$30' },
  { image: p10, heading: 'Crab Pool Security', price: '$30' },
  { image: p11, heading: 'Crab Pool Security', price: '$30' },
  { image: p12, heading: 'Crab Pool Security', price: '$30' },
]

const discountProducts = [
  {
    image: pd1,
    label: 'Dried Fruits',
    heading: "Vegetables' Package",
    discountedPrice: '$30',
    initialPrice: '$36',
  },
  {
    image: pd2,
    label: 'Dried Fruits',
    heading: "Vegetables' Package",
    discountedPrice: '$30',
    initialPrice: '$36',
  },
  {
    image: pd3,
    label: 'Dried Fruits',
    heading: "Vegetables' Package",
    discountedPrice: '$30',
    initialPrice: '$36',
  },
  {
    image: pd4,
    label: 'Dried Fruits',
    heading: "Vegetables' Package",
    discountedPrice: '$30',
    initialPrice: '$36',
  },
  {
    image: pd5,
    label: 'Dried Fruits',
    heading: "Vegetables' Package",
    discountedPrice: '$30',
    initialPrice: '$36',
  },
  {
    image: pd6,
    label: 'Dried Fruits',
    heading: "Vegetables' Package",
    discountedPrice: '$30',
    initialPrice: '$36',
  },
]

const latestProducts = [
  { image: lp1, heading: 'Crab Pool Security', price: '$30' },
  { image: lp2, heading: 'Crab Pool Security', price: '$30' },
  { image: lp3, heading: 'Crab Pool Security', price: '$30' },
  { image: lp1, heading: 'Crab Pool Security', price: '$30' },
  { image: lp2, heading: 'Crab Pool Security', price: '$30' },
  { image: lp3, heading: 'Crab Pool Security', price: '$30' },
  { image: lp1, heading: 'Crab Pool Security', price: '$30' },
  { image: lp2, heading: 'Crab Pool Security', price: '$30' },
  { image: lp3, heading: 'Crab Pool Security', price: '$30' },
  { image: lp1, heading: 'Crab Pool Security', price: '$30' },
  { image: lp2, heading: 'Crab Pool Security', price: '$30' },
  { image: lp3, heading: 'Crab Pool Security', price: '$30' },
]

// styles
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: '2.5rem',
  },
  superHeading: {
    fontSize: '2.25rem',
    fontWeight: '800',
    borderBottom: '3px solid #7FAD39',
  },
  heading: {
    fontWeight: 800,
    fontSize: '1.5rem',
  },
  departmentList: {
    padding: 0,
    listStyleType: 'none',
    marginTop: '-1rem',
  },
  depeartmentListItem: {
    listStyle: 'none',
    paddingLeft: '0.5rem',
    '&:hover': {
      backgroundColor: '#F5F5F5',
    },
  },
  depeartmentListItemLink: {
    fontSize: '0.95rem',
    color: '#000',
    display: 'block',
    textDecoration: 'none',
  },
  slider: {
    color: 'red',
    width: '11rem',
  },
  select: {
    width: '8rem',
    marginLeft: '0.5rem',
    fontWeight: '800',
  },
  filterOptions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  sortBy: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  size: {
    padding: '0.2rem 0.5rem',
    margin: '5px',
    backgroundColor: '#f5f5f5',
    borderRadius: '0.5rem',
    cursor: 'pointer',
  },
  popularProduct: {
    dipslay: 'flex !important',
  },
}))

function valuetext(value) {
  return `$${value}`
}

const Shop = () => {
  // styles
  const classes = useStyles()

  const [latestSlider, setLatestSlider] = useState(null)
  const next = () => {
    latestSlider.slickNext()
  }
  const previous = () => {
    latestSlider.slickPrev()
  }

  const [value, setValue] = useState([0, 1000])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const [selectedOption, setSelectedOption] = useState(null)
  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  }

  const options = [
    { value: 'default', label: 'Default' },
    { value: 'price', label: 'Price' },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const latestProductSettings = {
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    rows: 3,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <></>,
    prevArrow: <></>,
  }
  return (
    <>
      <Breadcrumb pageTitle="Shop" />
      <Container>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} sm={4} md={3}>
            <div>
              <h2 className={classes.heading}>Department</h2>
              <ul className={classes.departmentList}>
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
                  <p className={classes.depeartmentListItemLink}>
                    Fresh Berries
                  </p>
                </li>
                <li className={classes.depeartmentListItem}>
                  <p className={classes.depeartmentListItemLink}>Ocean Foods</p>
                </li>
                <li className={classes.depeartmentListItem}>
                  <p className={classes.depeartmentListItemLink}>
                    Butter & Eggs
                  </p>
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
                  <p className={classes.depeartmentListItemLink}>
                    Fresh Bananas
                  </p>
                </li>
                <li className={classes.depeartmentListItem}>
                  <p className={classes.depeartmentListItemLink}>Ocean Foods</p>
                </li>
              </ul>
            </div>
            {/* slider */}
            <div>
              <h2 className={classes.heading}>Price</h2>
              <MuiSlider
                value={value}
                min={0}
                max={1000}
                step={20}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                className={classes.slider}
              />
              <p>{`$${value[0]} - $${value[1]}`}</p>
            </div>
            <div>
              <h2>Popular Sizes</h2>
              <span className={classes.size}>Large</span>
              <span className={classes.size}>Medium</span>
              <br />
              <br />
              <span className={classes.size}>Small</span>
              <span className={classes.size}>Tiny</span>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <h2>Latest Product</h2>
                <div style={{ marginLeft: '0.5rem' }}>
                  <IconButton
                    onClick={previous}
                    size="small"
                    style={{ backgroundColor: '#E6E6E6' }}
                  >
                    <ChevronLeft />
                  </IconButton>
                  <IconButton
                    onClick={next}
                    size="small"
                    style={{ marginLeft: '0.5rem', backgroundColor: '#E6E6E6' }}
                  >
                    <ChevronRight />
                  </IconButton>
                </div>
              </div>
              <div>
                <Slider
                  ref={(c) => setLatestSlider(c)}
                  {...latestProductSettings}
                >
                  {latestProducts.map((product) => (
                    <DisplayProduct
                      key={uuid()}
                      image={product.image}
                      heading={product.heading}
                      price={product.price}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={8} md={9} style={{ marginTop: '-1rem' }}>
            <h2 className={classes.superHeading}>Sale Off</h2>
            <Slider {...settings}>
              {discountProducts.map((product) => (
                <DiscountItem
                  key={uuid()}
                  image={product.image}
                  label={product.label}
                  heading={product.heading}
                  discountedPrice={product.discountedPrice}
                  initialPrice={product.initialPrice}
                />
              ))}
            </Slider>
            <br />
            <br />
            <Divider />
            <br />
            <div className={classes.filterOptions}>
              <div className={classes.sortBy}>
                <p>Sort By</p>
                <Select
                  className={classes.select}
                  autoFocus={false}
                  value={selectedOption}
                  onChange={handleOptionChange}
                  options={options}
                  placeholder="Default"
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
              </div>
              <p style={{ color: 'grey' }}>
                <span style={{ fontWeight: '800', color: 'black' }}>16</span>
                {'  '}
                Products Found
              </p>
              <div className="gridIcons">
                <IconButton>
                  <Apps />
                </IconButton>
              </div>
            </div>
            <Grid container spacing={3}>
              {products.map((product) => (
                <Grid item key={uuid()}>
                  <ProductItem
                    image={product.image}
                    heading={product.heading}
                    price={product.price}
                  />
                </Grid>
              ))}
            </Grid>
            <Pagination
              count={4}
              variant="outlined"
              shape="rounded"
              style={{ color: 'green' }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Shop

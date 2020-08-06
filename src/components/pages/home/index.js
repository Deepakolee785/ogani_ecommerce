import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Container, Grid, IconButton } from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import Slider from 'react-slick'

import CategoryCarousel from './CategoryCarousel'
import HeroBanner from './HeroBanner'
import DisplayProduct from '../../common/DisplayProduct'

import banner1 from '../../../assets/banner/banner-1.jpg'
import banner2 from '../../../assets/banner/banner-2.jpg'

import lp1 from '../../../assets/latest-product/lp-1.jpg'
import lp2 from '../../../assets/latest-product/lp-2.jpg'
import lp3 from '../../../assets/latest-product/lp-3.jpg'
import BlogSample from './BlogSample'
import CategoryFilter from './CategoryFilter'

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

const Home = () => {
  const [latestSlider, setLatestSlider] = useState(null)
  const next = () => {
    latestSlider.slickNext()
  }
  const previous = () => {
    latestSlider.slickPrev()
  }

  return (
    <Container>
      <HeroBanner />
      <CategoryCarousel />
      <div>
        <CategoryFilter />
      </div>
      <Grid container spacing={3}>
        <Grid item>
          <img src={banner1} alt="" />
        </Grid>
        <Grid item>
          <img src={banner2} alt="" />
        </Grid>
      </Grid>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '20rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h2>Top Rated Product</h2>
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
            <Slider ref={(c) => setLatestSlider(c)} {...latestProductSettings}>
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

        <div style={{ width: '20rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h2>Review Product</h2>
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
            <Slider ref={(c) => setLatestSlider(c)} {...latestProductSettings}>
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

        <div style={{ width: '20rem' }}>
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
            <Slider ref={(c) => setLatestSlider(c)} {...latestProductSettings}>
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
      </div>
      <BlogSample />
    </Container>
  )
}

export default Home

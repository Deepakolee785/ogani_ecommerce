import React from 'react'
import Slider from 'react-slick'
import { makeStyles } from '@material-ui/core/styles'
import { v4 as uuid } from 'uuid'

import cat1 from '../../../assets/categories/cat-1.jpg'
import cat2 from '../../../assets/categories/cat-2.jpg'
import cat3 from '../../../assets/categories/cat-3.jpg'
import cat4 from '../../../assets/categories/cat-4.jpg'

const useStyles = makeStyles((theme) => ({
  item: {
    margin: 'auto 1.5rem',
  },
  carouselContainer: {
    marginTop: '2rem',
  },
  carouselImg: {
    position: 'relative',
    height: '16.85rem',
  },
  label: {
    position: 'absolute',
    bottom: '0.5rem',
    display: 'block',
    marginLeft: '4rem',
    fontSize: '1.1rem',
    fontWeight: '900',
    padding: '0.2rem 1rem',
    background: ' #ffffff',
    borderRadius: '5px',
    letterSpacing: '0.5px',
  },
}))

const CategoryCarousel = () => {
  const classes = useStyles()

  const carouselItems = [
    { img: cat3, label: 'VAGETABLES' },
    { img: cat1, label: 'FRESH FRUITS' },
    { img: cat4, label: 'DRINK FRUITS' },
    { img: cat2, label: 'FRESH FRUITS' },
    { img: cat3, label: 'VAGETABLES' },
    { img: cat4, label: 'DRINK FRUITS' },
  ]
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1164,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
          cssEase: 'linear',
          infinite: true,
        },
      },
      {
        breakpoint: 882,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
          cssEase: 'linear',
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
          cssEase: 'ease-in-out',
          infinite: true,
        },
      },
    ],
  }
  return (
    <div className={classes.carouselContainer}>
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <div className={classes.item} key={uuid()}>
            <img src={item.img} alt="" className={classes.carouselImg} />
            <h3 className={classes.label}>{item.label}</h3>
          </div>
        ))}
      </Slider>
      <br />
      <br />
      <br />
    </div>
  )
}

export default CategoryCarousel

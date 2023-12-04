import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ListSlider } from './listSlider';
import { ContainerSliderStyled } from './slider.styled';

const arr = [
  {
    carLogo: 'toyta',
    logo: 'img',
  },
  {
    carLogo: 'vw',
    logo: 'img',
  },
  {
    carLogo: 'ford',
    logo: 'img',
  },
  {
    carLogo: 'toyta',
    logo: 'img',
  },
  {
    carLogo: 'bmw',
    logo: 'img',
  },
  {
    carLogo: 'mazda',
    logo: 'img',
  },
  {
    carLogo: 'nissan',
    logo: 'img',
  },
];


export default class SimpleSlider extends Component {
  render() {
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    // };
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
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
    };
    return (
      <ContainerSliderStyled>
        <h2>Cars</h2>
        <Slider {...settings}>
          <ListSlider arr={arr} />
          <ListSlider arr={arr} />
          <ListSlider arr={arr} />
          <ListSlider arr={arr} />
          <ListSlider arr={arr} />
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
      </ContainerSliderStyled>
    );
  }
}

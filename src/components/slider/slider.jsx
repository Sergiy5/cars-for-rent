import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { GiCurlyWing } from 'react-icons/gi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ContainerSliderStyled, IconWrapper } from './slider.styled';
import {icons} from '../carIcons/CarIcons'

const arr = [
  {
    carLogo: 'TOYOTA',
    logo: 'img',
  },
  {
    carLogo: 'Alfa Romeo',
    logo: 'img',
  },
  {
    carLogo: 'VW',
    logo: 'img',
  },
  {
    carLogo: 'FORD',
    logo: 'img',
  },
  {
    carLogo: 'HONDA',
    logo: 'img',
  },
  {
    carLogo: 'BMW',
    logo: 'img',
  },
  {
    carLogo: 'MAZDA',
    logo: 'img',
  },
  {
    carLogo: 'NISSAN',
    logo: 'img',
  },
  {
    carLogo: 'FIAT',
    logo: 'img',
  },
  {
    carLogo: 'RENOULT',
    logo: 'img',
  },
  {
    carLogo: 'NISSAN',
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
      // dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
    };
    return (
      <ContainerSliderStyled>
        <h2>
          <GiCurlyWing flipHorizontal />
          =Brands of cars=
        </h2>
        <Slider {...settings}>
          {icons.map(icon => {
            console.log(icon);
            return <IconWrapper key={nanoid()}>{icon}</IconWrapper>;
          })}
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

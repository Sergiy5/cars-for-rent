import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { GiCurlyWing } from 'react-icons/gi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ContainerSliderStyled, IconWrapper } from './slider.styled';
import {icons} from '../carIcons/CarIcons'



export default class SimpleSlider extends Component {
  render() {
       const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
    };
    return (
      <ContainerSliderStyled>
        <h2>
          <GiCurlyWing  />
          Brands of cars
          <GiCurlyWing style={{ transform: 'rotateY(180deg)' }} />
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

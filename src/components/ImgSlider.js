import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function ImgSlider() {

  let settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  } 

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='/images/slider-scale.jpg'/>
      </Wrap>
      <Wrap>
        <img src='https://wallpaperaccess.com/full/1227117.jpg'/>
      </Wrap>
      <Wrap>
        <img src={'https://wallpaperaccess.com/full/1643266.jpg'}/>
      </Wrap>
    </Carousel>
  )
}

const Carousel = styled(Slider)`

  ul li button {
    &:before {
      font-size: 10px;
      color: white;
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  } 
`

const Wrap = styled.div`

  img {
    width: 100%;
    border-radius: 4px;
    height: 50vh;
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;
    border: 4px solid transparent;
    object-fit: cover;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);

    }

    @media(min-width: 2000px){
      height: 40vh;
    }

    @media(max-width: 860px){
      height: 40vh;
    }

  }

`

export default ImgSlider

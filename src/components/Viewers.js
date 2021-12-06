import styled from "styled-components"

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src='/images/viewers-disney.png'/>
        <video autoPlay={true} loop={true} playInline={true} muted>
          <source src='/videos/1564674844-disney.mp4' type='video/mp4'/>
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-pixar.png'/>
        <video autoPlay={true} loop={true} playInline={true} muted>
          <source src='/videos/1564676714-pixar.mp4' type='video/mp4'/>
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-marvel.png'/>
        <video autoPlay={true} loop={true} playInline={true} muted>
          <source src='/videos/1564676115-marvel.mp4' type='video/mp4'/>
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-starwars.png'/>
        <video autoPlay={true} loop={true} playInline={true} muted>
          <source src='/videos/1608229455-star-wars.mp4' type='video/mp4'/>
        </video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-national.png'/>
        <video autoPlay={true} loop={true} playInline={true} muted>
          <source src='/videos/1564676296-national-geographic.mp4' type='video/mp4'/>
        </video>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 38px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  padding: 30px 0px 26px;
  grid-gap: 25px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media(max-width: 860px){
    display: flex;
    flex-wrap: wrap;
  }

`

const Wrap = styled.div`
  min-height: 100px;
  min-width: 150px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;

  @media(max-width: 860px){
    flex-grow: 1;
    flex-basis: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 89%) 0px 40px 58px -16px, rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video{
      opacity: 1;
    }
  }

  video{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
    opacity: 0;
    z-index: 0;
  }
`

export default Viewers

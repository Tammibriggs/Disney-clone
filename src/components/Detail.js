import styled from "styled-components"
import {useParams, Redirect} from 'react-router-dom'
import {useEffect, useState} from 'react'
import db from '../firebase'
import {doc, getDoc} from 'firebase/firestore'
import { setMovies } from "../features/movie/movieSlice"
 
function Detail() {

  const [movie, setMovie] = useState() 
  const {id} = useParams()
  const movieRef = doc(db, 'movies', id)

  console.log(id)

  useEffect(() => {
    const getMovie = async () =>
    await getDoc(movieRef)
    .then((doc) => {
      if(doc?.exists){
        setMovie(doc.data())
        console.log(movie)
      }else{
        <Redirect to='/'/>
      }
    })

    getMovie()
  }, [])

  return (
    <Container>
      <Background>
       <img src={movie?.backgroundImg}/>
      </Background>
      <ImageTitle>
        <img src={movie?.titleImg} />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src='/images/play-icon-black.png' />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src='/images/play-icon-white.png' />
          <span>Trailer</span>
        </TrailerButton>
        <div className='control--wrap'>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src='/images/group-icon.png' />
          </GroupWatchButton>
        </div>
      </Controls>
      <SubTitle >
        {movie?.subTitle}
      </SubTitle>
      <Description>
        {movie?.description}
      </Description>
    </Container>
  )
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 22px;

  .control--wrap{
    display: flex;
  }

`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 10px 24px;
  letter-spacing: 1.8px;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249 249);
  text-transform: uppercase;
  color: white;

`

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  margin-right: 16px;

  span {
    font-size: 30px;
    color: white;
  }
`

const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
` 

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249 );
  max-width: 700px;

  @media(max-width: 550px){
    font-size: 18px;
  }
`

export default Detail

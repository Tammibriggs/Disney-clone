import styled from 'styled-components'
import { selectUserName, selectUserPhoto, setUserLogin } from '../features/user/userSlice'
import {useDispatch, useSelector} from 'react-redux'
import {auth, provider} from '../firebase'
import {signInWithPopup, signOut} from 'firebase/auth'
import {useHistory} from 'react-router-dom'

function Header() {

  const history = useHistory()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)
  const dispatch = useDispatch()

  const signIn = () => {
    console.log('reall it')
    signInWithPopup(auth, provider)
    .then((result) => {
      let user = result.user
      dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }))
    })
    .catch(error => alert(error.message))
  } 

  const handleSignOut = () => {
    signOut(auth)
    history.push('/login')
  }

  return (
    <Nav >
      <LogoContainer onClick={() => history.push('/')}>
        <Logo src='/images/logo.svg'/>
      </LogoContainer>
      { userName ?
        <>
          <NavMenu>
          <a>
            <img src='/images/home-icon.svg'/>
            <span>Home</span>
          </a>
          <a>
            <img src='/images/search-icon.svg'/>
            <span>SEARCH</span>
          </a>
          <a>
            <img src='/images/watchlist-icon.svg'/>
            <span>WATCHLISTt</span>
          </a>
          <a>
            <img src='/images/original-icon.svg'/>
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src='/images/movie-icon.svg'/>
            <span>MOVIES</span>
          </a>
          <a>
            <img src='/images/series-icon.svg'/>
            <span>SERIES</span>
          </a>
        </NavMenu>
        <UserImg src='https://lh3.googleusercontent.com/a-/AOh14Giir5FZyThQ03gRwYqdQZo47CkS2rVpr8v8TNJ7=s288-p-rw-no' onClick={handleSignOut}/>
      </> : 
        <Login onClick={signIn}>Login</Login>
      }
    </Nav>
  )
}

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 38px;
  overflow-x: hidden;
`

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a{
    display: flex;
    align-items: center;
    padding: 0 12px;

    img{
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.4px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scale(0);
        transition: all 250ms  cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  @media(max-width: 850px) {
    display: none;
  }
`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 12px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`

const LogoContainer = styled.div`
  flex: 1;
  
`

export default Header

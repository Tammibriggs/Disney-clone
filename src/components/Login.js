import styled from "styled-components"
import {auth, provider} from '../firebase'
import db from '../firebase'
import {signInWithPopup} from 'firebase/auth'
import {useDispatch} from 'react-redux'
import { setUserLogin } from '../features/user/userSlice'

function Login() {

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


  return (
    <Container>
      <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg'/>
        <SignUp onClick={signIn}>Sign in with Google</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee with a 
          Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src='/images/cta-logo-two.png'/>
      </CTA>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
   background-image: url('/images/login-background.jpg');
   background-size: cover;
   background-position: top;
   background-repeat: no-repeat;
   content: '';
   top: 0;
   left: 0;
   position: absolute;
   bottom: 0;
   opacity: 0.7;
   right: 0;
   z-index: -1;
  }
`

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`

const CTALogoOne = styled.img`
  
`

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 10px;
  color: #f9f9f9;
  border-radius : 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 2px;
  margin-top: 8px;
  margin-bottom: 12px;
  box-sizing: border-box;

  @media(max-width: 400px){
    font-size: 16px;
  }

  &:hover {
    background-color: #0483ee;
  }
`

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;

`

const CTALogoTwo = styled.img`
  width: 90%;
`

export default Login


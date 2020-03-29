import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import img from '../Assets/Images/sectionOneImage.svg'

const SectionOne = () => {
  return (
    <Wrapper>
      <Container>
        <Row
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Col md={6}>
            <Heading>
              <Text>
                <Title>DevHub</Title>
                <Subtitle>A Blog For Developers</Subtitle>
              </Text>
              <Meet>Meet</Meet>
            </Heading>

            <Navigation>
              <NavItem isLogin>Login</NavItem>
              <NavItem>Register</NavItem>
            </Navigation>
          </Col>

          <Col md={6} className='mobile-invisible'>
            <img src={img} alt='Section One' />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

// Styled components
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  margin-bottom: 50px;
`

// Left side styles
const Heading = styled.div`
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: center;
    min-height: 230px;
    max-width: 470px;
  }
`
const Text = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.titleSize};
  font-weight: ${(props) => props.theme.titleWeight};
`
const Subtitle = styled.h3`
  font-size: ${(props) => props.theme.subtitleSize};
  font-weight: ${(props) => props.theme.subtitleWeight};
`
const Meet = styled.h1`
  font-size: 200px;
  font-weight: 100;
  color: rgba(29, 25, 68, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  @media screen and (max-width: 768px) {
    font-size: 150px;
  }
`
const Navigation = styled.nav`
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`
const NavItem = styled(Link)`
  color: ${({ isLogin }) => (isLogin ? '#0D1321' : '#748CAB')};
  text-decoration: none;
  outline: none;
  position: relative;
  margin-bottom: ${({ isLogin }) => isLogin && '4px'};
  font-size: 16px;

  @media screen and (min-width: 768px) {
    padding: 5px;

    &:hover {
      color: #ff6b81;
      text-decoration: none;
    }

    &:hover::before {
      height: 100%;
      width: 100%;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      background: #0d1321;
      height: 0%;
      width: 0%;
      z-index: -1;
      border-radius: 3px;
      transition: height 300ms cubic-bezier(0.075, 0.82, 0.165, 1),
        width 200ms 10ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-bottom: ${({ isLogin }) => isLogin && '0px'};
    padding: 5px;

    &:hover {
      color: #ff6b81;
      text-decoration: none;
    }
  }
`

export default withTheme(SectionOne)

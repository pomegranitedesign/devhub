import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Wrapper>
      <Left>
        <Heading>
          <Title>DevHub</Title>
          <Rights>All Rights Reserved.</Rights>
        </Heading>

        <Copyright>Copyright@{new Date().getFullYear()}</Copyright>
      </Left>

      <Right>
        <Links>
          <StyledLink>Contact Us</StyledLink>
          <StyledLink>About Us</StyledLink>
          <StyledLink>API</StyledLink>
          <StyledLink>Register</StyledLink>
          <StyledLink>Terms</StyledLink>
          <StyledLink>FAQ</StyledLink>
        </Links>
      </Right>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: #0d1321;
  height: 270px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 265px;
`

const Left = styled.div``

const Heading = styled.div``

const Title = styled.h1`
  color: #f0ebd8;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  font-size: 32px;
`

const Rights = styled.h3`
  color: #748cab;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 100;
  font-size: 14px;
`

const Copyright = styled.p`
  color: rgba(116, 140, 171, 0.5);
  font-family: 'Ubuntu', sans-serif;
  font-weight: 100;
  font-size: 12px;
`

const Right = styled.div``

const Links = styled.ul`
  display: grid;
  grid-template-columns: 50% 50%;
`

const StyledLink = styled(Link)`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Ubuntu', sans-serif;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  margin-bottom: 12px;
  margin-right: 36px;
  width: 100%;
  outline: none;

  &:hover {
    color: #748cab;
    text-decoration: none;
  }
`

export default Footer

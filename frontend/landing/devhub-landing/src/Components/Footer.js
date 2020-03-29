import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xl={9} lg={8} md={7} sm={3} xs={3}>
            <Heading>
              <Title>DevHub</Title>
              <Rights>All Rights Reserved.</Rights>
            </Heading>

            <Copyright>Copyright@{new Date().getFullYear()}</Copyright>
          </Col>

          <Col xl={3} lg={4} md={5} sm={9} xs={9}>
            <Links>
              <Row>
                <Col>
                  <StyledLink>Contact Us</StyledLink>
                  <StyledLink>About Us</StyledLink>
                  <StyledLink>API</StyledLink>
                </Col>

                <Col>
                  <StyledLink>Register</StyledLink>
                  <StyledLink>Terms</StyledLink>
                  <StyledLink>FAQ</StyledLink>
                </Col>
              </Row>
            </Links>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: #0d1321;
  height: 270px;
  display: flex;
  align-items: center;
`

const Heading = styled.div``

const Title = styled.h1`
  color: #f0ebd8;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  font-size: 32px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`

const Rights = styled.h3`
  color: #748cab;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 100;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`

const Copyright = styled.p`
  color: rgba(116, 140, 171, 0.5);
  font-family: 'Ubuntu', sans-serif;
  font-weight: 100;
  font-size: 12px;

  @media screen and (max-width: 768px) {
    font-size: 8px;
  }
`

const Links = styled.ul``

const StyledLink = styled(Link)`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Ubuntu', sans-serif;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  margin-bottom: 12px;
  outline: none;
  display: block;

  &:hover {
    color: #748cab;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`

export default Footer

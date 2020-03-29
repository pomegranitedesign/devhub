import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import img from '../Assets/Images/sectionTwoImage.svg'

const SectionOne = (props) => {
  return (
    <Wrapper>
      <Container>
        <Row
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Col className='mobile-invisible'>
            <img src={img} alt='Section two' />
          </Col>

          <Col>
            <Title>What is DevHub</Title>
            <Description>
              Its a blogging platform, developed for Developers, who want to
              expose their ideas and programming knowledge for those who want to
              learn how to code for free.
            </Description>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

// Styled components
const Wrapper = styled.div`
  padding-top: 60px;
  width: 100%;
  margin-bottom: 288px;
`

// TODO: Create separate files
// Left side styles
const Title = styled.h1`
  font-size: ${({ theme }) => theme.titleSize};
  font-weight: ${({ theme }) => theme.titleWeight};
  font-family: ${({ theme }) => theme.titleFont};

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.titleSizeMobile};
    width: 150px;
    padding-left: 5px;
  }
`
const Description = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 100;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    font-size: 28px;
    width: 445px;
    margin-top: 23px;
  }
`

export default withTheme(SectionOne)

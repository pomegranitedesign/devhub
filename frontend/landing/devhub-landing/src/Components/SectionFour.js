import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import uuid from 'uuid/v4'

import react from '../Assets/Images/react.svg'
import aws from '../Assets/Images/aws.svg'
import graphql from '../Assets/Images/graphql.svg'
import kubernetes from '../Assets/Images/kubernetes.svg'
import python from '../Assets/Images/python.svg'
import nodejs from '../Assets/Images/nodejs.svg'
import mongodb from '../Assets/Images/mongodb.svg'
import docker from '../Assets/Images/docker.svg'

const images = [
  react,
  aws,
  graphql,
  kubernetes,
  python,
  nodejs,
  mongodb,
  docker
]

const SectionThree = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <Title style={{ textAlign: 'center' }}>Inspired By</Title>
          </Col>
        </Row>

        <Row>
          <Grid>
            {images.map((image) => (
              <GridItem src={image} alt='Image' key={uuid()} />
            ))}
          </Grid>
        </Row>
      </Container>
    </Wrapper>
  )
}

// Styled components
const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 288px;
`
const Title = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  font-size: 40px;
  font-weight: ${(props) => props.theme.titleWeight};
`
const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 0.2fr);
  justify-content: center;
  width: 100%;
  margin-top: 92px;
`
const GridItem = styled.img`
  align-self: center;
  margin: 0 auto 50px auto;

  @media screen and (max-width: 992px) {
    width: 50px;
  }
`

export default withTheme(SectionThree)

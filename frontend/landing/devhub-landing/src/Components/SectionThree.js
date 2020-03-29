import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import img from '../Assets/Images/sectionThreeImage.svg'
import videoPlaceholder from '../Assets/Images/videoPlaceholder.jpg'

const SectionThree = (props) => {
  return (
    <Wrapper>
      <Container>
        <Row style={{ display: 'flex', alignItems: 'center' }}>
          <Col>
            <Title>How does it work?</Title>
          </Col>

          <StyledCol>
            <Image src={img} alt='Section Three' />
          </StyledCol>
        </Row>

        <Row>
          <Col>
            <Image
              src={videoPlaceholder}
              alt='Video placeholder'
              style={{ width: '80%', margin: '20px auto', display: 'block' }}
            />
          </Col>
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

const Image = styled.img`
  @media screen and (max-width: 992px) {
    display: none;
  }
`
const StyledCol = styled(Col)`
  @media screen and (max-width: 992px) {
    display: none;
  }
`

export default withTheme(SectionThree)

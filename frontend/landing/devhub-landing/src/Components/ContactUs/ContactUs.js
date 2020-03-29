import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { withTheme } from 'styled-components'

const ContactUs = (props) => {
  const [name, setName] = useState('') // eslint-disable-line
  const [email, setEmail] = useState('') // eslint-disable-line
  const [company, setCompany] = useState('') // eslint-disable-line

  return (
    <Wrapper>
      <Container>
        <ContactForm>
          <Row style={{ display: 'flex', alignItems: 'center' }}>
            <Col md={6} lg={6} sm={12}>
              <Input type="text" placeholder="Name" required />
              <Input type="email" placeholder="Email" required />
              <Input type="text" placeholder="Company" />
            </Col>

            <Col md={6} className="mobile-invisible">
              <Title>Contact DevHub</Title>
            </Col>
          </Row>

          <Row>
            <Col>
              <Message placeholder="Message" />
            </Col>
          </Row>
        </ContactForm>
      </Container>
    </Wrapper>
  )
}

// Styled components
const Wrapper = styled.div`
  margin-bottom: 288px;
`

const Title = styled.h1`
  font-size: ${(props) => props.theme.titleSize};
  font-weight: ${(props) => props.theme.titleWeight};
`
const ContactForm = styled.form``

const Input = styled.input`
  display: block;
  margin-bottom: 55px;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  outline: none;
  -moz-outline-radius: none;
  width: 60%;
  font-size: 16px;
  color: #0d1321;

  &::placeholder {
    color: #b9b9b9;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`
const Message = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  padding: 20px;
  border-radius: 3px;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  outline: none;
  -moz-outline-radius: none;
  background: #eeeeee;
  border: none;
`

export default withTheme(ContactUs)

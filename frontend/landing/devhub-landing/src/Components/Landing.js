import React from 'react'
import styled from 'styled-components'
import { withTheme } from 'styled-components'

import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import ContactUs from './ContactUs/ContactUs'
import Footer from './Footer'

const Landing = () => {
  return (
    <Wrapper>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <ContactUs />
      <Footer />
    </Wrapper>
  )
}

// Styled components
const Wrapper = styled.main``

export default withTheme(Landing)
